import { defineComponent } from "archetype-os/components";
import { useState } from "react";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import type { ChatMessage } from "@/lib/types";
import { MultimodalInput } from "./multimodal-input";

const noop = (() => {}) as never;
const oneMessage = [{ id: "m1", role: "user", parts: [{ type: "text", text: "Hi" }] }] as never;

function Composer({ state }: { state: string }) {
  const [input, setInput] = useState(state === "Typed" || state === "Editing" ? "Write code to demonstrate Dijkstra's algorithm" : "");
  const [attachments, setAttachments] = useState([]);
  return (
    <MultimodalInput
      attachments={attachments}
      chatId="c1"
      editingMessage={state === "Editing" ? ({ id: "m1", role: "user", parts: [] } as unknown as ChatMessage) : null}
      input={input}
      messages={oneMessage}
      onCancelEdit={state === "Editing" ? () => {} : undefined}
      onModelChange={() => {}}
      selectedModelId={DEFAULT_CHAT_MODEL}
      selectedVisibilityType="private"
      sendMessage={noop}
      setAttachments={setAttachments as never}
      setInput={setInput}
      setMessages={noop}
      status={state === "Streaming" ? "submitted" : "ready"}
      stop={() => {}}
    />
  );
}

export default defineComponent({
  key: "composer",
  name: "Composer",
  description:
    "The chat input at the bottom of every conversation: a rounded card with a growing textarea, an attach button, the model picker and a round send button that turns solid once there is text (a stop button while the answer streams). Type / for slash commands.",
  code: { import: "@/components/chat/multimodal-input", export: "MultimodalInput" },
  properties: {
    State: ["Empty", "Typed", "Streaming", "Editing"],
  },
  width: 720,
  render: ({ State }) => <Composer state={State} />,
});
