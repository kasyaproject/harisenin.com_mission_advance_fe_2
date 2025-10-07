"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "./component/HeroSection";
import CollectionSection from "./component/CollectionSection";
import NewsSection from "./component/NewsSection";
import { apiInstanceMockapi } from "@/services/api";
import { VIDEO_PEMBELAJARAN } from "@/constant/constant";

const HomeView = () => {
  // ADD SEMUA DATA DARI CONSTANT
  const addAllVideos = async () => {
    try {
      const url = `/products`;

      // Gunakan Promise.all agar semua request POST dijalankan bersamaan
      const requests = VIDEO_PEMBELAJARAN.map((video) =>
        apiInstanceMockapi.post(url, video)
      );

      const responses = await Promise.all(requests);
      console.log(
        "Semua data berhasil ditambahkan:",
        responses.map((r) => r.data)
      );
    } catch (error) {
      console.error("Gagal menambahkan data:", error);
    }
  };

  return (
    <>
      <HeroSection />

      <CollectionSection />

      <NewsSection />
    </>
  );
};

export default HomeView;
