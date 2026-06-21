// ==========================================
// IMPORTS
// ==========================================

import Button from "@/components/ui/Button";

// ==========================================
// COMPONENT
// ==========================================
//
// Purpose:
// Google Sign In Button
//
// Notes:
// UI only for now.
// OAuth functionality will be added later.
//
// ==========================================

export default function GoogleSignInButton() {
  return (
    <Button variant="secondary" fullWidth>
      <span className="flex items-center justify-center gap-2">
        {/* Google Icon Placeholder */}
        <span>G</span>

        <span>Continue with Google</span>
      </span>
    </Button>
  );
}
