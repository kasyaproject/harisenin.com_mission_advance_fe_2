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
    // setProductList((productList) => {
    //   const updated = productList.filter((item) => item.id !== data.id);
    //   // Tampilkan notifikasi sukses
    //   alert(`✅ Product "${data.title}" deleted successfully!`);
    //   // Simpan perubahan ke localStorage
    //   localStorage.setItem("VIDEO_PEMBELAJARAN", JSON.stringify(updated));
    //   return updated;
    // });
  };

  const columns = getColumns(router, handleDelete);

  return { productData, columns };
};

export default useProductView;
