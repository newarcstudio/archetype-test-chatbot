# Badge

Small pill label. In the product it shows a tool call's status (Secondary, e.g. "Running", "Completed").

Key: `badge`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Variant` | `"Default" \| "Secondary" \| "Outline" \| "Destructive" \| "Ghost"` | `Default` |  |

## Default

_variant: Default_

```html
<span data-slot="badge" data-variant="default" class="badge">Completed</span>
```

```css
:where(.badge, .badge *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.badge, .badge *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.badge, .badge *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.badge {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  overflow: hidden;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Secondary

_variant: Secondary_

```html
<span data-slot="badge" data-variant="secondary" class="badge">Completed</span>
```

```css
:where(.badge, .badge *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.badge, .badge *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.badge, .badge *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.badge {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  overflow: hidden;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-accent, #f3f3f3);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-foreground, #424242);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Outline

_variant: Outline_

```html
<span data-slot="badge" data-variant="outline" class="badge">Completed</span>
```

```css
:where(.badge, .badge *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.badge, .badge *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.badge, .badge *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.badge {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  overflow: hidden;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Destructive

_variant: Destructive_

```html
<span data-slot="badge" data-variant="destructive" class="badge">Completed</span>
```

```css
:where(.badge, .badge *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.badge, .badge *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.badge, .badge *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.badge {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  overflow: hidden;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: color-mix(in oklab, var(--color-semantic-destructive, #b94642) 10%, transparent);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-destructive, #b94642);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
```

## Ghost

_variant: Ghost_

```html
<span data-slot="badge" data-variant="ghost" class="badge">Completed</span>
```

```css
:where(.badge, .badge *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.badge, .badge *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.badge, .badge *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.badge {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  overflow: hidden;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}
```
