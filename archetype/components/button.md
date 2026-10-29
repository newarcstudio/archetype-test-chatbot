# Button

The app's button (shadcn). Default (solid) for the main action, Outline for secondary actions like the visibility picker, Ghost for icon actions in toolbars and the sidebar, Destructive for deletes. Icon sizes (mostly Icon small) are the most used in the chat UI.

Key: `button`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Variant` | `"Default" \| "Outline" \| "Secondary" \| "Ghost" \| "Destructive" \| "Link"` | `Default` |  |
| `Size` | `"Default" \| "Small" \| "Extra small" \| "Large" \| "Icon" \| "Icon small"` | `Default` |  |
| `State` | `"Default" \| "Hover" \| "Pressed" \| "Focus" \| "Disabled"` | `Default` |  |

## Default

_variant: Default · size: Default_

```html
<button data-slot="button" data-variant="default" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Hover

_variant: Default · size: Default · state: hover_

```html
<button data-slot="button" data-variant="default" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  background-color: color-mix(in oklab, var(--color-semantic-sidebar-accent-foreground, #060606) 80%, transparent);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Pressed

_variant: Default · size: Default · state: pressed_

```html
<button data-slot="button" data-variant="default" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  background-color: color-mix(in oklab, var(--color-semantic-sidebar-accent-foreground, #060606) 80%, transparent);
  translate: 0 1px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Focus

_variant: Default · size: Default · state: focus_

```html
<button data-slot="button" data-variant="default" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  outline: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Disabled

_variant: Default · size: Default · state: disabled_

```html
<button data-slot="button" data-variant="default" data-size="default" class="button" disabled>New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  opacity: 50%;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Small

_variant: Default · size: Small_

```html
<button data-slot="button" data-variant="default" data-size="sm" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Extra small

_variant: Default · size: Extra small_

```html
<button data-slot="button" data-variant="default" data-size="xs" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 6);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 2.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Large

_variant: Default · size: Large_

```html
<button data-slot="button" data-variant="default" data-size="lg" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 10);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 4);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Icon

_variant: Default · size: Icon_

```html
<button data-slot="button" data-variant="default" data-size="icon" class="button" aria-label="Send">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="button__icon"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *):where(svg) {
  display: block;
  vertical-align: middle;
}

.button {
  display: inline-flex;
  width: calc(0.25rem * 9);
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}

.button__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}
```

## Icon small

_variant: Default · size: Icon small_

```html
<button data-slot="button" data-variant="default" data-size="icon-sm" class="button" aria-label="Send">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="button__icon"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *):where(svg) {
  display: block;
  vertical-align: middle;
}

.button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}

.button__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}
```

## Outline

_variant: Outline · size: Default_

```html
<button data-slot="button" data-variant="outline" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}
```

## Outline · Hover

_variant: Outline · size: Default · state: hover_

```html
<button data-slot="button" data-variant="outline" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-semantic-input, #dedede);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  background-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 50%, transparent);
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Outline · Pressed

_variant: Outline · size: Default · state: pressed_

```html
<button data-slot="button" data-variant="outline" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-semantic-input, #dedede);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  background-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 50%, transparent);
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  translate: 0 1px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Outline · Focus

_variant: Outline · size: Default · state: focus_

```html
<button data-slot="button" data-variant="outline" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  outline: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}
```

## Outline · Disabled

_variant: Outline · size: Default · state: disabled_

```html
<button data-slot="button" data-variant="outline" data-size="default" class="button" disabled>New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  pointer-events: none;
  opacity: 50%;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}
```

## Outline · Icon small

_variant: Outline · size: Icon small_

```html
<button data-slot="button" data-variant="outline" data-size="icon-sm" class="button" aria-label="Send">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="button__icon"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *):where(svg) {
  display: block;
  vertical-align: middle;
}

.button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.button__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}
```

## Secondary

_variant: Secondary · size: Default_

```html
<button data-slot="button" data-variant="secondary" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-accent, #f3f3f3);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-foreground, #424242);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Secondary · Hover

_variant: Secondary · size: Default · state: hover_

```html
<button data-slot="button" data-variant="secondary" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-foreground, #424242);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  background-color: color-mix(in oklab, var(--color-semantic-accent, #f3f3f3) 80%, transparent);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Secondary · Pressed

_variant: Secondary · size: Default · state: pressed_

```html
<button data-slot="button" data-variant="secondary" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-foreground, #424242);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  background-color: color-mix(in oklab, var(--color-semantic-accent, #f3f3f3) 80%, transparent);
  translate: 0 1px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Secondary · Focus

_variant: Secondary · size: Default · state: focus_

