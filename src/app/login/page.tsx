// ==========================================
// IMPORTS
// ==========================================

import AuthLayout from "@/features/auth/components/AuthLayout";
import LoginForm from "@/features/auth/components/LoginForm";

// ==========================================
// PAGE
// ==========================================

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to continue to your account."
    >
      <LoginForm />
    </AuthLayout>
  );
}
