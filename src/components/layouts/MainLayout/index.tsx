import React, { ReactNode } from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import PageHead from "@/components/common/PageHead";

interface PropTypes {
  title?: string;
  children: ReactNode;
}

const MainLayout = (props: PropTypes) => {
  const { title, children } = props;

  return (
    <div className="w-full min-h-screen bg-secondary/10">
      {/* Title & Head */}
      <PageHead title={title} />

      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="w-full">
        <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-6 px-4 py-6 mx-auto lg:gap-10 lg:px-0 lg:py-16">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
