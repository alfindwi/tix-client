"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function AuthButton() {
  const [activeTab, setActiveTab] = useState<"Masuk" | "Daftar">("Masuk");

  return (
    <div className="flex items-center gap-2 flex-1">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="white"
            size="lg"
            onClick={() => setActiveTab("Masuk")}
            className="flex-1"
          >
            Masuk
          </Button>
        </DialogTrigger>
        <DialogTrigger asChild>
          <Button
            variant="blue"
            size="lg"
            onClick={() => setActiveTab("Daftar")}
            className="flex-1"
          >
            Daftar
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] rounded-xl max-h-[93vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <DialogHeader>
            <DialogTitle className="text-center text-[#172662] font-bold md:mt-0 mt-4 text-xl md:text-2xl">
              Selamat Datang di Tiktix
            </DialogTitle>
            <DialogDescription className="text-center text-[#172662] text-sm">
              Silahkan masuk atau daftar untuk melanjutkan.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center gap-10 border-b border-gray-200 mt-2">
            {["Masuk", "Daftar"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "Masuk" | "Daftar")}
                className={`pb-2 font-semibold text-[16px] ${
                  activeTab === tab
                    ? "text-[#172662] border-b-2 border-[#172662]"
                    : "text-gray-500 hover:text-[#172662]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center w-full max-w-sm mx-auto mt-4 space-y-3">
            <Button className="w-full bg-[#f5f5f5] hover:bg-[#e5e5e5] text-black font-medium flex items-center justify-center gap-2 rounded-md border border-gray-200">
              <img
                src="/google-logo-icon.png"
                alt="Google Icon"
                className="w-5 h-5"
              />
              Lanjutkan dengan Google
            </Button>

            <div className="flex items-center w-full gap-3 cursor-pointer">
              <div className="flex-grow border-t border-gray-300/70"></div>
              <p className="text-sm text-[#828282] whitespace-nowrap ">
                {activeTab === "Masuk"
                  ? "Atau masuk dengan email"
                  : "Atau daftar dengan email"}
              </p>
              <div className="flex-grow border-t border-gray-300/70"></div>
            </div>

            {activeTab === "Masuk" ? (
                <LoginForm />
            ) : (
              <RegisterForm />
            )}

            {activeTab === "Masuk" && (
              <p className="text-sm text-black font-semibold text-center">
                Lupa kata sandi?{" "}
                <a href="#" className="text-[#172662]">
                  Atur ulang Kata Sandi
                </a>
              </p>
            )}
          </div>

          <DialogFooter />
        </DialogContent>
      </Dialog>
    </div>
  );
}
