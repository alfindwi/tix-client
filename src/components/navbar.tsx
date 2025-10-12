import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center sticky top-0 justify-between px-10 py-3 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src="./logo.png" alt="YesPlis logo" className="h-15 w-auto" />
        </a>
      </div>

      <nav aria-label="Pencarian" className="flex-1 mx-10">
        <form
          role="search"
          className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50"
        >
          <input
            type="text"
            placeholder="Cari berdasarkan artis, acara, atau nama tempat"
            className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 mr-2 rounded-[4px] bg-[#1932b9] hover:bg-[#1932b9]/90 text-white flex items-center justify-center"
          >
            <Search size={15} />
          </button>
        </form>
      </nav>

      <div className="h-10 border-l border-gray-300 mr-5" />

      <div className="flex items-center gap-2">
        <Button variant={"white"} size={"lg"}>
          Masuk
        </Button>
        <Button variant={"blue"} size={"lg"}>
          Daftar
        </Button>
      </div>
    </header>
  );
}
