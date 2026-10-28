import { defineComponent } from "archetype-os/components";
import { SuggestedActions } from "./suggested-actions";

export default defineComponent({
  key: "suggested-actions",
  name: "Suggested Actions",
  description:
    "Starter prompts on an empty chat: a 2-column grid of quiet cards (horizontal scroll on phones). Clicking one sends it as the first message.",
  code: { import: "@/components/chat/suggested-actions", export: "SuggestedActions" },
  properties: { Layout: ["Desktop", "Mobile"] },
  width: ({ Layout }) => (Layout === "Mobile" ? 360 : 720),
  render: () => (
    <SuggestedActions
      chatId="demo"
      selectedVisibilityType="private"
      sendMessage={async () => undefined}
    />
  ),
  examples: { include: [{ Layout: "Desktop" }, { Layout: "Mobile", $viewport: 390 }] },
});
