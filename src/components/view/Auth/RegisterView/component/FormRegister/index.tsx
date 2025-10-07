"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import useFormRegister from "./useFormRegister";
import { COUNTRY_NUMBER_CODE } from "@/constant/constant";

const FormRegister = () => {
  const {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    formData,
    handleChange,
    handleCountryChange,
    handleSubmit,
  } = useFormRegister();

  return (
    <form onSubmit={handleSubmit} className="w-full mt-6">
      {/* <!-- Input Nama Lengkap --> */}
      <div className="flex flex-col items-start justify-start w-full mb-4">
        <label className="mb-1 text-sm font-medium text-gray-600 ms-1">
          Nama Lengkap <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Masukan nama"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

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

      {/* Input number */}
      <div className="flex flex-col items-start justify-start w-full mb-4">
        <label className="mb-1 text-sm font-medium text-gray-600 ms-1">
          No. Hp <span className="text-red-600">*</span>
        </label>

        <div className="flex items-center w-full gap-2">
          <Select
            defaultValue={formData.country}
            onValueChange={handleCountryChange}
          >
            <SelectTrigger className="w-[180px] border-gray-200 py-3">
              {/* Ini akan otomatis update sesuai item yang dipilih */}
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {COUNTRY_NUMBER_CODE.map((item) => (
                <SelectItem key={item.code} value={item.code}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.flag}
                      alt={item.name}
                      width={20}
                      height={14}
                      className="rounded-md"
                    />
                    <span>{item.dial}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Masukan number"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
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

      {/* <!-- Input Confirm Password --> */}
      <div className="flex flex-col items-start justify-start w-full mb-4">
        <label className="mb-1 text-sm font-medium text-gray-600 ms-1">
          Konfirmasi Password <span className="text-red-600">*</span>
        </label>

        <div className="relative flex items-center justify-start w-full">
          <input
            type={showConfirmPassword ? "password" : "text"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Masukan kembali kata sandi"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute -translate-y-1/2 top-1/2 right-2"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-1.5 hover:cursor-pointer text-sm font-semibold text-white rounded-md bg-primary/90 hover:bg-primary mb-3"
      >
        Daftar
      </button>
    </form>
  );
};

export default FormRegister;
