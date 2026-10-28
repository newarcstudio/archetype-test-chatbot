import { defineComponent } from "archetype-os/components";
import { ArrowUpIcon, PlusIcon } from "lucide-react";
import { Button } from "./button";

const variants = {
  Default: "default",
  Outline: "outline",
  Secondary: "secondary",
  Ghost: "ghost",
  Destructive: "destructive",
  Link: "link",
} as const;

const sizes = {
  Default: "default",
  Small: "sm",
  "Extra small": "xs",
  Large: "lg",
  Icon: "icon",
  "Icon small": "icon-sm",
} as const;

export default defineComponent({
  key: "button",
  name: "Button",
  description:
    "The app's button (shadcn). Default (solid) for the main action, Outline for secondary actions like the visibility picker, Ghost for icon actions in toolbars and the sidebar, Destructive for deletes. Icon sizes (mostly Icon small) are the most used in the chat UI.",
  code: { import: "@/components/ui/button", export: "Button" },
  properties: {
    Variant: {
      values: Object.keys(variants),
      prop: "variant",
      map: variants,
    },
    Size: { values: Object.keys(sizes), prop: "size", map: sizes },
    State: ["Default", "Hover", "Pressed", "Focus", "Disabled"],
  },
  render: ({ Variant, Size, State }) => {
    const size = sizes[Size as keyof typeof sizes];
    const isIcon = size.startsWith("icon");
    return (
      <Button
        aria-label={isIcon ? "Send" : undefined}
        disabled={State === "Disabled"}
        size={size}
        variant={variants[Variant as keyof typeof variants]}
      >
        {isIcon ? <ArrowUpIcon /> : "New chat"}
      </Button>
    );
  },
  examples: {
    matrix: ["Variant", "State"],
    include: [
      { Size: "Small" },
      { Size: "Extra small" },
      { Size: "Large" },
      { Size: "Icon" },
      { Size: "Icon small" },
      { Size: "Icon small", Variant: "Ghost" },
      { Size: "Icon small", Variant: "Ghost", State: "Hover" },
      { Size: "Icon small", Variant: "Outline" },
    ],
  },
});
