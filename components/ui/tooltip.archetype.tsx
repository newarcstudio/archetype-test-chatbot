import { defineComponent } from "archetype-os/components";
import { PlusIcon } from "lucide-react";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const sides = { Top: "top", Bottom: "bottom", Right: "right", Left: "left" } as const;

export default defineComponent({
  key: "tooltip",
  name: "Tooltip",
  description:
    "Dark pill label for icon-only buttons (New chat, Attach, model capabilities). Opens with no delay; TooltipProvider sits in the root layout.",
  code: { import: "@/components/ui/tooltip", export: "Tooltip" },
  properties: {
    Side: { values: Object.keys(sides), prop: "side", map: sides },
  },
  render: ({ Side }) => (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button aria-label="New chat" size="icon-sm" variant="ghost">
            <PlusIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent side={sides[Side as keyof typeof sides]}>New chat</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
});
