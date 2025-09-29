import React from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import LoginView from "@/components/view/Auth/LoginView";

const LoginPage = () => {
  return (
    <AuthLayout title="Register Page">
      <LoginView />
    </AuthLayout>
  );
};

export default LoginPage;
