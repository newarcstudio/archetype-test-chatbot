# Chat Composer

The message box at the bottom of a chat: auto-growing textarea, attach button, model picker and send (stop while waiting for a reply). On an empty chat the suggested prompts sit above it; attachments preview inside it.

Key: `multimodal-input`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Content` | `"Empty" \| "Typed" \| "Attachment"` | `Empty` |  |
| `Status` | `"Ready" \| "Submitted" \| "Streaming"` | `Ready` |  |
| `Chat` | `"Ongoing" \| "New"` | `Ongoing` |  |

## Default

_variant: Empty · status: Ready · chat: Ongoing_

```html
<div class="multimodal-input"><input class="multimodal-input__field" multiple tabindex="-1" type="file" /><div class="multimodal-input__box"></div><input aria-label="Upload files" class="multimodal-input__field-2" title="Upload files" type="file" /><form class="multimodal-input__box-2"><div data-slot="input-group" role="group" class="multimodal-input__box-3"><textarea data-slot="input-group-control" class="multimodal-input__field-3" name="message" placeholder="Ask anything..." data-testid="multimodal-input"></textarea><div role="group" data-slot="input-group-addon" data-align="block-end" class="multimodal-input__box-4"><div class="multimodal-input__box-5"><button data-slot="button" data-variant="ghost" data-size="default" class="multimodal-input__button" data-testid="attachments-button"><svg class="multimodal-input__icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14" style="height: 14px; width: 14px;"><path clip-rule="evenodd" d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z" fill="currentColor" fill-rule="evenodd"></path></svg></button><button data-slot="popover-trigger" data-variant="ghost" data-size="default" class="multimodal-input__button-2" data-testid="model-selector" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed"><img alt="moonshotai logo" class="multimodal-input__image" height="16" width="16" src="https://models.dev/logos/moonshotai.svg" /><span class="multimodal-input__part">Kimi K2.5</span></button></div><button data-slot="button" data-variant="secondary" data-size="icon-sm" class="multimodal-input__button-3" type="submit" aria-label="Submit" data-testid="send-button" disabled><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="multimodal-input__icon-2"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button></div></div></form></div>
```

```css
:where(.multimodal-input, .multimodal-input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.multimodal-input, .multimodal-input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.multimodal-input, .multimodal-input *):where(textarea) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
  resize: vertical;
}

