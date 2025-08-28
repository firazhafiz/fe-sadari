export const soalHipertensi = [
  {
    id: 1,
    soal: "Berapa usia Anda sekarang?",
    pilihan: [
      { text: "Di bawah 40 tahun", score: 0 },
      { text: "40–59 tahun", score: 2 },
      { text: "60 tahun ke atas", score: 5 },
    ],
    rasional: "Risiko hipertensi meningkat seiring bertambahnya usia karena elastisitas pembuluh darah menurun. Semakin tua, semakin tinggi skor",
  },
  {
    id: 2,
    soal: "Apakah ada anggota keluarga dekat (orang tua atau saudara kandung) yang punya tekanan darah tinggi?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Tidak tahu", score: 2 },
      { text: "Ada", score: 6 },
    ],
    rasional: "Faktor genetik berperan besar dalam hipertensi. Jika orang tua atau saudara memiliki hipertensi, risiko meningkat. Tidak tahu diberi skor 2 karena ketidakpastian tetap berisiko",
  },
  {
    id: 3,
    soal: "Apakah Anda merokok saat ini atau pernah merokok?",
    pilihan: [
      { text: "Tidak pernah", score: 0 },
      { text: "Pernah merokok/sudah berhenti", score: 2 },
      { text: "Masih merokok", score: 5 },
    ],
    rasional: "Merokok merusak dinding pembuluh darah dan meningkatkan tekanan darah. Mantan perokok tetap berisiko, tapi lebih rendah dari perokok aktif",
  },
  {
    id: 4,
    soal: "Apakah Anda sering mengkonsumsi makanan asin atau olahan (misalnya mie instan, ikan asin)?",
    pilihan: [
      { text: "Jarang", score: 0 },
      { text: "Kadang-kadang", score: 2 },
      { text: "Sering", score: 4 },
      { text: "Setiap hari", score: 6 },
    ],
    rasional: "Garam berlebih menyebabkan retensi cairan dan meningkatkan tekanan darah. Frekuensi konsumsi menentukan skor",
  },
  {
    id: 5,
    soal: "Apakah Anda rutin berolahraga ringan seperti jalan pagi atau senam lansia?",
    pilihan: [
      { text: "Ya, rutin", score: 0 },
      { text: "Kadang-kadang", score: 2 },
      { text: "Tidak pernah", score: 4 },
    ],
    rasional: "Aktivitas fisik membantu menjaga tekanan darah tetap normal. Tidak olahraga meningkatkan risiko",
  },
  {
    id: 6,
    soal: "Apakah Anda merasa stres, cemas, atau sering gelisah?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Kadang-kadang", score: 3 },
      { text: "Sering", score: 6 },
    ],
    rasional: "Stres kronis meningkatkan hormon kortisol dan adrenalin, yang dapat menaikkan tekanan darah. Semakin sering stres, semakin tinggi skor",
  },
  {
    id: 7,
    soal: "Apakah Anda tahu tekanan darah terakhir Anda?",
    pilihan: [
      { text: "Normal (<120/80)", score: 0 },
      { text: "Sedikit tinggi", score: 2 },
      { text: "Tinggi", score: 4 },
      { text: "Sangat tinggi", score: 6 },
    ],
    rasional: "Data objektif yang langsung menunjukkan status tekanan darah. Semakin tinggi tekanan, semakin besar skor",
  },
  {
    id: 8,
    soal: "Apakah Anda memiliki penyakit lain seperti diabetes, ginjal, atau jantung?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Ya, satu penyakit", score: 4 },
      { text: "Ya, lebih dari satu", score: 6 },
    ],
    rasional: "Komorbiditas seperti diabetes dan penyakit ginjal memperburuk kontrol tekanan darah. Semakin banyak penyakit, semakin tinggi risiko",
  },
  {
    id: 9,
    soal: "Apakah Anda mengalami nyeri kepala, pusing, atau penglihatan kabur?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Kadang-kadang", score: 3 },
      { text: "Sering", score: 6 },
    ],
    rasional: "Gejala ini bisa menjadi tanda hipertensi yang tidak terkontrol. Frekuensi gejala menentukan skor",
  },
  {
    id: 10,
    soal: "Apakah Anda sering buang air kecil di malam hari?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Kadang-kadang", score: 3 },
      { text: "Sering", score: 5 },
    ],
    rasional: "Bisa menunjukkan gangguan ginjal atau jantung, yang berkaitan dengan hipertensi. Semakin sering, semakin tinggi skor",
  },
  {
    id: 11,
    soal: "Apakah Anda merasa mudah lelah atau sesak saat aktivitas ringan?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Kadang-kadang", score: 2 },
      { text: "Sering", score: 6 },
    ],
    rasional: "Tanda kemungkinan gangguan jantung akibat hipertensi. Gejala ringan diberi skor rendah, gejala berat lebih tinggi",
  },
  {
    id: 12,
    soal: "Jika Anda pernah diberi obat tekanan darah oleh dokter, apakah Anda rutin meminumnya sesuai anjuran?",
    pilihan: [
      { text: "Ya, sesuai anjuran", score: 0 },
      { text: "Kadang lupa", score: 2 },
      { text: "Tidak minum obat", score: 5 },
    ],
    rasional: "Kepatuhan rendah meningkatkan risiko komplikasi hipertensi. Tidak minum obat = skor tertinggi",
  },
  {
    id: 13,
    soal: "Apakah Anda mengonsumsi minuman beralkohol?",
    pilihan: [
      { text: "Tidak pernah", score: 0 },
      { text: "Kadang-kadang", score: 2 },
      { text: "Sering", score: 5 },
    ],
    rasional: "Alkohol dapat meningkatkan tekanan darah melalui stimulasi sistem saraf simpatik dan retensi cairan. Sering konsumsi = skor tinggi",
  },
  {
    id: 14,
    soal: "Apakah Anda mengalami pembengkakan di kaki atau tangan?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Kadang-kadang", score: 2 },
      { text: "Sering", score: 5 },
    ],
    rasional: "Bisa menjadi tanda gagal jantung atau gangguan ginjal akibat hipertensi. Frekuensi gejala menentukan skor",
  },
  {
    id: 15,
    soal: "Apakah Anda sering merasa jantung berdebar-debar?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Kadang-kadang", score: 3 },
      { text: "Sering", score: 6 },
    ],
    rasional: "Tanda sistem kardiovaskular terganggu, bisa akibat tekanan darah tinggi. Semakin sering, semakin tinggi skor",
  },
  {
    id: 16,
    soal: "Apakah Anda tidur cukup (6–8 jam per malam)?",
    pilihan: [
      { text: "Ya", score: 0 },
      { text: "Kurang dari 6 jam", score: 2 },
      { text: "Sering terbangun malam", score: 5 },
    ],
    rasional: "Kurang tidur meningkatkan risiko hipertensi melalui gangguan hormonal. Tidur terganggu = skor tinggi",
  },
  {
    id: 17,
    soal: "Apakah Anda pernah mengalami kejang yang tidak berhubungan dengan riwayat epilepsi atau demam tinggi?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Sekali", score: 3 },
      { text: "Lebih dari sekali", score: 6 },
    ],
    rasional:
      "Kejang yang muncul tanpa riwayat epilepsi atau demam tinggi bisa menjadi indikator ensefalopati hipertensif atau komplikasi neurologis dari hipertensi krisis. Skor tinggi diberikan karena ini adalah gejala berat dan berisiko tinggi, meskipun jarang",
  },
  {
    id: 18,
    soal: "Apakah Anda minum air putih cukup setiap hari (6-8 gelas per hari)?",
    pilihan: [
      { text: "Ya", score: 0 },
      { text: "Kurang dari 6 gelas", score: 2 },
      { text: "Sering lupa minum", score: 5 },
    ],
    rasional: "Dehidrasi bisa mempengaruhi tekanan darah dan fungsi ginjal. Kurang minum = skor tinggi",
  },
  {
    id: 19,
    soal: "Apakah Anda mengalami kesulitan berjalan atau bergerak?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Kadang-kadang", score: 2 },
      { text: "Sering", score: 6 },
    ],
    rasional: "Mobilitas rendah berhubungan dengan kurang aktivitas fisik dan risiko hipertensi. Semakin sulit bergerak, semakin tinggi skor",
  },
  {
    id: 20,
    soal: "Apakah Anda pernah dirawat karena tekanan darah tinggi?",
    pilihan: [
      { text: "Tidak", score: 0 },
      { text: "Sekali", score: 4 },
      { text: "Lebih dari sekali", score: 6 },
    ],
    rasional: "Menunjukkan bahwa hipertensi sudah pernah terjadi dan mungkin belum terkontrol. Semakin sering dirawat, semakin tinggi skor",
  },
];
