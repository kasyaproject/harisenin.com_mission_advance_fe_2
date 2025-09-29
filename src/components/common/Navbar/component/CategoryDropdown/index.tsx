"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ALL_MENU } from "@/constant/constant";

const CategoryDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:cursor-pointer">
        Kategori
      </DropdownMenuTrigger>

      <DropdownMenuContent className=" w-[100vw] mt-4 border-none bg-white">
        <div className="z-50 flex justify-between w-full max-w-6xl gap-10 mx-auto mb-8">
          <div className="w-2/4">
            <h1 className="mb-5 text-lg font-bold">Kategori</h1>
            <p className="text-sm">
              Video edukasi ini dirancang untuk menginformasikan, mengajar, dan
              menginspirasi penonton, memberikan informasi mendalam tentang
              topik tertentu seperti sejarah, sains, atau bahasa, dalam format
              yang mudah dipahami
            </p>
          </div>
          <div className="flex items-center justify-center flex-1 ">
            <div className="grid w-full grid-cols-2 gap-4">
              {ALL_MENU.kategori.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <a href={item.href}>{item.title}</a>
                </DropdownMenuItem>
              ))}
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryDropdown;
