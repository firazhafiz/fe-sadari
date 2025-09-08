import * as yup from "yup";

const phoneRegex = /^(\+?62|0)8\d{7,12}$/;

export const userFormSchema = yup.object({
  nama: yup
    .string()
    .trim()
    .required("Nama lengkap wajib diisi")
    .min(3, "Nama minimal 5 karakter")
    .max(100, "Nama maksimal 100 karakter"),

  alamat: yup
    .string()
    .trim()
    .required("Alamat wajib diisi")
    .max(300, "Alamat maksimal 300 karakter")
    .nullable()
    .optional(),

  // Simpan sebagai ISO string (YYYY-MM-DD) bila tersedia
  tanggal_lahir: yup
    .string()
    .trim()
    .required("Tanggal lahir wajib diisi")
    .matches(/^\d{4}-\d{2}-\d{2}$/, {
      excludeEmptyString: true,
      message: "Format tanggal tidak valid (contoh: 2005-04-02)",
    })
    .nullable()
    .optional(),

  no_hp: yup
    .string()
    .trim()
    .required("No HP wajib diisi")
    .matches(
      phoneRegex,
      "Format No HP tidak valid (contoh: 08xxxxxxxx atau +628xxxxxxxx)"
    )
    .max(20, "No HP terlalu panjang"),
});

export type UserFormSchema = yup.InferType<typeof userFormSchema>;
