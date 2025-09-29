"use client";

import PageHead from "@/components/common/PageHead";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SIDEBAR_ADMIN } from "@/constant/constant";
import React, { ReactNode } from "react";

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
      <main className="w-full min-h-screen p-4">
        {/* Header Section */}
        <div className="flex items-center h-6 gap-1 mb-5 lg:h-6">
          {/* Sidebar Trigger */}
          <SidebarTrigger className="hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer" />

          <Separator orientation="vertical" className="mr-1 bg-black" />

          {/* Title */}
          <h1 className="text-lg ">{desc}</h1>
        </div>

        {/* Main Content */}
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
