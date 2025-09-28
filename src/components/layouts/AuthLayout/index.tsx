import React, { ReactNode } from "react";
import Navbar from "@/components/common/Navbar";
import PageHead from "@/components/common/PageHead";

interface PropTypes {
  title?: string;
  children: ReactNode;
}

const AuthLayout = (props: PropTypes) => {
  const { title, children } = props;
  return (
    <div className="w-full min-h-screen bg-secondary/10">
      {/* Title & Head */}
      <PageHead title={title} />

      {/* Navbar */}
      <Navbar menu={false} />

      {/* Main Section */}
      <main className="flex items-center justify-center w-full h-[calc(100vh-66px)] px-2 ">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-2 px-4 py-8 mx-auto bg-white border border-gray-200 rounded-lg lg:py-10 lg:px-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
