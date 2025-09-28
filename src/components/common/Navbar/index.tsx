import Image from "next/image";
import React from "react";
import AvatarProfile from "../AvatarProfile";
import CategoryDropdown from "./component/CategoryDropdown";
import MenuSheet from "./component/MenuSheet/index";
import AvatarDropdown from "./component/AvatarDropdown";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-2 bg-white border-b border-gray-200 lg:px-2">
      <nav className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div>
          <a href="#">
            <Image
              src="/image/logo.svg"
              alt="logo"
              width={240}
              height={50}
              className="w-36 lg:w-52"
            />
          </a>
        </div>

        {/* Kategori & Avatar Desktop */}
        <div className="items-center hidden gap-4 lg:flex">
          <CategoryDropdown />

          <AvatarDropdown />
        </div>

        {/* Kategori & Avatar Mobile */}
        <div className="items-center gap-4 lg:hidden">
          <MenuSheet />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
