# SADARI 4LIFE - Sistem Deteksi Dini Hipertensi

Aplikasi web untuk screening awal hipertensi dengan sistem penyimpanan jawaban sementara dan manajemen data user.

## Fitur Utama

### 🧠 Context-based State Management

- **AnswerContext**: Mengelola state global untuk data user dan jawaban
- **Temporary Storage**: Menyimpan jawaban sementara di localStorage
- **Persistent Data**: Jawaban tersimpan meskipun user navigasi antar soal

### 👤 User Management

- Form input data diri (nama, alamat, tanggal lahir, no HP)
- Data user tersimpan dalam context
- Validasi input sebelum memulai tes

### 📝 Answer Management

- **Auto-save**: Setiap jawaban otomatis tersimpan
- **Navigation**: Bisa kembali ke soal sebelumnya dengan jawaban tersimpan
- **Progress Tracking**: Visual indicator soal yang sudah dijawab
- **Answer Summary**: Review semua jawaban sebelum submit final

### 🚪 Exit Confirmation

- **Modal Konfirmasi**: Tampil saat user klik tombol keluar
- **Route Protection**: Deteksi percobaan meninggalkan halaman
- **Data Cleanup**: Hapus semua data saat konfirmasi keluar

### 📊 Test Results

- **Risk Assessment**: Kategorisasi risiko berdasarkan skor total
- **Detailed Breakdown**: Rincian skor per pertanyaan
- **Personalized Recommendations**: Saran berdasarkan level risiko
- **Print Functionality**: Fitur cetak hasil tes

## Struktur Komponen

### Context

- `AnswerContext`: State management untuk user dan jawaban
- `useAnswerContext`: Hook untuk mengakses context

### Components

- `UserForm`: Form input data diri
- `AnswerProgress`: Visual progress jawaban
- `AnswerSummary`: Ringkasan jawaban sebelum submit
- `TestResult`: Hasil tes dengan analisis risiko
- `ExitConfirmModal`: Modal konfirmasi keluar

### Hooks

- `useRouteLeave`: Deteksi percobaan meninggalkan route

## Cara Penggunaan

### 1. Input Data Diri

- User mengisi form data diri
- Klik "Mulai Tes" untuk memulai

### 2. Pengerjaan Tes

- Jawab pertanyaan satu per satu
- Jawaban otomatis tersimpan
- Bisa navigasi maju/mundur
- Progress bar dan visual indicator tersedia

### 3. Review & Submit

- Setelah semua soal dijawab, tampil ringkasan
- User bisa edit jawaban atau submit
- Klik "Submit Jawaban" untuk melihat hasil

### 4. Hasil Tes

- Tampil skor total dan level risiko
- Rekomendasi personal berdasarkan hasil
- Fitur cetak dan tes ulang tersedia

## Fitur Keamanan

### Data Protection

- **Local Storage**: Jawaban tersimpan sementara di browser
- **Auto-cleanup**: Data dihapus saat keluar atau refresh
- **Confirmation Required**: Konfirmasi sebelum menghapus data

### Navigation Guard

- **Before Unload**: Warning saat refresh/tutup tab
- **Route Change**: Deteksi perubahan route
- **Modal Interruption**: Mencegah navigasi tanpa konfirmasi

## Technical Implementation

### State Management

```typescript
type AnswerContextType = {
  user: User | null;
  tempAnswers: Map<number, number>;
  saveTempAnswer: (questionId: number, answerIndex: number) => void;
  getTempAnswer: (questionId: number) => number | null;
  // ... other methods
};
```

### Data Persistence

- **localStorage**: Menyimpan jawaban sementara
- **Map Structure**: Efficient lookup untuk jawaban per soal
- **Auto-sync**: Sync otomatis antara context dan localStorage

### Route Protection

```typescript
const useRouteLeave = () => {
  // beforeunload event
  // popstate event
  // Navigation prevention
};
```

## Dependencies

- **React 18+**: Hooks dan Context API
- **Next.js 14+**: App Router dan optimizations
- **TypeScript**: Type safety dan development experience
- **Tailwind CSS**: Styling dan responsive design

## Development

### Setup

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm start
```

## Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

MIT License - see LICENSE file for details
