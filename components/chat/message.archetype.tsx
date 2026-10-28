import { defineComponent } from "archetype-os/components";
import type { ChatMessage } from "@/lib/types";
import { DataStreamProvider } from "./data-stream-provider";
import { PreviewMessage, ThinkingMessage } from "./message";

const noop = (() => {}) as never;

const userMessage = {
  id: "m-user",
  role: "user",
  parts: [{ type: "text", text: "What are the advantages of using Next.js?" }],
} as unknown as ChatMessage;

const assistantText = `Next.js gives you a few things out of the box:

- **Server rendering and static generation**, per route
- **File-based routing** with nested layouts
- **Server Actions** for mutations without a separate API

Want a short example of each?`;

const assistantMessage = {
  id: "m-assistant",
  role: "assistant",
  parts: [{ type: "text", text: assistantText }],
} as unknown as ChatMessage;

const reasoningMessage = {
  id: "m-reasoning",
  role: "assistant",
  parts: [
    { type: "reasoning", text: "The user wants a quick overview, so I'll list the three biggest wins.", state: "done" },
    { type: "text", text: "The three biggest wins are server rendering, file-based routing and Server Actions." },
  ],
} as unknown as ChatMessage;

export default defineComponent({
  key: "chat-message",
  name: "Chat Message",
  description:
    "One turn in the conversation. User turns are a right-aligned gradient bubble; assistant turns sit beside a small sparkles avatar, render Markdown, and end with copy / vote actions that appear on hover. Thinking is the placeholder while the model hasn't answered yet.",
  code: { import: "@/components/chat/message", export: "PreviewMessage" },
  properties: {
    Role: ["User", "Assistant", "Assistant with reasoning", "Thinking"],
    Actions: ["Shown", "Read-only"],
    State: ["Default", "Hover"],
  },
  width: 720,
  render: ({ Role, Actions }) => {
    if (Role === "Thinking") {
      return (
        <DataStreamProvider>
          <ThinkingMessage />
        </DataStreamProvider>
      );
    }
    const message = Role === "User" ? userMessage : Role === "Assistant" ? assistantMessage : reasoningMessage;
    return (
      <DataStreamProvider>
        <PreviewMessage
          addToolApprovalResponse={noop}
          chatId="c1"
          isLoading={false}
          isReadonly={Actions === "Read-only"}
          message={message}
          onEdit={Role === "User" ? () => {} : undefined}
          regenerate={noop}
          requiresScrollPadding={false}
          setMessages={noop}
          vote={undefined}
        />
      </DataStreamProvider>
    );
  },
  examples: {
    matrix: ["Role"],
    include: [
      { Role: "User", State: "Hover" },
      { Role: "Assistant", State: "Hover" },
      { Role: "Assistant", Actions: "Read-only" },
    ],
  },
});
