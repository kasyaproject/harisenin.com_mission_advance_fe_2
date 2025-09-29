import React from "react";
import { DataTable } from "./component/DataTable";
import { columns } from "./component/ColumnsTable";
import { videoPembelajaran } from "@/constant/constant";

const ProductView = async () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)]">
      <div className="w-full h-full p-2 lg:p-4">
        <div className="p-2 bg-white border border-gray-200 rounded-md shadow-sm">
          <div className="w-full max-w-5xl lg:p-6 ">
            {/* Table Product */}
            <DataTable columns={columns} data={videoPembelajaran} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
