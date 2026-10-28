import { defineComponent } from "archetype-os/components";
import { Spinner } from "./spinner";

export default defineComponent({
  key: "spinner",
  name: "Spinner",
  description:
    "Spinning loader icon (lucide Loader2) with role=status. Inherits the text color; size with className (size-4 default, size-5 over attachment uploads).",
  code: { import: "@/components/ui/spinner", export: "Spinner" },
  properties: { Size: ["Default", "Large"] },
  render: ({ Size }) => <Spinner className={Size === "Large" ? "size-5" : undefined} />,
});
