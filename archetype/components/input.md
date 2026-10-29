# Input

Single-line text field, fully rounded. Used on the sign-in and sign-up forms. Invalid draws the destructive ring via aria-invalid.

Key: `input`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Content` | `"Placeholder" \| "Filled"` | `Placeholder` |  |
| `State` | `"Default" \| "Hover" \| "Focus" \| "Invalid" \| "Disabled"` | `Default` |  |

## Default

_variant: Placeholder_

```html
<input data-slot="input" class="input" placeholder="user@acme.com" type="email" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: oklch(0.9 0 0);
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Hover

_variant: Placeholder · state: hover_

```html
<input data-slot="input" class="input" placeholder="user@acme.com" type="email" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: oklch(0.9 0 0);
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Focus

_variant: Placeholder · state: focus_

```html
<input data-slot="input" class="input" placeholder="user@acme.com" type="email" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, oklch(0.5 0 0) 50%, transparent);
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  border-color: oklch(0.5 0 0);
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, oklch(0.5 0 0) 50%, transparent);
  outline: none;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Invalid

_variant: Placeholder · state: invalid_

```html
<input data-slot="input" class="input" aria-invalid="true" placeholder="user@acme.com" type="email" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, oklch(0.55 0.15 25) 20%, transparent);
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  border-color: oklch(0.55 0.15 25);
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, oklch(0.55 0.15 25) 20%, transparent);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Disabled

_variant: Placeholder · state: disabled_

```html
<input data-slot="input" class="input" disabled placeholder="user@acme.com" type="email" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: oklch(0.9 0 0);
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  pointer-events: none;
  cursor: not-allowed;
  opacity: 50%;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Filled

_variant: Filled_

```html
<input data-slot="input" class="input" placeholder="user@acme.com" type="email" value="user@acme.com" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: oklch(0.9 0 0);
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Filled · Hover

_variant: Filled · state: hover_

```html
<input data-slot="input" class="input" placeholder="user@acme.com" type="email" value="user@acme.com" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: oklch(0.9 0 0);
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Filled · Focus

_variant: Filled · state: focus_

```html
<input data-slot="input" class="input" placeholder="user@acme.com" type="email" value="user@acme.com" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, oklch(0.5 0 0) 50%, transparent);
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  border-color: oklch(0.5 0 0);
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, oklch(0.5 0 0) 50%, transparent);
  outline: none;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Filled · Invalid

_variant: Filled · state: invalid_

```html
<input data-slot="input" class="input" aria-invalid="true" placeholder="user@acme.com" type="email" value="user@acme.com" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, oklch(0.55 0.15 25) 20%, transparent);
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  border-color: oklch(0.55 0.15 25);
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, oklch(0.55 0.15 25) 20%, transparent);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```

## Filled · Disabled

_variant: Filled · state: disabled_

```html
<input data-slot="input" class="input" disabled placeholder="user@acme.com" type="email" value="user@acme.com" />
```

```css
:where(.input, .input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.input, .input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.input, .input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.input, .input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.input {
  height: calc(0.25rem * 9);
  width: 320px;
  min-width: 0;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: oklch(0.9 0 0);
  background-color: color-mix(in oklab, oklch(0.9 0 0) 30%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  pointer-events: none;
  cursor: not-allowed;
  opacity: 50%;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}
```
