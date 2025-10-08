import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { IProduct } from "@/types/Product";
import { MultiSelect } from "@/components/ui/multi-select";
import { ALL_MENU } from "@/constant/constant";
import useInfoTab from "./useInfoTab";

interface PropTypes {
  value: string;
  data: IProduct;
  handleUpdate: (
    e: React.FormEvent<HTMLFormElement>,
    updated: Partial<IProduct>
  ) => void;
}

const InfoTab = (props: PropTypes) => {
  const { value, data, handleUpdate } = props;
  const { formData, handleChange, handleCategoryChange } = useInfoTab({ data });

  return (
    <TabsContent value={value}>
      <form onSubmit={(e) => handleUpdate(e, formData)} className="space-y-4">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-40 max-h-96"
            placeholder="Enter product description"
            required
          />
        </div>

        {/*  Product Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <MultiSelect
            options={ALL_MENU.kategori.map((item) => ({
              label: item.title,
              value: item.title,
            }))}
            onValueChange={handleCategoryChange}
            defaultValue={formData.category}
            placeholder="Select categories..."
            className="w-full"
          />
        </div>

        {/* Author Section */}
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

        {/* Product Price Section */}
        <h1 className="text-xl font-semibold">Product Price</h1>
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
              placeholder="Enter price"
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

        <Button type="submit" className="mt-4 text-white hover:cursor-pointer">
          Update Info
        </Button>
      </form>
    </TabsContent>
  );
};

export default InfoTab;
