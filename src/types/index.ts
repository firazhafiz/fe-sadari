export type User = {
  id: number;
  nama: string;
  alamat: string;
  tanggal_lahir: string;
  no_hp: string;
  answers: Answer[];
};

type Answer = {
  id: number;
  user_id: number;
  hasil_persen: Float16Array;
  jawaban1: number;
  jawaban2: number;
  jawaban3: number;
  jawaban4: number;
  jawaban5: number;
  jawaban6: number;
  jawaban7: number;
  jawaban8: number;
  jawaban9: number;
  jawaban10: number;
  jawaban11: number;
  jawaban12: number;
  jawaban13: number;
  jawaban14: number;
  jawaban15: number;
  jawaban16: number;
  jawaban17: number;
  jawaban18: number;
  jawaban19: number;
  jawaban20: number;
};
