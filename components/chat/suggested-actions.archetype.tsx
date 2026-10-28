import { defineComponent } from "archetype-os/components";
import { SuggestedActions } from "./suggested-actions";

export default defineComponent({
  key: "suggested-actions",
  name: "Suggested Actions",
  description:
    "Starter prompts on an empty chat: soft outlined cards in a 2-column grid (a horizontal scroller on phones). Clicking one sends it as the first message.",
  code: { import: "@/components/chat/suggested-actions", export: "SuggestedActions" },
  properties: {
    Layout: ["Desktop", "Mobile"],
  },
  width: ({ Layout }) => (Layout === "Mobile" ? 375 : 720),
  render: () => (
    <SuggestedActions chatId="c1" selectedVisibilityType="private" sendMessage={(async () => {}) as never} />
  ),
  examples: { include: [{}, { Layout: "Mobile", $viewport: 375 }] },
});
