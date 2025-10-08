"use client";

import React from "react";
import useDetailProductView from "./useDetailProductView";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CoverTab from "./CoverTab";
import InfoTab from "./InfoTab";

const DetailProductView = () => {
  const { product, handleUpdate } = useDetailProductView();

  return (
    <div className="w-full min-h-[calc(100vh-80px)]">
      <div className="w-full h-full p-2 lg:p-4">
        <div className="p-2 bg-white border border-gray-200 rounded-md shadow-sm">
          <div className="w-full max-w-5xl lg:p-6 ">
            {product ? (
              <Tabs defaultValue="cover" className="max-w-xl">
                <TabsList className="mb-4 bg-gray-50">
                  <TabsTrigger value="cover">Cover</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>

                {/* Tab Cover */}
                <CoverTab
                  value="cover"
                  data={product}
                  handleUpdate={handleUpdate}
                />
                <InfoTab
                  value="info"
                  data={product}
                  handleUpdate={handleUpdate}
                />
              </Tabs>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductView;
