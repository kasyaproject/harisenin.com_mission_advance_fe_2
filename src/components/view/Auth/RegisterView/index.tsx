import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormRegister from "./component/FormRegister";

const RegisterView = () => {
  return (
    <>
      {/* Title Card */}
      <h1 className="text-2xl font-semibold text-gray-600 lg:text-4xl">
        Pendaftaran Akun
      </h1>
      <p className="text-gray-400">Yuk, daftarkan akunmu sekarang juga!</p>

      {/* Form Register */}
      <FormRegister />

      {/* Footer Card */}
      <Link
        href="/auth/login"
        className="w-full flex items-center justify-center py-1.5 text-sm font-semibold text-primary rounded-md bg-primary/15 hover:bg-primary/20"
      >
        Masuk
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
    </>
  );
};

export default RegisterView;
