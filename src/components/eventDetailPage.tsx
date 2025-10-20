import { Button } from "@/components/ui/button";

export default function EventDetailPage() {
  return (
    <div className="px-10 flex justify-between items-start gap-10">
      {/* Bagian Kiri */}
      <div className="w-full">
        {/* Navbar Tab (Sticky) */}
        <div className="flex items-center justify-between border-b sticky top-0 bg-white py-4 z-10">
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
        </div>

        {/* Konten Deskripsi */}
        <div className="mt-8 w-[700px] space-y-4">
          <h2 className="text-xl font-semibold">
            Untitled Humans Singin’ Club – Tangerang Selatan Edition
          </h2>

          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>📍 Agave Hall Alam Sutera, Tangerang Selatan</p>
            <p>📅 21 Oktober 2025, 18:30 - 21:30 WIB</p>

            <p>
              Yuk, jadi bagian dari momen bersama kami! RSVP dibuka 16 Okt ‘25 pukul
              15.00 WIB.
            </p>

            <p>
              Siapin produk BCA kalian sebelum beli tiketnya dan apakan promo special
              dari @goodlifebca buat beli tiket dan merchandise-nya 💙 Info lebih
              lanjut: bca.id/singinwithmad
            </p>

            <p>
              Berlaku untuk pembayaran dengan Kartu Kredit BCA berlogo
              JCB/Mastercard/Visa, Kartu BCA American Express Platinum, Debit BCA
              Mastercard dan Virtual Account BCA.
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Kanan (Sticky Card) */}
      <div className="w-[355px] sticky top-20 bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
        <p className="text-sm text-gray-400 font-semibold">Harga mulai dari</p>
        <p className="text-2xl font-semibold text-black mb-4">Rp200.000</p>

        <Button variant="blue" size={"lg"} className="w-full">
          Beli Tiket
        </Button>

        <div className="mt-6 border-t pt-4">
          <p className="text-sm text-gray-500 mb-1">Diselenggarakan oleh</p>
          <p className="font-semibold text-gray-800">Nyanyi Bareng Jakarta</p>
        </div>
      </div>
    </div>
  );
}
