import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LuTicket } from "react-icons/lu";

export function Ticket() {
  return (
    <div className="px-10 flex flex-col max-w-[850px]">
      <p className="text-2xl text-[#152955] font-semibold flex items-center gap-2 mt-3">
        <LuTicket className="text-3xl text-[#152955] " />
        Tiket
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-sans" description="3 kategori tiket - Harga mulai dari Rp449.000">
            PUBLIC - WEEKDAY
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between py-4 border-t px-2 items-center">
              <span className="text-xl text-[#494a4a]">Rp449.000</span>

              <div className="flex flex-col">
                <span className="text-xl font-light">
                  Normal Festival Ticket
                </span>
                <span className="text-[12px] text-gray-500">
                  Penjualan berakhir 6 Jun 2026 20.00 WIB
                </span>
              </div>

              <div className="flex items-center justify-center bg-green-100 px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-green-700">
                  Available
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
