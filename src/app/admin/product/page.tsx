import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProductView from "@/components/view/Admin/ProductView";

const ProductPage = () => {
  return (
    <DashboardLayout
      title="Product Page"
      desc="Manage and organize your products efficiently. Add, edit, or remove items from your catalog."
    >
      <ProductView />
    </DashboardLayout>
  );
};

export default ProductPage;
