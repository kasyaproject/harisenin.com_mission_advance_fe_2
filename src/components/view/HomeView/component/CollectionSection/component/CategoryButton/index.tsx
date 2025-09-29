import React from "react";
import { ALL_MENU } from "@/constant/constant";

type Props = {
  buttonCategory: string;
  setButtonCategory: (value: string) => void;
};

const CategoryButton = ({ buttonCategory, setButtonCategory }: Props) => {
  return (
    <div className="flex items-center px-2 pb-4 pr-10 my-6 space-x-6 overflow-x-auto lg:my-10 lg:pb-0 lg:pr-0">
      {/* Kategori Semua Video */}
      <button
        onClick={() => setButtonCategory("all")}
        className="flex flex-col gap-1 lg:gap-2 hover:cursor-pointer"
      >
        <p
          className={`font-medium text-sm lg:text-base text-nowrap ${
            buttonCategory === "all" ? "text-tertiary" : ""
          }`}
        >
          Semua Kelas
        </p>
        <div
          className={`w-3/4 lg:h-2 h-1 rounded-full ${
            buttonCategory === "all" && "bg-tertiary"
          }`}
        ></div>
      </button>

      {/* Kategori Video By Kategori */}
      {ALL_MENU.kategori.map((item, index) => (
        <button
          onClick={() => setButtonCategory(item.title)}
          key={index}
          className="flex flex-col gap-1 lg:gap-2 hover:cursor-pointer"
        >
          <p
            className={`font-medium text-nowrap text-sm lg:text-base ${
              buttonCategory === item.title ? "text-tertiary" : ""
            }`}
          >
            {item.title}
          </p>
          <div
            className={`w-3/4 lg:h-2 h-1 rounded-full ${
              buttonCategory === item.title && "bg-tertiary"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;
