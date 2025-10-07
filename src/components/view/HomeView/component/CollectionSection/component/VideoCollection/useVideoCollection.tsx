"use client";

import { useMemo, useState } from "react";
import { IProduct } from "@/types/Product";

const useVideoCollection = (productData: IProduct[]) => {
  // State untuk kategori video aktif
  const [categoryVideo, setCategoryVideo] = useState("all");

  // Filter video berdasarkan kategori yang dipilih
  const filteredVideos = useMemo(() => {
    if (categoryVideo === "all") return productData;
    return productData.filter((video) =>
      video.category.includes(categoryVideo)
    );
  }, [categoryVideo, productData]);

  return { categoryVideo, setCategoryVideo, filteredVideos };
};

export default useVideoCollection;
