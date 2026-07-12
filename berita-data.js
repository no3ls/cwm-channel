/* =====================================================
   BERITA-DATA.JS
   Sumber data berita CWM CHANNEL.
   File ini dipakai bersama oleh berita.html (daftar lengkap)
   dan index.html (3 berita terbaru di beranda).
   Tinggal tambah/ubah objek di array BERITA_DATA untuk
   menambah atau mengedit berita.
===================================================== */

const BERITA_DATA = [
  {
    id: 1,
    kategori: "Kegiatan",
    judul: "CWM Channel Gelar Siaran Perdana Program Mingguan",
    tanggal: "2026-07-10",
    penulis: "Tim Redaksi",
    gambar: "https://picsum.photos/seed/cwm01/800/500",
    ringkasan: "Episode perdana program mingguan CWM Channel resmi tayang dan mendapat sambutan hangat dari warga sekitar.",
    isi: "Episode perdana program mingguan CWM Channel resmi tayang pekan ini dan mendapat sambutan hangat dari warga sekitar. Dalam siaran perdana ini, tim redaksi mengangkat topik seputar kegiatan sosial di lingkungan setempat, lengkap dengan wawancara langsung bersama beberapa tokoh masyarakat. Antusiasme penonton terlihat dari jumlah interaksi yang cukup tinggi di kolom komentar. Pengelola CWM Channel menyampaikan bahwa program ini akan tayang rutin setiap minggu dengan tema yang berbeda-beda, mulai dari isu lingkungan, pendidikan, hingga ekonomi kreatif warga."
  },
  {
    id: 2,
    kategori: "Pengumuman",
    judul: "Jadwal Pemeliharaan Layanan Pengaduan Online",
    tanggal: "2026-07-08",
    penulis: "Admin Layanan",
    gambar: "https://picsum.photos/seed/cwm02/800/500",
    ringkasan: "Layanan pengaduan online akan mengalami pemeliharaan sistem selama beberapa jam untuk meningkatkan kualitas layanan.",
    isi: "Sehubungan dengan upaya peningkatan kualitas layanan, sistem pengaduan online CWM Channel akan menjalani proses pemeliharaan terjadwal. Selama masa pemeliharaan, pengguna mungkin mengalami gangguan sementara saat mengakses formulir pengaduan. Tim teknis memastikan seluruh data pengaduan yang sudah masuk tetap aman dan akan diproses seperti biasa setelah sistem kembali normal. Warga yang memiliki keperluan mendesak dapat menghubungi kontak darurat yang tertera pada halaman Pengaduan."
  },
  {
    id: 3,
    kategori: "Komunitas",
    judul: "Warga Antusias Ikuti Gotong Royong Bersih Lingkungan",
    tanggal: "2026-07-05",
    penulis: "Reporter Lapangan",
    gambar: "https://picsum.photos/seed/cwm03/800/500",
    ringkasan: "Kegiatan gotong royong akhir pekan berhasil menghimpun puluhan warga untuk membersihkan area publik bersama-sama.",
    isi: "Akhir pekan lalu, puluhan warga turut serta dalam kegiatan gotong royong membersihkan area publik yang selama ini menjadi keluhan bersama. Kegiatan yang difasilitasi oleh CWM Channel ini berlangsung meriah, diiringi pembagian konsumsi ringan dan sesi ngobrol santai antarwarga. Ketua RT setempat menyampaikan apresiasi atas partisipasi aktif masyarakat dan berharap kegiatan serupa dapat digelar secara berkala setiap bulan."
  },
  {
    id: 4,
    kategori: "Edukasi",
    judul: "Tips Aman Bertransaksi Digital untuk Warga",
    tanggal: "2026-07-02",
    penulis: "Tim Redaksi",
    gambar: "https://picsum.photos/seed/cwm04/800/500",
    ringkasan: "Maraknya penipuan digital membuat CWM Channel mengangkat topik literasi keuangan dan keamanan transaksi online.",
    isi: "Menyikapi maraknya kasus penipuan digital yang menyasar masyarakat, CWM Channel menghadirkan segmen edukasi khusus mengenai keamanan bertransaksi online. Beberapa poin penting yang dibahas antara lain pentingnya menjaga kerahasiaan kode OTP, cara mengenali tautan mencurigakan, serta langkah yang perlu diambil apabila terlanjur menjadi korban penipuan. Narasumber juga mengingatkan warga untuk selalu memverifikasi identitas pihak yang menghubungi sebelum melakukan transaksi apa pun."
  },
  {
    id: 5,
    kategori: "Kegiatan",
    judul: "Pelatihan UMKM Digital Resmi Dibuka untuk Warga",
    tanggal: "2026-06-28",
    penulis: "Reporter Lapangan",
    gambar: "https://picsum.photos/seed/cwm05/800/500",
    ringkasan: "Program pelatihan pemasaran digital bagi pelaku UMKM lokal resmi dimulai dengan peserta dari berbagai kalangan usia.",
    isi: "Program pelatihan pemasaran digital bagi pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) resmi dibuka pekan ini. Pelatihan yang berlangsung selama empat hari ini mencakup materi dasar fotografi produk, strategi konten media sosial, hingga pengelolaan toko daring. Peserta yang hadir berasal dari berbagai kalangan usia, mulai dari pelaku usaha rintisan hingga pedagang yang telah lama berjualan secara konvensional dan ingin memperluas jangkauan pasar melalui kanal digital."
  },
  {
    id: 6,
    kategori: "Pengumuman",
    judul: "Pembaruan Alur Layanan Administrasi Terbaru",
    tanggal: "2026-06-24",
    penulis: "Admin Layanan",
    gambar: "https://picsum.photos/seed/cwm06/800/500",
    ringkasan: "Alur pengajuan layanan administrasi kini dipersingkat untuk mempermudah warga dalam mengurus dokumen.",
    isi: "Guna mempercepat proses pelayanan, alur pengajuan layanan administrasi kini telah diperbarui dan dipersingkat. Warga tidak perlu lagi melalui beberapa tahap verifikasi manual karena sebagian proses kini dapat dilakukan secara daring melalui halaman Layanan. Diharapkan dengan pembaruan ini, waktu pemrosesan dokumen dapat berkurang secara signifikan sehingga warga tidak perlu menunggu terlalu lama."
  },
  {
    id: 7,
    kategori: "Komunitas",
    judul: "Diskusi Terbuka: Ruang Aspirasi Warga Bulan Ini",
    tanggal: "2026-06-19",
    penulis: "Tim Redaksi",
    gambar: "https://picsum.photos/seed/cwm07/800/500",
    ringkasan: "Forum diskusi terbuka kembali digelar sebagai ruang bagi warga untuk menyampaikan aspirasi secara langsung.",
    isi: "Forum diskusi terbuka bulanan kembali digelar sebagai ruang bagi warga untuk menyampaikan aspirasi, kritik, maupun saran secara langsung kepada pengelola CWM Channel. Berbagai topik dibahas dalam forum ini, mulai dari kondisi fasilitas umum, usulan kegiatan baru, hingga evaluasi terhadap layanan yang sudah berjalan. Hasil diskusi akan dirangkum dan menjadi bahan pertimbangan dalam penyusunan program kerja periode berikutnya."
  },
  {
    id: 8,
    kategori: "Edukasi",
    judul: "Mengenal Prosedur Pengaduan yang Baik dan Benar",
    tanggal: "2026-06-14",
    penulis: "Admin Layanan",
    gambar: "https://picsum.photos/seed/cwm08/800/500",
    ringkasan: "Agar pengaduan cepat ditindaklanjuti, penting bagi warga memahami prosedur dan kelengkapan data yang diperlukan.",
    isi: "Agar setiap pengaduan dapat ditindaklanjuti dengan cepat dan tepat, warga diimbau untuk memahami prosedur pengaduan yang berlaku. Beberapa hal penting yang perlu diperhatikan antara lain menyertakan kronologi kejadian secara jelas, melampirkan bukti pendukung jika ada, serta mencantumkan data kontak yang dapat dihubungi. Dengan kelengkapan data yang baik, proses verifikasi dan tindak lanjut oleh tim terkait dapat berjalan lebih efisien."
  },
  {
    id: 9,
    kategori: "Kegiatan",
    judul: "Lomba Kreativitas Anak Meriahkan Akhir Pekan",
    tanggal: "2026-06-09",
    penulis: "Reporter Lapangan",
    gambar: "https://picsum.photos/seed/cwm09/800/500",
    ringkasan: "Lomba mewarnai dan bercerita untuk anak-anak sukses digelar dengan antusiasme tinggi dari peserta cilik.",
    isi: "Akhir pekan lalu, halaman balai warga dipenuhi tawa ceria anak-anak yang mengikuti lomba mewarnai dan bercerita yang digagas oleh CWM Channel. Lomba ini bertujuan untuk mengasah kreativitas serta kepercayaan diri anak sejak usia dini. Para pemenang mendapatkan hadiah berupa alat tulis dan buku bacaan, sementara seluruh peserta memperoleh sertifikat partisipasi sebagai bentuk apresiasi atas keikutsertaan mereka."
  }
];

