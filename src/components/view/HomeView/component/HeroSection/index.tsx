import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center w-full rounded-lg lg:h-96 bg-black/80">
      {/* Background Image */}
      <Image
        src="/image/bg-hero-img.jpg"
        alt="bg-hero"
        width={1024}
        height={800}
        className="absolute object-cover w-full h-full rounded-lg bg-black-80 -z-10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-3 py-6 mx-auto text-center text-white lg:py-14 lg:px-12">
        {/* Title */}
        <h1 className="mx-8 text-2xl font-extrabold lg:mx-0 lg:text-5xl">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>

        {/* Description */}
        <p className="mt-2 text-sm lg:text-base">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>

        {/* Button */}
        <a href="#">
          <button className="px-2 py-2 mt-6 text-white rounded-lg bg-primary lg:px-6 lg:py-1.5 hover:cursor-pointer transition text-sm lg:text-base duration-150 ease-in-out delay-50 hover:scale-105">
            Temukan video course untuk Dipelajari!
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
