import { ChevronUp } from "lucide-react";
import { JSX } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import AvatarProfile from "../common/AvatarProfile";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SidebarItem {
  title: string;
  href: string;
  icon: JSX.Element | null;
}
interface PropTypes {
  sidebarItems: SidebarItem[];
}

export function AppSidebar(props: PropTypes) {
  const pathname = usePathname();
  const { sidebarItems } = props;

  return (
    <Sidebar>
      {/* Sidebar Header */}
      <SidebarHeader className="mb-4">
        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <Image
              src="/image/logo.svg"
              alt="logo"
              width={240}
              height={50}
              className="w-36 lg:w-52"
            />
          </Link>
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        {/* Sidebar Group Aplication */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(
                    "hover:bg-gray-200 rounded-md hover:text-gray-800 hover:cursor-pointer",
                    {
                      "bg-gray-100":
                        pathname === item.href ||
                        pathname.startsWith(item.href + "/"), // ✅ cek apakah path aktif
                    }
                  )}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      {item.icon && item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem className="py-1 rounded-md hover:bg-gray-200 ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="hover:cursor-pointer">
                  <AvatarProfile
                    src="/image/avatar-women.png"
                    className="rounded-md"
                  />

                  <div className="flex flex-col -space-y-1">
                    <p>John Doe</p>
                    <p className="text-xs text-gray-400">Admin</p>
                  </div>

                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-48 p-1 mb-10 bg-white border rounded-lg"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
