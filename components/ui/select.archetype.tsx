import { defineComponent } from "archetype-os/components";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

export default defineComponent({
  key: "select",
  name: "Select",
  description:
    "Native-feeling picker: a rounded trigger and a rounded-2xl list with a check on the chosen item. Used for picking a code block's language and composer options.",
  code: { import: "@/components/ui/select", export: "Select" },
  properties: {
    Open: ["Closed", "Open"],
    Size: { values: ["Default", "SM"], prop: "size", map: { Default: "default", SM: "sm" } },
    State: ["Default", "Hover", "Focus", "Disabled"],
  },
  height: 260,
  render: ({ Open, Size, State }) => (
    <Select defaultValue="python" disabled={State === "Disabled"} open={Open === "Open"}>
      <SelectTrigger size={Size === "SM" ? "sm" : "default"}>
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="python">Python</SelectItem>
        <SelectItem value="typescript">TypeScript</SelectItem>
        <SelectItem value="json">JSON</SelectItem>
      </SelectContent>
    </Select>
  ),
  examples: {
    matrix: ["State"],
    include: [{ Size: "SM" }, { Open: "Open" }],
  },
});
