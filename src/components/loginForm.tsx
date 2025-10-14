"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/store";
import { loginAsync } from "@/store/auth/async";
import { loginSchema, LoginSchema } from "@/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordInput } from "./ui/passwordInput";

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    const res = await dispatch(loginAsync(data));

    if (loginAsync.fulfilled.match(res)) {
      alert("Login Success");

      reset({
        email: "",
        password: "",
      });

      const role = res.payload.user.role;

      if (role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } else if (loginAsync.rejected.match(res) && error) {
      alert("Login Failed");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-full"
    >
      <div className="w-full">
        <Label className="block mb-2 text-sm font-semibold text-gray-700">
          Email
        </Label>
        <Input
          type="email"
          placeholder="Masukkan email kamu"
          className="h-11 px-4 rounded-lg border border-gray-300 focus:border-[#172662] focus:ring-2 focus:ring-[#172662]/30 transition-all duration-200"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="w-full">
        <Label className="block mb-2 text-sm font-semibold text-gray-700">
          Password
        </Label>
        <PasswordInput
          placeholder="Masukkan password kamu"
          className="h-11 px-4 rounded-lg border border-gray-300 focus:border-[#172662] focus:ring-2 focus:ring-[#172662]/30 transition-all duration-200"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="blue"
        size={"lg"}
      >
        {loading ? "Memproses..." : "Masuk Sekarang"}
      </Button>
    </form>
  );
}
