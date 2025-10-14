"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const ImageList = [
  {
    banner: "https://assets.loket.com/images/ss/1758514033_mw4vOV.jpg",
    bannerMobile: "https://assets.loket.com/images/ss/1758514034_zXsMIl.jpg",
    alt: "Image 1",
  },
  {
    banner: "https://assets.loket.com/images/ss/1759377873_UnDE3t.jpg",
    bannerMobile: "https://assets.loket.com/images/ss/1759377874_X1pvrH.jpg",
    alt: "Image 2",
  },
  {
    banner: "https://assets.loket.com/images/ss/1756708455_R89KFf.jpg",
    bannerMobile: "https://assets.loket.com/images/ss/1756708456_9iDW65.jpg",
    alt: "Image 3",
  },
  {
    banner: "https://assets.loket.com/images/ss/1759904272_DVMYZr.jpg",
    bannerMobile: "https://assets.loket.com/images/ss/1759904273_DDp6Kn.jpg",
    alt: "Image 4",
  },
  {
    banner: "https://assets.loket.com/images/ss/1757917026_pDaNyW.jpg",
    bannerMobile: "https://assets.loket.com/images/ss/1757917028_b8vWlL.jpg",
    alt: "Image 5",
  },
  {
    banner: "https://assets.loket.com/images/ss/1752725471_KBqS5G.jpg",
    bannerMobile: "https://assets.loket.com/images/ss/1752725472_WBQpqs.jpg",
    alt: "Image 6",
  },
];

export default function ImageCarousel() {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      className="w-full mx-auto rounded-2xl"
      opts={{ loop: true }}
      setApi={setApi}
    >
      <CarouselContent>
        {ImageList.map((img, i) => (
          <CarouselItem key={i} className="rounded-2xl">
            <img
              src={img.banner}
              alt={img.alt}
              className="hidden md:block w-full md:h-64 object-cover rounded-2xl"
            />
            <img
              src={img.bannerMobile}
              alt={img.alt}
              className="block md:hidden w-full object-cover rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
