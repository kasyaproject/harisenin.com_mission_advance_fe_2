import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AddProductView from "@/components/view/Admin/AddProductView";

const AddProductPage = () => {
  return (
    <DashboardLayout title="Add New Product" desc="Create a new product.">
      <AddProductView />
    </DashboardLayout>
  );
};

export default AddProductPage;
