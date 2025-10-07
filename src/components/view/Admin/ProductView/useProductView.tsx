"use client";

import { useEffect, useState } from "react";
import { IProduct } from "@/types/Product";
import { useRouter } from "next/navigation";
import { getColumns } from "./component/ColumnsTable";
import productServices from "@/services/product.service";

const useProductView = () => {
  const [productData, setProductData] = useState([]);
  const router = useRouter();

  // Fetch product data from mock API
  const getProductData = async () => {
    try {
      const res = await productServices.getAllProducts();
      const { data } = res;

      return data;
    } catch (error) {
      return console.log(error);
    }
  };

  // Fetch product data when the component di load
  useEffect(() => {
    getProductData().then((result) => setProductData(result));
  }, []);

  // Handle Delete Product
  const handleDelete = (data: IProduct) => {
    // Confirm before delete
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    // If confirmed, delete the product and refresh the product list
    if (confirmDelete) {
      productServices.deleteProduct(data.id).then(() => {
        getProductData().then((result) => setProductData(result));
      });
    }
  };

  const columns = getColumns(router, handleDelete);

  return { productData, columns };
};

export default useProductView;
