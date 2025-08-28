export const hasilHipertensi = [
  {
    id: 1,
    kategori: "Normal",
    persentasi: "0-20%",
    tingkat: "low",
    warna: "#22c55e", // green
    penjelasan: "Tekanan darah Anda saat ini berada pada rentang normal, dan risiko hipertensi Anda rendah.",
    aktivitas_fisik: {
      judul: "Saran Aktivitas Fisik",
      rekomendasi: ["Lakukan olahraga ringan–sedang minimal 150 menit/minggu (jalan cepat, bersepeda santai, berenang)", "Lakukan peregangan setiap hari"],
    },
    diet: {
      judul: "Saran Pola Makan",
      rekomendasi: ["Konsumsi banyak sayur, buah, dan biji-bijian", "Pilih sumber protein rendah lemak seperti ikan, ayam tanpa kulit, atau kacang-kacangan", "Gunakan sedikit garam (<5 gram/hari)"],
    },
    avoid: {
      judul: "Hindari",
      items: ["Makanan cepat saji tinggi garam dan lemak", "Minuman manis berlebihan", "Rokok dan Alkohol"],
    },
    informasi_tambahan: null,
  },
  {
    id: 2,
    kategori: "Pre-Hipertensi",
    persentasi: "21-40%",
    tingkat: "moderate",
    warna: "#eab308", // yellow
    penjelasan: "Tekanan darah Anda mulai berada di batas atas normal, risiko hipertensi sedang.",
    aktivitas_fisik: {
      judul: "Saran Aktivitas Fisik",
      rekomendasi: ["Aktivitas aerobik sedang seperti jalan cepat, berenang, atau bersepeda 30 menit/hari, 5 kali/minggu", "Latihan peregangan atau yoga 2–3 kali/minggu"],
    },
    diet: {
      judul: "Saran Diet",
      rekomendasi: ["Terapkan DASH diet (Dietary Approaches to Stop Hypertension): perbanyak buah, sayur, dan susu rendah lemak", "Kurangi makanan tinggi garam, gorengan, dan minuman manis"],
    },
    avoid: {
      judul: "Hindari",
      items: ["Mengonsumsi makanan olahan seperti sosis, mie instan, keripik asin", "Stres berlebihan tanpa relaksasi", "Kafein berlebihan (>2 gelas kopi/hari)"],
    },
    informasi_tambahan: "Lakukan pemeriksaan tekanan darah setiap 3–6 bulan",
  },
  {
    id: 3,
    kategori: "Hipertensi Tahap 1",
    persentasi: "41-60%",
    tingkat: "high",
    warna: "#f97316", // orange
    penjelasan: "Anda memiliki tekanan darah yang sudah masuk tahap awal hipertensi, risiko kesehatan mulai meningkat.",
    aktivitas_fisik: {
      judul: "Saran Aktivitas Fisik",
      rekomendasi: ["Aktivitas fisik intensitas sedang hingga tinggi 30–45 menit/hari (jalan cepat, jogging ringan, senam aerobik)", "Hindari duduk terlalu lama, istirahat aktif setiap 1 jam"],
    },
    diet: {
      judul: "Saran Diet",
      rekomendasi: ["Kurangi asupan garam hingga <1.500 mg/hari", "Batasi konsumsi daging merah dan makanan olahan", "Perbanyak makanan tinggi kalium (pisang, alpukat, bayam)"],
    },
    avoid: {
      judul: "Hindari",
      items: ["Rokok (aktif maupun pasif)", "Makanan kaleng dan cepat saji", "Tidur larut malam terus-menerus"],
    },
    informasi_tambahan: "Konsultasikan ke tenaga kesehatan untuk evaluasi rutin",
  },
  {
    id: 4,
    kategori: "Hipertensi Tahap 2",
    persentasi: "61-80%",
    tingkat: "very-high",
    warna: "#dc2626", // red
    penjelasan: "Tekanan darah Anda cukup tinggi, risiko komplikasi seperti stroke atau penyakit jantung meningkat.",
    aktivitas_fisik: {
      judul: "Saran Aktivitas Fisik",
      rekomendasi: ["Lakukan latihan aerobik sedang 5–6 kali/minggu, durasi 30–40 menit", "Konsultasikan ke dokter sebelum memulai olahraga baru"],
    },
    diet: {
      judul: "Saran Diet",
      rekomendasi: ["Ikuti DASH diet ketat dengan pembatasan garam <1.500 mg/hari", "Hindari makanan cepat saji, makanan kaleng, dan camilan asin", "Minum cukup air, batasi kopi dan teh berkafein tinggi"],
    },
    avoid: {
      judul: "Hindari",
      items: ["Mengangkat beban berat tanpa izin dokter", "Makanan tinggi kolesterol dan lemak jenuh (jeroan, santan pekat)", "Menghentikan obat tanpa saran dokter"],
    },
    informasi_tambahan: "Segera konsultasi ke dokter untuk kemungkinan pengobatan",
  },
  {
    id: 5,
    kategori: "Krisis Hipertensi",
    persentasi: ">80%",
    tingkat: "critical",
    warna: "#7c2d12", // dark red
    penjelasan: "Tekanan darah sangat tinggi dan berisiko mengancam nyawa.",
    aktivitas_fisik: {
      judul: "Saran Aktivitas Fisik",
      rekomendasi: ["Tidak dianjurkan olahraga berat sebelum mendapat izin dokter", "Fokus pada aktivitas ringan seperti jalan santai atau peregangan"],
    },
    diet: {
      judul: "Saran Diet",
      rekomendasi: ["Sangat ketat dalam menghindari garam dan makanan tinggi lemak jenuh", "Perbanyak sayur, buah, dan makanan segar tanpa pengawet"],
    },
    avoid: {
      judul: "Hindari",
      items: ["Olahraga berat atau aktivitas fisik berisiko", "Makanan asin dan olahan pabrik", "Stres emosional yang memicu lonjakan tekanan darah"],
    },
    informasi_tambahan: "Segera periksa ke fasilitas kesehatan untuk evaluasi dan penanganan medis",
  },
];
