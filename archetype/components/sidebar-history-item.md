# Sidebar Chat Item

One past chat in the sidebar history: truncated title, muted until hovered; the open chat is full-strength with a dashed underline. A "…" action (on hover, always on the active row) opens Share and Delete.

Key: `sidebar-history-item`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Active` | `"Inactive" \| "Active"` | `Inactive` |  |
| `State` | `"Default" \| "Hover"` | `Default` |  |

## Default

_variant: Inactive_

```html
<div data-slot="sidebar-wrapper" class="sidebar-history-item" style="--sidebar-width: 16rem; --sidebar-width-icon: 3rem;">
  <div class="sidebar-history-item__box">
    <ul data-slot="sidebar-menu" data-sidebar="menu" class="sidebar-history-item__list">
      <li data-slot="sidebar-menu-item" data-sidebar="menu-item" class="sidebar-history-item__item"><a data-slot="sidebar-menu-button" data-sidebar="menu-button" data-size="default" data-active="false" class="sidebar-history-item__link" href="/chat/demo"><span class="sidebar-history-item__part">Weather in San Francisco this weekend</span></a><button data-slot="dropdown-menu-trigger" data-sidebar="menu-action" class="sidebar-history-item__button" type="button" id="radix-_r_0_" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="sidebar-history-item__icon"><path clip-rule="evenodd" d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="sidebar-history-item__part-2">More</span></button></li>
    </ul>
  </div>
</div>
```

```css
:where(.sidebar-history-item, .sidebar-history-item *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.sidebar-history-item, .sidebar-history-item *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.sidebar-history-item, .sidebar-history-item *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.sidebar-history-item, .sidebar-history-item *):where(ul) {
  list-style: none;
}

:where(.sidebar-history-item, .sidebar-history-item *):where(a) {
  color: inherit;
  text-decoration: inherit;
}

