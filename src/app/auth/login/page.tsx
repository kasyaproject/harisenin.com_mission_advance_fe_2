import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import FormLogin from "./component/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="VideoBelajar | Register Page">
      {/* Title Card */}
      <h1 className="text-2xl font-semibold text-gray-600 lg:text-4xl">
        Masuk ke Akun
      </h1>
      <p className="text-gray-400">Yuk, lanjutin belajarmu di videobelajar.</p>

      {/* Form Login */}
      <FormLogin />

      {/* Footer Card */}
      <Link
        href="/auth/register"
        className="w-full flex items-center justify-center py-1.5 text-sm font-semibold text-primary rounded-md bg-primary/15 hover:bg-primary/20"
      >
        Daftar
      </Link>

      <hr className="w-full my-4 border-t border-gray-300" />

      <a
        href="#"
        className="w-full flex items-center justify-center py-1.5 space-x-1 text-sm font-semibold border border-gray-200 hover:bg-gray-50 rounded-md "
      >
        <Image
          src="/image/icon/google.svg"
          alt="google"
          width={40}
          height={40}
          className="w-4 h-4"
        />
        <p>Daftar dengan Google</p>
      </a>
    </AuthLayout>
  );
};

export default LoginPage;
