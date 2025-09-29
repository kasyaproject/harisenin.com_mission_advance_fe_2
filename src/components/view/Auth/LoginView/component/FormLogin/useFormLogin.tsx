import React, { useState } from "react";

const useFormLogin = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data form login:", formData);
  };

  return {
    showPassword,
    setShowPassword,
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useFormLogin;
