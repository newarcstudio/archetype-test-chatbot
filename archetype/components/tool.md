# Tool Call

Collapsible card for a tool the assistant called (weather lookup, document suggestions): wrench, tool name and a status badge, then the parameters and result as JSON when open.

Key: `tool`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Status` | `"Pending" \| "Running" \| "Awaiting approval" \| "Completed" \| "Denied" \| "Error"` | `Pending` |  |
| `Open` | `"Open" \| "Closed"` | `Open` |  |

## Default

_variant: Pending · open: Open_

```html
<div data-state="open" data-slot="collapsible" class="tool"><button type="button" aria-controls="radix-_r_1_" aria-expanded="true" data-state="open" data-slot="collapsible-trigger" class="tool__button"><div class="tool__box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span class="tool__part">getWeather</span><span data-slot="badge" data-variant="secondary" class="tool__part-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-2"><circle cx="12" cy="12" r="10"></circle></svg>Pending</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-3"><path d="m6 9 6 6 6-6"></path></svg></button><div data-state="open" id="radix-_r_1_" data-slot="collapsible-content" class="tool__box-2" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 258px; --radix-collapsible-content-width: 448px;"><div class="tool__box-3"><h4 class="tool__title">Parameters</h4><div class="tool__box-4"><div class="tool__box-5" data-language="json" style="contain-intrinsic-size: auto 200px; content-visibility: auto;"><div class="tool__box-6"><pre class="tool__box-7" style="background-color: transparent; color: inherit;"><code class="tool__box-8"><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">{</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"latitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">37.76</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"longitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">-122.41</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">}</span></span></code></pre></div></div></div></div></div></div>
```

```css
:where(.tool, .tool *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tool, .tool *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *):where(button) {
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

:where(.tool, .tool *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.tool, .tool *):where(h4) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.tool, .tool *):where(pre) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.tool, .tool *):where(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

.tool {
  margin-bottom: calc(0.25rem * 4);
  width: 450px;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tool__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 4);
  padding: calc(0.25rem * 3);
}

.tool__box {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
}

.tool__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
}

.tool__part {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
}

.tool__part-2 {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  overflow: hidden;
  border-radius: calc(infinity * 1px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.965 0 0);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.38 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tool__icon-2 {
  pointer-events: none;
  width: calc(0.25rem * 3) !important;
  height: calc(0.25rem * 3) !important;
}

.tool__icon-3 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  rotate: 180deg;
}

.tool__box-2 {
  padding: calc(0.25rem * 4);
  color: oklch(0.12 0 0);
  outline-style: none;
  animation-name: enter;
  animation-duration: 150ms;
}

.tool__box-3 {
  overflow: hidden;
}

.tool__title {
  margin-block-start: calc(calc(0.25rem * 2) * 0);
  margin-block-end: calc(calc(0.25rem * 2) * calc(1 - 0));
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  letter-spacing: 0.025em;
  color: oklch(0.58 0 0);
  text-transform: uppercase;
}

.tool__box-4 {
  border-radius: calc(0.625rem - 2px);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
}

.tool__box-5 {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  background-color: oklch(0.985 0 0);
  color: oklch(0.12 0 0);
}

.tool__box-6 {
  position: relative;
  overflow: auto;
}

