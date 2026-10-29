# Attachment Preview

96px thumbnail of a file attached to a message or waiting in the composer. Images fill it; other files read "File". A spinner covers it while uploading; a remove button appears on hover in the composer.

Key: `preview-attachment`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Kind` | `"Image" \| "File"` | `Image` |  |
| `State` | `"Default" \| "Uploading" \| "Hover"` | `Default` |  |

## Default

_variant: Image_

```html
<div class="preview-attachment" data-testid="input-attachment-preview"><img class="preview-attachment__image" height="96" width="96" alt="skyline.png" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2296%22%20height%3D%2296%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2393c5fd%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%236366f1%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2266%22%20cy%3D%2230%22%20r%3D%2210%22%20fill%3D%22%23fde68a%22%2F%3E%3Cpath%20d%3D%22M0%2080%20L32%2044%20L60%2072%20L76%2058%20L96%2078%20L96%2096%20L0%2096Z%22%20fill%3D%22%231e3a8a%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E" /><button class="preview-attachment__button" type="button"><svg height="10" stroke-linejoin="round" viewBox="0 0 16 16" width="10" style="color: currentcolor;"><path clip-rule="evenodd" d="M9.96966 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96966L9.06065 7.99999L11.0303 6.03032L11.5607 5.49999L10.5 4.43933L9.96966 4.96966L7.99999 6.93933L6.03032 4.96966L5.49999 4.43933L4.43933 5.49999L4.96966 6.03032L6.93933 7.99999L4.96966 9.96966L4.43933 10.5L5.49999 11.5607L6.03032 11.0303L7.99999 9.06065L9.96966 11.0303Z" fill="currentColor" fill-rule="evenodd"></path></svg></button></div>
```

```css
:where(.preview-attachment, .preview-attachment *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.preview-attachment, .preview-attachment *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

:where(.preview-attachment, .preview-attachment *):where(button) {
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

:where(.preview-attachment, .preview-attachment *):where(svg) {
  display: block;
  vertical-align: middle;
}

.preview-attachment {
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.preview-attachment__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-attachment__button {
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
```

## Uploading

_variant: Image · state: uploading_

```html
<div class="preview-attachment" data-testid="input-attachment-preview"><img class="preview-attachment__image" height="96" width="96" alt="skyline.png" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2296%22%20height%3D%2296%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2393c5fd%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%236366f1%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2266%22%20cy%3D%2230%22%20r%3D%2210%22%20fill%3D%22%23fde68a%22%2F%3E%3Cpath%20d%3D%22M0%2080%20L32%2044%20L60%2072%20L76%2058%20L96%2078%20L96%2096%20L0%2096Z%22%20fill%3D%22%231e3a8a%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E" /><div class="preview-attachment__box" data-testid="input-attachment-loader"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="preview-attachment__icon" role="status" aria-label="Loading"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg></div></div>
```

```css
:where(.preview-attachment, .preview-attachment *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.preview-attachment, .preview-attachment *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

:where(.preview-attachment, .preview-attachment *):where(svg) {
  display: block;
  vertical-align: middle;
}

.preview-attachment {
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.preview-attachment__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-attachment__box {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-xl, 14px);
  background-color: color-mix(in oklab, #000 40%, transparent);
  backdrop-filter: blur(8px);
}

.preview-attachment__icon {
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
  transform: rotate(360deg);
  }
}
```

## Hover

_variant: Image · state: hover_

```html
<div class="preview-attachment" data-testid="input-attachment-preview"><img class="preview-attachment__image" height="96" width="96" alt="skyline.png" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2296%22%20height%3D%2296%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2393c5fd%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%236366f1%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2266%22%20cy%3D%2230%22%20r%3D%2210%22%20fill%3D%22%23fde68a%22%2F%3E%3Cpath%20d%3D%22M0%2080%20L32%2044%20L60%2072%20L76%2058%20L96%2078%20L96%2096%20L0%2096Z%22%20fill%3D%22%231e3a8a%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E" /><button class="preview-attachment__button" type="button"><svg height="10" stroke-linejoin="round" viewBox="0 0 16 16" width="10" style="color: currentcolor;"><path clip-rule="evenodd" d="M9.96966 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96966L9.06065 7.99999L11.0303 6.03032L11.5607 5.49999L10.5 4.43933L9.96966 4.96966L7.99999 6.93933L6.03032 4.96966L5.49999 4.43933L4.43933 5.49999L4.96966 6.03032L6.93933 7.99999L4.96966 9.96966L4.43933 10.5L5.49999 11.5607L6.03032 11.0303L7.99999 9.06065L9.96966 11.0303Z" fill="currentColor" fill-rule="evenodd"></path></svg></button></div>
```

```css
:where(.preview-attachment, .preview-attachment *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.preview-attachment, .preview-attachment *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *):where(img) {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

:where(.preview-attachment, .preview-attachment *):where(button) {
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

:where(.preview-attachment, .preview-attachment *):where(svg) {
  display: block;
  vertical-align: middle;
}

.preview-attachment {
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.preview-attachment__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-attachment__button {
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
  backdrop-filter: blur(8px);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  opacity: 100%;
}
```

## File

_variant: File_

```html
<div class="preview-attachment" data-testid="input-attachment-preview"><div class="preview-attachment__box">File</div><button class="preview-attachment__button" type="button"><svg height="10" stroke-linejoin="round" viewBox="0 0 16 16" width="10" style="color: currentcolor;"><path clip-rule="evenodd" d="M9.96966 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96966L9.06065 7.99999L11.0303 6.03032L11.5607 5.49999L10.5 4.43933L9.96966 4.96966L7.99999 6.93933L6.03032 4.96966L5.49999 4.43933L4.43933 5.49999L4.96966 6.03032L6.93933 7.99999L4.96966 9.96966L4.43933 10.5L5.49999 11.5607L6.03032 11.0303L7.99999 9.06065L9.96966 11.0303Z" fill="currentColor" fill-rule="evenodd"></path></svg></button></div>
```

```css
:where(.preview-attachment, .preview-attachment *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.preview-attachment, .preview-attachment *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *):where(button) {
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

:where(.preview-attachment, .preview-attachment *):where(svg) {
  display: block;
  vertical-align: middle;
}

.preview-attachment {
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.preview-attachment__box {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
}

.preview-attachment__button {
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
```

## File · Uploading

_variant: File · state: uploading_

```html
<div class="preview-attachment" data-testid="input-attachment-preview"><div class="preview-attachment__box">File</div><div class="preview-attachment__box-2" data-testid="input-attachment-loader"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="preview-attachment__icon" role="status" aria-label="Loading"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg></div></div>
```

```css
:where(.preview-attachment, .preview-attachment *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.preview-attachment, .preview-attachment *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *):where(svg) {
  display: block;
  vertical-align: middle;
}

.preview-attachment {
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.preview-attachment__box {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
}

.preview-attachment__box-2 {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-xl, 14px);
  background-color: color-mix(in oklab, #000 40%, transparent);
  backdrop-filter: blur(8px);
}

.preview-attachment__icon {
  width: calc(0.25rem * 5);
  height: calc(0.25rem * 5);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
  transform: rotate(360deg);
  }
}
```

## File · Hover

_variant: File · state: hover_

```html
<div class="preview-attachment" data-testid="input-attachment-preview"><div class="preview-attachment__box">File</div><button class="preview-attachment__button" type="button"><svg height="10" stroke-linejoin="round" viewBox="0 0 16 16" width="10" style="color: currentcolor;"><path clip-rule="evenodd" d="M9.96966 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96966L9.06065 7.99999L11.0303 6.03032L11.5607 5.49999L10.5 4.43933L9.96966 4.96966L7.99999 6.93933L6.03032 4.96966L5.49999 4.43933L4.43933 5.49999L4.96966 6.03032L6.93933 7.99999L4.96966 9.96966L4.43933 10.5L5.49999 11.5607L6.03032 11.0303L7.99999 9.06065L9.96966 11.0303Z" fill="currentColor" fill-rule="evenodd"></path></svg></button></div>
```

```css
:where(.preview-attachment, .preview-attachment *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.preview-attachment, .preview-attachment *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.preview-attachment, .preview-attachment *):where(button) {
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

:where(.preview-attachment, .preview-attachment *):where(svg) {
  display: block;
  vertical-align: middle;
}

.preview-attachment {
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
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.preview-attachment__box {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
}

.preview-attachment__button {
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
  backdrop-filter: blur(8px);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  opacity: 100%;
}
```
