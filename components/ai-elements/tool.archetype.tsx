import { defineComponent } from "archetype-os/components";
import { Tool, ToolContent, ToolHeader, ToolInput, ToolOutput } from "./tool";

const states = {
  Pending: "input-streaming",
  Running: "input-available",
  "Awaiting approval": "approval-requested",
  Completed: "output-available",
  Denied: "output-denied",
  Error: "output-error",
} as const;

export default defineComponent({
  key: "tool",
  name: "Tool Call",
  description:
    "Collapsible card for a tool the assistant called (weather lookup, document suggestions): wrench, tool name and a status badge, then the parameters and result as JSON when open.",
  code: { import: "@/components/ai-elements/tool", export: "Tool" },
  properties: {
    Status: { values: Object.keys(states), prop: "state", map: states },
    Open: ["Open", "Closed"],
  },
  width: 450,
  render: ({ Status, Open }) => {
    const state = states[Status as keyof typeof states];
    return (
      <Tool className="w-full" defaultOpen={Open === "Open"}>
        <ToolHeader state={state} type="tool-getWeather" />
        <ToolContent>
          <ToolInput input={{ latitude: 37.76, longitude: -122.41 }} />
          {state === "output-available" || state === "output-error" ? (
            <ToolOutput
              errorText={state === "output-error" ? "Weather service unavailable" : undefined}
              output={
                state === "output-available"
                  ? { temperature: 18, unit: "°C", condition: "Clear" }
                  : undefined
              }
            />
          ) : null}
        </ToolContent>
      </Tool>
    );
  },
  examples: { include: [{ Open: "Closed" }, ...Object.keys(states).map((Status) => ({ Status }))] },
});
