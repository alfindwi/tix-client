import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PasswordInput } from "./ui/passwordInput";

export default function AuthButton() {
  const [activeTab, setActiveTab] = useState<"Masuk" | "Daftar">("Masuk");
  const [gender, setGender] = useState("Laki-laki");

  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const years = Array.from({ length: 70 }, (_, i) => 2024 - i);
  return (
    <div className="hidden md:flex items-center gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="white" size="lg">
            Masuk
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-center text-[#172662] font-bold text-2xl">
              Selamat Datang di Tiptix
            </DialogTitle>
            <DialogDescription className="text-center text-[#172662] text-sm">
              Silahkan masuk atau daftar untuk melanjutkan.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center gap-10 border-b border-gray-200 mt-4">
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

          <div className="flex flex-col items-center w-full max-w-sm mx-auto mt-6">
  {/* Tombol Google */}
  <Button className="w-full mb-4 bg-[#f5f5f5] hover:bg-[#e5e5e5] text-black font-medium flex items-center justify-center gap-2 rounded-md border border-gray-200">
    <img
      src="/google-logo-icon.png"
      alt="Google Icon"
      className="w-5 h-5"
    />
    Lanjutkan dengan Google
  </Button>

  {/* Garis pemisah */}
  <div className="flex items-center w-full gap-3">
    <div className="flex-grow border-t border-gray-300/70"></div>
    <p className="text-sm text-[#828282] whitespace-nowrap">
      {activeTab === "Masuk"
        ? "Atau masuk dengan email"
        : "Atau daftar dengan email"}
    </p>
    <div className="flex-grow border-t border-gray-300/70"></div>
  </div>

  {/* Form Scrollable */}
  <div className="w-full mt-5 space-y-3 max-h-[65vh] overflow-y-auto px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
    {activeTab === "Masuk" ? (
      <>
        <div>
          <Label className="mb-3">Email</Label>
          <Input
            type="email"
            placeholder="Masukkan email"
            className="mt-1 border-gray-300 focus:ring-[#172662]"
          />
        </div>
        <div>
          <Label className="mb-3">Password</Label>
          <PasswordInput placeholder="Masukkan password" />
        </div>
      </>
    ) : (
      <>
        <div>
          <Label className="mb-3">Nama Lengkap</Label>
          <Input
            type="text"
            placeholder="Masukkan nama lengkap"
            className="mt-1 border-gray-300 focus:ring-[#172662]"
          />
        </div>
        <div>
          <Label className="mb-3">Email</Label>
          <Input
            type="email"
            placeholder="Masukkan email"
            className="mt-1 border-gray-300 focus:ring-[#172662]"
          />
        </div>
        <div>
          <Label className="mb-3">Password</Label>
          <PasswordInput placeholder="Masukkan password" />
        </div>

        {/* Jenis Kelamin */}
        <div>
          <Label className="mb-2 block font-semibold">Jenis Kelamin</Label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setGender("Laki-laki")}
              className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-lg w-1/2 ${
                gender === "Laki-laki"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              <span>♂</span> Laki - Laki
            </button>

            <button
              type="button"
              onClick={() => setGender("Perempuan")}
              className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-lg w-1/2 ${
                gender === "Perempuan"
                  ? "border-pink-600 bg-pink-50 text-pink-600"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              <span>♀</span> Perempuan
            </button>
          </div>
        </div>

        {/* Tanggal Lahir */}
        <div>
          <Label className="mb-2 block font-semibold">Tanggal Lahir</Label>
          <div className="flex gap-2">
            <select className="border rounded-lg px-3 py-2 flex-1 border-gray-300 focus:ring-[#172662]">
              {days.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <select className="border rounded-lg px-3 py-2 flex-1 border-gray-300 focus:ring-[#172662]">
              {months.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <select className="border rounded-lg px-3 py-2 flex-1 border-gray-300 focus:ring-[#172662]">
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>
      </>
    )}
  </div>

  {/* Tombol Submit */}
  <Button
    type="submit"
    variant="blue"
    className="w-full mt-5 bg-[#172662] text-white rounded-md"
  >
    {activeTab === "Masuk" ? "Masuk Sekarang" : "Daftar Sekarang"}
  </Button>

  {/* Lupa Password */}
  {activeTab === "Masuk" && (
    <p className="text-sm text-black font-semibold text-center mt-3">
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

      <Button variant="blue" size="lg">
        Daftar
      </Button>
    </div>
  );
}
