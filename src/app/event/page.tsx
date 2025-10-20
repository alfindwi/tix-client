import { SlLocationPin } from "react-icons/sl";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import { Button } from "@/components/ui/button";

export default function Event() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative w-full h-64 overflow-hidden ">
        <img
          src="https://assets.loket.com/neo/production/images/banner/20251013180817_68ecdda18e8e4.jpg"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-xl" />

        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white space-y-1 max-w-[780px]">
          <h1 className="text-2xl font-bold">
            ENTHUFEST: Buku, Pesta, Cinta,...MUSIK!
          </h1>
          <p className="text-lg flex items-center gap-2 mt-3">
            <SlLocationPin className="text-xl" />
            Balairung & Rotunda, Universitas Indonesia, Kota Depok, Jawa Barat
          </p>
          <p className="text-lg flex items-center gap-2 mt-3">
            <FiCalendar className="text-xl" /> 16 Oktober 2025, 15:00 WIB WIB
          </p>
          <p className="text-lg flex items-center gap-2 mt-3">
            <MdOutlineCategory className="text-xl" /> Konser • Musik
          </p>
        </div>

        <div className="absolute right-15 top-40 transform -translate-y-1/2 ">
          <img
            src="https://assets.loket.com/neo/production/images/banner/20251013180817_68ecdda18e8e4.jpg"
            alt="banner"
            className="w-89 h-50 object-cover rounded-md"
          />
        </div>
      </div>
      <div className="px-10 pr-15 flex justify-between items-start">
        <div className="w-full">
          <div className="flex items-center justify-between border-b sticky top-15 bg-white">
            <div className="flex space-x-6">
              <button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-semibold">
                Deskripsi
              </button>
              <button className="pb-3 text-gray-500 hover:text-blue-600">
                Tiket
              </button>
              <button className="pb-3 text-gray-500 hover:text-blue-600">
                Syarat dan Ketentuan
              </button>
            </div>

            <div className="w-[355px] bg-white border border-gray-200 cursor-pointer flex items-center justify-between px-4 py-3">
              <div className="flex flex-col">
                <p className="text-[13px] text-[#b5a6a5] font-semibold">
                  Harga mulai dari
                </p>
                <p className="text-xl text-black font-semibold">Rp618.000</p>
              </div>

              <Button variant="blue" size={"lg"}>
                Beli Tiket
              </Button>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="mt-8 space-y-4  ">
              <h2 className="text-xl font-semibold">
                Untitled Humans Singin’ Club – Tangerang Selatan Edition
              </h2>

              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>📍 Agave Hall Alam Sutera, Tangerang Selatan</p>
                <p>📅 21 Oktober 2025, 18:30 - 21:30 WIB</p>

                <p>
                  Yuk, jadi bagian dari momen bersama kami! RSVP dibuka 16 Okt
                  ‘25 pukul 15.00 WIB.
                </p>

                <p>
                  Siapin produk BCA kalian sebelum beli tiketnya dan apakan
                  promo special dari @goodlifebca buat beli tiket dan
                  merchandise-nya 💙 Info lebih lanjut: bca.id/singinwithmad
                </p>

                <p>
                  Berlaku untuk pembayaran dengan Kartu Kredit BCA berlogo
                  JCB/Mastercard/Visa, Kartu BCA American Express Platinum,
                  Debit BCA Mastercard dan Virtual Account BCA.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-[516px] sticky top-33 h-20 p-4 z-10">
              <img
                src="https://assets.loket.com/neo/production/images/organization/20251016112922_68f074a214751.png"
                alt="nbj logo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-400">Diselenggarakan oleh</p>
                <p className="font-semibold text-gray-800">
                  Nyanyi Bareng Jakarta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
