import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CopyButton } from "@/components/ui/copy-button";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { IoDocumentTextOutline, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Ticket } from "./ticket";

export default function Event() {
  const eventTitle = "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025";
  const eventUrl =
    "https://www.loket.com/event/rich-brian-where-is-my-head-asian-tour_kTD4";

  const twitterShareUrl = `https://x.com/intent/post?url=${encodeURIComponent(
    eventUrl,
  )}&text=${encodeURIComponent(eventTitle)}`;

  const waShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${eventTitle} ${eventUrl}`,
  )}`;

  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    eventUrl,
  )}`;

  return (
    <div className="w-full max-w-8xl mx-auto">
      <div className="relative w-full h-64 overflow-hidden ">
        <img
          src="https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg"
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
            src="https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg"
            alt="banner"
            className="w-100 h-60 object-fill rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between items-start ">
        <div className="w-full">
          <div className="px-10 flex justify-between border-b sticky top-16 bg-white">
              <div className="py-2 flex space-x-6">
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
              <div className="w-[400px] bg-white border border-gray-200 cursor-pointer absolute right-15 flex items-center justify-between px-4 py-3">
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

            <div className=" flex flex-col w-[400px] absolute right-15 top-38 transform -translate-y-1/2">
              <div className="flex items-center gap-3 w-full h-20 p-4 bg-white border-b border-r border-l border-gray-200">
                <img
                  src="https://assets.loket.com/neo/production/images/organization/20220304170257_6221e3d1169c9.png"
                  alt="nbj logo"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-400">Diselenggarakan oleh</p>
                  <p className="font-semibold text-gray-800">COMIKA EVENT</p>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-gray-700 font-medium">Bagikan Event</p>
                <div className="flex flex-row mt-3 gap-2">
                  <CopyButton content={eventUrl} variant={"blue"} />
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 flex items-center justify-center rounded-xl bg-black"
                  >
                    <FaXTwitter className="text-md text-white" />
                  </a>
                  <a
                    href={waShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 flex items-center justify-center rounded-xl bg-green-500"
                  >
                    <IoLogoWhatsapp className="text-md text-white" />
                  </a>
                  <a
                    href={fbShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 flex items-center justify-center rounded-xl bg-blue-500"
                  >
                    <FaFacebookF className="text-md text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-10 flex justify-between max-w-[850px]">
              <div className="py-3 space-y-4">
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
          </div>

          <Ticket />
          <div className="px-10 flex flex-col max-w-[850px] mb-5">
              <p className="text-2xl text-[#152955] font-semibold flex items-center gap-2 mt-3">
                <IoDocumentTextOutline className="text-3xl text-[#152955] " />
                Syarat dan Ketentuan
              </p>
          </div>
          <div className="px-10 flex flex-col">
              <p className="text-2xl text-black font-semibold flex items-center gap-2 mt-3">
                Event Untuk Kamu
              </p>
              <div className="w-full sm:max-w-xs md:max-w-full mb-5">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-1/2 sm:basis-1/2 md:basis-1/4 "
                      >
                        <div
                          className="w-full sm:max-w-[150px] md:max-w-[280px] mt-6 bg-white rounded-xl border border-gray-200 cursor-pointer 
                          shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                          <img
                            src="https://assets.loket.com/neo/production/images/banner/20260116203736_696a3f2030a5c.jpg"
                            alt="ARUNIKA FUN RUN"
                            className="w-full h-35 object-cover"
                          />

                          <div className="p-4">
                            <h3 className="font-bold text-[13px] mb-1 uppercase ">
                              (10) years of Reality Club Live in Jakarta,
                              Indonesia
                            </h3>

                            <p className="text-gray-500 text-sm mb-1">
                              6 Jun 2026
                            </p>

                            <p className="font-semibold text-[15px] mb-2 mt-2">
                              Rp. 449.000
                            </p>

                            <div className="flex items-center border-t pt-3">
                              <Avatar>
                                <AvatarImage
                                  src={
                                    "http://assets.loket.com/neo/production/images/organization/20251006230159_68e3e7f76057e.png"
                                  }
                                />
                                <AvatarFallback>AR</AvatarFallback>
                              </Avatar>

                              <p className="text-md ml-3 text-[#606161]">
                                Arunika
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
