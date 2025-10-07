"use client";

import { useEffect, useState } from "react";
import VideoCollection from "./component/VideoCollection";
import productServices from "@/services/product.service";

const CollectionSection = () => {
  const [productData, setProductData] = useState([]);

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

  // Fetch product data when the component mounts
  useEffect(() => {
    getProductData().then((result) => setProductData(result));
  }, []);

  return (
    <div className="w-full rounded-lg">
      {/* Title */}
      <h2 className="mb-1 text-2xl font-bold lg:text-3xl">
        Koleksi Video Pembelajaran Unggulan
      </h2>
      {/* Description */}
      <p className="text-sm text-gray-600 lg:text-base">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      <VideoCollection productData={productData} />
    </div>
  );
};

export default CollectionSection;
