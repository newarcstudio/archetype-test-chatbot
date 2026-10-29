# Suggested Actions

Starter prompts on an empty chat: a 2-column grid of quiet cards (horizontal scroll on phones). Clicking one sends it as the first message.

Key: `suggested-actions`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Layout` | `"Desktop" \| "Mobile"` | `Desktop` |  |

## Default

_variant: Desktop_

```html
<div class="suggested-actions" data-testid="suggested-actions" style="scrollbar-width: none;"><div class="suggested-actions__box" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="suggested-actions__button" type="button">What are the advantages of using Next.js?</button></div><div class="suggested-actions__box" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="suggested-actions__button" type="button">Write code to demonstrate Dijkstra's algorithm</button></div><div class="suggested-actions__box" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="suggested-actions__button" type="button">Help me write an essay about Silicon Valley</button></div><div class="suggested-actions__box" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="suggested-actions__button" type="button">What is the weather in San Francisco?</button></div></div>
```

```css
:where(.suggested-actions, .suggested-actions *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.suggested-actions, .suggested-actions *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.suggested-actions, .suggested-actions *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.suggested-actions, .suggested-actions *):where(button) {
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

.suggested-actions {
  width: 720px;
  gap: calc(0.25rem * 2.5);
  overflow-x: auto;
  padding-bottom: 0.25rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: visible;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.suggested-actions__box {
  min-width: 0;
  flex-shrink: 1;
}

.suggested-actions__button {
  display: inline-flex;
  height: auto;
  width: 100%;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: calc(0.625rem + 4px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, oklch(0.9 0 0) 50%, transparent);
  background-color: color-mix(in oklab, oklch(1 0 0) 30%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 3);
  text-align: left;
  line-height: 1.625;
  font-weight: 500;
  color: oklch(0.58 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
  padding: calc(0.25rem * 4);
  font-size: 13px;
  white-space: normal;
}
```

## Mobile

_variant: Mobile_

```html
<div class="suggested-actions" data-testid="suggested-actions" style="scrollbar-width: none;"><div class="suggested-actions__box" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="suggested-actions__button" type="button">What are the advantages of using Next.js?</button></div><div class="suggested-actions__box" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="suggested-actions__button" type="button">Write code to demonstrate Dijkstra's algorithm</button></div><div class="suggested-actions__box" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="suggested-actions__button" type="button">Help me write an essay about Silicon Valley</button></div><div class="suggested-actions__box" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="suggested-actions__button" type="button">What is the weather in San Francisco?</button></div></div>
```

```css
:where(.suggested-actions, .suggested-actions *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.suggested-actions, .suggested-actions *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.suggested-actions, .suggested-actions *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.suggested-actions, .suggested-actions *):where(button) {
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

.suggested-actions {
  display: flex;
  width: 360px;
  gap: calc(0.25rem * 2.5);
  overflow-x: auto;
  padding-bottom: 0.25rem;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.suggested-actions__box {
  min-width: 200px;
  flex-shrink: 0;
}

.suggested-actions__button {
  display: inline-flex;
  height: auto;
  width: 100%;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: calc(0.625rem + 4px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, oklch(0.9 0 0) 50%, transparent);
  background-color: color-mix(in oklab, oklch(1 0 0) 30%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 3);
  text-align: left;
  font-size: 12px;
  line-height: 1.625;
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.58 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
}
```
