import { defineComponent } from "archetype-os/components";
import { Tool, ToolContent, ToolHeader, ToolInput, ToolOutput } from "./tool";

const states = {
  Pending: "input-streaming",
  Running: "input-available",
  "Awaiting approval": "approval-requested",
  Completed: "output-available",
  Error: "output-error",
  Denied: "output-denied",
} as const;

export default defineComponent({
  key: "tool-call",
  name: "Tool Call",
  description:
    "A tool invocation inside an assistant message: bordered collapsible with a wrench, the tool name and a status badge; opened, it shows the parameters and the result as JSON.",
  code: { import: "@/components/ai-elements/tool", export: "Tool" },
  properties: {
    Status: { values: Object.keys(states), prop: "state", map: states },
    Open: ["Collapsed", "Expanded"],
  },
  width: 450,
  render: ({ Status, Open }) => {
    const state = states[Status as keyof typeof states];
    return (
      <Tool defaultOpen={Open === "Expanded"}>
        <ToolHeader state={state} type="tool-getWeather" />
        <ToolContent>
          <ToolInput input={{ city: "San Francisco" }} />
          {state === "output-available" && (
            <ToolOutput errorText={undefined} output={{ temperature: 21.6, unit: "°C" }} />
          )}
          {state === "output-error" && <ToolOutput errorText="Weather service timed out" output={undefined} />}
        </ToolContent>
      </Tool>
    );
  },
  examples: {
    matrix: ["Status"],
    include: [
      { Status: "Completed", Open: "Expanded" },
      { Status: "Error", Open: "Expanded" },
    ],
  },
});
