import React from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import RegisterView from "@/components/view/Auth/RegisterView";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register Page">
      <RegisterView />
    </AuthLayout>
  );
};

export default RegisterPage;
