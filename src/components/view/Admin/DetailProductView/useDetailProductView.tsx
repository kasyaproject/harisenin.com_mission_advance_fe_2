import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { IProduct } from "@/types/Product";
import productServices from "@/services/product.service";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { updateProduct } from "@/features/products/productSlice";

const useDetailProductView = () => {
  const params = useParams(); // ambil id dari url
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
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
  const handleUpdate = async (
    e: React.FormEvent<HTMLFormElement>,
    formData: Partial<IProduct>
  ) => {
    e.preventDefault();

    if (!product) return;

    try {
      formData.id = product.id; // pastikan id tetap ada

      // Panggil thunk Redux untuk update data
      const resultAction = await dispatch(updateProduct(formData as IProduct));

      if (updateProduct.fulfilled.match(resultAction)) {
        alert("Produk berhasil diubah!");
      } else {
        alert("Gagal mengubah produk!");
      }
    } catch (error) {
      console.error("Error saat update produk:", error);
      alert("Terjadi kesalahan saat update produk.");
    }
  };

  return { product, handleUpdate };
};

export default useDetailProductView;
