# Spinner

Spinning loader icon (lucide Loader2) with role=status. Inherits the text color; size with className (size-4 default, size-5 over attachment uploads).

Key: `spinner`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Size` | `"Default" \| "Large"` | `Default` |  |

## Default

_size: Default · variant: Spinner_

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner" role="status" aria-label="Loading"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
```

```css
:where(.spinner, .spinner *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.spinner, .spinner *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.spinner, .spinner *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.spinner, .spinner *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.spinner {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  animation: spin 1s linear infinite;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

@keyframes spin {
  100% {
  transform: rotate(360deg);
  }
}
```

## Large

_size: Large · variant: Spinner_

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner" role="status" aria-label="Loading"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
```

```css
:where(.spinner, .spinner *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.spinner, .spinner *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.spinner, .spinner *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.spinner, .spinner *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.spinner {
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  animation: spin 1s linear infinite;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

@keyframes spin {
  100% {
  transform: rotate(360deg);
  }
}
```
