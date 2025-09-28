import Image from "next/image";
import React from "react";

const NewsSection = () => {
  return (
    <div className="relative w-full rounded-lg bg-black/80">
      {/* Background Image */}
      <Image
        src="/image/bg-news-img.jpg"
        alt="bg-news"
        width={1024}
        height={800}
        className="absolute object-cover w-full h-full rounded-lg bg-black-80 -z-10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-lg px-6 mx-auto text-center text-white py-14 lg:px-8">
        {/* Header */}
        <p className="text-base lg:text-lg">NEWSLATTER</p>
        {/* Title */}
        <h2 className="mb-2 text-2xl font-medium lg:text-3xl">
          Mau Belajar Lebih Banyak?
        </h2>
        {/* Descrioption */}
        <p className="text-sm lg:text-base lg:mx-4">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik harisenin.com
        </p>

        {/* Input & button */}
        <div className="flex flex-col w-full gap-4 mt-8 text-black lg:relative">
          <input
            type="text"
            placeholder="Masukkan Emailmu"
            className="w-full p-2 text-center text-black bg-white rounded-lg lg:px-4 lg:py-4 lg:text-left lg:pl-8 focus:outline-none"
          />

          <button className="flex items-center justify-center h-10 px-6 py-4 font-semibold text-white transition duration-150 ease-in-out rounded-lg delay-50 hover:scale-105 lg:-translate-y-1/2 lg:absolute right-2 top-1/2 bg-secondary hover:cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
