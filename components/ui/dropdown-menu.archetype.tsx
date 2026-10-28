import { defineComponent } from "archetype-os/components";
import { CheckCircle2Icon, ChevronDownIcon, LockIcon, MoreHorizontalIcon, ShareIcon, TrashIcon } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export default defineComponent({
  key: "dropdown-menu",
  name: "Dropdown Menu",
  description:
    "Popover menu opened from a button. Used for chat visibility (two-line items with a check on the chosen one), a chat's More menu in the sidebar (Share submenu, destructive Delete) and the user menu.",
  code: { import: "@/components/ui/dropdown-menu", export: "DropdownMenu" },
  properties: {
    Content: ["Actions", "Visibility", "User"],
  },
  height: 320,
  render: ({ Content }) => {
    if (Content === "Visibility") {
      return (
        <DropdownMenu modal={false} open>
          <DropdownMenuTrigger asChild>
            <Button className="gap-1.5 rounded-lg border-border/50 text-muted-foreground shadow-none" size="sm" variant="outline">
              <LockIcon />
              <span>Private</span>
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[300px]">
            {[
              ["Private", "Only you can access this chat", true],
              ["Public", "Anyone with the link can access this chat", false],
            ].map(([label, description, active]) => (
              <DropdownMenuItem className="flex flex-row items-center justify-between gap-4" key={String(label)}>
                <div className="flex flex-col items-start gap-1">
                  {label}
                  <div className="text-muted-foreground text-xs">{description}</div>
                </div>
                <CheckCircle2Icon className={active ? "text-foreground" : "opacity-0"} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    if (Content === "User") {
      return (
        <DropdownMenu modal={false} open>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">guest@example.com</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="bottom">
            <DropdownMenuLabel>guest@example.com</DropdownMenuLabel>
            <DropdownMenuItem>
              Toggle dark mode
              <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <DropdownMenu modal={false} open>
        <DropdownMenuTrigger asChild>
          <Button size="icon-sm" variant="ghost">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="bottom">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <ShareIcon />
              <span>Share</span>
            </DropdownMenuSubTrigger>
          </DropdownMenuSub>
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
});
