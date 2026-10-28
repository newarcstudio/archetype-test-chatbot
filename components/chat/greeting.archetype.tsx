import { defineComponent } from "archetype-os/components";
import { Greeting } from "./greeting";

export default defineComponent({
  key: "greeting",
  name: "Greeting",
  description: "Centered welcome on an empty chat, above the suggested prompts and the composer.",
  code: { import: "@/components/chat/greeting", export: "Greeting" },
  width: 720,
  render: () => <Greeting />,
});
