"use client";

import React, { ReactNode } from "react";
import PageHead from "@/components/common/PageHead";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SIDEBAR_ADMIN } from "@/constant/constant";

interface PropTypes {
  title?: string;
  desc?: string;
  children: ReactNode;
}

const DashboardLayout = (props: PropTypes) => {
  const { title, desc, children } = props;

  return (
    <SidebarProvider>
      {/* Title & Head */}
      <PageHead title={title} />

      {/* Sidebar */}
      <AppSidebar sidebarItems={SIDEBAR_ADMIN} />

      {/* Main Section */}
      <main className="w-full min-h-screen bg-gray-100">
        {/* Header Section */}
        <div className="flex items-center h-24 gap-1 px-4 py-6 mb-4 bg-white bg-blue">
          {/* Sidebar Trigger */}
          <SidebarTrigger className="w-10 h-10 hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer" />

          <Separator orientation="vertical" className="mr-2 bg-black" />

          {/* Title */}
          <div className="flex flex-col">
            <h1 className="font-semibold lg:text-xl">{title}</h1>
            <p className="text-xs lg:text-sm ">{desc}</p>
          </div>
        </div>

        {/* Main Content */}
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
