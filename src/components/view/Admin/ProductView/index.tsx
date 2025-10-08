"use client";

import React from "react";
import { DataTable } from "./component/DataTable";
import useProductView from "./useProductView";

const ProductView = () => {
  const { items, loading, error, columns } = useProductView();

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full min-h-[calc(100vh-80px)]">
      <div className="w-full h-full p-2 lg:p-4">
        <div className="p-2 bg-white border border-gray-200 rounded-md shadow-sm">
          <div className="w-full max-w-5xl lg:p-6 ">
            {/* Table Product */}
            <DataTable columns={columns} data={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
