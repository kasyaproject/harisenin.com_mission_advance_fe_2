import React from "react";
import CopyrightSection from "./component/CopyrightSection";
import AboutusSection from "./component/AboutusSection";
import MenuSection from "./component/MenuSection";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-white lg:py-10">
      <div className="flex flex-col items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-start w-full gap-4 px-4 lg:flex-row lg:justify-between">
          {/* <!-- About & Kategori --> */}
          <AboutusSection />

          {/* <!-- Kategori & Perusahaan & Komunitas DESKTOP --> */}
          <MenuSection />
        </div>

        <hr className="w-full my-4 border-t border-gray-200" />

        {/* <!-- copyright --> */}
        <CopyrightSection />
      </div>
    </footer>
  );
};

export default Footer;
