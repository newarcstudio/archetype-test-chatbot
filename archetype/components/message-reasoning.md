# Message Reasoning

The model's thinking above an answer. While streaming it shimmers "Thinking..." and stays open; once done it reads "Thought for a few seconds" and collapses, with a chevron to reopen.

Key: `message-reasoning`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `State` | `"Done" \| "Streaming"` | `Done` |  |

## Default

_variant: Message Reasoning_

```html
<div data-state="closed" data-slot="collapsible" class="message-reasoning" data-testid="message-reasoning">
  <button type="button" aria-expanded="false" data-state="closed" data-slot="collapsible-trigger" class="message-reasoning__button"><p>Thought for a few seconds</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-reasoning__icon"><path d="m6 9 6 6 6-6"></path></svg></button>
</div>
```

```css
:where(.message-reasoning, .message-reasoning *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message-reasoning, .message-reasoning *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message-reasoning, .message-reasoning *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message-reasoning, .message-reasoning *):where(button) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
  appearance: button;
}

:where(.message-reasoning, .message-reasoning *):where(p) {
  line-height: 1.6;
}

:where(.message-reasoning, .message-reasoning *):where(svg) {
  display: block;
  vertical-align: middle;
}

.message-reasoning {
  width: 560px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message-reasoning__button {
  display: flex;
  width: 100%;
  align-items: center;
  gap: calc(0.25rem * 2);
  font-size: 13px;
  line-height: 1.65;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.message-reasoning__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  rotate: 0deg;
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
```

## Streaming

_state: streaming · variant: Message Reasoning_

```html
<div data-state="open" data-slot="collapsible" class="message-reasoning" data-testid="message-reasoning"><button type="button" aria-controls="radix-_r_1_" aria-expanded="true" data-state="open" data-slot="collapsible-trigger" class="message-reasoning__button"><p class="message-reasoning__text" style="--spread: 22px; background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) calc(50% - 22px), var(--color-semantic-primary-foreground, rgb(250, 250, 250)), rgba(0, 0, 0, 0) calc(50% + 22px)), linear-gradient(var(--color-semantic-muted-foreground, rgb(122, 122, 122)), var(--color-semantic-muted-foreground, rgb(122, 122, 122))); background-position: 0% center;">Thinking...</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-reasoning__icon"><path d="m6 9 6 6 6-6"></path></svg></button><div class="message-reasoning__box"><div class="message-reasoning__box-2" style="scrollbar-width: none;"><div class="message-reasoning__box-3"><p class="message-reasoning__text-2">The user wants a quick weather summary for San Francisco. I'll look up the current conditions, then give the high and low for today in one short sentence.</p></div></div></div></div>
```

```css
:where(.message-reasoning, .message-reasoning *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message-reasoning, .message-reasoning *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message-reasoning, .message-reasoning *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message-reasoning, .message-reasoning *):where(button) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
  appearance: button;
}

:where(.message-reasoning, .message-reasoning *):where(p) {
  line-height: 1.6;
}

:where(.message-reasoning, .message-reasoning *):where(svg) {
  display: block;
  vertical-align: middle;
}

.message-reasoning {
  width: 560px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message-reasoning__button {
  display: flex;
  width: 100%;
  align-items: center;
  gap: calc(0.25rem * 2);
  font-size: 13px;
  line-height: 1.65;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.message-reasoning__text {
  position: relative;
  display: inline-block;
  background-size: 250% 100%, auto;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 500;
  color: transparent;
}

.message-reasoning__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  rotate: 180deg;
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.message-reasoning__box {
  margin-top: calc(0.25rem * 2);
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 60%, transparent);
  transition-duration: 200ms;
  animation-name: enter;
  overflow-anchor: none;
  animation-duration: 200ms;
}

.message-reasoning__box-2 {
  max-height: 200px;
  overflow-y: auto;
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 20%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-muted, #ebebeb) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  font-size: 11px;
  line-height: 1.625;
}

.message-reasoning__box-3 {
  white-space: normal;
}

.message-reasoning__text-2 {
  margin-top: 0;
  margin-bottom: 0;
}

@keyframes enter {
  0% {
  opacity: var(--tw-enter-opacity, 1);
  transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
```
