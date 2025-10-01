"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { IProduct } from "@/types/Product";
import { useRouter } from "next/navigation";

export const getColumns = (
  router: ReturnType<typeof useRouter>,
  handleDelete: (data: IProduct) => void
): ColumnDef<IProduct>[] => [
  // column image
  {
    accessorKey: "image",
    header: () => {
      return <p className="text-center font-smilibold">Cover</p>;
    },
    cell: ({ row }) => (
      <div className="flex items-center justify-center w-36 lg:w-full">
        <Image
          src={row.getValue("image")}
          alt="img-cover"
          width={800}
          height={300}
          className="object-cover w-32 rounded-lg h-22"
        />
      </div>
    ),
  },

  // column title
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-semibold">{row.getValue("title")}</div>
    ),
  },

  // column price
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount);
      return <div className="font-medium ">{formatted}</div>;
    },
  },

  // column actions
  {
    id: "id",
    header: "",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center min-w-20 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-8 h-8 p-0 hover:cursor-pointer hover:bg-gray-100"
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() =>
                  router.push(`/admin/product/show-product/${row.original.id}`)
                }
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600 hover:cursor-pointer"
                onClick={() => handleDelete(row.original)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