.tool__box-7 {
  margin: 0;
  padding: calc(0.25rem * 4);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__box-8 {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__part-3 {
  display: block;
}
```

## Closed

_variant: Pending · open: Closed_

```html
<div data-state="closed" data-slot="collapsible" class="tool"><button type="button" aria-expanded="false" data-state="closed" data-slot="collapsible-trigger" class="tool__button"><div class="tool__box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span class="tool__part">getWeather</span><span data-slot="badge" data-variant="secondary" class="tool__part-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-2"><circle cx="12" cy="12" r="10"></circle></svg>Pending</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-3"><path d="m6 9 6 6 6-6"></path></svg></button><div data-state="closed" id="radix-_r_0_" hidden data-slot="collapsible-content" class="tool__box-2" style></div></div>
```

```css
:where(.tool, .tool *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tool, .tool *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *):where(button) {
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

:where(.tool, .tool *):where(svg) {
  display: block;
  vertical-align: middle;
}

.tool {
  margin-bottom: calc(0.25rem * 4);
  width: 450px;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tool__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 4);
  padding: calc(0.25rem * 3);
}

.tool__box {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
}

.tool__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
}

.tool__part {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
}

.tool__part-2 {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  overflow: hidden;
  border-radius: calc(infinity * 1px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.965 0 0);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.38 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tool__icon-2 {
  pointer-events: none;
  width: calc(0.25rem * 3) !important;
  height: calc(0.25rem * 3) !important;
}

.tool__icon-3 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tool__box-2 {
  display: none !important;
  padding: calc(0.25rem * 4);
  color: oklch(0.12 0 0);
  outline-style: none;
  animation-name: exit;
  animation-duration: 150ms;
}

@keyframes exit {
  100% {
  opacity: var(--tw-exit-opacity, 1);
  transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
```

## Running

_variant: Running · open: Open_

```html
<div data-state="open" data-slot="collapsible" class="tool"><button type="button" aria-controls="radix-_r_2_" aria-expanded="true" data-state="open" data-slot="collapsible-trigger" class="tool__button"><div class="tool__box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span class="tool__part">getWeather</span><span data-slot="badge" data-variant="secondary" class="tool__part-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>Running</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-3"><path d="m6 9 6 6 6-6"></path></svg></button><div data-state="open" id="radix-_r_2_" data-slot="collapsible-content" class="tool__box-2" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 258px; --radix-collapsible-content-width: 448px;"><div class="tool__box-3"><h4 class="tool__title">Parameters</h4><div class="tool__box-4"><div class="tool__box-5" data-language="json" style="contain-intrinsic-size: auto 200px; content-visibility: auto;"><div class="tool__box-6"><pre class="tool__box-7"><code class="tool__box-8"><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">{</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"latitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">37.76</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"longitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">-122.41</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">}</span></span></code></pre></div></div></div></div></div></div>
```

```css
:where(.tool, .tool *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tool, .tool *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *):where(button) {
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

:where(.tool, .tool *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.tool, .tool *):where(h4) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.tool, .tool *):where(pre) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.tool, .tool *):where(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

.tool {
  margin-bottom: calc(0.25rem * 4);
  width: 450px;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tool__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 4);
  padding: calc(0.25rem * 3);
}

.tool__box {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
}

.tool__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
}

.tool__part {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
}

.tool__part-2 {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  overflow: hidden;
  border-radius: calc(infinity * 1px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.965 0 0);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.38 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tool__icon-2 {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  pointer-events: none;
  width: calc(0.25rem * 3) !important;
  height: calc(0.25rem * 3) !important;
}

.tool__icon-3 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  rotate: 180deg;
}

.tool__box-2 {
  padding: calc(0.25rem * 4);
  color: oklch(0.12 0 0);
  outline-style: none;
  animation-name: enter;
  animation-duration: 150ms;
}

.tool__box-3 {
  overflow: hidden;
}

.tool__title {
  margin-block-start: calc(calc(0.25rem * 2) * 0);
  margin-block-end: calc(calc(0.25rem * 2) * calc(1 - 0));
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  letter-spacing: 0.025em;
  color: oklch(0.58 0 0);
  text-transform: uppercase;
}

.tool__box-4 {
  border-radius: calc(0.625rem - 2px);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
}

.tool__box-5 {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  background-color: oklch(0.985 0 0);
  color: oklch(0.12 0 0);
}

.tool__box-6 {
  position: relative;
  overflow: auto;
}

.tool__box-7 {
  margin: 0;
  padding: calc(0.25rem * 4);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__box-8 {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__part-3 {
  display: block;
}

@keyframes pulse {
  50% {
  opacity: 0.5;
  }
}
```

## Awaiting approval

_variant: Awaiting approval · open: Open_

```html
<div data-state="open" data-slot="collapsible" class="tool"><button type="button" aria-controls="radix-_r_3_" aria-expanded="true" data-state="open" data-slot="collapsible-trigger" class="tool__button"><div class="tool__box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span class="tool__part">getWeather</span><span data-slot="badge" data-variant="secondary" class="tool__part-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>Awaiting Approval</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-3"><path d="m6 9 6 6 6-6"></path></svg></button><div data-state="open" id="radix-_r_3_" data-slot="collapsible-content" class="tool__box-2" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 258px; --radix-collapsible-content-width: 448px;"><div class="tool__box-3"><h4 class="tool__title">Parameters</h4><div class="tool__box-4"><div class="tool__box-5" data-language="json" style="contain-intrinsic-size: auto 200px; content-visibility: auto;"><div class="tool__box-6"><pre class="tool__box-7"><code class="tool__box-8"><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">{</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"latitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">37.76</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"longitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">-122.41</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">}</span></span></code></pre></div></div></div></div></div></div>
```

```css
:where(.tool, .tool *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tool, .tool *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *):where(button) {
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

:where(.tool, .tool *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.tool, .tool *):where(h4) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.tool, .tool *):where(pre) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.tool, .tool *):where(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

.tool {
  margin-bottom: calc(0.25rem * 4);
  width: 450px;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tool__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 4);
  padding: calc(0.25rem * 3);
}

.tool__box {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
}

.tool__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
}

