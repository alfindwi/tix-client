import { cn } from "@/lib/utils";
import "../app/globals.css";
import Marquee from "./ui/marquee";

const reviews = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD55a8Qe28T83fYzjQYN1OynHljfAcP0Fy1Q&s",
    username: "Bank Central Asia",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png",
    username: "Bank Mandiri",
  },
  {
    img: "https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Bank-BRI.png",
    username: "Bank Rakyat Indonesia (BRI)",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png",
    username: "QRIS Indonesia",
  },
  {
    img: "https://jasalogocepat.com/wp-content/uploads/2023/12/Logo-Bank-BNI-PNG-1024x334.png",
    username: "Bank Negara Indonesia (BNI)",
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYRXRn-ok9aV3B9zGFZqp3DpWXOtLu4Pf_3ErDOUhxEDQaLeHBTIbzJM_gbQ44XFXA2pEXv4yZek05MHHi0RsoQm_RIWJcgNqqpAr_fc3qP-PpgGnK5Tn7plQbNxwyPvaLW8YNwsfqjTcVm_htDWCHvi83bP2tOc4bZl9HaqU3rlzTc2GPcNu5wA/w640-h160/Bank%20Permata%20-koleksilogo.com.png",
    username: "Bank Permata",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/2560px-Bank_Syariah_Indonesia.svg.png",
    username: "Bank Syariah Indonesia (BSI)",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Danamon_%282024%29.svg/1200px-Danamon_%282024%29.svg.png",
    username: "Bank Danamon",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/SeaBank.svg/1280px-SeaBank.svg.png",
    username: "SeaBank",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "flex items-center justify-center h-20 w-40 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200"
      )}
    >
      <img
        src={img}
        alt="logo"
        className="max-w-[100px] max-h-[50px] object-contain"
      />
    </figure>
  );
};

export function MarqueeVertical() {
  return (
    <div className="relative flex h-[400px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:5s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:5s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}

export function MarqueeHorizontal() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}