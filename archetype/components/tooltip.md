# Tooltip

Dark pill label for icon-only buttons (New chat, Attach, model capabilities). Opens with no delay; TooltipProvider sits in the root layout.

Key: `tooltip`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Side` | `"Top" \| "Bottom" \| "Right" \| "Left"` | `Top` |  |

## Default

_variant: Top_

```html
<div style="position: relative; contain: layout; width: max-content; padding-top: 46px; padding-right: 33px; padding-left: 33px;" class="tooltip"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="tooltip__button" aria-label="New chat" aria-describedby="radix-_r_14_" data-state="instant-open" data-radix-popper-side="top" data-radix-popper-align="center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tooltip__icon"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button><div data-radix-popper-content-wrapper style="position: fixed; left: 0px; top: 0px; transform: translate(8px, 8px); min-width: max-content; --radix-popper-transform-origin: 41px 38px; z-index: 50; --radix-popper-available-width: 1440px; --radix-popper-available-height: 276px; --radix-popper-anchor-width: 32px; --radix-popper-anchor-height: 32px;"><div data-side="top" data-align="center" data-state="instant-open" data-slot="tooltip-content" class="tooltip__box" style="--radix-tooltip-content-transform-origin: var(--radix-popper-transform-origin); --radix-tooltip-content-available-width: var(--radix-popper-available-width); --radix-tooltip-content-available-height: var(--radix-popper-available-height); --radix-tooltip-trigger-width: var(--radix-popper-anchor-width); --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);">New chat<span style="position: absolute; bottom: 0px; transform: translateY(100%); left: 36px;"><svg class="tooltip__icon-2" width="10" height="5" viewBox="0 0 30 10" preserveAspectRatio="none" style="display: block;"><polygon points="0,0 30,0 15,10"></polygon></svg></span><span id="radix-_r_14_" role="tooltip" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">New chat</span></div></div></div>
```

```css
:where(.tooltip, .tooltip *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tooltip, .tooltip *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tooltip, .tooltip *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tooltip, .tooltip *):where(button) {
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

:where(.tooltip, .tooltip *):where(svg) {
  display: block;
  vertical-align: middle;
}

.tooltip {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tooltip__button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.tooltip__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.tooltip__box {
  z-index: 50;
  display: inline-flex;
  width: fit-content;
  max-width: 20rem;
  transform-origin: 41px 38px;
  align-items: center;
  gap: calc(0.25rem * 1.5);
  border-radius: 1rem;
  background-color: oklch(0.12 0 0);
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 1.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: oklch(0.985 0 0);
}

.tooltip__icon-2 {
  z-index: 50;
  width: calc(0.25rem * 2.5);
  height: calc(0.25rem * 2.5);
  translate: 0 calc(-50% - 2px);
  rotate: 45deg;
  border-radius: 2px;
  background-color: oklch(0.12 0 0);
  fill: oklch(0.12 0 0);
}
```

## Bottom

_variant: Bottom_

```html
<div style="position: relative; contain: layout; width: max-content; padding-right: 33px; padding-bottom: 46px; padding-left: 33px;" class="tooltip"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="tooltip__button" aria-label="New chat" aria-describedby="radix-_r_15_" data-state="instant-open" data-radix-popper-side="bottom" data-radix-popper-align="center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tooltip__icon"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button><div data-radix-popper-content-wrapper style="position: fixed; left: 0px; top: 0px; transform: translate(8px, 42px); min-width: max-content; --radix-popper-transform-origin: 41px -10px; z-index: 50; --radix-popper-available-width: 1440px; --radix-popper-available-height: 718px; --radix-popper-anchor-width: 32px; --radix-popper-anchor-height: 32px;"><div data-side="bottom" data-align="center" data-state="instant-open" data-slot="tooltip-content" class="tooltip__box" style="--radix-tooltip-content-transform-origin: var(--radix-popper-transform-origin); --radix-tooltip-content-available-width: var(--radix-popper-available-width); --radix-tooltip-content-available-height: var(--radix-popper-available-height); --radix-tooltip-trigger-width: var(--radix-popper-anchor-width); --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);">New chat<span style="position: absolute; top: 0px; transform-origin: center 0px; transform: rotate(180deg); left: 36px;"><svg class="tooltip__icon-2" width="10" height="5" viewBox="0 0 30 10" preserveAspectRatio="none" style="display: block;"><polygon points="0,0 30,0 15,10"></polygon></svg></span><span id="radix-_r_15_" role="tooltip" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">New chat</span></div></div></div>
```

```css
:where(.tooltip, .tooltip *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tooltip, .tooltip *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tooltip, .tooltip *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tooltip, .tooltip *):where(button) {
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

:where(.tooltip, .tooltip *):where(svg) {
  display: block;
  vertical-align: middle;
}

.tooltip {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tooltip__button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.tooltip__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.tooltip__box {
  z-index: 50;
  display: inline-flex;
  width: fit-content;
  max-width: 20rem;
  transform-origin: 41px -10px;
  align-items: center;
  gap: calc(0.25rem * 1.5);
  border-radius: 1rem;
  background-color: oklch(0.12 0 0);
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 1.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: oklch(0.985 0 0);
}

.tooltip__icon-2 {
  z-index: 50;
  width: calc(0.25rem * 2.5);
  height: calc(0.25rem * 2.5);
  translate: 0 calc(-50% - 2px);
  rotate: 45deg;
  border-radius: 2px;
  background-color: oklch(0.12 0 0);
  fill: oklch(0.12 0 0);
}
```

## Right

_variant: Right_

```html
<div style="position: relative; contain: layout; width: max-content; padding-right: 100px;" class="tooltip"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="tooltip__button" aria-label="New chat" aria-describedby="radix-_r_16_" data-state="instant-open" data-radix-popper-side="right" data-radix-popper-align="center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tooltip__icon"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button><div data-radix-popper-content-wrapper style="position: fixed; left: 0px; top: 0px; transform: translate(42px, 2px); min-width: max-content; --radix-popper-transform-origin: -10px 14px; z-index: 50; --radix-popper-available-width: 1158px; --radix-popper-available-height: 1000px; --radix-popper-anchor-width: 32px; --radix-popper-anchor-height: 32px;"><div data-side="right" data-align="center" data-state="instant-open" data-slot="tooltip-content" class="tooltip__box" style="--radix-tooltip-content-transform-origin: var(--radix-popper-transform-origin); --radix-tooltip-content-available-width: var(--radix-popper-available-width); --radix-tooltip-content-available-height: var(--radix-popper-available-height); --radix-tooltip-trigger-width: var(--radix-popper-anchor-width); --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);">New chat<span style="position: absolute; left: 0px; transform-origin: 0px 0px; transform: translateY(50%) rotate(90deg) translateX(-50%); top: 9px;"><svg class="tooltip__icon-2" width="10" height="5" viewBox="0 0 30 10" preserveAspectRatio="none" style="display: block;"><polygon points="0,0 30,0 15,10"></polygon></svg></span><span id="radix-_r_16_" role="tooltip" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">New chat</span></div></div></div>
```

```css
:where(.tooltip, .tooltip *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tooltip, .tooltip *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tooltip, .tooltip *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tooltip, .tooltip *):where(button) {
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

:where(.tooltip, .tooltip *):where(svg) {
  display: block;
  vertical-align: middle;
}

.tooltip {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tooltip__button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.tooltip__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.tooltip__box {
  z-index: 50;
  display: inline-flex;
  width: fit-content;
  max-width: 20rem;
  transform-origin: -10px 14px;
  align-items: center;
  gap: calc(0.25rem * 1.5);
  border-radius: 1rem;
  background-color: oklch(0.12 0 0);
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 1.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: oklch(0.985 0 0);
}

.tooltip__icon-2 {
  z-index: 50;
  width: calc(0.25rem * 2.5);
  height: calc(0.25rem * 2.5);
  translate: 0 calc(-50% - 2px);
  rotate: 45deg;
  border-radius: 2px;
  background-color: oklch(0.12 0 0);
  fill: oklch(0.12 0 0);
}
```

## Left

_variant: Left_

```html
<div style="position: relative; contain: layout; width: max-content; padding-left: 100px;" class="tooltip"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="tooltip__button" aria-label="New chat" aria-describedby="radix-_r_17_" data-state="instant-open" data-radix-popper-side="left" data-radix-popper-align="center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tooltip__icon"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button><div data-radix-popper-content-wrapper style="position: fixed; left: 0px; top: 0px; transform: translate(8px, 2px); min-width: max-content; --radix-popper-transform-origin: 91.6094px 14px; z-index: 50; --radix-popper-available-width: 330px; --radix-popper-available-height: 1000px; --radix-popper-anchor-width: 32px; --radix-popper-anchor-height: 32px;"><div data-side="left" data-align="center" data-state="instant-open" data-slot="tooltip-content" class="tooltip__box" style="--radix-tooltip-content-transform-origin: var(--radix-popper-transform-origin); --radix-tooltip-content-available-width: var(--radix-popper-available-width); --radix-tooltip-content-available-height: var(--radix-popper-available-height); --radix-tooltip-trigger-width: var(--radix-popper-anchor-width); --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);">New chat<span style="position: absolute; right: 0px; transform-origin: 100% 0px; transform: translateY(50%) rotate(-90deg) translateX(50%); top: 9px;"><svg class="tooltip__icon-2" width="10" height="5" viewBox="0 0 30 10" preserveAspectRatio="none" style="display: block;"><polygon points="0,0 30,0 15,10"></polygon></svg></span><span id="radix-_r_17_" role="tooltip" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">New chat</span></div></div></div>
```

```css
:where(.tooltip, .tooltip *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tooltip, .tooltip *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tooltip, .tooltip *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tooltip, .tooltip *):where(button) {
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

:where(.tooltip, .tooltip *):where(svg) {
  display: block;
  vertical-align: middle;
}

.tooltip {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tooltip__button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.tooltip__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.tooltip__box {
  z-index: 50;
  display: inline-flex;
  width: fit-content;
  max-width: 20rem;
  transform-origin: 91.6094px 14px;
  align-items: center;
  gap: calc(0.25rem * 1.5);
  border-radius: 1rem;
  background-color: oklch(0.12 0 0);
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 1.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: oklch(0.985 0 0);
}

.tooltip__icon-2 {
  z-index: 50;
  width: calc(0.25rem * 2.5);
  height: calc(0.25rem * 2.5);
  translate: 0 calc(-50% - 2px);
  rotate: 45deg;
  border-radius: 2px;
  background-color: oklch(0.12 0 0);
  fill: oklch(0.12 0 0);
}
```
