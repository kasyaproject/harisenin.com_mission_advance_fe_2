import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, TextAlignJustify } from "lucide-react";
import AvatarProfile from "../../../AvatarProfile";

const MenuSheet = () => {
  return (
    <Sheet>
      {/* Button Trigger Sheet */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="hover:cursor-pointer hover:bg-gray-100"
        >
          <TextAlignJustify />
        </Button>
      </SheetTrigger>

      {/* Content Sheet */}
      <SheetContent className="bg-white">
        {/* Tittle Sheet */}
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {/* Main Content Sheet */}
        <div className="grid flex-1 gap-6 px-4 auto-rows-min">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Kategori</AccordionTrigger>
              <AccordionContent>
                <ul className="px-1 space-y-2 text-sm font-semibold leading-none text-gray-500 ">
                  <li className="py-1 hover:text-gray-900 hover:cursor-pointer">
                    Digital & Teknologi
                  </li>
                  <li className="py-1 hover:text-gray-900 hover:cursor-pointer">
                    Pemasaran
                  </li>
                  <li className="py-1 hover:text-gray-900 hover:cursor-pointer">
                    Manajemen Bisnis
                  </li>
                  <li className="py-1 hover:text-gray-900 hover:cursor-pointer">
                    Pengembangan Diri
                  </li>
                  <li className="py-1 hover:text-gray-900 hover:cursor-pointer">
                    Desain
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer Sheet */}
        <SheetFooter>
          <button className="flex items-center justify-between w-full px-2 py-1.5 hover:bg-gray-100 hover:cursor-pointer rounded-lg">
            <div className="flex items-center gap-2">
              <AvatarProfile
                src="/image/avatar-women.png"
                className="w-10 h-10 rounded-md"
              />

              <div className="text-left">
                <p className="font-semibold">Nama Lengkap</p>
                <p className="text-sm font-medium -mt-0.5 text-gray-500">
                  Email@gmail.com
                </p>
              </div>
            </div>

            <ChevronsUpDown />
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
