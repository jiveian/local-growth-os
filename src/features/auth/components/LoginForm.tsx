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
// Login form for existing users.
//
// Future:
// - Auth.js
// - Form Validation
// - Remember Me
//
// ==========================================

export default function LoginForm() {
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
      {/* Login Fields */}
      {/* ================================== */}

      <Input label="Email Address" type="email" placeholder="juan@email.com" />

      <Input label="Password" type="password" placeholder="Enter password" />

      {/* ================================== */}
      {/* Submit */}
      {/* ================================== */}

      <Button fullWidth>Sign In</Button>

      {/* ================================== */}
      {/* Register Link */}
      {/* ================================== */}

      <p className="text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <a
          href="/register"
          className="font-medium text-sky-500 hover:underline"
        >
          Create one
        </a>
      </p>
    </div>
  );
}
