import React, { useState } from "react";
import { IProduct } from "@/types/Product";

interface PropTypes {
  data?: IProduct;
}

const useCoverTab = (props: PropTypes) => {
  const { data } = props;
  const [image, setPreview] = useState<string | null>(data?.image ?? null);

  // Handle file input change untuk preview dan convert ke base64
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ambil file
    const file = e.target.files?.[0];
    if (!file) return;

    // Cek ukuran file, maksimal 2MB
    if (file.size > 2 * 1024 * 1024) {
      alert("File terlalu besar, maksimum 2MB!");
      return;
    }

    // konversi file ke base64 untuk disimpan di localStorage
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return { image, handleFileChange };
};

export default useCoverTab;
