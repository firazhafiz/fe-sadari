export type User = {
  id?: number;
  nama: string;
  alamat?: string;
  tanggal_lahir?: string;
  no_hp?: string;
  created_at?: string;
  updated_at?: string;
};

export type Answer = {
  id: number;
  userId: number;
  hasil_persen: number;
  created_at: string;
  updated_at: string;
  details: AnswerDetail[];
};

export type FormAnswer = {
  user: User;
  hasil_persen: number;
  answers: AnswerDetail[];
};

export type AnswerDetail = {
  id?: number;
  soalId: number;
  jawaban: string;
  score: number;
};

// API Response types
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
};

export type CreateAnswerRequest = {
  user: Omit<User, "id" | "created_at" | "updated_at">;
  hasil_persen: number;
  details: Omit<AnswerDetail, "id">[];
};

export type CreateAnswerResponse = {
  user: User;
  answer: Answer;
};