```html
<button data-slot="button" data-variant="secondary" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-accent, #f3f3f3);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-foreground, #424242);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  outline: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Secondary · Disabled

_variant: Secondary · size: Default · state: disabled_

```html
<button data-slot="button" data-variant="secondary" data-size="default" class="button" disabled>New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-accent, #f3f3f3);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-foreground, #424242);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  opacity: 50%;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Ghost

_variant: Ghost · size: Default_

```html
<button data-slot="button" data-variant="ghost" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}
```

## Ghost · Hover

_variant: Ghost · size: Default · state: hover_

```html
<button data-slot="button" data-variant="ghost" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  background-color: var(--color-semantic-muted, #ebebeb);
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Ghost · Pressed

_variant: Ghost · size: Default · state: pressed_

```html
<button data-slot="button" data-variant="ghost" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  background-color: var(--color-semantic-muted, #ebebeb);
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  translate: 0 1px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Ghost · Focus

_variant: Ghost · size: Default · state: focus_

```html
<button data-slot="button" data-variant="ghost" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  outline: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}
```

## Ghost · Disabled

_variant: Ghost · size: Default · state: disabled_

```html
<button data-slot="button" data-variant="ghost" data-size="default" class="button" disabled>New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
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
  pointer-events: none;
  opacity: 50%;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}
```

## Ghost · Icon small

_variant: Ghost · size: Icon small_

```html
<button data-slot="button" data-variant="ghost" data-size="icon-sm" class="button" aria-label="Send">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="button__icon"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *):where(svg) {
  display: block;
  vertical-align: middle;
}

.button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.button__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}
```

## Ghost · Icon small · Hover

_variant: Ghost · size: Icon small · state: hover_

```html
<button data-slot="button" data-variant="ghost" data-size="icon-sm" class="button" aria-label="Send">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="button__icon"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *):where(svg) {
  display: block;
  vertical-align: middle;
}

.button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
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
  background-color: var(--color-semantic-muted, #ebebeb);
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}

.button__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}
```

## Destructive

_variant: Destructive · size: Default_

```html
<button data-slot="button" data-variant="destructive" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: color-mix(in oklab, var(--color-semantic-destructive, #b94642) 10%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-destructive, #b94642);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Destructive · Hover

_variant: Destructive · size: Default · state: hover_

```html
<button data-slot="button" data-variant="destructive" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-destructive, #b94642);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  background-color: color-mix(in oklab, var(--color-semantic-destructive, #b94642) 20%, transparent);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Destructive · Pressed

_variant: Destructive · size: Default · state: pressed_

```html
<button data-slot="button" data-variant="destructive" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-destructive, #b94642);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  background-color: color-mix(in oklab, var(--color-semantic-destructive, #b94642) 20%, transparent);
  translate: 0 1px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Destructive · Focus

_variant: Destructive · size: Default · state: focus_

```html
<button data-slot="button" data-variant="destructive" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) color-mix(in oklab, var(--color-semantic-destructive, #b94642) 20%, transparent);
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  background-color: color-mix(in oklab, var(--color-semantic-destructive, #b94642) 10%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-destructive, #b94642);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  border-color: color-mix(in oklab, var(--color-semantic-destructive, #b94642) 40%, transparent);
  outline: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Destructive · Disabled

_variant: Destructive · size: Default · state: disabled_

```html
<button data-slot="button" data-variant="destructive" data-size="default" class="button" disabled>New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: color-mix(in oklab, var(--color-semantic-destructive, #b94642) 10%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-destructive, #b94642);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  opacity: 50%;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Link

_variant: Link · size: Default_

```html
<button data-slot="button" data-variant="link" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  text-underline-offset: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Link · Hover

_variant: Link · size: Default · state: hover_

```html
<button data-slot="button" data-variant="link" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  text-underline-offset: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  text-decoration-line: underline;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Link · Pressed

_variant: Link · size: Default · state: pressed_

```html
<button data-slot="button" data-variant="link" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  text-underline-offset: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  text-decoration-line: underline;
  translate: 0 1px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Link · Focus

_variant: Link · size: Default · state: focus_

```html
<button data-slot="button" data-variant="link" data-size="default" class="button">New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  text-underline-offset: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  outline: none;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Link · Disabled

_variant: Link · size: Default · state: disabled_

```html
<button data-slot="button" data-variant="link" data-size="default" class="button" disabled>New chat</button>
```

```css
:where(.button, .button *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.button, .button *):where(button) {
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

:where(.button, .button *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.button, .button *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.button {
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  text-underline-offset: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  opacity: 50%;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```
