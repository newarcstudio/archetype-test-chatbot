import { defineComponent } from "archetype-os/components";
import type { UIMessage } from "ai";
import { SWRConfig } from "swr";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { MultimodalInput } from "./multimodal-input";

const noop = () => undefined;
const asyncNoop = async () => undefined;
const earlier = [{ id: "m1", parts: [{ text: "Hi", type: "text" }], role: "user" }] as UIMessage[];
const image =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#a5b4fc"/><circle cx="66" cy="30" r="10" fill="#fde68a"/><path d="M0 80 L32 44 L60 72 L76 58 L96 78 L96 96 L0 96Z" fill="#3730a3" opacity=".7"/></svg>'
  );

// /api/models isn't served while drawing: hand SWR what it would return for
// the default model so the attach button is drawn enabled, as in the app.
const models = {
  capabilities: { [DEFAULT_CHAT_MODEL]: { reasoning: true, tools: true, vision: true } },
};

export default defineComponent({
  key: "multimodal-input",
  name: "Chat Composer",
  description:
    "The message box at the bottom of a chat: auto-growing textarea, attach button, model picker and send (stop while waiting for a reply). On an empty chat the suggested prompts sit above it; attachments preview inside it.",
  code: { import: "@/components/chat/multimodal-input", export: "MultimodalInput" },
  properties: {
    Content: ["Empty", "Typed", "Attachment"],
    Status: {
      values: ["Ready", "Submitted", "Streaming"],
      prop: "status",
      map: { Ready: "ready", Submitted: "submitted", Streaming: "streaming" },
    },
    Chat: ["Ongoing", "New"],
  },
  width: 720,
  render: ({ Content, Status, Chat }) => (
    <SWRConfig value={{ fallback: { "/api/models": models }, provider: () => new Map() }}>
      <MultimodalInput
        attachments={
          Content === "Attachment"
            ? [{ contentType: "image/svg+xml", name: "skyline.png", url: image }]
            : []
        }
        chatId="demo"
        input={Content === "Typed" ? "What's the weather in San Francisco this weekend?" : ""}
        messages={Chat === "New" ? [] : earlier}
        onModelChange={noop}
        selectedModelId={DEFAULT_CHAT_MODEL}
        selectedVisibilityType="private"
        sendMessage={asyncNoop}
        setAttachments={noop}
        setInput={noop}
        setMessages={noop}
        status={Status === "Submitted" ? "submitted" : Status === "Streaming" ? "streaming" : "ready"}
        stop={noop}
      />
    </SWRConfig>
  ),
  stateTarget: "textarea",
  examples: {
    include: [
      {},
      { Content: "Typed" },
      { Content: "Attachment" },
      { Status: "Submitted" },
      { Status: "Streaming" },
      { Chat: "New" },
    ],
  },
});
