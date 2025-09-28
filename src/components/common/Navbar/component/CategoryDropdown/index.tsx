import React from "react";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { kategori } from "@/constant/constant";

const CategoryDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-gray-500">
            Kategori
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <h2 className="text-sm font-semibold">Kategori</h2>
            <hr className="mt-1 mb-2 text-gray-400 " />
            <ul className="grid grid-cols-2 px-4 w-[400px] gap-2 ">
              {kategori.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <Link href={item.href}>
                    <span className="text-sm font-semibold leading-none text-gray-500 hover:text-gray-900 hover:underline">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryDropdown;
