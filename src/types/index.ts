export type User = {
  id?: number;
  nama?: string;
  alamat?: string;
  tanggal_lahir?: string;
  no_hp?: string;
};

export type Answer = {
  id: number;
  userId: number;
  hasil_persen: number;
  details: AnswerDetail[];
};

export type FormAnswer = {
  user: User;
  hasil_persen: number;
  answers: AnswerDetail[];
};

export type AnswerDetail = {
  id: number;
  soalId: number;
  jawaban: string;
  score: number;
};
