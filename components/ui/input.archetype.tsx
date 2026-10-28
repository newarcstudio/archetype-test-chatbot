import { defineComponent } from "archetype-os/components";
import { Input } from "./input";

export default defineComponent({
  key: "input",
  name: "Input",
  description:
    "Single-line text field, fully rounded. Used on the sign-in and sign-up forms. Invalid draws the destructive ring via aria-invalid.",
  code: { import: "@/components/ui/input", export: "Input" },
  properties: {
    Content: ["Placeholder", "Filled"],
    State: ["Default", "Hover", "Focus", "Invalid", "Disabled"],
  },
  width: 320,
  render: ({ Content, State }) => (
    <Input
      aria-invalid={State === "Invalid" || undefined}
      defaultValue={Content === "Filled" ? "user@acme.com" : undefined}
      disabled={State === "Disabled"}
      placeholder="user@acme.com"
      type="email"
    />
  ),
  examples: { matrix: ["Content", "State"] },
});
