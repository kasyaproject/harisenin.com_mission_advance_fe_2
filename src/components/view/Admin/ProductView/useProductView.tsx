"use client";

import { useEffect } from "react";
import { IProduct } from "@/types/Product";
import { useRouter } from "next/navigation";
import { getColumns } from "./component/ColumnsTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { fetchProducts, removeProduct } from "@/features/products/productSlice";

const useProductView = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Handle Delete Product
  const handleDelete = async (data: IProduct) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${data.title}"?`
    );

    if (!confirmDelete) return;

    await dispatch(removeProduct(data.id));
    alert("Produk berhasil dihapus!");
  };

  const columns = getColumns(router, handleDelete);

  return { items, loading, error, columns };
};

export default useProductView;
