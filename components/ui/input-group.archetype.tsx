import { defineComponent } from "archetype-os/components";
import { ArrowUpIcon, PaperclipIcon, SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group";

export default defineComponent({
  key: "input-group",
  name: "Input Group",
  description:
    "A field with addons (icons, text, buttons) inside one border. Inline addons for search fields (the model picker's search), block addons for the composer: textarea on top, tool buttons in a footer row. Fills its parent's width.",
  code: { import: "@/components/ui/input-group", export: "InputGroup" },
  properties: {
    Layout: ["Search", "Text addon", "Composer"],
    State: ["Default", "Focus", "Invalid", "Disabled"],
  },
  width: 400,
  stateTarget: "[data-slot=input-group-control]",
  render: ({ Layout, State }) => {
    const invalid = State === "Invalid" || undefined;
    const disabled = State === "Disabled";
    if (Layout === "Composer") {
      return (
        <InputGroup data-disabled={disabled || undefined}>
          <InputGroupTextarea aria-invalid={invalid} disabled={disabled} placeholder="Ask anything..." />
          <InputGroupAddon align="block-end" className="justify-between">
            <InputGroupButton size="icon-xs" variant="ghost">
              <PaperclipIcon />
            </InputGroupButton>
            <InputGroupButton className="rounded-xl" size="icon-xs" variant="default">
              <ArrowUpIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      );
    }
    if (Layout === "Text addon") {
      return (
        <InputGroup data-disabled={disabled || undefined}>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput aria-invalid={invalid} disabled={disabled} placeholder="example.com" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      );
    }
    return (
      <InputGroup data-disabled={disabled || undefined}>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput aria-invalid={invalid} disabled={disabled} placeholder="Search models..." />
      </InputGroup>
    );
  },
  examples: { matrix: ["Layout", "State"] },
});
