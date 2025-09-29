import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AvatarProfile from "@/components/common/AvatarProfile";
import Link from "next/link";

const AvatarDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AvatarProfile
          src="/image/avatar-women.png"
          className="w-10 h-10 rounded-md hover:cursor-pointer hover:bg-gray-100"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mx-1 bg-white" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup className="mx-2">
          <DropdownMenuItem className="hover:cursor-pointer">
            <Link href="/admin/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            <Link href="#">Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2 bg-black" />

        <DropdownMenuLabel>Auth</DropdownMenuLabel>
        <DropdownMenuGroup className="mx-2">
          <DropdownMenuItem className="hover:cursor-pointer">
            <Link href="/auth/login">Login</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            <Link href="/auth/register">Register</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
