"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaRegUser, FaSearch } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineExplore, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiHome9Fill } from "react-icons/ri";
import { TbCalendarPlus } from "react-icons/tb";
import AuthButton from "./authButton";
import { Button } from "./ui/button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="flex items-center sticky top-0 justify-between px-6 md:px-10 py-3 z-50 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src="./logo.png" alt="YesPlis logo" className="h-12 w-auto" />
        </a>
      </div>

      <nav aria-label="Pencarian" className="hidden md:flex flex-1 mx-10">
        <form
          role="search"
          className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-full"
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
            <FaSearch size={15} />
          </button>
        </form>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-40">
        <ul className="flex justify-around items-center py-3 text-[#172763] text-sm font-medium">
          <li className="flex flex-col items-center">
            <RiHome9Fill size={25} />
            <a href="/" className="text-[12px]">
              Beranda
            </a>
          </li>

          <li className="flex flex-col items-center">
            <MdOutlineExplore size={25} />{" "}
            <a href="/event" className="text-[12px]">
              Jelajahi Event
            </a>
          </li>

          <li className="flex flex-col items-center">
            <TbCalendarPlus size={25} />
            <a href="/buat" className="text-[12px]">
              Buat Event
            </a>
          </li>

          <li className="flex flex-col items-center">
            <FaRegUser size={25} />
            <a href="/profil">Profil</a>
          </li>
        </ul>
      </nav>

      <div className="hidden md:block h-10 border-l border-gray-300 mr-5" />

      <div className="hidden md:flex items-center gap-2">
        <AuthButton />
      </div>

      <div className="flex items-center">
        <button
          type="submit"
          className="md:hidden p-2 mr-2 rounded-[4px] text-[#172763] flex items-center justify-center"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <FaSearch size={15} />
        </button>

        <button
          className="md:hidden flex items-center justify-center p-2 text-[#172763]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-[64px] left-0 right-0 z-50 bg-white overflow-y-auto h-[calc(100vh-64px)] animate-fadeIn">
          <div className="flex flex-col p-4 border-b gap-2 border-gray-200">
            <h2 className="font-bold text-md text-[#172763] ">
              Masuk ke akunmu
            </h2>
            <p className="text-gray-500 text-sm">
              Untuk menggunakan semua fitur di Tiktix
            </p>

            <div className="flex gap-3">
              <Button variant={"white"} size={"lg"} className="flex-1">
                Daftar
              </Button>
              <Button variant={"blue"} size={"lg"} className="flex-1">
                Masuk
              </Button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-5 text-[#172763]">
              <a href="/about-us">
                <h3 className="font-bold text-lg ">Tentang Tiktix</h3>
              </a>
              <ul className="space-y-4 mt-5 text-[15px] ">
                <a href="/about-us">
                  <li className="flex items-center gap-3 mb-3">
                    <BsBuildings size={20} className="text-[#172763]" /> Tentang
                    Kami
                  </li>
                </a>
                <a href="/terms">
                  <li className="flex items-center gap-3 mb-3">
                    <GrDocumentText size={20} className="text-[#172763]" />
                    Syarat & Ketentuan
                  </li>
                </a>
                <a href="/event">
                  <li className="flex items-center gap-3 mb-3">
                    <MdOutlineExplore size={20} className="text-[#172763]" />
                    Jelajahi Event
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <div className="px-6">
            <div className="space-y-5 text-[#172763]">
              <a href="/about-us">
                <h3 className="font-bold text-lg ">Media Sosial</h3>
              </a>
              <ul className="space-y-4 mt-5 text-[15px] ">
                <a href="https://www.instagram.com/alvindvvi" target="_blank">
                  <li className="flex items-center gap-3 mb-3">
                    <FaInstagram size={20} className="text-[#172763]" />{" "}
                    Instagram
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/alfin-dwi-wadani/"
                  target="_blank"
                >
                  <li className="flex items-center gap-3 mb-3">
                    <FaLinkedin size={20} className="text-[#172763]" /> LinkedIn
                  </li>
                </a>
                <a href="https://x.com/alvindvvi" target="_blank">
                  <li className="flex items-center gap-3">
                    <FaSquareXTwitter size={20} className="text-[#172763]" /> X
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-white animate-fadeIn flex flex-col">
          <div className="flex items-center bg-[#12244d]  px-3 py-2">
            <button
              onClick={() => setSearchOpen(false)}
              className="p-2 text-white flex items-center justify-center"
            >
              <MdOutlineKeyboardArrowLeft size={20} />
            </button>

            <div className="flex flex-1 rounded-md overflow-hidden ml-2">
              <input
                type="text"
                placeholder="Cari event seru di sini"
                className="flex-1 px-3 py-2 text-sm text-white bg-[#12244d] focus:bg-white focus:text-black "
                autoFocus
              />
              <button className="px-3 text-white bg-[#1932b9]">
                <FaSearch size={16} />
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white"></div>
        </div>
      )}
    </header>
  );
}
