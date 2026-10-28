import { defineComponent } from "archetype-os/components";
import { Badge } from "./badge";

const variants = { Default: "default", Secondary: "secondary", Destructive: "destructive", Outline: "outline", Ghost: "ghost", Link: "link" } as const;

export default defineComponent({
  key: "badge",
  name: "Badge",
  description:
    "Small pill label. In the product it is the Secondary badge carrying a tool call's status (Running, Completed, Error).",
  code: { import: "@/components/ui/badge", export: "Badge" },
  properties: {
    Variant: { values: Object.keys(variants), prop: "variant", map: variants },
  },
  render: ({ Variant }) => (
    <Badge variant={variants[Variant as keyof typeof variants]}>Completed</Badge>
  ),
});
