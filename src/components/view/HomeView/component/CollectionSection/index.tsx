"use client";

import { useEffect, useState } from "react";
import VideoCollection from "./component/VideoCollection";
import { apiInstanceMockapi } from "@/services/api";

const CollectionSection = () => {
  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    try {
      const url = `/products`;

      const response = await apiInstanceMockapi.get(url);
      if (response.status === 200) return response.data;
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    getProductData().then((result) => setProductData(result));
  }, []);

  console.log("productData:", productData);

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
