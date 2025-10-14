import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(3, "fullName must be at least 3 characters long"),
    email: z.string().email("Please Enter a Valid Email Adrress"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    dob: z.string().min(1, "Tanggal lahir wajib diisi"),
    gender: z.string(),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters long"),
  })
  .required();

export type RegisterSchema = z.infer<typeof registerSchema>;
