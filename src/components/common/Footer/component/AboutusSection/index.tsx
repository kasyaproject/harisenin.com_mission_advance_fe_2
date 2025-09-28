import React from "react";
import { aboutUs } from "@/constant/constant";
import Image from "next/image";

const AboutusSection = () => {
  return (
    <div className="flex flex-col space-y-2 lg:space-y-4 max-w-96">
      <a href="#">
        <Image
          src="/image/logo.svg"
          alt="logo"
          width={500}
          height={250}
          className="w-50 -ms-2"
        />
      </a>

      <p className="font-semibold lg:text-lg">
        Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
      </p>
      <p className="lg:text-lg">{aboutUs.address}</p>
      <p className="lg:text-lg">{aboutUs.phone}</p>
    </div>
  );
};

export default AboutusSection;
