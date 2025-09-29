import React from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import RegisterView from "@/components/view/Auth/RegisterView";

const RegisterPage = () => {
  return (
    <AuthLayout title="VideoBelajar | Register Page">
      <RegisterView />
    </AuthLayout>
  );
};

export default RegisterPage;
