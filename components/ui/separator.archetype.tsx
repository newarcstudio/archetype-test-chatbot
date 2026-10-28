import { defineComponent } from "archetype-os/components";
import { Separator } from "./separator";

export default defineComponent({
  key: "separator",
  name: "Separator",
  description: "1px border-colored rule, horizontal or vertical. Used between button-group items and in the sidebar.",
  code: { import: "@/components/ui/separator", export: "Separator" },
  properties: {
    Orientation: { values: ["Horizontal", "Vertical"], prop: "orientation", map: { Horizontal: "horizontal", Vertical: "vertical" } },
  },
  render: ({ Orientation }) =>
    Orientation === "Vertical" ? (
      <div className="flex h-6 items-center gap-3 text-sm">
        <span>Copy</span>
        <Separator orientation="vertical" />
        <span>Edit</span>
      </div>
    ) : (
      <div className="w-60">
        <Separator />
      </div>
    ),
});