.tool__part {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
}

.tool__part-2 {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  overflow: hidden;
  border-radius: calc(infinity * 1px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.965 0 0);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.38 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tool__icon-2 {
  color: oklch(68.1% 0.162 75.834);
  pointer-events: none;
  width: calc(0.25rem * 3) !important;
  height: calc(0.25rem * 3) !important;
}

.tool__icon-3 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  rotate: 180deg;
}

.tool__box-2 {
  padding: calc(0.25rem * 4);
  color: oklch(0.12 0 0);
  outline-style: none;
  animation-name: enter;
  animation-duration: 150ms;
}

.tool__box-3 {
  overflow: hidden;
}

.tool__title {
  margin-block-start: calc(calc(0.25rem * 2) * 0);
  margin-block-end: calc(calc(0.25rem * 2) * calc(1 - 0));
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  letter-spacing: 0.025em;
  color: oklch(0.58 0 0);
  text-transform: uppercase;
}

.tool__box-4 {
  border-radius: calc(0.625rem - 2px);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
}

.tool__box-5 {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  background-color: oklch(0.985 0 0);
  color: oklch(0.12 0 0);
}

.tool__box-6 {
  position: relative;
  overflow: auto;
}

.tool__box-7 {
  margin: 0;
  padding: calc(0.25rem * 4);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__box-8 {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__part-3 {
  display: block;
}
```

## Completed

_variant: Completed · open: Open_

```html
<div data-state="open" data-slot="collapsible" class="tool"><button type="button" aria-controls="radix-_r_4_" aria-expanded="true" data-state="open" data-slot="collapsible-trigger" class="tool__button"><div class="tool__box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span class="tool__part">getWeather</span><span data-slot="badge" data-variant="secondary" class="tool__part-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Completed</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-3"><path d="m6 9 6 6 6-6"></path></svg></button><div data-state="open" id="radix-_r_4_" data-slot="collapsible-content" class="tool__box-2" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 500px; --radix-collapsible-content-width: 448px;"><div class="tool__box-3"><h4 class="tool__title">Parameters</h4><div class="tool__box-4"><div class="tool__box-5" data-language="json" style="contain-intrinsic-size: auto 200px; content-visibility: auto;"><div class="tool__box-6"><pre class="tool__box-7"><code class="tool__box-8"><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">{</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"latitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">37.76</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"longitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">-122.41</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">}</span></span></code></pre></div></div></div></div><div><h4 class="tool__title">Result</h4><div class="tool__box-9"><div class="tool__box-5" data-language="json" style="contain-intrinsic-size: auto 200px; content-visibility: auto;"><div class="tool__box-6"><pre class="tool__box-7" style="background-color: transparent; color: inherit;"><code class="tool__box-8"><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">{</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"temperature"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">18</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"unit"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(3, 47, 98); --shiki-dark: #9ECBFF;">"°C"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"condition"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(3, 47, 98); --shiki-dark: #9ECBFF;">"Clear"</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">}</span></span></code></pre></div></div></div></div></div></div>
```

```css
:where(.tool, .tool *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tool, .tool *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *):where(button) {
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

:where(.tool, .tool *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.tool, .tool *):where(h4) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.tool, .tool *):where(pre) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.tool, .tool *):where(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

.tool {
  margin-bottom: calc(0.25rem * 4);
  width: 450px;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tool__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 4);
  padding: calc(0.25rem * 3);
}

