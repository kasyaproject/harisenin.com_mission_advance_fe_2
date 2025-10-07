"use client";

import React from "react";
import HeroSection from "./component/HeroSection";
import CollectionSection from "./component/CollectionSection";
import NewsSection from "./component/NewsSection";

const HomeView = () => {
  return (
    <>
      <HeroSection />

      <CollectionSection />

      <NewsSection />
    </>
  );
};

export default HomeView;
