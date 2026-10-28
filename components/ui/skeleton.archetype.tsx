import { defineComponent } from "archetype-os/components";
import { Skeleton } from "./skeleton";

export default defineComponent({
  key: "skeleton",
  name: "Skeleton",
  description: "Pulsing muted placeholder block for content that is loading, e.g. the sidebar's chat history rows. Size it with classes.",
  code: { import: "@/components/ui/skeleton", export: "Skeleton" },
  properties: { Shape: ["Line", "Block", "List"] },
  width: 240,
  render: ({ Shape }) =>
    Shape === "List" ? (
      <div className="flex flex-col gap-2">
        {[80, 60, 72, 50].map((w) => (
          <Skeleton className="h-4" key={w} style={{ width: `${w}%` }} />
        ))}
      </div>
    ) : (
      <Skeleton className={Shape === "Block" ? "h-24 w-full" : "h-4 w-3/4"} />
    ),
});
