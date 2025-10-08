import React, { useState } from "react";
import { IProduct } from "@/types/Product";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { createProduct } from "@/features/products/productSlice";

const useAddFormProduct = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<IProduct>({
    id: "",
    image: "",
    title: "",
    desc: "",
    category: [],

    author: "",
    authorImage: "/image/avatar-men.png",
    authorTitle: "",
    authorCompany: "",

    price: 0,
    discount: 0,
    review: 0,
    rating: 0,
  });

  const handleCategoryChange = (values: string[]) => {
    setFormData((prev) => ({
      ...prev,
      category: values,
    }));
  };

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

  // handle input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result as string, // simpan base64
      }));
    };
    reader.readAsDataURL(file); // konversi file ke base64
  };

  // Handle submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Buat data baru dengan ID auto increment
    const newProduct: IProduct = {
      ...formData,
      image: "/image/cover/1.jpg",
    };

    await dispatch(createProduct(newProduct));
    alert("Produk berhasil ditambahkan!");
    router.push("/admin/product");
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleCategoryChange,
    handleFileChange,
    handleSubmit,
  };
};

export default useAddFormProduct;