/* Utility: kembalikan berita terbaru sejumlah n (diurutkan dari tanggal terbaru) */
function getBeritaTerbaru(n = 3) {
  return [...BERITA_DATA]
    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
    .slice(0, n);
}

/* Utility: format tanggal ke format Indonesia, mis. 10 Juli 2026 */
function formatTanggalID(isoDate) {
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const d = new Date(isoDate);
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}
// ================================================================
// DATA BERITA CWM CHANNEL
// Tambahkan / ubah berita di sini. Setiap berita punya "id" unik
// yang dipakai untuk menghubungkan kartu di beranda (index.html)
// dengan halaman detail (berita-detail.html?id=...)
// ================================================================

const beritaData = [
  {
    id: 1,
    kategori: "Daerah",
    judul: "Perkembangan Terbaru Kota Sorong dan Papua Barat Daya",
    ringkasan: "Informasi terbaru seputar perkembangan wilayah, pemerintahan, dan masyarakat Papua Barat Daya.",
    gambar: "jpg/new3.jpg",
    penulis: "Redaksi CWM",
    tanggal: "13 Juli 2026",
    isi: [
      "Kota Sorong dan wilayah sekitarnya di Papua Barat Daya terus menunjukkan perkembangan di berbagai sektor, mulai dari infrastruktur, pelayanan publik, hingga pemberdayaan masyarakat lokal.",
      "Pemerintah daerah dilaporkan tengah mempercepat sejumlah proyek pembangunan fasilitas umum yang ditujukan untuk mendukung aktivitas ekonomi warga, termasuk perbaikan akses jalan antar distrik.",
      "Selain pembangunan fisik, sejumlah program pemberdayaan masyarakat adat juga terus digalakkan, dengan melibatkan tokoh-tokoh lokal dalam proses perencanaan agar pembangunan tetap selaras dengan kearifan setempat.",
      "CWM Channel akan terus memantau dan melaporkan perkembangan terbaru seputar Papua Barat Daya melalui program Berita Pagi, Berita Siang, dan Berita Malam."
    ]
  },
  {
    id: 2,
    kategori: "Pendidikan",
    judul: "Transformasi Digital Pendidikan Papua Barat Daya",
    ringkasan: "Pemanfaatan teknologi digital untuk meningkatkan kualitas pendidikan generasi muda Papua.",
    gambar: "jpg/news2.jpg",
    penulis: "Redaksi CWM",
    tanggal: "13 Juli 2026",
    isi: [
      "Sejumlah sekolah di Papua Barat Daya mulai mengadopsi perangkat dan metode pembelajaran digital sebagai bagian dari upaya meningkatkan kualitas pendidikan di wilayah tersebut.",
      "Program ini melibatkan pelatihan bagi tenaga pengajar agar lebih terbiasa menggunakan perangkat digital dalam proses belajar mengajar, termasuk pemanfaatan materi pembelajaran interaktif berbasis video dan aplikasi.",
      "Tantangan utama yang masih dihadapi adalah keterbatasan akses internet di sejumlah distrik terpencil, sehingga pemerataan program ini masih memerlukan dukungan infrastruktur telekomunikasi yang lebih luas.",
      "Dinas pendidikan setempat menyatakan optimismenya bahwa transformasi digital ini akan membuka lebih banyak peluang belajar bagi generasi muda Papua di masa depan."
    ]
  },
  {
    id: 3,
    kategori: "Olahraga",
    judul: "Prestasi Atlet Papua di Tingkat Nasional",
    ringkasan: "Berita olahraga dan prestasi putra-putri Papua dalam berbagai kompetisi nasional.",
    gambar: "jpg/staf-cwm.jpg",
    penulis: "Redaksi CWM",
    tanggal: "13 Juli 2026",
    isi: [
      "Atlet-atlet asal Papua kembali menorehkan prestasi membanggakan di berbagai ajang olahraga tingkat nasional, mengukuhkan reputasi Papua sebagai salah satu lumbung talenta olahraga Indonesia.",
      "Sejumlah cabang olahraga seperti atletik, sepak bola, dan angkat besi menjadi andalan para atlet muda Papua Barat Daya dalam meraih medali di kompetisi antar provinsi.",
      "Pembinaan usia dini melalui sekolah-sekolah olahraga di Kota Sorong disebut menjadi salah satu faktor pendorong lahirnya bibit-bibit atlet berbakat dari wilayah ini.",
      "CWM Channel berkomitmen untuk terus mendukung dan meliput perjalanan para atlet Papua menuju panggung kompetisi yang lebih besar."
    ]
  }
];