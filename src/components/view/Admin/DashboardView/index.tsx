import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";

const DashboardView = () => {
  return (
    <DashboardLayout title="Admin | Dashboard" desc="Dashboard">
      <div className="flex items-center justify-center w-full min-h-[calc(100vh-80px)]">
        Dashboard View
      </div>
    </DashboardLayout>
  );
};

export default DashboardView;