.tool__box {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
}

.tool__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
}

.tool__part {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
}

.tool__part-2 {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  overflow: hidden;
  border-radius: calc(infinity * 1px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.965 0 0);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.38 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tool__icon-2 {
  color: oklch(62.7% 0.194 149.214);
  pointer-events: none;
  width: calc(0.25rem * 3) !important;
  height: calc(0.25rem * 3) !important;
}

.tool__icon-3 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  rotate: 180deg;
}

.tool__box-2 {
  padding: calc(0.25rem * 4);
  color: oklch(0.12 0 0);
  outline-style: none;
  animation-name: enter;
  animation-duration: 150ms;
}

.tool__box-3 {
  margin-block-start: calc(calc(0.25rem * 4) * 0);
  margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  overflow: hidden;
}

.tool__title {
  margin-block-start: calc(calc(0.25rem * 2) * 0);
  margin-block-end: calc(calc(0.25rem * 2) * calc(1 - 0));
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  letter-spacing: 0.025em;
  color: oklch(0.58 0 0);
  text-transform: uppercase;
}

.tool__box-4 {
  border-radius: calc(0.625rem - 2px);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
}

.tool__box-5 {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  background-color: oklch(0.985 0 0);
  color: oklch(0.12 0 0);
}

.tool__box-6 {
  position: relative;
  overflow: auto;
}

.tool__box-7 {
  margin: 0;
  padding: calc(0.25rem * 4);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__box-8 {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__part-3 {
  display: block;
}

.tool__box-9 {
  overflow-x: auto;
  border-radius: calc(0.625rem - 2px);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
}
```

## Denied

_variant: Denied · open: Open_

```html
<div data-state="open" data-slot="collapsible" class="tool"><button type="button" aria-controls="radix-_r_5_" aria-expanded="true" data-state="open" data-slot="collapsible-trigger" class="tool__button"><div class="tool__box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span class="tool__part">getWeather</span><span data-slot="badge" data-variant="secondary" class="tool__part-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>Denied</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-3"><path d="m6 9 6 6 6-6"></path></svg></button><div data-state="open" id="radix-_r_5_" data-slot="collapsible-content" class="tool__box-2" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 258px; --radix-collapsible-content-width: 448px;"><div class="tool__box-3"><h4 class="tool__title">Parameters</h4><div class="tool__box-4"><div class="tool__box-5" data-language="json" style="contain-intrinsic-size: auto 200px; content-visibility: auto;"><div class="tool__box-6"><pre class="tool__box-7"><code class="tool__box-8"><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">{</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"latitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">37.76</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"longitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">-122.41</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">}</span></span></code></pre></div></div></div></div></div></div>
```

```css
:where(.tool, .tool *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tool, .tool *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *):where(button) {
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

:where(.tool, .tool *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.tool, .tool *):where(h4) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.tool, .tool *):where(pre) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.tool, .tool *):where(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

.tool {
  margin-bottom: calc(0.25rem * 4);
  width: 450px;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tool__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 4);
  padding: calc(0.25rem * 3);
}

.tool__box {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
}

.tool__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
}

.tool__part {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
}

.tool__part-2 {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  overflow: hidden;
  border-radius: calc(infinity * 1px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.965 0 0);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.38 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tool__icon-2 {
  color: oklch(64.6% 0.222 41.116);
  pointer-events: none;
  width: calc(0.25rem * 3) !important;
  height: calc(0.25rem * 3) !important;
}

.tool__icon-3 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  rotate: 180deg;
}

.tool__box-2 {
  padding: calc(0.25rem * 4);
  color: oklch(0.12 0 0);
  outline-style: none;
  animation-name: enter;
  animation-duration: 150ms;
}

.tool__box-3 {
  overflow: hidden;
}

