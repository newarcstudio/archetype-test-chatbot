import { defineComponent } from "archetype-os/components";
import { Greeting } from "./greeting";

export default defineComponent({
  key: "greeting",
  name: "Greeting",
  description: "Empty-chat headline: \"What can I help with?\" and a muted one-line hint, centered above the composer. Fades up on mount.",
  code: { import: "@/components/chat/greeting", export: "Greeting" },
  width: 640,
  render: () => <Greeting />,
});
