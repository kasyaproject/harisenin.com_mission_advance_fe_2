import { fetchProducts } from "@/features/products/productSlice";
import { AppDispatch, RootState } from "@/lib/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCollectionSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { items, loading, error };
};

export default useCollectionSection;
