import { defineComponent } from "archetype-os/components";
import { SidebarMenu, SidebarProvider } from "../ui/sidebar";
import { ChatItem } from "./sidebar-history-item";

export default defineComponent({
  key: "sidebar-history-item",
  name: "Sidebar Chat Item",
  description:
    "One past chat in the sidebar history: truncated title, muted until hovered; the open chat is full-strength with a dashed underline. A \"…\" action (on hover, always on the active row) opens Share and Delete.",
  code: { import: "@/components/chat/sidebar-history-item", export: "ChatItem" },
  properties: {
    Active: { values: ["Inactive", "Active"], prop: "isActive", map: { Inactive: false, Active: true } },
    State: ["Default", "Hover"],
  },
  width: 256,
  render: ({ Active }) => (
    <SidebarProvider className="min-h-0">
      <div className="w-64 bg-sidebar p-2">
        <SidebarMenu>
          <ChatItem
            chat={{
              createdAt: new Date("2026-06-10T12:00:00Z"),
              id: "demo",
              title: "Weather in San Francisco this weekend",
              userId: "user",
              visibility: "private",
            }}
            isActive={Active === "Active"}
            onDelete={() => undefined}
            setOpenMobile={() => undefined}
          />
        </SidebarMenu>
      </div>
    </SidebarProvider>
  ),
  stateTarget: "[data-sidebar=menu-item]",
  examples: { matrix: ["Active", "State"] },
});
