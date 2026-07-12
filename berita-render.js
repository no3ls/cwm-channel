/* =====================================================
   BERITA-RENDER.JS
   Menampilkan 3 berita terbaru di homepage (index.html)
   ke dalam elemen <div id="newsGrid"> menggunakan data
   dari berita-data.js (BERITA_DATA & getBeritaTerbaru()).
===================================================== */

function renderBeritaHomepage() {
  const grid = document.getElementById("newsGrid");

  if (!grid) return; // elemen tidak ditemukan di halaman ini
  if (typeof getBeritaTerbaru !== "function") {
    console.error("berita-data.js belum dimuat sebelum berita-render.js");
    return;
  }

  const terbaru = getBeritaTerbaru(3);

  grid.innerHTML = terbaru.map(b => `
    <article class="news-card">
        <img src="${b.gambar}" alt="${b.judul}">
        <div class="news-content">
            <span class="category">${b.kategori}</span>
            <h3>${b.judul}</h3>
            <p>${b.ringkasan}</p>
            <a href="berita-detail.html?id=${b.id}" class="btn-news">BACA SELENGKAPNYA</a>
        </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderBeritaHomepage);
