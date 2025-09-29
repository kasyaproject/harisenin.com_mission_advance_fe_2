"use client";

import { useEffect, useState } from "react";
import { VIDEO_PEMBELAJARAN } from "@/constant/constant";
import { IProduct } from "@/types/Product";

const useVideoCollection = () => {
  // Siapkan state
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [categoryVideo, setCategoryVideo] = useState("all");

  // Ambil data dari localStorage saat halaman di load
  useEffect(() => {
    // Mengambil data dari localStorage
    const stored = localStorage.getItem("VIDEO_PEMBELAJARAN");

    // Jika data ada di localStorage
    if (stored) {
      setProductList(JSON.parse(stored));
    } else {
      // Jika data tidak ada di localStorage
      localStorage.setItem(
        "VIDEO_PEMBELAJARAN", // Nama key di localStorage
        JSON.stringify(VIDEO_PEMBELAJARAN) // Data yang ingin disimpan
      );
    }
  }, []);

  return { productList, categoryVideo, setCategoryVideo };
};

export default useVideoCollection;
