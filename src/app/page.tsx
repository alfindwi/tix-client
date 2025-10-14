import ImageCarousel from "@/components/imageCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { IoMusicalNotesOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-full py-4 ">
      <div className="max-w-7xl mx-auto px-4">
        <ImageCarousel />

        <div className="mt-6 mb-4">
          <p className="font-bold text-2xl text-[#162562]">Events</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 md:justify-items-start justify-items-center">
            <div className="w-[300px] mt-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer">
              <img
                src="https://ypassets.yesplis.com/250922/assets/34b410ad-8e0d-44ee-86a1-e8ac1f64663a.jpeg"
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
          </div>
        </div>
      </div>
    </div>
  );
}
