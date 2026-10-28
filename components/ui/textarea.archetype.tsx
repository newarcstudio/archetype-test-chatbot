import { defineComponent } from "archetype-os/components";
import { Textarea } from "./textarea";

export default defineComponent({
  key: "textarea",
  name: "Textarea",
  description:
    "Multi-line text field that grows with its content. Fills its parent's width. The chat composer builds on it through InputGroupTextarea.",
  code: { import: "@/components/ui/textarea", export: "Textarea" },
  properties: {
    Content: ["Placeholder", "Filled"],
    State: ["Default", "Focus", "Disabled", "Invalid"],
  },
  width: 360,
  render: ({ Content, State }) => (
    <Textarea
      aria-invalid={State === "Invalid" || undefined}
      defaultValue={
        Content === "Filled"
          ? "Write code to demonstrate Dijkstra's algorithm, with comments on each step."
          : undefined
      }
      disabled={State === "Disabled"}
      placeholder="Send a message..."
    />
  ),
  examples: { matrix: ["Content", "State"] },
});
