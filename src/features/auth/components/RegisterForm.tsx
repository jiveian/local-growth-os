// ==========================================
// IMPORTS
// ==========================================

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import GoogleSignInButton from "./GoogleSignInButton";

// ==========================================
// COMPONENT
// ==========================================
//
// Purpose:
// Registration form for new users.
//
// Future:
// - React Hook Form
// - Zod Validation
// - Server Actions
// - Google OAuth
//
// ==========================================

export default function RegisterForm() {
  return (
    <div className="space-y-6">
      {/* ================================== */}
      {/* Google Sign In */}
      {/* ================================== */}

      <GoogleSignInButton />

      {/* ================================== */}
      {/* Divider */}
      {/* ================================== */}

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-sm text-slate-500">OR</span>
        </div>
      </div>

      {/* ================================== */}
      {/* User Information */}
      {/* ================================== */}

      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-900">
          User Information
        </h2>

        <Input label="Full Name" placeholder="Juan Dela Cruz" />

        <Input
          label="Email Address"
          type="email"
          placeholder="juan@email.com"
        />

        <Input label="Password" type="password" placeholder="Enter password" />
      </div>

      {/* ================================== */}
      {/* Business Information */}
      {/* ================================== */}

      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-900">
          Business Information
        </h2>

        <Input label="Business Name" placeholder="ABC Dental Clinic" />

        <Input label="Industry" placeholder="Dental Clinic" />
      </div>

      {/* ================================== */}
      {/* Submit */}
      {/* ================================== */}

      <Button fullWidth>Create Account</Button>

      {/* ================================== */}
      {/* Login Link */}
      {/* ================================== */}

      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-sky-500 hover:underline">
          Sign in
        </a>
      </p>
    </div>
  );
}
