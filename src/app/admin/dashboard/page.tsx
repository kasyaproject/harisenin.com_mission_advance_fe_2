import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardView from "@/components/view/Admin/DashboardView";
import React from "react";

const DashboardPage = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      desc="Overview of your application performance, analytics, and recent activities."
    >
      <DashboardView />
    </DashboardLayout>
  );
};

export default DashboardPage;
