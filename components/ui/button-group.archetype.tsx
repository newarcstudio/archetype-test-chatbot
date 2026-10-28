import { defineComponent } from "archetype-os/components";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "./button-group";

export default defineComponent({
  key: "button-group",
  name: "Button Group",
  description:
    "Joins buttons into one control: inner corners squared, shared borders. Horizontal or vertical; ButtonGroupText adds a label segment. The AI elements use it for the message branch pager (‹ 1 of 3 ›).",
  code: { import: "@/components/ui/button-group", export: "ButtonGroup" },
  properties: {
    Content: ["Outline buttons", "With text", "Branch pager"],
    Orientation: { values: ["Horizontal", "Vertical"], prop: "orientation", map: { Horizontal: "horizontal", Vertical: "vertical" } },
  },
  render: ({ Content, Orientation }) => {
    const orientation = Orientation === "Vertical" ? "vertical" : "horizontal";
    if (Content === "Branch pager") {
      return (
        <ButtonGroup className="[&>*:not(:first-child)]:rounded-l-md [&>*:not(:last-child)]:rounded-r-md" orientation="horizontal">
          <Button aria-label="Previous branch" size="icon-sm" variant="ghost">
            <ChevronLeftIcon size={14} />
          </Button>
          <ButtonGroupText className="border-none bg-transparent text-muted-foreground shadow-none">1 of 3</ButtonGroupText>
          <Button aria-label="Next branch" size="icon-sm" variant="ghost">
            <ChevronRightIcon size={14} />
          </Button>
        </ButtonGroup>
      );
    }
    if (Content === "With text") {
      return (
        <ButtonGroup orientation={orientation}>
          <ButtonGroupText>Model</ButtonGroupText>
          <Button variant="outline">GPT-5</Button>
        </ButtonGroup>
      );
    }
    return (
      <ButtonGroup orientation={orientation}>
        <Button variant="outline">Copy</Button>
        <Button variant="outline">Edit</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">Share</Button>
      </ButtonGroup>
    );
  },
  examples: {
    include: [
      {},
      { Orientation: "Vertical" },
      { Content: "With text" },
      { Content: "Branch pager" },
    ],
  },
});
