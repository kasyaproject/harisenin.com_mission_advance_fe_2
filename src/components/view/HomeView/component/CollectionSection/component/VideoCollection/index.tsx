"use client";

import React from "react";
import CategoryButton from "../CategoryButton";
import VideoCard from "@/components/common/VideoCard";
import useVideoCollection from "./useVideoCollection";

const VideoCollection = () => {
  const { productList, categoryVideo, setCategoryVideo } = useVideoCollection();

  return (
    <div>
      <CategoryButton
        buttonCategory={categoryVideo}
        setButtonCategory={setCategoryVideo}
      />

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        {productList
          .filter(
            (item) =>
              categoryVideo === "all" || item.category.includes(categoryVideo)
          )
          .map((item, index) => (
            <VideoCard key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default VideoCollection;
