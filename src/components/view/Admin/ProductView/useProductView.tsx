"use client";

import { useEffect, useState } from "react";
import { VIDEO_PEMBELAJARAN } from "@/constant/constant";
import { IProduct } from "@/types/Product";

const useProductView = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);

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

  // Handle Delete Product
  const handleDelete = (data: IProduct) => {
    setProductList((productList) => {
      const updated = productList.filter((item) => item.id !== data.id);

      // Tampilkan notifikasi sukses
      alert(`✅ Product "${data.title}" deleted successfully!`);

      // Simpan perubahan ke localStorage
      localStorage.setItem("VIDEO_PEMBELAJARAN", JSON.stringify(updated));
      return updated;
    });
  };

  return { productList, handleDelete };
};

export default useProductView;
