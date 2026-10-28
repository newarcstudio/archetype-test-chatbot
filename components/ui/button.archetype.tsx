import { defineComponent } from "archetype-os/components";
import { ArrowUpIcon, PlusIcon } from "lucide-react";
import { Button } from "./button";

const variants = { Default: "default", Outline: "outline", Secondary: "secondary", Ghost: "ghost", Destructive: "destructive", Link: "link" } as const;
const sizes = { Default: "default", XS: "xs", SM: "sm", LG: "lg", Icon: "icon", "Icon SM": "icon-sm" } as const;

export default defineComponent({
  key: "button",
  name: "Button",
  description:
    "The app's one button (shadcn, radix-maia). Default (near-black) for the main action, Outline/Ghost for toolbar and secondary actions, Destructive for delete. Icon sizes for icon-only buttons in headers, the composer and message actions.",
  code: { import: "@/components/ui/button", export: "Button" },
  properties: {
    Variant: { values: Object.keys(variants), prop: "variant", map: variants },
    Size: { values: Object.keys(sizes), prop: "size", map: sizes },
    State: ["Default", "Hover", "Pressed", "Disabled"],
  },
  render: ({ Variant, Size, State }) => {
    const size = sizes[Size as keyof typeof sizes];
    const iconOnly = size.startsWith("icon");
    return (
      <Button
        disabled={State === "Disabled"}
        size={size}
        variant={variants[Variant as keyof typeof variants]}
      >
        {iconOnly ? <ArrowUpIcon /> : Variant === "Destructive" ? "Delete" : "Continue"}
      </Button>
    );
  },
  examples: {
    matrix: ["Variant", "State"],
    include: [
      { Size: "XS" },
      { Size: "SM" },
      { Size: "LG" },
      { Size: "Icon" },
      { Size: "Icon SM", Variant: "Ghost" },
      { Size: "Icon", Variant: "Outline" },
    ],
  },
});
