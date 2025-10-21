import BannerCarousel from "@/components/bannerCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4">
        <BannerCarousel />

        <div className="mt-6 mb-4">
          <p className="font-bold text-2xl text-[#162562]">Events</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 md:justify-items-start justify-items-center">
            <Link href="/event">
              <div className="w-[300px] mt-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg"
                  alt="ARUNIKA FUN RUN"
                  className="w-full h-44 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-[16px] mb-1 uppercase truncate">
                    ENTHUFEST: Buku, Pesta, Cinta,...MUSIK!
                  </h3>

                  <p className="text-gray-500 text-sm mb-1">16 Oktober 2025</p>

                  <p className="font-semibold text-[15px] mb-2 mt-2">
                    Rp. 200.000
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

                    <p className="text-md ml-3 text-[#606161]">Arunika</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
