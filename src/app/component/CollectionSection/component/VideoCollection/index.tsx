"use client";

import React, { useState } from "react";
import CategoryButton from "../CategoryButton";
import { videoPembelajaran } from "@/constant/constant";
import VideoCard from "@/components/common/VideoCard";

const VideoCollection = () => {
  const [categoryVideo, setCategoryVideo] = useState("all");

  return (
    <div>
      <CategoryButton
        buttonCategory={categoryVideo}
        setButtonCategory={setCategoryVideo}
      />

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        {videoPembelajaran
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
