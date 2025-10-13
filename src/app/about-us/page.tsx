import FeatureCard from "@/components/featureCard";
import {
  MarqueeHorizontal,
  MarqueeVertical,
} from "@/components/marqueePayment";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "https://assets.yesplis.com/public/about/features/without-commission.svg",
    title: "Tanpa Komisi",
    description: "Satu-satunya platform yang menerapkan sistem tanpa komisi.",
  },
  {
    icon: "https://assets.yesplis.com/public/about/features/configurable-event.svg",
    title: "Bebas Atur Event",
    description:
      "Proses pembuatan event bisa dilakukan sendiri oleh penyelenggara.",
  },
  {
    icon: "/finance.png",
    title: "Pembayaran Aman",
    description:
      "Terintegrasi dengan Midtrans untuk transaksi yang aman dan cepat.",
  },
  {
    icon: "https://assets.yesplis.com/public/about/features/customer-service-24-7.svg",
    title: "Dukungan 24/7",
    description: "Tim kami siap membantu kapan pun kamu butuh bantuan.",
  },
];

export default function AboutUs() {
  return (
    <div className="p-5">
      <div className="text-center max-w-2xl mx-auto">
        <img src="/about-us.png" alt="about us" className="mx-auto" />

        <p className="uppercase mt-5 font-semibold text-sm">Tentang Kami</p>

        <p className="mt-5 font-semibold text-xl md:text-3xl">
          Sistem Manajemen Tiket
        </p>

        <p className="mt-5 text-sm leading-relaxed">
          Tiktix adalah platform online untuk manajemen tiket dan
          penyelenggaraan acara yang memudahkan kamu untuk membeli tiket
          berbagai jenis acara. Selain itu, kamu juga dapat dengan mudah
          menciptakan dan mengelola acaramu sendiri menggunakan fitur yang kami
          sediakan.
        </p>
      </div>

      <div className="text-center max-w-3xl mx-auto mt-20">
        <p className="uppercase mt-5 font-semibold text-sm">Klien Unggulan</p>

        <div className="grid grid-cols-2 md:flex md:justify-center md:items-center md:flex-wrap gap-6 mt-5">
          <img
            src="/client1.png"
            alt="Client 1"
            className="h-auto w-40 border border-gray-200 rounded-md mx-auto"
          />
          <img
            src="/client2.png"
            alt="Client 2"
            className="h-auto w-40 border border-gray-200 rounded-md mx-auto"
          />
          <img
            src="/client3.png"
            alt="Client 3"
            className="h-auto w-40 border border-gray-200 rounded-md mx-auto"
          />
          <img
            src="/client4.png"
            alt="Client 4"
            className="h-auto w-40 border border-gray-200 rounded-md mx-auto"
          />
        </div>

        <p className="uppercase mt-5 font-semibold text-sm">
          + Ratusan Klien Lainnya
        </p>
      </div>

      <div className="text-center max-w-3xl mx-auto mt-20">
        <p className="uppercase mt-5 font-semibold text-sm">Statistik</p>

        <div className="flex justify-center items-center gap-10 md:gap-16 mt-8">
          <div>
            <p className="text-xl md:text-3xl font-bold">1.200 +</p>
            <p className="text-sm mt-2 font-semibold">Events</p>
          </div>

          <div>
            <p className="text-xl md:text-3xl font-bold">100.000 +</p>
            <p className="text-sm mt-2 font-semibold">Tiket Terjual</p>
          </div>

          <div>
            <p className="text-xl md:text-3xl font-bold">300 +</p>
            <p className="text-sm mt-2 font-semibold">Klien</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="uppercase mt-5 font-semibold text-sm">Kenapa Tiktix</p>
          <p className="uppercase mt-5 font-semibold md:text-3xl text-2xl">
            Fitur Lengkap Untuk Manajemen Tiket
          </p>
          <p className="mt-5 font-semibold text-sm">
            Fitur lengkap yang dirancang untuk memaksimalkan efisiensi dan
            memudahkan pengelolaan acara. Mulai dari penjualan tiket hingga
            validasi tiket.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="md:w-1/2">
          <p className="uppercase font-semibold text-sm mb-4 text-start">
            Metode Pembayaran
          </p>
          <p className="font-semibold md:text-5xl text-3xl mb-4 text-start">
            Kemudahan Pembayaran untuk Setiap Transaksi
          </p>
          <p className="font-semibold text-md leading-relaxed text-justify">
            Kami menyediakan berbagai pilihan metode pembayaran yang aman dan
            fleksibel untuk memudahkan transaksi pembeli tiket. Mulai dari
            Dompet Elektronik, Virtual Account, hingga Kartu Kredit semua ada di
            Tiktix.
          </p>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-end">
          <MarqueeVertical />
        </div>

        <div className="flex md:hidden w-full justify-center">
          <MarqueeHorizontal />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 bg-gradient-to-b from-[#0A043C] to-[#101037] text-white rounded-2xl p-8 md:p-20 text-center shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Tunggu Apa Lagi!
        </h2>

        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
          Mulai perjalanan penyelenggaraan event Anda dengan Tiktix. Dapatkan
          kemudahan mengelola event tanpa batas — mulai dari pembuatan tiket
          hingga analitik penjualan.
        </p>

        <div className="flex justify-center">
          <Button
            variant="blue"
            size="lg"
            className="rounded-md font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Buat Event Sekarang →
          </Button>
        </div>
      </div>
    </div>
  );
}
