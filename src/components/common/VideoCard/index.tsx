import React from "react";
import Image from "next/image";
import formatK from "@/lib/formatPrice";
import Rating from "@mui/material/Rating";

interface PropTypes {
  image: string;
  title: string;
  desc: string;
  category: string[];
  author: string;
  authorImage: string;
  authorTitle: string;
  aurhorCompany?: string; // optional kalau ga semua ada
  rating: number;
  review?: number;
  price: number;
  discount: number;
}

const VideoCard = ({ item }: { item: PropTypes }) => {
  return (
    <div className="w-full p-4 transition duration-150 ease-in-out bg-white border border-gray-200 rounded-lg delay-50 lg:p-6 hover:cursor-pointer hover:scale-105 hover:-translate-y-1">
      <div className="flex flex-row gap-2 lg:flex-col">
        {/* <!-- Cover image Video --> */}
        <Image
          src={item.image}
          alt="img-cover"
          width={800}
          height={300}
          className="object-cover w-24 rounded-lg h-22 lg:w-full lg:h-48"
        />

        {/* <!-- Description Video --> */}
        <div className="space-y-2 lg:my-2">
          <h3 className="font-semibold lg:text-lg text-base/5">{item.title}</h3>
          <p className="hidden font-semibold text-gray-500 line-clamp-2 lg:block">
            {item.desc}
          </p>

          {/* <!-- Author Video --> */}
          <div className="flex items-center gap-2 lg:my-4">
            <Image
              src={item.authorImage}
              alt="author-img"
              width={40}
              height={40}
              className="w-8 h-8 rounded-lg lg:w-12 lg:h-12"
            />

            <div>
              <h2 className="text-sm font-semibold lg:text-base">
                {item.author}
              </h2>
              <p className="text-xs text-gray-500 lg:text-sm">
                {item.authorTitle} di
                <span className="font-semibold text-black">
                  {" "}
                  {item.aurhorCompany}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Rating & Harga Video --> */}
      <div className="flex items-center justify-between my-2 lg:my-0">
        <div className="flex items-center gap-2">
          <Rating
            size="small"
            name="half-rating-read"
            value={item.rating}
            precision={0.5}
            readOnly
          />

          <p className="text-gray-500 underline">
            {item.rating} ({item.review})
          </p>
        </div>
        <p className="text-2xl font-semibold text-primary">
          Rp {formatK(item.price - (item.price * item.discount) / 100)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