:where(.sidebar-history-item, .sidebar-history-item *):where(button) {
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

:where(.sidebar-history-item, .sidebar-history-item *):where(svg) {
  display: block;
  vertical-align: middle;
}

.sidebar-history-item {
  display: flex;
  min-height: 0;
  width: 256px;
  background-color: var(--color-semantic-sidebar, #f5f5f5);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.sidebar-history-item__box {
  width: calc(0.25rem * 64);
  background-color: var(--color-semantic-sidebar, #f5f5f5);
  padding: calc(0.25rem * 2);
}

.sidebar-history-item__list {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-history-item__item {
  position: relative;
}

.sidebar-history-item__link {
  display: flex;
  height: calc(0.25rem * 8);
  width: 100%;
  align-items: center;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  border-radius: 0;
  padding-inline: calc(0.25rem * 2.5);
  text-align: left;
  font-size: 13px;
  outline-style: none;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  padding-right: calc(0.25rem * 8);
  background-color: transparent;
  font-weight: 400;
  color: color-mix(in oklab, var(--color-semantic-sidebar-foreground, #424242) 50%, transparent);
}

.sidebar-history-item__part {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar-history-item__button {
  position: absolute;
  right: 0.25rem;
  margin-right: calc(0.25rem * 0.5);
  display: flex;
  aspect-ratio: 1 / 1;
  width: calc(0.25rem * 5);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  padding: 0;
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  outline-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  opacity: 0%;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  top: calc(0.25rem * 1.5);
}

.sidebar-history-item__button::after {
  position: absolute;
  inset: calc(0.25rem * -2);
  content: "";
  display: none;
}

.sidebar-history-item__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  flex-shrink: 0;
}

.sidebar-history-item__part-2 {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
```

## Hover

_variant: Inactive · state: hover_

```html
<div data-slot="sidebar-wrapper" class="sidebar-history-item" style="--sidebar-width: 16rem; --sidebar-width-icon: 3rem;">
  <div class="sidebar-history-item__box">
    <ul data-slot="sidebar-menu" data-sidebar="menu" class="sidebar-history-item__list">
      <li data-slot="sidebar-menu-item" data-sidebar="menu-item" class="sidebar-history-item__item"><a data-slot="sidebar-menu-button" data-sidebar="menu-button" data-size="default" data-active="false" class="sidebar-history-item__link" href="/chat/demo"><span class="sidebar-history-item__part">Weather in San Francisco this weekend</span></a><button data-slot="dropdown-menu-trigger" data-sidebar="menu-action" class="sidebar-history-item__button" type="button" id="radix-_r_2_" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="sidebar-history-item__icon"><path clip-rule="evenodd" d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="sidebar-history-item__part-2">More</span></button></li>
    </ul>
  </div>
</div>
```

```css
:where(.sidebar-history-item, .sidebar-history-item *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.sidebar-history-item, .sidebar-history-item *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.sidebar-history-item, .sidebar-history-item *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.sidebar-history-item, .sidebar-history-item *):where(ul) {
  list-style: none;
}

:where(.sidebar-history-item, .sidebar-history-item *):where(a) {
  color: inherit;
  text-decoration: inherit;
}

:where(.sidebar-history-item, .sidebar-history-item *):where(button) {
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

:where(.sidebar-history-item, .sidebar-history-item *):where(svg) {
  display: block;
  vertical-align: middle;
}

.sidebar-history-item {
  display: flex;
  min-height: 0;
  width: 256px;
  background-color: var(--color-semantic-sidebar, #f5f5f5);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.sidebar-history-item__box {
  width: calc(0.25rem * 64);
  background-color: var(--color-semantic-sidebar, #f5f5f5);
  padding: calc(0.25rem * 2);
}

.sidebar-history-item__list {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-history-item__item {
  position: relative;
}

.sidebar-history-item__link {
  display: flex;
  height: calc(0.25rem * 8);
  width: 100%;
  align-items: center;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  border-radius: 0;
  padding-inline: calc(0.25rem * 2.5);
  text-align: left;
  font-size: 13px;
  outline-style: none;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  padding-right: calc(0.25rem * 8);
  background-color: transparent;
  font-weight: 400;
  color: color-mix(in oklab, var(--color-semantic-sidebar-foreground, #424242) 50%, transparent);
}

.sidebar-history-item__part {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar-history-item__button {
  position: absolute;
  right: 0.25rem;
  margin-right: calc(0.25rem * 0.5);
  display: flex;
  aspect-ratio: 1 / 1;
  width: calc(0.25rem * 5);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  padding: 0;
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  outline-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  opacity: 100%;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  top: calc(0.25rem * 1.5);
}

.sidebar-history-item__button::after {
  position: absolute;
  inset: calc(0.25rem * -2);
  content: "";
  display: none;
}

.sidebar-history-item__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  flex-shrink: 0;
}

.sidebar-history-item__part-2 {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
```

## Active

_variant: Active_

```html
<div data-slot="sidebar-wrapper" class="sidebar-history-item" style="--sidebar-width: 16rem; --sidebar-width-icon: 3rem;">
  <div class="sidebar-history-item__box">
    <ul data-slot="sidebar-menu" data-sidebar="menu" class="sidebar-history-item__list">
      <li data-slot="sidebar-menu-item" data-sidebar="menu-item" class="sidebar-history-item__item"><a data-slot="sidebar-menu-button" data-sidebar="menu-button" data-size="default" data-active="true" class="sidebar-history-item__link" href="/chat/demo"><span class="sidebar-history-item__part">Weather in San Francisco this weekend</span></a><button data-slot="dropdown-menu-trigger" data-sidebar="menu-action" class="sidebar-history-item__button" type="button" id="radix-_r_4_" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="sidebar-history-item__icon"><path clip-rule="evenodd" d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="sidebar-history-item__part-2">More</span></button></li>
    </ul>
  </div>
</div>
```

```css
:where(.sidebar-history-item, .sidebar-history-item *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.sidebar-history-item, .sidebar-history-item *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.sidebar-history-item, .sidebar-history-item *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.sidebar-history-item, .sidebar-history-item *):where(ul) {
  list-style: none;
}

:where(.sidebar-history-item, .sidebar-history-item *):where(a) {
  color: inherit;
  text-decoration: inherit;
}

:where(.sidebar-history-item, .sidebar-history-item *):where(button) {
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

:where(.sidebar-history-item, .sidebar-history-item *):where(svg) {
  display: block;
  vertical-align: middle;
}

.sidebar-history-item {
  display: flex;
  min-height: 0;
  width: 256px;
  background-color: var(--color-semantic-sidebar, #f5f5f5);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.sidebar-history-item__box {
  width: calc(0.25rem * 64);
  background-color: var(--color-semantic-sidebar, #f5f5f5);
  padding: calc(0.25rem * 2);
}

.sidebar-history-item__list {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-history-item__item {
  position: relative;
}

.sidebar-history-item__link {
  display: flex;
  height: calc(0.25rem * 8);
  width: 100%;
  align-items: center;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  border-radius: 0;
  padding-inline: calc(0.25rem * 2.5);
  text-align: left;
  font-size: 13px;
  outline-style: none;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  padding-right: calc(0.25rem * 8);
  background-color: transparent;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-style: dashed;
  border-color: color-mix(in oklab, var(--color-semantic-sidebar-foreground, #424242) 50%, transparent);
  font-weight: 500;
  color: var(--color-semantic-sidebar-foreground, #424242);
}

.sidebar-history-item__part {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar-history-item__button {
  position: absolute;
  right: 0.25rem;
  margin-right: calc(0.25rem * 0.5);
  display: flex;
  aspect-ratio: 1 / 1;
  width: calc(0.25rem * 5);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  padding: 0;
  color: color-mix(in oklab, var(--color-semantic-sidebar-foreground, #424242) 50%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  outline-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  top: calc(0.25rem * 1.5);
}

.sidebar-history-item__button::after {
  position: absolute;
  inset: calc(0.25rem * -2);
  content: "";
  display: none;
}

.sidebar-history-item__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  flex-shrink: 0;
}

.sidebar-history-item__part-2 {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
```

## Active · Hover

_variant: Active · state: hover_

```html
<div data-slot="sidebar-wrapper" class="sidebar-history-item" style="--sidebar-width: 16rem; --sidebar-width-icon: 3rem;">
  <div class="sidebar-history-item__box">
    <ul data-slot="sidebar-menu" data-sidebar="menu" class="sidebar-history-item__list">
      <li data-slot="sidebar-menu-item" data-sidebar="menu-item" class="sidebar-history-item__item"><a data-slot="sidebar-menu-button" data-sidebar="menu-button" data-size="default" data-active="true" class="sidebar-history-item__link" href="/chat/demo"><span class="sidebar-history-item__part">Weather in San Francisco this weekend</span></a><button data-slot="dropdown-menu-trigger" data-sidebar="menu-action" class="sidebar-history-item__button" type="button" id="radix-_r_6_" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="sidebar-history-item__icon"><path clip-rule="evenodd" d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="sidebar-history-item__part-2">More</span></button></li>
    </ul>
  </div>
</div>
```

```css
:where(.sidebar-history-item, .sidebar-history-item *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.sidebar-history-item, .sidebar-history-item *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.sidebar-history-item, .sidebar-history-item *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.sidebar-history-item, .sidebar-history-item *):where(ul) {
  list-style: none;
}

:where(.sidebar-history-item, .sidebar-history-item *):where(a) {
  color: inherit;
  text-decoration: inherit;
}

:where(.sidebar-history-item, .sidebar-history-item *):where(button) {
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

:where(.sidebar-history-item, .sidebar-history-item *):where(svg) {
  display: block;
  vertical-align: middle;
}

.sidebar-history-item {
  display: flex;
  min-height: 0;
  width: 256px;
  background-color: var(--color-semantic-sidebar, #f5f5f5);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.sidebar-history-item__box {
  width: calc(0.25rem * 64);
  background-color: var(--color-semantic-sidebar, #f5f5f5);
  padding: calc(0.25rem * 2);
}

.sidebar-history-item__list {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-history-item__item {
  position: relative;
}

.sidebar-history-item__link {
  display: flex;
  height: calc(0.25rem * 8);
  width: 100%;
  align-items: center;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  border-radius: 0;
  padding-inline: calc(0.25rem * 2.5);
  text-align: left;
  font-size: 13px;
  outline-style: none;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  padding-right: calc(0.25rem * 8);
  background-color: transparent;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-style: dashed;
  border-color: color-mix(in oklab, var(--color-semantic-sidebar-foreground, #424242) 50%, transparent);
  font-weight: 500;
  color: var(--color-semantic-sidebar-foreground, #424242);
}

.sidebar-history-item__part {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar-history-item__button {
  position: absolute;
  right: 0.25rem;
  margin-right: calc(0.25rem * 0.5);
  display: flex;
  aspect-ratio: 1 / 1;
  width: calc(0.25rem * 5);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  padding: 0;
  color: color-mix(in oklab, var(--color-semantic-sidebar-foreground, #424242) 50%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  outline-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  top: calc(0.25rem * 1.5);
}

.sidebar-history-item__button::after {
  position: absolute;
  inset: calc(0.25rem * -2);
  content: "";
  display: none;
}

.sidebar-history-item__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  flex-shrink: 0;
}

.sidebar-history-item__part-2 {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
```
