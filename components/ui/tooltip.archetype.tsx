import { defineComponent } from "archetype-os/components";
import { CopyIcon } from "lucide-react";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const sides = { Top: "top", Bottom: "bottom", Right: "right" } as const;

export default defineComponent({
  key: "tooltip",
  name: "Tooltip",
  description:
    "Inverted (foreground-colored) pill with an arrow, shown on hover with no delay. Labels icon-only buttons: message actions, sidebar toggle, new chat. Keep the text to a few words.",
  code: { import: "@/components/ui/tooltip", export: "Tooltip" },
  properties: {
    Side: { values: Object.keys(sides), prop: "side", map: sides },
  },
  render: ({ Side }) => (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="icon-sm" variant="ghost">
            <CopyIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent side={sides[Side as keyof typeof sides]} sideOffset={4}>
          Copy
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
});
