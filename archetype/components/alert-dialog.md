# Alert Dialog

Modal confirmation for destructive or irreversible actions (deleting a chat, deleting all chats). Cancel is Outline, the confirm action is Default.

Key: `alert-dialog`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Size` | `"Default" \| "Small"` | `Default` |  |

## Default

_size: Default · variant: Alert Dialog_

```html
<div style="contain: layout; width: 800px; height: 480px;" class="alert-dialog"><div data-state="open" data-slot="alert-dialog-overlay" class="alert-dialog__box" data-aria-hidden="true" aria-hidden="true" style="pointer-events: auto;"></div><div role="alertdialog" id="radix-_r_l_" aria-describedby="radix-_r_n_" aria-labelledby="radix-_r_m_" data-state="open" data-slot="alert-dialog-content" data-size="default" class="alert-dialog__box-2" tabindex="-1" style="pointer-events: auto;"><div data-slot="alert-dialog-header" class="alert-dialog__box-3"><h2 id="radix-_r_m_" data-slot="alert-dialog-title" class="alert-dialog__title">Are you absolutely sure?</h2><p id="radix-_r_n_" data-slot="alert-dialog-description" class="alert-dialog__text">This action cannot be undone. This will permanently delete your chat and remove it from our servers.</p></div><div data-slot="alert-dialog-footer" class="alert-dialog__box-4"><button type="button" data-slot="alert-dialog-cancel" class="alert-dialog__button" data-variant="outline" data-size="default">Cancel</button><button type="button" data-slot="alert-dialog-action" class="alert-dialog__button-2" data-variant="default" data-size="default">Continue</button></div></div></div>
```

```css
:where(.alert-dialog, .alert-dialog *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.alert-dialog, .alert-dialog *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.alert-dialog, .alert-dialog *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.alert-dialog, .alert-dialog *):where(h2) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.alert-dialog, .alert-dialog *):where(p) {
  line-height: 1.6;
}

:where(.alert-dialog, .alert-dialog *):where(button) {
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

.alert-dialog {
  position: relative;
  width: 800px;
  height: 480px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.alert-dialog__box {
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: color-mix(in oklab, #000 80%, transparent);
  transition-duration: 100ms;
  animation-duration: 100ms;
  backdrop-filter: blur(4px);
}

.alert-dialog__box-2 {
  position: fixed;
  top: calc(1 / 2 * 100%);
  left: calc(1 / 2 * 100%);
  z-index: 50;
  display: grid;
  width: 100%;
  translate: calc(calc(1 / 2 * 100%) * -1) calc(calc(1 / 2 * 100%) * -1);
  gap: calc(0.25rem * 6);
  border-radius: var(--radius-lg, 10px);
  background-color: var(--color-semantic-primary-foreground, #fafafa);
  padding: calc(0.25rem * 6);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, var(--color-semantic-sidebar-accent-foreground, #060606) 5%, transparent);
  transition-duration: 100ms;
  outline-style: none;
  animation-duration: 100ms;
  max-width: 28rem;
}

.alert-dialog__box-3 {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: calc(0.25rem * 1.5);
  place-items: start;
  text-align: left;
}

.alert-dialog__title {
  font-size: 1.125rem;
  line-height: calc(1.75 / 1.125);
  font-weight: 500;
}

.alert-dialog__text {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  text-wrap: pretty;
}

.alert-dialog__box-4 {
  display: flex;
  gap: calc(0.25rem * 2);
  flex-direction: row;
  justify-content: flex-end;
}

.alert-dialog__button {
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
}

.alert-dialog__button-2 {
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
}
```

## Small

_size: Small · variant: Alert Dialog_

```html
<div style="contain: layout; width: 800px; height: 480px;" class="alert-dialog"><div data-state="open" data-slot="alert-dialog-overlay" class="alert-dialog__box" data-aria-hidden="true" aria-hidden="true" style="pointer-events: auto;"></div><div role="alertdialog" id="radix-_r_o_" aria-describedby="radix-_r_q_" aria-labelledby="radix-_r_p_" data-state="open" data-slot="alert-dialog-content" data-size="sm" class="alert-dialog__box-2" tabindex="-1" style="pointer-events: auto;"><div data-slot="alert-dialog-header" class="alert-dialog__box-3"><h2 id="radix-_r_p_" data-slot="alert-dialog-title" class="alert-dialog__title">Are you absolutely sure?</h2><p id="radix-_r_q_" data-slot="alert-dialog-description" class="alert-dialog__text">This action cannot be undone. This will permanently delete your chat and remove it from our servers.</p></div><div data-slot="alert-dialog-footer" class="alert-dialog__box-4"><button type="button" data-slot="alert-dialog-cancel" class="alert-dialog__button" data-variant="outline" data-size="default">Cancel</button><button type="button" data-slot="alert-dialog-action" class="alert-dialog__button-2" data-variant="default" data-size="default">Continue</button></div></div></div>
```

```css
:where(.alert-dialog, .alert-dialog *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.alert-dialog, .alert-dialog *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.alert-dialog, .alert-dialog *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.alert-dialog, .alert-dialog *):where(h2) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.alert-dialog, .alert-dialog *):where(p) {
  line-height: 1.6;
}

:where(.alert-dialog, .alert-dialog *):where(button) {
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

.alert-dialog {
  position: relative;
  width: 800px;
  height: 480px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.alert-dialog__box {
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: color-mix(in oklab, #000 80%, transparent);
  transition-duration: 100ms;
  animation-duration: 100ms;
  backdrop-filter: blur(4px);
}

.alert-dialog__box-2 {
  position: fixed;
  top: calc(1 / 2 * 100%);
  left: calc(1 / 2 * 100%);
  z-index: 50;
  display: grid;
  width: 100%;
  translate: calc(calc(1 / 2 * 100%) * -1) calc(calc(1 / 2 * 100%) * -1);
  gap: calc(0.25rem * 6);
  border-radius: var(--radius-lg, 10px);
  background-color: var(--color-semantic-primary-foreground, #fafafa);
  padding: calc(0.25rem * 6);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, var(--color-semantic-sidebar-accent-foreground, #060606) 5%, transparent);
  transition-duration: 100ms;
  outline-style: none;
  animation-duration: 100ms;
  max-width: 20rem;
}

.alert-dialog__box-3 {
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  gap: calc(0.25rem * 1.5);
  text-align: center;
}

.alert-dialog__title {
  font-size: 1.125rem;
  line-height: calc(1.75 / 1.125);
  font-weight: 500;
}

.alert-dialog__text {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  text-wrap: pretty;
}

.alert-dialog__box-4 {
  gap: calc(0.25rem * 2);
  flex-direction: row;
  justify-content: flex-end;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.alert-dialog__button {
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
}

.alert-dialog__button-2 {
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
}
```
