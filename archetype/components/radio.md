# Radio

A single choice within a group.

Key: `radio`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Checked` | `"Checked" \| "Unchecked"` | `Checked` |  |
| `State` | `"Default" \| "Hover" \| "Focus" \| "Disabled"` | `Default` |  |

## Default

_variant: Checked_

```html
<div role="radiogroup" aria-required="false" dir="ltr" data-slot="radio-group" class="radio" aria-label="Option" tabindex="0" style="outline: none;">
  <button type="button" role="radio" aria-checked="true" data-state="checked" value="option" data-slot="radio-group-item" class="radio__button" aria-label="Option" tabindex="-1" data-radix-collection-item>
    <span data-state="checked" data-slot="radio-group-indicator" class="radio__part"><span class="radio__part-2"></span></span>
  </button>
</div>
```

```css
:where(.radio, .radio *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.radio, .radio *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *):where(button) {
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

.radio {
  display: grid;
  gap: calc(0.25rem * 3);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.radio__button {
  position: relative;
  margin: calc(0.25rem * 0.5);
  display: inline-flex;
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  border-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
}

.radio__part {
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio__part-2 {
  width: calc(0.25rem * 2);
  height: calc(0.25rem * 2);
  border-radius: var(--radius-full, 9999px);
  background-color: var(--color-semantic-popover, #ffffff);
}
```

## Hover

_variant: Checked · state: hover_

```html
<div role="radiogroup" aria-required="false" dir="ltr" data-slot="radio-group" class="radio" aria-label="Option" tabindex="0" style="outline: none;">
  <button type="button" role="radio" aria-checked="true" data-state="checked" value="option" data-slot="radio-group-item" class="radio__button" aria-label="Option" tabindex="-1" data-radix-collection-item>
    <span data-state="checked" data-slot="radio-group-indicator" class="radio__part"><span class="radio__part-2"></span></span>
  </button>
</div>
```

```css
:where(.radio, .radio *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.radio, .radio *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *):where(button) {
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

.radio {
  display: grid;
  gap: calc(0.25rem * 3);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.radio__button {
  position: relative;
  margin: calc(0.25rem * 0.5);
  display: inline-flex;
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  border-color: color-mix(in oklab, var(--color-semantic-sidebar-accent-foreground, #060606) 90%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-sidebar-accent-foreground, #060606) 90%, transparent);
}

.radio__part {
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio__part-2 {
  width: calc(0.25rem * 2);
  height: calc(0.25rem * 2);
  border-radius: var(--radius-full, 9999px);
  background-color: var(--color-semantic-popover, #ffffff);
}
```

## Focus

_variant: Checked · state: focus_

```html
<div role="radiogroup" aria-required="false" dir="ltr" data-slot="radio-group" class="radio" aria-label="Option" tabindex="0" style="outline: none;">
  <button type="button" role="radio" aria-checked="true" data-state="checked" value="option" data-slot="radio-group-item" class="radio__button" aria-label="Option" tabindex="-1" data-radix-collection-item>
    <span data-state="checked" data-slot="radio-group-indicator" class="radio__part"><span class="radio__part-2"></span></span>
  </button>
</div>
```

```css
:where(.radio, .radio *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.radio, .radio *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *):where(button) {
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

.radio {
  display: grid;
  gap: calc(0.25rem * 3);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.radio__button {
  position: relative;
  margin: calc(0.25rem * 0.5);
  display: inline-flex;
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  box-shadow: 0 0 0 calc(3px + 0px) color-mix(in oklab, var(--color-semantic-sidebar-ring, #636363) 50%, transparent);
  border-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  outline: none;
}

.radio__part {
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio__part-2 {
  width: calc(0.25rem * 2);
  height: calc(0.25rem * 2);
  border-radius: var(--radius-full, 9999px);
  background-color: var(--color-semantic-popover, #ffffff);
}
```

## Disabled

_variant: Checked · state: disabled_

```html
<div role="radiogroup" aria-required="false" dir="ltr" data-slot="radio-group" class="radio" aria-label="Option" tabindex="-1" style="outline: none;">
  <button type="button" role="radio" aria-checked="true" data-state="checked" data-disabled disabled value="option" data-slot="radio-group-item" class="radio__button" aria-label="Option" tabindex="-1" data-radix-collection-item>
    <span data-state="checked" data-disabled data-slot="radio-group-indicator" class="radio__part"><span class="radio__part-2"></span></span>
  </button>
</div>
```

```css
:where(.radio, .radio *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.radio, .radio *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *):where(button) {
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

.radio {
  display: grid;
  gap: calc(0.25rem * 3);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.radio__button {
  position: relative;
  margin: calc(0.25rem * 0.5);
  display: inline-flex;
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  cursor: not-allowed;
  opacity: 50%;
  border-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
}

.radio__part {
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio__part-2 {
  width: calc(0.25rem * 2);
  height: calc(0.25rem * 2);
  border-radius: var(--radius-full, 9999px);
  background-color: var(--color-semantic-popover, #ffffff);
}
```

## Unchecked

_variant: Unchecked_

```html
<div role="radiogroup" aria-required="false" dir="ltr" data-slot="radio-group" class="radio" aria-label="Option" tabindex="0" style="outline: none;">
  <button type="button" role="radio" aria-checked="false" data-state="unchecked" value="option" data-slot="radio-group-item" class="radio__button" aria-label="Option" tabindex="-1" data-radix-collection-item></button>
</div>
```

```css
:where(.radio, .radio *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.radio, .radio *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.radio, .radio *):where(button) {
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

.radio {
  display: grid;
  gap: calc(0.25rem * 3);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.radio__button {
  position: relative;
  margin: calc(0.25rem * 0.5);
  display: inline-flex;
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: var(--color-semantic-popover, #ffffff);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
}
```
