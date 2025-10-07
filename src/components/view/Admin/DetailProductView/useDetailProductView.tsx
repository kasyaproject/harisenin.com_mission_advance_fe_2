import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { IProduct } from "@/types/Product";
import productServices from "@/services/product.service";

const useDetailProductView = () => {
  const params = useParams(); // ambil id dari url
  const router = useRouter();
  const { slug } = params;

  const [product, setProduct] = useState<IProduct | null>(null);

  // Fetch product data from mock API
  const getProductData = async () => {
    try {
      const res = await productServices.getProductById(`${slug}`);
      const { data } = res;

      return data;
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    // fetch data by slug
    if (slug) {
      getProductData().then((result) => {
        if (result) {
          setProduct(result);
        }
      });
    } else {
      // jika tidak ada slug, redirect ke halaman product
      router.push("/admin/products");
    }
  }, [slug, router]);

  // Handle submit untuk update data
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    formData: Partial<IProduct>
  ) => {
    e.preventDefault();

    if (!product) return;

    const updatedData = { ...product, ...formData };

    // Panggil API untuk update data produk
    productServices
      .updateProduct(product.id, updatedData)
      .then((res) => {
        alert("Produk berhasil diupdate!");
      })
      .catch((err) => {
        console.log(err);
        alert("Gagal mengupdate produk.");
      });

    return updatedData;
  };

  return { product, handleSubmit };
};

export default useDetailProductView;
