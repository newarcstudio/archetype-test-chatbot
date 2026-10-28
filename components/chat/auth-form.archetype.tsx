import { defineComponent } from "archetype-os/components";
import { AuthForm } from "./auth-form";
import { SubmitButton } from "./submit-button";

export default defineComponent({
  key: "auth-form",
  name: "Auth Form",
  description:
    "Email and password form on the sign-in and sign-up pages, with the full-width submit button (spinner while submitting).",
  code: { import: "@/components/chat/auth-form", export: "AuthForm" },
  properties: { Mode: ["Sign in", "Sign up"], State: ["Default", "Submitting"] },
  width: 360,
  render: ({ Mode, State }) => (
    <AuthForm action="#" defaultEmail={State === "Submitting" ? "user@acme.com" : ""}>
      <SubmitButton isSuccessful={State === "Submitting"}>
        {Mode === "Sign up" ? "Sign up" : "Sign in"}
      </SubmitButton>
    </AuthForm>
  ),
  examples: { include: [{}, { Mode: "Sign up" }, { State: "Submitting" }] },
});
