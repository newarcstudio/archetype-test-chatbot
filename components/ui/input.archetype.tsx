import { defineComponent } from "archetype-os/components";
import { Input } from "./input";

export default defineComponent({
  key: "input",
  name: "Input",
  description:
    "Single-line text field, fully rounded. Fills its parent's width. Used in the login and register forms (with a squarer override there) and inside the command menu.",
  code: { import: "@/components/ui/input", export: "Input" },
  properties: {
    Content: ["Placeholder", "Filled"],
    State: ["Default", "Hover", "Focus", "Disabled", "Invalid"],
  },
  width: 320,
  render: ({ Content, State }) => (
    <Input
      aria-invalid={State === "Invalid" || undefined}
      defaultValue={Content === "Filled" ? "you@example.com" : undefined}
      disabled={State === "Disabled"}
      placeholder="you@someo.ne"
      type="email"
    />
  ),
  examples: { matrix: ["Content", "State"] },
});
