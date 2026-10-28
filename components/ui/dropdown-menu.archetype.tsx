import { defineComponent } from "archetype-os/components";
import { ChevronDownIcon, GlobeIcon, LockIcon, TrashIcon } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export default defineComponent({
  key: "dropdown-menu",
  name: "Dropdown Menu",
  description:
    "Menu opened from a trigger: chat visibility, the user menu, and a chat's actions in the sidebar. Items get the accent background on focus; Destructive items for delete.",
  code: { import: "@/components/ui/dropdown-menu", export: "DropdownMenu" },
  properties: { Content: ["Actions", "Options"] },
  height: 320,
  render: ({ Content }) => (
    <DropdownMenu modal={false} open>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          {Content === "Options" ? <LockIcon /> : null}
          {Content === "Options" ? "Private" : "Options"}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      {Content === "Options" ? (
        <DropdownMenuContent align="start" className="min-w-[300px]">
          <DropdownMenuItem className="flex flex-col items-start gap-1">
            Private
            <div className="text-muted-foreground text-xs">Only you can access this chat</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-col items-start gap-1">
            Public
            <div className="text-muted-foreground text-xs">
              Anyone with the link can access this chat
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            <LockIcon />
            Make private
          </DropdownMenuItem>
          <DropdownMenuItem>
            <GlobeIcon />
            Make public
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  ),
});
