# Separator

1px border-colored rule between groups, horizontal or vertical.

Key: `separator`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Orientation` | `"Horizontal" \| "Vertical"` | `Horizontal` |  |

## Default

_variant: Horizontal_

```html
<div class="separator">
  <div data-orientation="horizontal" role="none" data-slot="separator" class="separator__box"></div>
</div>
```

```css
:where(.separator, .separator *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.separator, .separator *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.separator, .separator *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.separator {
  width: calc(0.25rem * 64);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.separator__box {
  flex-shrink: 0;
  background-color: oklch(0.9 0 0);
}
```

## Vertical

_variant: Vertical_

```html
<div class="separator"><span>Chat</span><div data-orientation="vertical" role="none" data-slot="separator" class="separator__box"></div><span>Code</span></div>
```

```css
:where(.separator, .separator *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.separator, .separator *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.separator, .separator *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

.separator {
  display: flex;
  height: calc(0.25rem * 6);
  align-items: center;
  gap: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.separator__box {
  flex-shrink: 0;
  background-color: oklch(0.9 0 0);
}
```
