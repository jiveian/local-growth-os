import AuthLayout from "@/features/auth/components/AuthLayout";
import RegisterForm from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      description="Create your account to get started."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
