import { COUNTRY_NUMBER_CODE } from "@/constant/constant";
import React, { useState } from "react";

const useFormRegister = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "id",
    number: "",
    password: "",
    confirmPassword: "",
  });

  // handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle perubahan country
  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, country: value }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedCountry = COUNTRY_NUMBER_CODE.find(
      (item) => item.code === formData.country
    );

    const fullPhone = `${selectedCountry?.dial}${formData.number}`;

    console.log("Data form register:", { ...formData, phone: fullPhone });
  };

  return {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    formData,
    handleChange,
    handleCountryChange,
    handleSubmit,
  };
};

export default useFormRegister;
