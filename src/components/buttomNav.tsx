"use client";

import Link from "next/link";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiHome9Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function ButtomNav() {
    const pathname  = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-40">
      <ul className="flex justify-around items-center py-3 text-[#C5C7BC] text-sm font-medium bg-white">
      <Link href="/" className="no-underline flex flex-col items-center">
        <li
          className={`flex flex-col items-center gap-1 font-semibold ${
            pathname === "/" ? "text-[#1932b9]" : "text-[#C5C7BC]"
          }`}
        >
          <RiHome9Fill size={22} />
          <span>Beranda</span>
        </li>
      </Link>

      <Link href="/event" className="no-underline flex flex-col items-center">
        <li
          className={`flex flex-col items-center cursor-pointer ${
            pathname === "/event" ? "text-[#1932b9]" : "text-[#C5C7BC]"
          }`}
        >
          <MdOutlineExplore size={25} />
          <span>Jelajah Event</span>
        </li>
      </Link>

      <Link
        href="/ticket-history"
        className="text-[12px] flex flex-col items-center"
      >
        <li
          className={`flex flex-col items-center cursor-pointer ${
            pathname === "/ticket-history"
              ? "text-[#1932b9]"
              : "text-[#C5C7BC]"
          }`}
        >
          <IoTicketOutline size={25} />
          <span>Tiket</span>
        </li>
      </Link>
    </ul>
    </nav>
  );
}
