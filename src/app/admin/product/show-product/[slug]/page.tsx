import React from "react";
import DetailProductView from "@/components/view/Admin/DetailProductView";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const ShowProductPage = () => {
  return (
    <DashboardLayout
      title="Show Product Details"
      desc="Show a product details and manage it."
    >
      <DetailProductView />
    </DashboardLayout>
  );
};

export default ShowProductPage;
