/* =====================================================
   BERITA-DETAIL.JS
   Dipakai oleh berita-detail.html untuk menampilkan isi
   lengkap 1 berita, berdasarkan parameter ?id= di URL.
   Contoh: berita-detail.html?id=3
   Sumber data dari berita-data.js.
===================================================== */

function renderBeritaDetail() {
  const container = document.getElementById("detailContainer");
  if (!container || typeof getBeritaById !== "function") return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const berita = getBeritaById(id);

  if (!berita) {
    container.innerHTML = `
      <div class="not-found">
        <h2>Berita Tidak Ditemukan</h2>
        <p>Berita yang kamu cari mungkin sudah dihapus atau link-nya salah.</p>
        <a href="berita.html" class="btn-news">Kembali ke Semua Berita</a>
      </div>
    `;
    return;
  }

  document.title = berita.judul + " | CWM CHANNEL";

  container.innerHTML = `
    <span class="category">${berita.kategori}</span>
    <h1 class="detail-title">${berita.judul}</h1>
    <div class="detail-meta">
        <span><i class="fa-regular fa-user"></i> ${berita.penulis}</span>
        <span><i class="fa-regular fa-calendar"></i> ${formatTanggalID(berita.tanggal)}</span>
    </div>
    <img class="detail-image" src="${berita.gambar}" alt="${berita.judul}">
    <div class="detail-content">
        ${berita.isi.split("\n").map(par => `<p>${par}</p>`).join("")}
    </div>
    <a href="berita.html" class="btn-news back-link">
        <i class="fa-solid fa-arrow-left"></i> Kembali ke Semua Berita
    </a>
  `;

  renderBeritaTerkait(berita);
}

function renderBeritaTerkait(berita) {
  const wrap = document.getElementById("relatedNews");
  if (!wrap || typeof BERITA_DATA === "undefined") return;

  const terkait = BERITA_DATA
    .filter(b => b.id !== berita.id && b.kategori === berita.kategori)
    .slice(0, 3);

  if (terkait.length === 0) {
    wrap.innerHTML = "";
    return;
  }

  wrap.innerHTML = `
    <h3 class="related-title">Berita Terkait</h3>
    <div class="news-grid">
      ${terkait.map(b => `
        <article class="news-card">
            <img src="${b.gambar}" alt="${b.judul}">
            <div class="news-content">
                <span class="category">${b.kategori}</span>
                <h3>${b.judul}</h3>
                <p>${b.ringkasan}</p>
                <a href="berita-detail.html?id=${b.id}" class="btn-news">BACA SELENGKAPNYA</a>
            </div>
        </article>
      `).join("")}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderBeritaDetail);