import { defineComponent } from "archetype-os/components";
import type { ChatMessage } from "@/lib/types";
import { DataStreamProvider } from "./data-stream-provider";
import { PreviewMessage, ThinkingMessage } from "./message";

const noop = () => undefined;

const answer =
  "Here's a quick look at **Next.js** advantages:\n\n- **Server components** keep JavaScript off the client.\n- **File-based routing** with nested layouts.\n- Built-in `next/image` and font optimization.\n\nWant an example project?";

const messages: Record<string, ChatMessage> = {
  User: {
    id: "u1",
    parts: [{ text: "What are the advantages of using Next.js?", type: "text" }],
    role: "user",
  } as ChatMessage,
  Assistant: {
    id: "a1",
    parts: [{ text: answer, type: "text" }],
    role: "assistant",
  } as ChatMessage,
  "With reasoning": {
    id: "a2",
    parts: [
      {
        state: "done",
        text: "The user wants a short overview. I'll list three strengths and offer an example.",
        type: "reasoning",
      },
      { text: answer, type: "text" },
    ],
    role: "assistant",
  } as ChatMessage,
  "With tool call": {
    id: "a3",
    parts: [
      {
        input: { latitude: 37.76, longitude: -122.41 },
        state: "input-available",
        toolCallId: "t1",
        type: "tool-getWeather",
      },
    ],
    role: "assistant",
  } as ChatMessage,
};

export default defineComponent({
  key: "message",
  name: "Chat Message",
  description:
    "One turn in the conversation. The user's text sits right in a soft gradient bubble; the assistant's is plain markdown beside a sparkle avatar, with reasoning, tool calls and copy/vote actions (shown on hover) beneath. Thinking is the shimmer shown before the first token.",
  code: { import: "@/components/chat/message", export: "PreviewMessage" },
  properties: {
    Kind: ["User", "Assistant", "With reasoning", "With tool call", "Thinking"],
    State: ["Default", "Hover"],
  },
  width: 720,
  render: ({ Kind }) => (
    <DataStreamProvider>
      {Kind === "Thinking" ? (
        <ThinkingMessage />
      ) : (
        <PreviewMessage
          addToolApprovalResponse={noop as never}
          chatId="demo"
          isLoading={false}
          isReadonly={false}
          message={messages[Kind]}
          regenerate={noop as never}
          requiresScrollPadding={false}
          setMessages={noop}
          vote={undefined}
        />
      )}
    </DataStreamProvider>
  ),
  examples: {
    include: [
      ...["User", "Assistant", "With reasoning", "With tool call", "Thinking"].map((Kind) => ({ Kind })),
      { Kind: "User", State: "Hover" },
      { Kind: "Assistant", State: "Hover" },
    ],
  },
});
