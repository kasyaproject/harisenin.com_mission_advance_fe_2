"use client";

import React from "react";
import useAddFormProduct from "./useAddFormProduct";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import { ALL_MENU } from "@/constant/constant";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const FormAddProduct = () => {
  const {
    formData,
    handleChange,
    handleCategoryChange,
    handleFileChange,
    handleSubmit,
  } = useAddFormProduct();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-semibold">Product Details</h1>
      {/*  Product Title */}
      <div>
        <label className="block mb-1 font-medium">Product Title</label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter product name"
          required
        />
      </div>

      {/*  Product Description */}
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-20 max-h-80"
          placeholder="Enter product description"
          required
        />
      </div>

      {/*  Product Image */}
      <div>
        <label className="block mb-1 font-medium">Cover Image</label>

        <div className="relative flex flex-col items-center justify-center w-full transition border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-60 bg-gray-50 hover:bg-gray-100">
          {formData.image ? (
            <Image
              src={formData.image}
              alt="preview"
              width={400}
              height={300}
              className="object-center h-full m-2 rounded-lg"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              {/* Icon upload */}
              <svg
                className="w-12 h-12 mb-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-sm">Click or drag file to upload</p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          )}

          {/* Input hidden di atas div */}
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/*  Product Category */}
      <div>
        <label className="block mb-1 font-medium">Category</label>
        <MultiSelect
          options={ALL_MENU.kategori.map((item) => ({
            label: item.title,
            value: item.title, // kalau value kosong pakai title
          }))}
          onValueChange={handleCategoryChange}
          defaultValue={formData.category}
          placeholder="Select categories..."
          className="w-full"
        />
      </div>

      <hr className="my-4" />

      <h1 className="text-xl font-semibold">Author Details</h1>
      {/*  Author Name */}
      <div>
        <label className="block mb-1 font-medium">Author Name</label>
        <Input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter author name"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {/*  Author Title */}
        <div>
          <label className="block mb-1 font-medium">Author Title</label>
          <Input
            type="text"
            name="authorTitle"
            value={formData.authorTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter author title"
            required
          />
        </div>
        {/*  Author Company */}
        <div>
          <label className="block mb-1 font-medium">Author Company</label>
          <Input
            type="text"
            name="authorCompany"
            value={formData.authorCompany}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter author company"
            required
          />
        </div>
      </div>

      <hr className="my-4" />

      <h1 className="text-xl font-semibold">Product Price</h1>
      {/*  Product Price & Discount */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter product price"
            required
          />
        </div>
        {/* Discount */}
        <div>
          <label className="block mb-1 font-medium">Discount</label>
          <Input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter discount percentage"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="default"
        className="px-4 py-2 text-white rounded-md hover:cursor-pointer"
      >
        Add Product
      </Button>
    </form>
  );
};

export default FormAddProduct;
