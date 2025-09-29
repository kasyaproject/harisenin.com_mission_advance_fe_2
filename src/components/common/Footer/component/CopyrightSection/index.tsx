import { ABOUT_US } from "@/constant/constant";
import Image from "next/image";
import React from "react";

const CopyrightSection = () => {
  return (
    <div className="flex flex-col-reverse items-start justify-between w-full gap-2 px-4 py-2 lg:items-center sm:flex-row">
      <p className="w-3/4 text-gray-500 text-medium">
        @2023 Gerobak Sayur All Rights Reserved.
      </p>

      <div className="flex items-center gap-2 lg:gap-4">
        <a href={ABOUT_US.linkedin} target="_blank">
          <Image
            src="/image/sosial_media/linkedin.svg"
            alt="linkedin"
            width={40}
            height={40}
            className="rounded-full hover:bg-gray-100"
          />
        </a>
        <a href={ABOUT_US.facebook} target="_blank">
          <Image
            src="/image/sosial_media/facebook.svg"
            alt="facebook"
            width={40}
            height={40}
            className="rounded-full hover:bg-gray-100"
          />
        </a>
        <a href={ABOUT_US.instagram} target="_blank">
          <Image
            src="/image/sosial_media/instagram.svg"
            alt="instagram"
            width={40}
            height={40}
            className="rounded-full hover:bg-gray-100"
          />
        </a>
        <a href={ABOUT_US.twitter} target="_blank">
          <Image
            src="/image/sosial_media/twitter.svg"
            alt="twitter"
            width={40}
            height={40}
            className="rounded-full hover:bg-gray-100"
          />
        </a>
      </div>
    </div>
  );
};

export default CopyrightSection;
