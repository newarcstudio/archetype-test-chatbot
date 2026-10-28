import { defineComponent } from "archetype-os/components";
import { VisibilitySelector } from "./visibility-selector";

export default defineComponent({
  key: "visibility-selector",
  name: "Visibility Selector",
  description:
    "Chat header control that sets who can open a chat: Private (only you) or Public (anyone with the link). Outline small button; the label is hidden on desktop, leaving the icon and chevron.",
  code: { import: "@/components/chat/visibility-selector", export: "VisibilitySelector" },
  properties: {
    Visibility: {
      values: ["Private", "Public"],
      prop: "selectedVisibilityType",
      map: { Private: "private", Public: "public" },
    },
    State: ["Default", "Hover"],
  },
  render: ({ Visibility }) => (
    <VisibilitySelector
      chatId="demo"
      selectedVisibilityType={Visibility === "Public" ? "public" : "private"}
    />
  ),
  examples: { matrix: ["Visibility", "State"] },
});
