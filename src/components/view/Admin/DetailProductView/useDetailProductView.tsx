import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { IProduct } from "@/types/Product";

const useDetailProductView = () => {
  const params = useParams(); // ambil id dari url
  const router = useRouter();
  const { slug } = params;

  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    // Mengambil data dari localStorage
    const stored = localStorage.getItem("VIDEO_PEMBELAJARAN");

    if (stored) {
      // Jika data ada di localStorage
      const productList: IProduct[] = JSON.parse(stored);
      // Cari data berdasarkan id
      const getData = productList.find((data) => data.id === slug);

      if (getData) {
        setProduct(getData);
      } else {
        // Jika data tidak ditemukan, redirect ke halaman product
        alert("Product not found!");
        router.push("/admin/product");
      }
    }
  }, [slug, router]);

  // Handle submit untuk update data
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    formData: Record<string, IProduct>
  ) => {
    e.preventDefault();

    if (!product) return;

    const storedProducts = localStorage.getItem("VIDEO_PEMBELAJARAN");
    const products = storedProducts ? JSON.parse(storedProducts) : [];

    // Cari produk berdasarkan id
    const productIndex = products.findIndex(
      (p: IProduct) => p.id === product.id
    );

    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...formData, // merge field sesuai tab
      };

      localStorage.setItem("VIDEO_PEMBELAJARAN", JSON.stringify(products));
      alert("✅ Product updated successfully!");
    }
  };

  return { product, handleSubmit };
};

export default useDetailProductView;
