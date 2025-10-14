"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { registerAsync } from "@/store/auth/async";
import { registerSchema, RegisterSchema } from "@/validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { PasswordInput } from "./ui/passwordInput";

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      dob: "", // 👈 penting biar tidak undefined
      gender: "",
      phoneNumber: "",
    },
  });

  const gender = watch("gender");

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const years = Array.from({ length: 70 }, (_, i) => 2024 - i);

  useEffect(() => {
    if (day && month && year) {
      const monthIndex = months.indexOf(month) + 1;
      const formattedMonth = monthIndex.toString().padStart(2, "0");
      const formattedDay = day.toString().padStart(2, "0");
      setValue("dob", `${year}-${formattedMonth}-${formattedDay}`);
    } else {
      setValue("dob", "");
    }
  }, [day, month, year, setValue]);

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    try {
      const res = await dispatch(registerAsync(data));

      if (registerAsync.fulfilled.match(res)) {
        alert("Register Success");

        reset({
          email: "",
          password: "",
          dob: "",
          fullName: "",
          gender: "",
          phoneNumber: "",
        });

        const role = res.payload.user.role;

        if (role === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      } else if (registerAsync.rejected.match(res)) {
        alert("Register Failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-6 w-full"
    >
      <div className="w-full">
        <Label className="mb-2">Nama Lengkap</Label>
        <Input
          type="text"
          placeholder="Masukkan nama lengkap"
          className="mt-1 border-gray-300 focus:ring-[#172662]"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>
      <div className="w-full">
        <Label className="mb-2">Email</Label>
        <Input
          type="email"
          placeholder="Masukkan email"
          className="mt-1 border-gray-300 focus:ring-[#172662]"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="w-full">
        <Label className="mb-2">Jenis Kelamin</Label>
        <div className="flex gap-3 mt-1">
          <button
            type="button"
            onClick={() => setValue("gender", "Laki-laki")}
            className={`flex-1 border rounded-lg py-2 ${
              gender === "Laki-laki"
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            ♂ Laki - Laki
          </button>
          <button
            type="button"
            onClick={() => setValue("gender", "Perempuan")}
            className={`flex-1 border rounded-lg py-2 ${
              gender === "Perempuan"
                ? "border-pink-600 bg-pink-50 text-pink-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            ♀ Perempuan
          </button>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
        )}
      </div>

      <div className="w-full">
        <Label className="mb-2">Tanggal Lahir</Label>
        <div className="flex gap-2 mt-1">
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border rounded-lg px-3 py-2 flex-1 border-gray-300"
          >
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border rounded-lg px-3 py-2 flex-1 border-gray-300"
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border rounded-lg px-3 py-2 flex-1 border-gray-300"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        {errors.dob && (
          <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
        )}
      </div>

      <div className="w-full">
        <Label className="mb-2">Password</Label>
        <PasswordInput
          placeholder="Masukkan password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <Button
        type="submit"
        variant="blue"
        className="w-full mt-4 bg-[#172662]"
        disabled={loading}
      >
        {loading ? "Loading..." : "Daftar Sekarang"}
      </Button>
    </form>
  );
}
