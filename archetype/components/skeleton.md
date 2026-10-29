# Skeleton

Pulsing muted placeholder shown while content loads. Size it with className to the shape it stands in for.

Key: `skeleton`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Shape` | `"Line" \| "Block" \| "Avatar"` | `Line` |  |

## Default

_variant: Line_

```html
<div data-slot="skeleton" class="skeleton"></div>
```

```css
:where(.skeleton, .skeleton *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.skeleton, .skeleton *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.skeleton, .skeleton *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.skeleton {
  height: calc(0.25rem * 4);
  width: calc(0.25rem * 48);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: calc(0.625rem + 4px);
  background-color: oklch(0.94 0 0);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

@keyframes pulse {
  50% {
  opacity: 0.5;
  }
}
```

## Block

_variant: Block_

```html
<div data-slot="skeleton" class="skeleton"></div>
```

```css
:where(.skeleton, .skeleton *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.skeleton, .skeleton *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.skeleton, .skeleton *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.skeleton {
  height: calc(0.25rem * 24);
  width: calc(0.25rem * 64);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: calc(0.625rem + 4px);
  background-color: oklch(0.94 0 0);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

@keyframes pulse {
  50% {
  opacity: 0.5;
  }
}
```

## Avatar

_variant: Avatar_

```html
<div data-slot="skeleton" class="skeleton"></div>
```

```css
:where(.skeleton, .skeleton *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.skeleton, .skeleton *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.skeleton, .skeleton *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.skeleton {
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: calc(infinity * 1px);
  background-color: oklch(0.94 0 0);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

@keyframes pulse {
  50% {
  opacity: 0.5;
  }
}
```
