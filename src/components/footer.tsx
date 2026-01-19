import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#112041] text-white py-12 px-6 sm:px-10 border-t border-[#d4d4d4]">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left md:text-left w-full">
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">
              Tiktix
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline">
                <a href="/about-us">Tentang Kami</a>
              </li>
              <li className="hover:underline">
                <a href="#">Masuk</a>
              </li>
              <li className="hover:underline">
                <a href="#">Jelajahi Event</a>
              </li>
              <li className="hover:underline">
                <a href="/terms">Syarat & Ketentuan</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg text-white">
              Kontak
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                Email: <p className="hover:underline">alfindwi190@gmail.com</p>
              </li>
              <li>
                Telepon: <p className="hover:underline">+62 812-3456-7890</p>
              </li>
              <li className="hover:underline">
                <a
                  href="https://maps.app.goo.gl/x67BNce2mqzg3Uix6"
                  target="_blank"
                >
                  Alamat: Jl. Jenderal Sudirman, RT.1/RW.3, Gelora, Tanah Abang,
                  Jakarta Pusat 10270
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg text-white">
              Inspirasi Event
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline">
                <a href="#">Konser</a>
              </li>
              <li className="hover:underline">
                <a href="#">Festival</a>
              </li>
              <li className="hover:underline">
                <a href="#">Workshop & Seminar</a>
              </li>
              <li className="hover:underline">
                <a href="#">Teater & Drama</a>
              </li>
              <li className="hover:underline">
                <a href="#">Atraksi</a>
              </li>
              <li className="hover:underline">
                <a href="#">Semua Kategori</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h4 className="font-semibold mb-6">Ikuti Kami</h4>
          <div className="flex justify-center items-center gap-6 text-2xl">
            <a href="https://www.instagram.com/alvindvvi" target="_blank">
              <FaInstagram className="text-white hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/alfin-dwi-wadani"
              target="_blank"
            >
              <FiLinkedin className="text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://x.com/alvindvvi" target="_blank">
              <FaXTwitter className="text-white hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#d4d4d4] mt-10 w-full"></div>

        <p className="text-center text-sm text-white-500 mt-6">
          Tiktix © {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </footer>
  );
}
