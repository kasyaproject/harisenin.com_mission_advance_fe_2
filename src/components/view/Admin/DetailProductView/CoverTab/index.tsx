"use client";

import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { IProduct } from "@/types/Product";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useCoverTab from "./useCoverTab";

interface PropTypes {
  value: string;
  data?: IProduct;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    updated: Partial<IProduct>
  ) => void;
}

const CoverTab = (props: PropTypes) => {
  const { value, data, handleSubmit } = props;
  const { image, handleFileChange } = useCoverTab({ data });

  return (
    <TabsContent value={value}>
      <form onSubmit={(e) => handleSubmit(e, { image })}>
        <div className="relative flex flex-col items-center justify-center w-full p-2 transition border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-60 bg-gray-50 hover:bg-gray-100">
          {image ? (
            <Image
              src={image}
              alt="preview"
              width={400}
              height={300}
              className="object-center h-full rounded-lg"
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

        <p className="mt-2 text-sm text-gray-500">
          Upload product cover image. PNG, JPG up to 2MB
        </p>

        <Button type="submit" className="mt-4 text-white hover:cursor-pointer">
          Update Cover
        </Button>
      </form>
    </TabsContent>
  );
};

export default CoverTab;
