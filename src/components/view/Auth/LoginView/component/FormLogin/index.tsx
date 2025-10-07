"use client";

import { Eye, EyeOff } from "lucide-react";
import React from "react";
import useFormLogin from "./useFormLogin";

const FormLogin = () => {
  const {
    showPassword,
    setShowPassword,
    formData,
    handleChange,
    handleSubmit,
  } = useFormLogin();

  return (
    <form onSubmit={handleSubmit} className="w-full mt-6">
      {/* <!-- Input Email --> */}
      <div className="flex flex-col items-start justify-start w-full mb-4">
        <label className="mb-1 text-sm font-medium text-gray-600 ms-1">
          E-Mail <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukan email"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* <!-- Input Password --> */}
      <div className="flex flex-col items-start justify-start w-full mb-4 ">
        <label className="mb-1 text-sm font-medium text-gray-600 ms-1">
          Kata Sandi <span className="text-red-600">*</span>
        </label>

        <div className="relative flex items-center justify-start w-full">
          <input
            type={showPassword ? "password" : "text"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukan kata sandi"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute -translate-y-1/2 top-1/2 right-2"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-1.5 hover:cursor-pointer text-sm font-semibold text-white rounded-md bg-primary/90 hover:bg-primary mb-3"
      >
        Masuk
      </button>
    </form>
  );
};

export default FormLogin;
