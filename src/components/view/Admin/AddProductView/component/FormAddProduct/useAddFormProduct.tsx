import React, { useState } from "react";
import { IProduct } from "@/types/Product";
import { useRouter } from "next/navigation";

const useAddFormProduct = () => {
  const route = useRouter();
  const [formData, setFormData] = useState<IProduct>({
    id: 0,
    image: "",
    title: "",
    desc: "",
    category: [],

    author: "",
    authorImage: "/image/avatar-men.png",
    authorTitle: "",
    aurhorCompany: "",
    rating: 0,
    review: 0,
    price: 0,
    discount: 0,
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
      [name]: name === "price" ? Number(value) : value, // harga jadi number
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ambil data lama dari localStorage
    const stored = localStorage.getItem("VIDEO_PEMBELAJARAN");
    const productList: IProduct[] = stored ? JSON.parse(stored) : [];

    // Buat data baru dengan ID auto increment
    const newProduct: IProduct = {
      ...formData,
      id: productList.length + 1,
    };

    // Simpan ke localStorage
    const updatedList = [...productList, newProduct];
    localStorage.setItem("VIDEO_PEMBELAJARAN", JSON.stringify(updatedList));

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
