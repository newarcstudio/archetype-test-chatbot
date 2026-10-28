import { defineComponent } from "archetype-os/components";
import { Skeleton } from "./skeleton";

export default defineComponent({
  key: "skeleton",
  name: "Skeleton",
  description:
    "Pulsing muted placeholder shown while content loads. Size it with className to the shape it stands in for.",
  code: { import: "@/components/ui/skeleton", export: "Skeleton" },
  properties: { Shape: ["Line", "Block", "Avatar"] },
  render: ({ Shape }) =>
    Shape === "Avatar" ? (
      <Skeleton className="size-8 rounded-full" />
    ) : Shape === "Block" ? (
      <Skeleton className="h-24 w-64" />
    ) : (
      <Skeleton className="h-4 w-48" />
    ),
});
