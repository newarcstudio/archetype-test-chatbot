import { defineComponent } from "archetype-os/components";
import { AuthForm } from "./auth-form";
import { SubmitButton } from "./submit-button";

export default defineComponent({
  key: "auth-form",
  name: "Auth Form",
  description:
    "Email and password form for the login and register pages, with the full-width submit button that shows a spinner once the sign-in succeeds or is pending.",
  code: { import: "@/components/chat/auth-form", export: "AuthForm" },
  properties: {
    Page: ["Sign in", "Sign up"],
    State: ["Default", "Submitting"],
  },
  width: 360,
  render: ({ Page, State }) => (
    <AuthForm action="#" defaultEmail={State === "Submitting" ? "you@example.com" : ""}>
      <SubmitButton isSuccessful={State === "Submitting"}>{Page}</SubmitButton>
      <p className="text-center text-[13px] text-muted-foreground">
        {Page === "Sign in" ? "No account? " : "Have an account? "}
        <a className="text-foreground underline-offset-4 hover:underline" href={Page === "Sign in" ? "/register" : "/login"}>
          {Page === "Sign in" ? "Sign up" : "Sign in"}
        </a>
      </p>
    </AuthForm>
  ),
  examples: { matrix: ["Page", "State"] },
});
