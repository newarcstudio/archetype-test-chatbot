import { defineComponent } from "archetype-os/components";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export default defineComponent({
  key: "radio",
  name: "Radio",
  description: "A single choice within a group.",
  code: { import: "@/components/ui/radio-group", export: "RadioGroupItem" },
  properties: {
    Checked: ["Checked", "Unchecked"],
    State: ["Default", "Hover", "Focus", "Disabled"],
  },
  stateTarget: "[data-slot=radio-group-item]",
  render: ({ Checked, State }) => (
    <RadioGroup
      aria-label="Option"
      defaultValue={Checked === "Checked" ? "option" : undefined}
    >
      <RadioGroupItem
        aria-label="Option"
        disabled={State === "Disabled"}
        value="option"
      />
    </RadioGroup>
  ),
  examples: {
    matrix: ["State"],
    include: [{ Checked: "Unchecked", State: "Default" }],
  },
});
