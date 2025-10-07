import React, { useState } from "react";
import { IProduct } from "@/types/Product";
import { useRouter } from "next/navigation";
import productServices from "@/services/product.service";

const useAddFormProduct = () => {
  const route = useRouter();
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

  const addNewProduct = async (payload: IProduct) => {
    const res = await productServices.addProduct(payload);

    return res;
  };

  // Handle submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Buat data baru dengan ID auto increment
    const newProduct: IProduct = {
      ...formData,
      image: "/image/cover/1.jpg",
    };

    addNewProduct(newProduct);

    alert("Product berhasil ditambahkan!");
    route.push("/admin/product");
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
