import { IProduct } from "@/types/Product";
import React, { useState } from "react";

interface PropTypes {
  data: IProduct;
}

const useInfoTab = (props: PropTypes) => {
  const { data } = props;

  // Inisialisasi state form dengan data produk jika ada
  const [formData, setFormData] = useState<Partial<IProduct>>({
    title: data?.title || "",
    desc: data?.desc || "",
    category: data?.category || [],
    author: data?.author || "",
    authorTitle: data?.authorTitle || "",
    authorCompany: data?.authorCompany || "",
    price: data?.price || 0,
    discount: data?.discount || 0,
  });

  // Handle perubahan input (semua field)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle perubahan kategori (MultiSelect)
  const handleCategoryChange = (values: string[]) => {
    setFormData((prev) => ({
      ...prev,
      category: values,
    }));
  };

  return { formData, handleChange, handleCategoryChange };
};

export default useInfoTab;
