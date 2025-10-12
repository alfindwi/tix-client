import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0A1841] text-white py-12 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold mb-4 text-lg">Tiktix</h3>
          <ul className="space-y-2 text-gray-300 text-sm ">
            <li className="hover:underline">
              <a href="#">Tentang Kami</a>
            </li>
            <li className="hover:underline">
              <a href="#">Masuk</a>
            </li>
            <li className="hover:underline">
              <a href="#">Jelajahi Event</a>
            </li>
            <li className="hover:underline">
              <a href="#">Syarat & Ketentuan</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Kontak</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <p>Email: alfindwi190@gmail.com</p>
            </li>
            <li>
              <p>Telepon: +62 812-3456-7890</p>
            </li>
            <li className="hover:underline">
              <a href="https://maps.app.goo.gl/x67BNce2mqzg3Uix6" target="_blank">
                Alamat: Jl. Jenderal Sudirman, RT.1/RW.3, Gelora, Kecamatan
                Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
                10270
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Inspirasi Event</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
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

      <div className="max-w-6xl mx-auto mt-10 text-center">
        <h4 className="font-semibold mb-6">Ikuti Kami</h4>
        <div className="flex justify-center items-center text-center gap-5 text-gray-300 text-xl">
          <a href="https://www.instagram.com/alvindvvi" target="_blank">
            <FaInstagram size={24}/>
          </a>
          <a href="https://www.linkedin.com/in/alfin-dwi-wadani" target="_blank">
            <FaLinkedin size={24}/>
          </a>
          <a href="https://x.com/alvindvvi" target="_blank">
            <FaSquareXTwitter size={24}/>
          </a>
        </div>
      </div>
    </footer>
  );
}
