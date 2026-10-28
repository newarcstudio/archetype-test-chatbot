import { defineComponent } from "archetype-os/components";
import { Spinner } from "./spinner";

export default defineComponent({
  key: "spinner",
  name: "Spinner",
  description: "Spinning loader icon (lucide Loader2), 16px by default. Shown while an upload, a console run or a submit is in progress.",
  code: { import: "@/components/ui/spinner", export: "Spinner" },
  properties: { Size: ["16", "24"] },
  render: ({ Size }) => <Spinner className={Size === "24" ? "size-6" : undefined} />,
});