:where(.multimodal-input, .multimodal-input *):where(button) {
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

:where(.multimodal-input, .multimodal-input *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.multimodal-input, .multimodal-input *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

.multimodal-input {
  position: relative;
  display: flex;
  width: 720px;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.multimodal-input__field {
  pointer-events: none;
  position: fixed;
  top: calc(0.25rem * -4);
  left: calc(0.25rem * -4);
  width: calc(0.25rem * 0.5);
  height: calc(0.25rem * 0.5);
  opacity: 0%;
}

.multimodal-input__box {
  position: relative;
}

.multimodal-input__field-2 {
  display: none;
}

.multimodal-input__box-2 {
  width: 100%;
}

.multimodal-input__box-3 {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  overflow: hidden;
  outline-style: none;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-popover, #ffffff) 70%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 1px 2px oklch(0 0 0 / 0.04);
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  animation-duration: 300ms;
  border-radius: var(--radius-2xl, 16px);
  height: auto;
  flex-direction: column;
}

.multimodal-input__field-3 {
  display: flex;
  field-sizing: content;
  max-height: calc(0.25rem * 48);
  min-height: calc(0.25rem * 24);
  width: 100%;
  flex: 1;
  resize: none;
  border-radius: 0;
  border-style: solid;
  border-width: 0px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: transparent;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 2);
  padding-top: calc(0.25rem * 3.5);
  padding-bottom: calc(0.25rem * 1.5);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: 1.625;
}

.multimodal-input__box-4 {
  order: 9999;
  display: flex;
  height: auto;
  width: 100%;
  cursor: text;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  padding-bottom: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__box-5 {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.25rem;
}

.multimodal-input__button {
  display: inline-flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 40%, transparent);
  background-clip: padding-box;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__icon {
  rotate: calc(45deg * -1);
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__button-2 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  max-width: 200px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 2);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__image {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__part {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.multimodal-input__button-3 {
  display: flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  cursor: not-allowed;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 2);
  border-radius: var(--radius-xl, 14px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-muted, #ebebeb);
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 25%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
  padding: 0;
  pointer-events: none;
  opacity: 50%;
}

.multimodal-input__icon-2 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  pointer-events: none;
  flex-shrink: 0;
}
```

## New

_variant: Empty · status: Ready · chat: New_

```html
<div class="multimodal-input"><div class="multimodal-input__box" data-testid="suggested-actions" style="scrollbar-width: none;"><div class="multimodal-input__box-2" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="multimodal-input__button" type="button">What are the advantages of using Next.js?</button></div><div class="multimodal-input__box-2" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="multimodal-input__button" type="button">Write code to demonstrate Dijkstra's algorithm</button></div><div class="multimodal-input__box-2" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="multimodal-input__button" type="button">Help me write an essay about Silicon Valley</button></div><div class="multimodal-input__box-2" style="opacity: 1; transform: none;"><button data-slot="button" data-variant="outline" data-size="sm" class="multimodal-input__button" type="button">What is the weather in San Francisco?</button></div></div><input class="multimodal-input__field" multiple tabindex="-1" type="file" /><div class="multimodal-input__box-3"></div><input aria-label="Upload files" class="multimodal-input__field-2" title="Upload files" type="file" /><form class="multimodal-input__box-4"><div data-slot="input-group" role="group" class="multimodal-input__box-5"><textarea data-slot="input-group-control" class="multimodal-input__field-3" name="message" placeholder="Ask anything..." data-testid="multimodal-input"></textarea><div role="group" data-slot="input-group-addon" data-align="block-end" class="multimodal-input__box-6"><div class="multimodal-input__box-7"><button data-slot="button" data-variant="ghost" data-size="default" class="multimodal-input__button-2" data-testid="attachments-button"><svg class="multimodal-input__icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14" style="height: 14px; width: 14px;"><path clip-rule="evenodd" d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z" fill="currentColor" fill-rule="evenodd"></path></svg></button><button data-slot="popover-trigger" data-variant="ghost" data-size="default" class="multimodal-input__button-3" data-testid="model-selector" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed"><img alt="moonshotai logo" class="multimodal-input__image" height="16" width="16" src="https://models.dev/logos/moonshotai.svg" /><span class="multimodal-input__part">Kimi K2.5</span></button></div><button data-slot="button" data-variant="secondary" data-size="icon-sm" class="multimodal-input__button-4" type="submit" aria-label="Submit" data-testid="send-button" disabled><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="multimodal-input__icon-2"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button></div></div></form></div>
```

```css
:where(.multimodal-input, .multimodal-input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.multimodal-input, .multimodal-input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *):where(button) {
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

:where(.multimodal-input, .multimodal-input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.multimodal-input, .multimodal-input *):where(textarea) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
  resize: vertical;
}

:where(.multimodal-input, .multimodal-input *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.multimodal-input, .multimodal-input *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

.multimodal-input {
  position: relative;
  display: flex;
  width: 720px;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.multimodal-input__box {
  width: 100%;
  gap: calc(0.25rem * 2.5);
  overflow-x: auto;
  padding-bottom: 0.25rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: visible;
}

.multimodal-input__box-2 {
  min-width: 0;
  flex-shrink: 1;
}

.multimodal-input__button {
  display: inline-flex;
  height: auto;
  width: 100%;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: var(--radius-xl, 14px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 50%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-popover, #ffffff) 30%, transparent);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 3);
  text-align: left;
  line-height: 1.625;
  font-weight: 500;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
  padding: calc(0.25rem * 4);
  font-size: 13px;
  white-space: normal;
}

.multimodal-input__field {
  pointer-events: none;
  position: fixed;
  top: calc(0.25rem * -4);
  left: calc(0.25rem * -4);
  width: calc(0.25rem * 0.5);
  height: calc(0.25rem * 0.5);
  opacity: 0%;
}

.multimodal-input__box-3 {
  position: relative;
}

.multimodal-input__field-2 {
  display: none;
}

.multimodal-input__box-4 {
  width: 100%;
}

.multimodal-input__box-5 {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  overflow: hidden;
  outline-style: none;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-popover, #ffffff) 70%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 1px 2px oklch(0 0 0 / 0.04);
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  animation-duration: 300ms;
  border-radius: var(--radius-2xl, 16px);
  height: auto;
  flex-direction: column;
}

.multimodal-input__field-3 {
  display: flex;
  field-sizing: content;
  max-height: calc(0.25rem * 48);
  min-height: calc(0.25rem * 24);
  width: 100%;
  flex: 1;
  resize: none;
  border-radius: 0;
  border-style: solid;
  border-width: 0px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: transparent;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 2);
  padding-top: calc(0.25rem * 3.5);
  padding-bottom: calc(0.25rem * 1.5);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: 1.625;
}

.multimodal-input__box-6 {
  order: 9999;
  display: flex;
  height: auto;
  width: 100%;
  cursor: text;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  padding-bottom: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__box-7 {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.25rem;
}

.multimodal-input__button-2 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 40%, transparent);
  background-clip: padding-box;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__icon {
  rotate: calc(45deg * -1);
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__button-3 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  max-width: 200px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 2);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__image {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__part {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.multimodal-input__button-4 {
  display: flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  cursor: not-allowed;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 2);
  border-radius: var(--radius-xl, 14px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-muted, #ebebeb);
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 25%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
  padding: 0;
  pointer-events: none;
  opacity: 50%;
}

.multimodal-input__icon-2 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  pointer-events: none;
  flex-shrink: 0;
}
```

## Submitted

_variant: Empty · status: Submitted · chat: Ongoing_

```html
<div class="multimodal-input"><input class="multimodal-input__field" multiple tabindex="-1" type="file" /><div class="multimodal-input__box"></div><input aria-label="Upload files" class="multimodal-input__field-2" title="Upload files" type="file" /><form class="multimodal-input__box-2"><div data-slot="input-group" role="group" class="multimodal-input__box-3"><textarea data-slot="input-group-control" class="multimodal-input__field-3" name="message" placeholder="Ask anything..." data-testid="multimodal-input"></textarea><div role="group" data-slot="input-group-addon" data-align="block-end" class="multimodal-input__box-4"><div class="multimodal-input__box-5"><button data-slot="button" data-variant="ghost" data-size="default" class="multimodal-input__button" data-testid="attachments-button" disabled><svg class="multimodal-input__icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14" style="height: 14px; width: 14px;"><path clip-rule="evenodd" d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z" fill="currentColor" fill-rule="evenodd"></path></svg></button><button data-slot="popover-trigger" data-variant="ghost" data-size="default" class="multimodal-input__button-2" data-testid="model-selector" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed"><img alt="moonshotai logo" class="multimodal-input__image" height="16" width="16" src="https://models.dev/logos/moonshotai.svg" /><span class="multimodal-input__part">Kimi K2.5</span></button></div><button data-slot="button" data-variant="default" data-size="default" class="multimodal-input__button-3" data-testid="stop-button"><svg height="14" viewBox="0 0 16 16" width="14" style="color: currentcolor;" class="multimodal-input__icon-2"><path clip-rule="evenodd" d="M3 3H13V13H3V3Z" fill="currentColor" fill-rule="evenodd"></path></svg></button></div></div></form></div>
```

```css
:where(.multimodal-input, .multimodal-input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.multimodal-input, .multimodal-input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.multimodal-input, .multimodal-input *):where(textarea) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
  resize: vertical;
}

:where(.multimodal-input, .multimodal-input *):where(button) {
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

:where(.multimodal-input, .multimodal-input *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.multimodal-input, .multimodal-input *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

.multimodal-input {
  position: relative;
  display: flex;
  width: 720px;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.multimodal-input__field {
  pointer-events: none;
  position: fixed;
  top: calc(0.25rem * -4);
  left: calc(0.25rem * -4);
  width: calc(0.25rem * 0.5);
  height: calc(0.25rem * 0.5);
  opacity: 0%;
}

.multimodal-input__box {
  position: relative;
}

.multimodal-input__field-2 {
  display: none;
}

.multimodal-input__box-2 {
  width: 100%;
}

.multimodal-input__box-3 {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  overflow: hidden;
  outline-style: none;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-popover, #ffffff) 70%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 1px 2px oklch(0 0 0 / 0.04);
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  animation-duration: 300ms;
  border-radius: var(--radius-2xl, 16px);
  height: auto;
  flex-direction: column;
}

.multimodal-input__field-3 {
  display: flex;
  field-sizing: content;
  max-height: calc(0.25rem * 48);
  min-height: calc(0.25rem * 24);
  width: 100%;
  flex: 1;
  resize: none;
  border-radius: 0;
  border-style: solid;
  border-width: 0px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: transparent;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 2);
  padding-top: calc(0.25rem * 3.5);
  padding-bottom: calc(0.25rem * 1.5);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: 1.625;
}

.multimodal-input__box-4 {
  order: 9999;
  display: flex;
  height: auto;
  width: 100%;
  cursor: text;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  padding-bottom: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__box-5 {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.25rem;
}

.multimodal-input__button {
  display: inline-flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 40%, transparent);
  background-clip: padding-box;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  opacity: 50%;
}

.multimodal-input__icon {
  rotate: calc(45deg * -1);
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__button-2 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  max-width: 200px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 2);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__image {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__part {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.multimodal-input__button-3 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-xl, 14px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-sidebar-accent-foreground, #060606);
  background-clip: padding-box;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-primary-foreground, #fafafa);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
}

.multimodal-input__icon-2 {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}
```

## Streaming

_variant: Empty · status: Streaming · chat: Ongoing_

```html
<div class="multimodal-input"><input class="multimodal-input__field" multiple tabindex="-1" type="file" /><div class="multimodal-input__box"></div><input aria-label="Upload files" class="multimodal-input__field-2" title="Upload files" type="file" /><form class="multimodal-input__box-2"><div data-slot="input-group" role="group" class="multimodal-input__box-3"><textarea data-slot="input-group-control" class="multimodal-input__field-3" name="message" placeholder="Ask anything..." data-testid="multimodal-input"></textarea><div role="group" data-slot="input-group-addon" data-align="block-end" class="multimodal-input__box-4"><div class="multimodal-input__box-5"><button data-slot="button" data-variant="ghost" data-size="default" class="multimodal-input__button" data-testid="attachments-button" disabled><svg class="multimodal-input__icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14" style="height: 14px; width: 14px;"><path clip-rule="evenodd" d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z" fill="currentColor" fill-rule="evenodd"></path></svg></button><button data-slot="popover-trigger" data-variant="ghost" data-size="default" class="multimodal-input__button-2" data-testid="model-selector" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed"><img alt="moonshotai logo" class="multimodal-input__image" height="16" width="16" src="https://models.dev/logos/moonshotai.svg" /><span class="multimodal-input__part">Kimi K2.5</span></button></div><button data-slot="button" data-variant="secondary" data-size="icon-sm" class="multimodal-input__button-3" type="submit" aria-label="Stop" data-testid="send-button" disabled><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="multimodal-input__icon-2"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button></div></div></form></div>
```

```css
:where(.multimodal-input, .multimodal-input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.multimodal-input, .multimodal-input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.multimodal-input, .multimodal-input *):where(textarea) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
  resize: vertical;
}

:where(.multimodal-input, .multimodal-input *):where(button) {
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

:where(.multimodal-input, .multimodal-input *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.multimodal-input, .multimodal-input *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

.multimodal-input {
  position: relative;
  display: flex;
  width: 720px;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.multimodal-input__field {
  pointer-events: none;
  position: fixed;
  top: calc(0.25rem * -4);
  left: calc(0.25rem * -4);
  width: calc(0.25rem * 0.5);
  height: calc(0.25rem * 0.5);
  opacity: 0%;
}

.multimodal-input__box {
  position: relative;
}

.multimodal-input__field-2 {
  display: none;
}

.multimodal-input__box-2 {
  width: 100%;
}

.multimodal-input__box-3 {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  overflow: hidden;
  outline-style: none;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-popover, #ffffff) 70%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 1px 2px oklch(0 0 0 / 0.04);
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  animation-duration: 300ms;
  border-radius: var(--radius-2xl, 16px);
  height: auto;
  flex-direction: column;
}

.multimodal-input__field-3 {
  display: flex;
  field-sizing: content;
  max-height: calc(0.25rem * 48);
  min-height: calc(0.25rem * 24);
  width: 100%;
  flex: 1;
  resize: none;
  border-radius: 0;
  border-style: solid;
  border-width: 0px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: transparent;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 2);
  padding-top: calc(0.25rem * 3.5);
  padding-bottom: calc(0.25rem * 1.5);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: 1.625;
}

.multimodal-input__box-4 {
  order: 9999;
  display: flex;
  height: auto;
  width: 100%;
  cursor: text;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  padding-bottom: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__box-5 {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.25rem;
}

.multimodal-input__button {
  display: inline-flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 40%, transparent);
  background-clip: padding-box;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  opacity: 50%;
}

.multimodal-input__icon {
  rotate: calc(45deg * -1);
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__button-2 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  max-width: 200px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 2);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__image {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__part {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.multimodal-input__button-3 {
  display: flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  cursor: not-allowed;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 2);
  border-radius: var(--radius-xl, 14px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-muted, #ebebeb);
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 25%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
  padding: 0;
  pointer-events: none;
  opacity: 50%;
}

.multimodal-input__icon-2 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  pointer-events: none;
  flex-shrink: 0;
}
```

## Typed

_variant: Typed · status: Ready · chat: Ongoing_

```html
<div class="multimodal-input"><input class="multimodal-input__field" multiple tabindex="-1" type="file" /><div class="multimodal-input__box"></div><input aria-label="Upload files" class="multimodal-input__field-2" title="Upload files" type="file" /><form class="multimodal-input__box-2"><div data-slot="input-group" role="group" class="multimodal-input__box-3"><textarea data-slot="input-group-control" class="multimodal-input__field-3" name="message" placeholder="Ask anything..." data-testid="multimodal-input">What's the weather in San Francisco this weekend?</textarea><div role="group" data-slot="input-group-addon" data-align="block-end" class="multimodal-input__box-4"><div class="multimodal-input__box-5"><button data-slot="button" data-variant="ghost" data-size="default" class="multimodal-input__button" data-testid="attachments-button"><svg class="multimodal-input__icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14" style="height: 14px; width: 14px;"><path clip-rule="evenodd" d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z" fill="currentColor" fill-rule="evenodd"></path></svg></button><button data-slot="popover-trigger" data-variant="ghost" data-size="default" class="multimodal-input__button-2" data-testid="model-selector" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed"><img alt="moonshotai logo" class="multimodal-input__image" height="16" width="16" src="https://models.dev/logos/moonshotai.svg" /><span class="multimodal-input__part">Kimi K2.5</span></button></div><button data-slot="button" data-variant="secondary" data-size="icon-sm" class="multimodal-input__button-3" type="submit" aria-label="Submit" data-testid="send-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="multimodal-input__icon-2"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button></div></div></form></div>
```

```css
:where(.multimodal-input, .multimodal-input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.multimodal-input, .multimodal-input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.multimodal-input, .multimodal-input *):where(textarea) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
  resize: vertical;
}

:where(.multimodal-input, .multimodal-input *):where(button) {
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

:where(.multimodal-input, .multimodal-input *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.multimodal-input, .multimodal-input *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

.multimodal-input {
  position: relative;
  display: flex;
  width: 720px;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.multimodal-input__field {
  pointer-events: none;
  position: fixed;
  top: calc(0.25rem * -4);
  left: calc(0.25rem * -4);
  width: calc(0.25rem * 0.5);
  height: calc(0.25rem * 0.5);
  opacity: 0%;
}

.multimodal-input__box {
  position: relative;
}

.multimodal-input__field-2 {
  display: none;
}

.multimodal-input__box-2 {
  width: 100%;
}

.multimodal-input__box-3 {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  overflow: hidden;
  outline-style: none;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-popover, #ffffff) 70%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 1px 2px oklch(0 0 0 / 0.04);
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  animation-duration: 300ms;
  border-radius: var(--radius-2xl, 16px);
  height: auto;
  flex-direction: column;
}

.multimodal-input__field-3 {
  display: flex;
  field-sizing: content;
  max-height: calc(0.25rem * 48);
  min-height: calc(0.25rem * 24);
  width: 100%;
  flex: 1;
  resize: none;
  border-radius: 0;
  border-style: solid;
  border-width: 0px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: transparent;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 2);
  padding-top: calc(0.25rem * 3.5);
  padding-bottom: calc(0.25rem * 1.5);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: 1.625;
}

.multimodal-input__box-4 {
  order: 9999;
  display: flex;
  height: auto;
  width: 100%;
  cursor: text;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  padding-bottom: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__box-5 {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.25rem;
}

.multimodal-input__button {
  display: inline-flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 40%, transparent);
  background-clip: padding-box;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__icon {
  rotate: calc(45deg * -1);
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__button-2 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  max-width: 200px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 2);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__image {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__part {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.multimodal-input__button-3 {
  display: flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 2);
  border-radius: var(--radius-xl, 14px);
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
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
  padding: 0;
}

.multimodal-input__icon-2 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  pointer-events: none;
  flex-shrink: 0;
}
```

## Attachment

_variant: Attachment · status: Ready · chat: Ongoing_

```html
<div class="multimodal-input"><input class="multimodal-input__field" multiple tabindex="-1" type="file" /><div class="multimodal-input__box"></div><input aria-label="Upload files" class="multimodal-input__field-2" title="Upload files" type="file" /><form class="multimodal-input__box-2"><div data-slot="input-group" role="group" class="multimodal-input__box-3"><div class="multimodal-input__box-4" data-testid="attachments-preview"><div class="multimodal-input__box-5" data-testid="input-attachment-preview"><img class="multimodal-input__image" height="96" width="96" alt="skyline.png" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2296%22%20height%3D%2296%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23a5b4fc%22%2F%3E%3Ccircle%20cx%3D%2266%22%20cy%3D%2230%22%20r%3D%2210%22%20fill%3D%22%23fde68a%22%2F%3E%3Cpath%20d%3D%22M0%2080%20L32%2044%20L60%2072%20L76%2058%20L96%2078%20L96%2096%20L0%2096Z%22%20fill%3D%22%233730a3%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E" /><button class="multimodal-input__button" type="button"><svg height="10" stroke-linejoin="round" viewBox="0 0 16 16" width="10" style="color: currentcolor;"><path clip-rule="evenodd" d="M9.96966 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96966L9.06065 7.99999L11.0303 6.03032L11.5607 5.49999L10.5 4.43933L9.96966 4.96966L7.99999 6.93933L6.03032 4.96966L5.49999 4.43933L4.43933 5.49999L4.96966 6.03032L6.93933 7.99999L4.96966 9.96966L4.43933 10.5L5.49999 11.5607L6.03032 11.0303L7.99999 9.06065L9.96966 11.0303Z" fill="currentColor" fill-rule="evenodd"></path></svg></button></div></div><textarea data-slot="input-group-control" class="multimodal-input__field-3" name="message" placeholder="Ask anything..." data-testid="multimodal-input"></textarea><div role="group" data-slot="input-group-addon" data-align="block-end" class="multimodal-input__box-6"><div class="multimodal-input__box-7"><button data-slot="button" data-variant="ghost" data-size="default" class="multimodal-input__button-2" data-testid="attachments-button"><svg class="multimodal-input__icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14" style="height: 14px; width: 14px;"><path clip-rule="evenodd" d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z" fill="currentColor" fill-rule="evenodd"></path></svg></button><button data-slot="popover-trigger" data-variant="ghost" data-size="default" class="multimodal-input__button-3" data-testid="model-selector" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed"><img alt="moonshotai logo" class="multimodal-input__image-2" height="16" width="16" src="https://models.dev/logos/moonshotai.svg" /><span class="multimodal-input__part">Kimi K2.5</span></button></div><button data-slot="button" data-variant="secondary" data-size="icon-sm" class="multimodal-input__button-4" type="submit" aria-label="Submit" data-testid="send-button" disabled><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="multimodal-input__icon-2"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button></div></div></form></div>
```

```css
:where(.multimodal-input, .multimodal-input *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.multimodal-input, .multimodal-input *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.multimodal-input, .multimodal-input *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.multimodal-input, .multimodal-input *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

:where(.multimodal-input, .multimodal-input *):where(button) {
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

:where(.multimodal-input, .multimodal-input *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.multimodal-input, .multimodal-input *):where(textarea) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
  resize: vertical;
}

.multimodal-input {
  position: relative;
  display: flex;
  width: 720px;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.multimodal-input__field {
  pointer-events: none;
  position: fixed;
  top: calc(0.25rem * -4);
  left: calc(0.25rem * -4);
  width: calc(0.25rem * 0.5);
  height: calc(0.25rem * 0.5);
  opacity: 0%;
}

.multimodal-input__box {
  position: relative;
}

.multimodal-input__field-2 {
  display: none;
}

.multimodal-input__box-2 {
  width: 100%;
}

.multimodal-input__box-3 {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  overflow: hidden;
  outline-style: none;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-color: color-mix(in oklab, var(--color-semantic-popover, #ffffff) 70%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 1px 2px oklch(0 0 0 / 0.04);
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  animation-duration: 300ms;
  border-radius: var(--radius-2xl, 16px);
  height: auto;
  flex-direction: column;
}

.multimodal-input__box-4 {
  scrollbar-width: none;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: calc(0.25rem * 2);
  align-self: flex-start;
  overflow-x: auto;
  padding-inline: calc(0.25rem * 3);
  padding-top: calc(0.25rem * 3);
}

.multimodal-input__box-5 {
  position: relative;
  height: calc(0.25rem * 24);
  width: calc(0.25rem * 24);
  flex-shrink: 0;
  overflow: hidden;
  border-radius: var(--radius-xl, 14px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 40%, transparent);
  background-color: var(--color-semantic-muted, #ebebeb);
}

.multimodal-input__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.multimodal-input__button {
  position: absolute;
  top: calc(0.25rem * 1.5);
  right: calc(0.25rem * 1.5);
  display: flex;
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  background-color: color-mix(in oklab, #000 60%, transparent);
  color: var(--color-semantic-popover, #fff);
  opacity: 0%;
  backdrop-filter: blur(8px);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.multimodal-input__field-3 {
  display: flex;
  field-sizing: content;
  max-height: calc(0.25rem * 48);
  min-height: calc(0.25rem * 24);
  width: 100%;
  flex: 1;
  resize: none;
  border-radius: 0;
  border-style: solid;
  border-width: 0px;
  border-color: var(--color-semantic-input, #dedede);
  background-color: transparent;
  padding-inline: calc(0.25rem * 4);
  padding-block: calc(0.25rem * 2);
  padding-top: calc(0.25rem * 3.5);
  padding-bottom: calc(0.25rem * 1.5);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: 1.625;
}

.multimodal-input__box-6 {
  order: 9999;
  display: flex;
  height: auto;
  width: 100%;
  cursor: text;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding-inline: calc(0.25rem * 3);
  padding-block: calc(0.25rem * 2);
  padding-bottom: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__box-7 {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.25rem;
}

.multimodal-input__button-2 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 40%, transparent);
  background-clip: padding-box;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__icon {
  rotate: calc(45deg * -1);
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__button-3 {
  display: inline-flex;
  height: calc(0.25rem * 7);
  max-width: 200px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 1.5);
  border-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 2);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.multimodal-input__image-2 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.multimodal-input__part {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.multimodal-input__button-4 {
  display: flex;
  height: calc(0.25rem * 7);
  width: calc(0.25rem * 7);
  flex-shrink: 0;
  cursor: not-allowed;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 2);
  border-radius: var(--radius-xl, 14px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: var(--color-semantic-muted, #ebebeb);
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 25%, transparent);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  animation-duration: 200ms;
  padding: 0;
  pointer-events: none;
  opacity: 50%;
}

.multimodal-input__icon-2 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  pointer-events: none;
  flex-shrink: 0;
}
```
