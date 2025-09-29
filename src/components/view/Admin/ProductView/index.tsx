import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";

const ProductView = () => {
  return (
    <DashboardLayout title="Admin | Product Page" desc="Product Page">
      <div className="flex items-center justify-center w-full min-h-[calc(100vh-80px)]">
        Product View
      </div>
    </DashboardLayout>
  );
};

export default ProductView;