.tool__title {
  margin-block-start: calc(calc(0.25rem * 2) * 0);
  margin-block-end: calc(calc(0.25rem * 2) * calc(1 - 0));
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  letter-spacing: 0.025em;
  color: oklch(0.58 0 0);
  text-transform: uppercase;
}

.tool__box-4 {
  border-radius: calc(0.625rem - 2px);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
}

.tool__box-5 {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  background-color: oklch(0.985 0 0);
  color: oklch(0.12 0 0);
}

.tool__box-6 {
  position: relative;
  overflow: auto;
}

.tool__box-7 {
  margin: 0;
  padding: calc(0.25rem * 4);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__box-8 {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__part-3 {
  display: block;
}
```

## Error

_variant: Error · open: Open_

```html
<div data-state="open" data-slot="collapsible" class="tool"><button type="button" aria-controls="radix-_r_6_" aria-expanded="true" data-state="open" data-slot="collapsible-trigger" class="tool__button"><div class="tool__box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span class="tool__part">getWeather</span><span data-slot="badge" data-variant="secondary" class="tool__part-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>Error</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool__icon-3"><path d="m6 9 6 6 6-6"></path></svg></button><div data-state="open" id="radix-_r_6_" data-slot="collapsible-content" class="tool__box-2" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 314px; --radix-collapsible-content-width: 448px;"><div class="tool__box-3"><h4 class="tool__title">Parameters</h4><div class="tool__box-4"><div class="tool__box-5" data-language="json" style="contain-intrinsic-size: auto 200px; content-visibility: auto;"><div class="tool__box-6"><pre class="tool__box-7"><code class="tool__box-8"><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">{</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"latitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">37.76</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"longitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">-122.41</span></span><span class="tool__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">}</span></span></code></pre></div></div></div></div><div><h4 class="tool__title">Error</h4><div class="tool__box-9"><div>Weather service unavailable</div><div></div></div></div></div></div>
```

```css
:where(.tool, .tool *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.tool, .tool *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.tool, .tool *):where(button) {
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

:where(.tool, .tool *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.tool, .tool *):where(h4) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.tool, .tool *):where(pre) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.tool, .tool *):where(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

.tool {
  margin-bottom: calc(0.25rem * 4);
  width: 450px;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.tool__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 4);
  padding: calc(0.25rem * 3);
}

.tool__box {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
}

.tool__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
}

.tool__part {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
}

.tool__part-2 {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  overflow: hidden;
  border-radius: calc(infinity * 1px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.965 0 0);
  padding-inline: calc(0.25rem * 2);
  padding-block: calc(0.25rem * 0.5);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.38 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tool__icon-2 {
  color: oklch(57.7% 0.245 27.325);
  pointer-events: none;
  width: calc(0.25rem * 3) !important;
  height: calc(0.25rem * 3) !important;
}

.tool__icon-3 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: oklch(0.58 0 0);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  rotate: 180deg;
}

.tool__box-2 {
  padding: calc(0.25rem * 4);
  color: oklch(0.12 0 0);
  outline-style: none;
  animation-name: enter;
  animation-duration: 150ms;
}

.tool__box-3 {
  margin-block-start: calc(calc(0.25rem * 4) * 0);
  margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  overflow: hidden;
}

.tool__title {
  margin-block-start: calc(calc(0.25rem * 2) * 0);
  margin-block-end: calc(calc(0.25rem * 2) * calc(1 - 0));
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  letter-spacing: 0.025em;
  color: oklch(0.58 0 0);
  text-transform: uppercase;
}

.tool__box-4 {
  border-radius: calc(0.625rem - 2px);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
}

.tool__box-5 {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(0.625rem - 2px);
  border-style: solid;
  border-width: 1px;
  background-color: oklch(0.985 0 0);
  color: oklch(0.12 0 0);
}

.tool__box-6 {
  position: relative;
  overflow: auto;
}

.tool__box-7 {
  margin: 0;
  padding: calc(0.25rem * 4);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__box-8 {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.tool__part-3 {
  display: block;
}

.tool__box-9 {
  overflow-x: auto;
  border-radius: calc(0.625rem - 2px);
  background-color: color-mix(in oklab, oklch(0.55 0.15 25) 10%, transparent);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: oklch(0.55 0.15 25);
}
```
