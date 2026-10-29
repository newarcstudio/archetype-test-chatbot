# Dropdown Menu

Menu opened from a trigger: chat visibility, the user menu, and a chat's actions in the sidebar. Items get the accent background on focus; Destructive items for delete.

Key: `dropdown-menu`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Content` | `"Actions" \| "Options"` | `Actions` |  |

## Default

_variant: Actions_

```html
<div style="position: relative; contain: layout; width: max-content; padding-right: 96px; padding-bottom: 137px;" class="dropdown-menu"><button data-slot="dropdown-menu-trigger" data-variant="outline" data-size="sm" class="dropdown-menu__button" type="button" id="radix-_r_r_" aria-haspopup="menu" aria-expanded="true" aria-controls="radix-_r_s_" data-state="open" data-radix-popper-side="bottom" data-radix-popper-align="start">Options<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-menu__icon"><path d="m6 9 6 6 6-6"></path></svg></button><div data-radix-popper-content-wrapper dir="ltr" style="position: fixed; left: 0px; top: 0px; transform: translate(0px, 36px); min-width: max-content; --radix-popper-transform-origin: 0% 0px; z-index: 50; --radix-popper-available-width: 1439.9964145658264px; --radix-popper-available-height: 724px; --radix-popper-anchor-width: 104.81223902894493px; --radix-popper-anchor-height: 32px;"><div data-side="bottom" data-align="start" role="menu" aria-orientation="vertical" data-state="open" data-radix-menu-content dir="ltr" id="radix-_r_s_" aria-labelledby="radix-_r_r_" data-slot="dropdown-menu-content" class="dropdown-menu__box" tabindex="-1" data-orientation="vertical" style="outline: none; --radix-dropdown-menu-content-transform-origin: var(--radix-popper-transform-origin); --radix-dropdown-menu-content-available-width: var(--radix-popper-available-width); --radix-dropdown-menu-content-available-height: var(--radix-popper-available-height); --radix-dropdown-menu-trigger-width: var(--radix-popper-anchor-width); --radix-dropdown-menu-trigger-height: var(--radix-popper-anchor-height);"><div role="menuitem" data-slot="dropdown-menu-item" data-variant="default" class="dropdown-menu__box-2" tabindex="-1" data-orientation="vertical" data-radix-collection-item><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-menu__icon"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>Make private</div><div role="menuitem" data-slot="dropdown-menu-item" data-variant="default" class="dropdown-menu__box-2" tabindex="-1" data-orientation="vertical" data-radix-collection-item><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-menu__icon"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>Make public</div><div role="separator" aria-orientation="horizontal" data-slot="dropdown-menu-separator" class="dropdown-menu__box-3"></div><div role="menuitem" data-slot="dropdown-menu-item" data-variant="destructive" class="dropdown-menu__box-2" tabindex="-1" data-orientation="vertical" data-radix-collection-item><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-menu__icon"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>Delete</div></div></div></div>
```

```css
:where(.dropdown-menu, .dropdown-menu *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.dropdown-menu, .dropdown-menu *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.dropdown-menu, .dropdown-menu *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.dropdown-menu, .dropdown-menu *):where(button) {
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

:where(.dropdown-menu, .dropdown-menu *):where(svg) {
  display: block;
  vertical-align: middle;
}

.dropdown-menu {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.dropdown-menu__button {
  display: inline-flex;
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: oklch(0.9 0 0);
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
  background-color: oklch(0.94 0 0);
  color: oklch(0.12 0 0);
}

.dropdown-menu__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.dropdown-menu__box {
  z-index: 50;
  max-height: 724px;
  width: 104.81223902894493px;
  min-width: calc(0.25rem * 48);
  transform-origin: 0% 0px;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 0.625rem;
  background-color: oklch(1 0 0);
  padding: 0.25rem;
  color: oklch(0.12 0 0);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, oklch(0.12 0 0) 5%, transparent), 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transition-duration: 100ms;
  animation-duration: 100ms;
}

.dropdown-menu__box-2 {
  position: relative;
  display: flex;
  cursor: default;
  align-items: center;
  gap: calc(0.25rem * 2.5);
  border-radius: 0.625rem;
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  outline-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 150ms;
}

.dropdown-menu__box-3 {
  margin-inline: calc(0.25rem * -1);
  margin-block: 0.25rem;
  height: 1px;
  background-color: color-mix(in oklab, oklch(0.9 0 0) 50%, transparent);
}
```

## Options

_variant: Options_

```html
<div style="position: relative; contain: layout; width: max-content; padding-right: 184px; padding-bottom: 148px;" class="dropdown-menu"><button data-slot="dropdown-menu-trigger" data-variant="outline" data-size="sm" class="dropdown-menu__button" type="button" id="radix-_r_10_" aria-haspopup="menu" aria-expanded="true" aria-controls="radix-_r_11_" data-state="open" data-radix-popper-side="bottom" data-radix-popper-align="start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-menu__icon"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>Private<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-menu__icon"><path d="m6 9 6 6 6-6"></path></svg></button><div data-radix-popper-content-wrapper dir="ltr" style="position: fixed; left: 0px; top: 0px; transform: translate(0px, 36px); min-width: max-content; --radix-popper-transform-origin: 0% 0px; z-index: 50; --radix-popper-available-width: 1439.9976684881603px; --radix-popper-available-height: 724px; --radix-popper-anchor-width: 124.81229791540176px; --radix-popper-anchor-height: 32px;"><div data-side="bottom" data-align="start" role="menu" aria-orientation="vertical" data-state="open" data-radix-menu-content dir="ltr" id="radix-_r_11_" aria-labelledby="radix-_r_10_" data-slot="dropdown-menu-content" class="dropdown-menu__box" tabindex="-1" data-orientation="vertical" style="outline: none; --radix-dropdown-menu-content-transform-origin: var(--radix-popper-transform-origin); --radix-dropdown-menu-content-available-width: var(--radix-popper-available-width); --radix-dropdown-menu-content-available-height: var(--radix-popper-available-height); --radix-dropdown-menu-trigger-width: var(--radix-popper-anchor-width); --radix-dropdown-menu-trigger-height: var(--radix-popper-anchor-height);"><div role="menuitem" data-slot="dropdown-menu-item" data-variant="default" class="dropdown-menu__box-2" tabindex="-1" data-orientation="vertical" data-radix-collection-item>Private<div class="dropdown-menu__box-3">Only you can access this chat</div></div><div role="menuitem" data-slot="dropdown-menu-item" data-variant="default" class="dropdown-menu__box-2" tabindex="-1" data-orientation="vertical" data-radix-collection-item>Public<div class="dropdown-menu__box-3">Anyone with the link can access this chat</div></div></div></div></div>
```

```css
:where(.dropdown-menu, .dropdown-menu *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.dropdown-menu, .dropdown-menu *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.dropdown-menu, .dropdown-menu *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.dropdown-menu, .dropdown-menu *):where(button) {
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

:where(.dropdown-menu, .dropdown-menu *):where(svg) {
  display: block;
  vertical-align: middle;
}

.dropdown-menu {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.dropdown-menu__button {
  display: inline-flex;
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: oklch(0.9 0 0);
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
  background-color: oklch(0.94 0 0);
  color: oklch(0.12 0 0);
}

.dropdown-menu__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.dropdown-menu__box {
  z-index: 50;
  max-height: 724px;
  width: 124.81229791540176px;
  min-width: 300px;
  transform-origin: 0% 0px;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 0.625rem;
  background-color: oklch(1 0 0);
  padding: 0.25rem;
  color: oklch(0.12 0 0);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, oklch(0.12 0 0) 5%, transparent), 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transition-duration: 100ms;
  animation-duration: 100ms;
}

.dropdown-menu__box-2 {
  position: relative;
  display: flex;
  cursor: default;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  border-radius: 0.625rem;
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  outline-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 150ms;
}

.dropdown-menu__box-3 {
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: oklch(0.58 0 0);
}
```
