import { defineComponent } from "archetype-os/components";
import { MessageReasoning } from "./message-reasoning";

const reasoning =
  "The user wants a quick weather summary for San Francisco. I'll look up the current conditions, then give the high and low for today in one short sentence.";

export default defineComponent({
  key: "message-reasoning",
  name: "Message Reasoning",
  description:
    "The model's thinking above an answer. While streaming it shimmers \"Thinking...\" and stays open; once done it reads \"Thought for a few seconds\" and collapses, with a chevron to reopen.",
  code: { import: "@/components/chat/message-reasoning", export: "MessageReasoning" },
  properties: {
    State: {
      values: ["Done", "Streaming"],
      prop: "isLoading",
      map: { Done: false, Streaming: true },
    },
  },
  width: 560,
  render: ({ State }) => (
    <MessageReasoning isLoading={State === "Streaming"} reasoning={reasoning} />
  ),
});
