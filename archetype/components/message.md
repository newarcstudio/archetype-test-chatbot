# Chat Message

One turn in the conversation. The user's text sits right in a soft gradient bubble; the assistant's is plain markdown beside a sparkle avatar, with reasoning, tool calls and copy/vote actions (shown on hover) beneath. Thinking is the shimmer shown before the first token.

Key: `message`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Kind` | `"User" \| "Assistant" \| "With reasoning" \| "With tool call" \| "Thinking"` | `User` |  |
| `State` | `"Default" \| "Hover"` | `Default` |  |

## Default

_variant: User_

```html
<div class="message" data-role="user" data-testid="message-user">
  <div class="message__box"><div class="message__box-2" data-testid="message-content"><div class="message__box-3"><p class="message__text">What are the advantages of using Next.js?</p></div></div><div class="message__box-4"><div class="message__box-5"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button" type="button" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon"><path clip-rule="evenodd" d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part">Copy</span></button></div></div></div>
</div>
```

```css
:where(.message, .message *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message, .message *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *):where(p) {
  line-height: 1.6;
}

:where(.message, .message *):where(button) {
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

:where(.message, .message *):where(svg) {
  display: block;
  vertical-align: middle;
}

.message {
  width: 720px;
  animation: fade-up 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message__box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: calc(0.25rem * 2);
}

.message__box-2 {
  display: flex;
  width: fit-content;
  max-width: min(80%, 56ch);
  min-width: 0;
  flex-direction: column;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  border-radius: var(--radius-2xl, 16px);
  border-bottom-right-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-image: linear-gradient(to bottom right in oklab, var(--color-semantic-accent, rgb(243, 243, 243)) 0%, var(--color-semantic-muted, rgb(235, 235, 235)) 100%);
  padding-inline: calc(0.25rem * 3.5);
  padding-block: calc(0.25rem * 2);
  font-size: 13px;
  line-height: 1.65;
  overflow-wrap: break-word;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 1px 3px oklch(0 0 0 / 0.05), 0 1px 1px oklch(0 0 0 / 0.03);
}

.message__box-3 {
  width: 100%;
  height: 100%;
  white-space: normal;
}

.message__text {
  margin-top: 0;
  margin-bottom: 0;
}

.message__box-4 {
  margin-right: calc(0.25rem * -0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
}

.message__box-5 {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 0.5);
}

.message__button {
  display: inline-flex;
  width: calc(0.25rem * 7);
  height: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 50%, transparent);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.message__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.message__part {
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

@keyframes fade-up {
  0% {
  opacity: 0;
  transform: translateY(6px);
  }
  100% {
  opacity: 1;
  transform: translateY(0);
  }
}
```

## Hover

_variant: User · state: hover_

```html
<div class="message" data-role="user" data-testid="message-user">
  <div class="message__box"><div class="message__box-2" data-testid="message-content"><div class="message__box-3"><p class="message__text">What are the advantages of using Next.js?</p></div></div><div class="message__box-4"><div class="message__box-5"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button" type="button" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon"><path clip-rule="evenodd" d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part">Copy</span></button></div></div></div>
</div>
```

```css
:where(.message, .message *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message, .message *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *):where(p) {
  line-height: 1.6;
}

:where(.message, .message *):where(button) {
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

:where(.message, .message *):where(svg) {
  display: block;
  vertical-align: middle;
}

.message {
  width: 720px;
  animation: fade-up 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message__box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: calc(0.25rem * 2);
}

.message__box-2 {
  display: flex;
  width: fit-content;
  max-width: min(80%, 56ch);
  min-width: 0;
  flex-direction: column;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  border-radius: var(--radius-2xl, 16px);
  border-bottom-right-radius: var(--radius-lg, 10px);
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, var(--color-semantic-input, #dedede) 30%, transparent);
  background-image: linear-gradient(to bottom right in oklab, var(--color-semantic-accent, rgb(243, 243, 243)) 0%, var(--color-semantic-muted, rgb(235, 235, 235)) 100%);
  padding-inline: calc(0.25rem * 3.5);
  padding-block: calc(0.25rem * 2);
  font-size: 13px;
  line-height: 1.65;
  overflow-wrap: break-word;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 1px 3px oklch(0 0 0 / 0.05), 0 1px 1px oklch(0 0 0 / 0.03);
}

.message__box-3 {
  width: 100%;
  height: 100%;
  white-space: normal;
}

.message__text {
  margin-top: 0;
  margin-bottom: 0;
}

.message__box-4 {
  margin-right: calc(0.25rem * -0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  opacity: 100%;
}

.message__box-5 {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 0.5);
}

.message__button {
  display: inline-flex;
  width: calc(0.25rem * 7);
  height: calc(0.25rem * 7);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 50%, transparent);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.message__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.message__part {
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

@keyframes fade-up {
  0% {
  opacity: 0;
  transform: translateY(6px);
  }
  100% {
  opacity: 1;
  transform: translateY(0);
  }
}
```

## Assistant

_variant: Assistant_

```html
<div class="message" data-role="assistant" data-testid="message-assistant">
  <div class="message__box"><div class="message__box-2"><div class="message__box-3"><svg height="13" stroke-linejoin="round" viewBox="0 0 16 16" width="13" style="color: currentcolor;"><path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path><path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path><path d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z" fill="currentColor"></path></svg></div></div><div class="message__box-4"><div class="message__box-5" data-testid="message-content"><div class="message__box-6"><p class="message__text">Here's a quick look at <span class="message__part" data-streamdown="strong">Next.js</span> advantages:</p><ul class="message__list" data-streamdown="unordered-list">
<li class="message__item" data-streamdown="list-item"><span class="message__part" data-streamdown="strong">Server components</span> keep JavaScript off the client.</li>
<li class="message__item" data-streamdown="list-item"><span class="message__part" data-streamdown="strong">File-based routing</span> with nested layouts.</li>
<li class="message__item" data-streamdown="list-item">Built-in <code class="message__box-7" data-streamdown="inline-code">next/image</code> and font optimization.</li>
</ul><p class="message__text-2">Want an example project?</p></div></div><div class="message__box-8"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button" type="button" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon"><path clip-rule="evenodd" d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Copy</span></button><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button" type="button" data-testid="message-upvote" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon"><path clip-rule="evenodd" d="M6.89531 2.23972C6.72984 2.12153 6.5 2.23981 6.5 2.44315V5.25001C6.5 6.21651 5.7165 7.00001 4.75 7.00001H2.5V13.5H12.1884C12.762 13.5 13.262 13.1096 13.4011 12.5532L14.4011 8.55318C14.5984 7.76425 14.0017 7.00001 13.1884 7.00001H9.25H8.5V6.25001V3.51458C8.5 3.43384 8.46101 3.35807 8.39531 3.31114L6.89531 2.23972ZM5 2.44315C5 1.01975 6.6089 0.191779 7.76717 1.01912L9.26717 2.09054C9.72706 2.41904 10 2.94941 10 3.51458V5.50001H13.1884C14.9775 5.50001 16.2903 7.18133 15.8563 8.91698L14.8563 12.917C14.5503 14.1412 13.4503 15 12.1884 15H1.75H1V14.25V6.25001V5.50001H1.75H4.75C4.88807 5.50001 5 5.38808 5 5.25001V2.44315Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Upvote Response</span></button><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button" type="button" data-testid="message-downvote" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon"><path clip-rule="evenodd" d="M6.89531 13.7603C6.72984 13.8785 6.5 13.7602 6.5 13.5569V10.75C6.5 9.7835 5.7165 9 4.75 9H2.5V2.5H12.1884C12.762 2.5 13.262 2.89037 13.4011 3.44683L14.4011 7.44683C14.5984 8.23576 14.0017 9 13.1884 9H9.25H8.5V9.75V12.4854C8.5 12.5662 8.46101 12.6419 8.39531 12.6889L6.89531 13.7603ZM5 13.5569C5 14.9803 6.6089 15.8082 7.76717 14.9809L9.26717 13.9095C9.72706 13.581 10 13.0506 10 12.4854V10.5H13.1884C14.9775 10.5 16.2903 8.81868 15.8563 7.08303L14.8563 3.08303C14.5503 1.85882 13.4503 1 12.1884 1H1.75H1V1.75V9.75V10.5H1.75H4.75C4.88807 10.5 5 10.6119 5 10.75V13.5569Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Downvote Response</span></button></div></div></div>
</div>
```

```css
:where(.message, .message *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message, .message *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.message, .message *):where(p) {
  line-height: 1.6;
}

:where(.message, .message *):where(ul) {
  list-style: none;
}

:where(.message, .message *):where(code) {
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.message, .message *):where(button) {
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

.message {
  width: 720px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message__box {
  display: flex;
  align-items: flex-start;
  gap: calc(0.25rem * 3);
}

.message__box-2 {
  display: flex;
  height: calc(13px * 1.65);
  flex-shrink: 0;
  align-items: center;
}

.message__box-3 {
  display: flex;
  width: calc(0.25rem * 7);
  height: calc(0.25rem * 7);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg, 10px);
  background-color: color-mix(in oklab, var(--color-semantic-muted, #ebebeb) 60%, transparent);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, var(--color-semantic-input, #dedede) 50%, transparent);
}

.message__box-4 {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: calc(0.25rem * 2);
}

.message__box-5 {
  display: flex;
  max-width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  font-size: 13px;
  line-height: 1.65;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
}

.message__box-6 {
  width: 100%;
  height: 100%;
  white-space: normal;
}

.message__text {
  margin-block-start: calc(calc(0.25rem * 4) * 0);
  margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  margin-top: 0;
}

.message__part {
  font-weight: 600;
}

.message__list {
  margin-block-start: calc(calc(0.25rem * 4) * 0);
  margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  list-style-position: inside;
  list-style-type: disc;
  white-space: normal;
}

.message__item {
  padding-block: 0.25rem;
}

.message__box-7 {
  border-radius: 0.25rem;
  background-color: var(--color-semantic-muted, #ebebeb);
  padding-inline: calc(0.25rem * 1.5);
  padding-block: calc(0.25rem * 0.5);
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.message__text-2 {
  margin-bottom: 0;
}

.message__box-8 {
  margin-left: calc(0.25rem * -0.5);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
}

.message__button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 50%, transparent);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.message__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.message__part-2 {
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

## Assistant · Hover

_variant: Assistant · state: hover_

```html
<div class="message" data-role="assistant" data-testid="message-assistant">
  <div class="message__box"><div class="message__box-2"><div class="message__box-3"><svg height="13" stroke-linejoin="round" viewBox="0 0 16 16" width="13" style="color: currentcolor;"><path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path><path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path><path d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z" fill="currentColor"></path></svg></div></div><div class="message__box-4"><div class="message__box-5" data-testid="message-content"><div class="message__box-6"><p class="message__text">Here's a quick look at <span class="message__part" data-streamdown="strong">Next.js</span> advantages:</p><ul class="message__list" data-streamdown="unordered-list">
<li class="message__item" data-streamdown="list-item"><span class="message__part" data-streamdown="strong">Server components</span> keep JavaScript off the client.</li>
<li class="message__item" data-streamdown="list-item"><span class="message__part" data-streamdown="strong">File-based routing</span> with nested layouts.</li>
<li class="message__item" data-streamdown="list-item">Built-in <code class="message__box-7" data-streamdown="inline-code">next/image</code> and font optimization.</li>
</ul><p class="message__text-2">Want an example project?</p></div></div><div class="message__box-8"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button" type="button" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon"><path clip-rule="evenodd" d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Copy</span></button><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button" type="button" data-testid="message-upvote" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon"><path clip-rule="evenodd" d="M6.89531 2.23972C6.72984 2.12153 6.5 2.23981 6.5 2.44315V5.25001C6.5 6.21651 5.7165 7.00001 4.75 7.00001H2.5V13.5H12.1884C12.762 13.5 13.262 13.1096 13.4011 12.5532L14.4011 8.55318C14.5984 7.76425 14.0017 7.00001 13.1884 7.00001H9.25H8.5V6.25001V3.51458C8.5 3.43384 8.46101 3.35807 8.39531 3.31114L6.89531 2.23972ZM5 2.44315C5 1.01975 6.6089 0.191779 7.76717 1.01912L9.26717 2.09054C9.72706 2.41904 10 2.94941 10 3.51458V5.50001H13.1884C14.9775 5.50001 16.2903 7.18133 15.8563 8.91698L14.8563 12.917C14.5503 14.1412 13.4503 15 12.1884 15H1.75H1V14.25V6.25001V5.50001H1.75H4.75C4.88807 5.50001 5 5.38808 5 5.25001V2.44315Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Upvote Response</span></button><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button" type="button" data-testid="message-downvote" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon"><path clip-rule="evenodd" d="M6.89531 13.7603C6.72984 13.8785 6.5 13.7602 6.5 13.5569V10.75C6.5 9.7835 5.7165 9 4.75 9H2.5V2.5H12.1884C12.762 2.5 13.262 2.89037 13.4011 3.44683L14.4011 7.44683C14.5984 8.23576 14.0017 9 13.1884 9H9.25H8.5V9.75V12.4854C8.5 12.5662 8.46101 12.6419 8.39531 12.6889L6.89531 13.7603ZM5 13.5569C5 14.9803 6.6089 15.8082 7.76717 14.9809L9.26717 13.9095C9.72706 13.581 10 13.0506 10 12.4854V10.5H13.1884C14.9775 10.5 16.2903 8.81868 15.8563 7.08303L14.8563 3.08303C14.5503 1.85882 13.4503 1 12.1884 1H1.75H1V1.75V9.75V10.5H1.75H4.75C4.88807 10.5 5 10.6119 5 10.75V13.5569Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Downvote Response</span></button></div></div></div>
</div>
```

```css
:where(.message, .message *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message, .message *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.message, .message *):where(p) {
  line-height: 1.6;
}

:where(.message, .message *):where(ul) {
  list-style: none;
}

:where(.message, .message *):where(code) {
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.message, .message *):where(button) {
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

.message {
  width: 720px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message__box {
  display: flex;
  align-items: flex-start;
  gap: calc(0.25rem * 3);
}

.message__box-2 {
  display: flex;
  height: calc(13px * 1.65);
  flex-shrink: 0;
  align-items: center;
}

.message__box-3 {
  display: flex;
  width: calc(0.25rem * 7);
  height: calc(0.25rem * 7);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg, 10px);
  background-color: color-mix(in oklab, var(--color-semantic-muted, #ebebeb) 60%, transparent);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, var(--color-semantic-input, #dedede) 50%, transparent);
}

.message__box-4 {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: calc(0.25rem * 2);
}

.message__box-5 {
  display: flex;
  max-width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  font-size: 13px;
  line-height: 1.65;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
}

.message__box-6 {
  width: 100%;
  height: 100%;
  white-space: normal;
}

.message__text {
  margin-block-start: calc(calc(0.25rem * 4) * 0);
  margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  margin-top: 0;
}

.message__part {
  font-weight: 600;
}

.message__list {
  margin-block-start: calc(calc(0.25rem * 4) * 0);
  margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  list-style-position: inside;
  list-style-type: disc;
  white-space: normal;
}

.message__item {
  padding-block: 0.25rem;
}

.message__box-7 {
  border-radius: 0.25rem;
  background-color: var(--color-semantic-muted, #ebebeb);
  padding-inline: calc(0.25rem * 1.5);
  padding-block: calc(0.25rem * 0.5);
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.message__text-2 {
  margin-bottom: 0;
}

.message__box-8 {
  margin-left: calc(0.25rem * -0.5);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
  opacity: 100%;
}

.message__button {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 50%, transparent);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.message__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.message__part-2 {
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

## With reasoning

_variant: With reasoning_

```html
<div class="message" data-role="assistant" data-testid="message-assistant">
  <div class="message__box"><div class="message__box-2"><div class="message__box-3"><svg height="13" stroke-linejoin="round" viewBox="0 0 16 16" width="13" style="color: currentcolor;"><path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path><path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path><path d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z" fill="currentColor"></path></svg></div></div><div class="message__box-4"><div data-state="closed" data-slot="collapsible" data-testid="message-reasoning"><button type="button" aria-expanded="false" data-state="closed" data-slot="collapsible-trigger" class="message__button"><p>Thought for a few seconds</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message__icon"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="message__box-5" data-testid="message-content"><div class="message__box-6"><p class="message__text">Here's a quick look at <span class="message__part" data-streamdown="strong">Next.js</span> advantages:</p><ul class="message__list" data-streamdown="unordered-list">
<li class="message__item" data-streamdown="list-item"><span class="message__part" data-streamdown="strong">Server components</span> keep JavaScript off the client.</li>
<li class="message__item" data-streamdown="list-item"><span class="message__part" data-streamdown="strong">File-based routing</span> with nested layouts.</li>
<li class="message__item" data-streamdown="list-item">Built-in <code class="message__box-7" data-streamdown="inline-code">next/image</code> and font optimization.</li>
</ul><p class="message__text-2">Want an example project?</p></div></div><div class="message__box-8"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button-2" type="button" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon-2"><path clip-rule="evenodd" d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Copy</span></button><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button-2" type="button" data-testid="message-upvote" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon-2"><path clip-rule="evenodd" d="M6.89531 2.23972C6.72984 2.12153 6.5 2.23981 6.5 2.44315V5.25001C6.5 6.21651 5.7165 7.00001 4.75 7.00001H2.5V13.5H12.1884C12.762 13.5 13.262 13.1096 13.4011 12.5532L14.4011 8.55318C14.5984 7.76425 14.0017 7.00001 13.1884 7.00001H9.25H8.5V6.25001V3.51458C8.5 3.43384 8.46101 3.35807 8.39531 3.31114L6.89531 2.23972ZM5 2.44315C5 1.01975 6.6089 0.191779 7.76717 1.01912L9.26717 2.09054C9.72706 2.41904 10 2.94941 10 3.51458V5.50001H13.1884C14.9775 5.50001 16.2903 7.18133 15.8563 8.91698L14.8563 12.917C14.5503 14.1412 13.4503 15 12.1884 15H1.75H1V14.25V6.25001V5.50001H1.75H4.75C4.88807 5.50001 5 5.38808 5 5.25001V2.44315Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Upvote Response</span></button><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button-2" type="button" data-testid="message-downvote" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon-2"><path clip-rule="evenodd" d="M6.89531 13.7603C6.72984 13.8785 6.5 13.7602 6.5 13.5569V10.75C6.5 9.7835 5.7165 9 4.75 9H2.5V2.5H12.1884C12.762 2.5 13.262 2.89037 13.4011 3.44683L14.4011 7.44683C14.5984 8.23576 14.0017 9 13.1884 9H9.25H8.5V9.75V12.4854C8.5 12.5662 8.46101 12.6419 8.39531 12.6889L6.89531 13.7603ZM5 13.5569C5 14.9803 6.6089 15.8082 7.76717 14.9809L9.26717 13.9095C9.72706 13.581 10 13.0506 10 12.4854V10.5H13.1884C14.9775 10.5 16.2903 8.81868 15.8563 7.08303L14.8563 3.08303C14.5503 1.85882 13.4503 1 12.1884 1H1.75H1V1.75V9.75V10.5H1.75H4.75C4.88807 10.5 5 10.6119 5 10.75V13.5569Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-2">Downvote Response</span></button></div></div></div>
</div>
```

```css
:where(.message, .message *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message, .message *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.message, .message *):where(button) {
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

:where(.message, .message *):where(p) {
  line-height: 1.6;
}

:where(.message, .message *):where(ul) {
  list-style: none;
}

:where(.message, .message *):where(code) {
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

.message {
  width: 720px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message__box {
  display: flex;
  align-items: flex-start;
  gap: calc(0.25rem * 3);
}

.message__box-2 {
  display: flex;
  height: calc(13px * 1.65);
  flex-shrink: 0;
  align-items: center;
}

.message__box-3 {
  display: flex;
  width: calc(0.25rem * 7);
  height: calc(0.25rem * 7);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg, 10px);
  background-color: color-mix(in oklab, var(--color-semantic-muted, #ebebeb) 60%, transparent);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, var(--color-semantic-input, #dedede) 50%, transparent);
}

.message__box-4 {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: calc(0.25rem * 2);
}

.message__button {
  display: flex;
  width: 100%;
  align-items: center;
  gap: calc(0.25rem * 2);
  font-size: 13px;
  line-height: 1.65;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.message__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  rotate: 0deg;
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.message__box-5 {
  display: flex;
  max-width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: calc(0.25rem * 2);
  overflow: hidden;
  font-size: 13px;
  line-height: 1.65;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
}

.message__box-6 {
  width: 100%;
  height: 100%;
  white-space: normal;
}

.message__text {
  margin-block-start: calc(calc(0.25rem * 4) * 0);
  margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  margin-top: 0;
}

.message__part {
  font-weight: 600;
}

.message__list {
  margin-block-start: calc(calc(0.25rem * 4) * 0);
  margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  list-style-position: inside;
  list-style-type: disc;
  white-space: normal;
}

.message__item {
  padding-block: 0.25rem;
}

.message__box-7 {
  border-radius: 0.25rem;
  background-color: var(--color-semantic-muted, #ebebeb);
  padding-inline: calc(0.25rem * 1.5);
  padding-block: calc(0.25rem * 0.5);
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.message__text-2 {
  margin-bottom: 0;
}

.message__box-8 {
  margin-left: calc(0.25rem * -0.5);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
}

.message__button-2 {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 50%, transparent);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.message__icon-2 {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.message__part-2 {
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

## With tool call

_variant: With tool call_

```html
<div class="message" data-role="assistant" data-testid="message-assistant">
  <div class="message__box"><div class="message__box-2"><div class="message__box-3"><svg height="13" stroke-linejoin="round" viewBox="0 0 16 16" width="13" style="color: currentcolor;"><path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path><path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path><path d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z" fill="currentColor"></path></svg></div></div><div class="message__box-4"><div class="message__box-5"><div data-state="open" data-slot="collapsible" class="message__box-6"><button type="button" aria-controls="radix-_r_b_" aria-expanded="true" data-state="open" data-slot="collapsible-trigger" class="message__button"><div class="message__box-7"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message__icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span class="message__part">getWeather</span><span data-slot="badge" data-variant="secondary" class="message__part-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message__icon-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>Running</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message__icon-3"><path d="m6 9 6 6 6-6"></path></svg></button><div data-state="open" id="radix-_r_b_" data-slot="collapsible-content" class="message__box-8" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 258px; --radix-collapsible-content-width: 448px;"><div class="message__box-9"><h4 class="message__title">Parameters</h4><div class="message__box-10"><div class="message__box-11" data-language="json" style="contain-intrinsic-size: auto 200px; content-visibility: auto;"><div class="message__box-12"><pre class="message__box-13" style="background-color: transparent; color: inherit;"><code class="message__box-14"><span class="message__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">{</span></span><span class="message__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"latitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">37.76</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">,</span></span><span class="message__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">  </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">"longitude"</span><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">: </span><span style="color: rgb(0, 92, 197); --shiki-dark: #79B8FF;">-122.41</span></span><span class="message__part-3"><span style="color: rgb(36, 41, 46); --shiki-dark: #E1E4E8;">}</span></span></code></pre></div></div></div></div></div></div></div><div class="message__box-15"><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button-2" type="button" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon-4"><path clip-rule="evenodd" d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-4">Copy</span></button><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button-2" type="button" data-testid="message-upvote" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon-4"><path clip-rule="evenodd" d="M6.89531 2.23972C6.72984 2.12153 6.5 2.23981 6.5 2.44315V5.25001C6.5 6.21651 5.7165 7.00001 4.75 7.00001H2.5V13.5H12.1884C12.762 13.5 13.262 13.1096 13.4011 12.5532L14.4011 8.55318C14.5984 7.76425 14.0017 7.00001 13.1884 7.00001H9.25H8.5V6.25001V3.51458C8.5 3.43384 8.46101 3.35807 8.39531 3.31114L6.89531 2.23972ZM5 2.44315C5 1.01975 6.6089 0.191779 7.76717 1.01912L9.26717 2.09054C9.72706 2.41904 10 2.94941 10 3.51458V5.50001H13.1884C14.9775 5.50001 16.2903 7.18133 15.8563 8.91698L14.8563 12.917C14.5503 14.1412 13.4503 15 12.1884 15H1.75H1V14.25V6.25001V5.50001H1.75H4.75C4.88807 5.50001 5 5.38808 5 5.25001V2.44315Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-4">Upvote Response</span></button><button data-slot="tooltip-trigger" data-variant="ghost" data-size="icon-sm" class="message__button-2" type="button" data-testid="message-downvote" data-state="closed"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="message__icon-4"><path clip-rule="evenodd" d="M6.89531 13.7603C6.72984 13.8785 6.5 13.7602 6.5 13.5569V10.75C6.5 9.7835 5.7165 9 4.75 9H2.5V2.5H12.1884C12.762 2.5 13.262 2.89037 13.4011 3.44683L14.4011 7.44683C14.5984 8.23576 14.0017 9 13.1884 9H9.25H8.5V9.75V12.4854C8.5 12.5662 8.46101 12.6419 8.39531 12.6889L6.89531 13.7603ZM5 13.5569C5 14.9803 6.6089 15.8082 7.76717 14.9809L9.26717 13.9095C9.72706 13.581 10 13.0506 10 12.4854V10.5H13.1884C14.9775 10.5 16.2903 8.81868 15.8563 7.08303L14.8563 3.08303C14.5503 1.85882 13.4503 1 12.1884 1H1.75H1V1.75V9.75V10.5H1.75H4.75C4.88807 10.5 5 10.6119 5 10.75V13.5569Z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="message__part-4">Downvote Response</span></button></div></div></div>
</div>
```

```css
:where(.message, .message *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message, .message *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *):where(svg) {
  display: block;
  vertical-align: middle;
}

:where(.message, .message *):where(button) {
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

:where(.message, .message *):where(h4) {
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

:where(.message, .message *):where(pre) {
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

:where(.message, .message *):where(code) {
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

.message {
  width: 720px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message__box {
  display: flex;
  align-items: flex-start;
  gap: calc(0.25rem * 3);
}

.message__box-2 {
  display: flex;
  height: calc(13px * 1.65);
  flex-shrink: 0;
  align-items: center;
}

.message__box-3 {
  display: flex;
  width: calc(0.25rem * 7);
  height: calc(0.25rem * 7);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg, 10px);
  background-color: color-mix(in oklab, var(--color-semantic-muted, #ebebeb) 60%, transparent);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, var(--color-semantic-input, #dedede) 50%, transparent);
}

.message__box-4 {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: calc(0.25rem * 2);
}

.message__box-5 {
  width: min(100%, 450px);
}

.message__box-6 {
  margin-bottom: calc(0.25rem * 4);
  width: 100%;
  border-radius: var(--radius-md, 8px);
  border-style: solid;
  border-width: 1px;
}

.message__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 4);
  padding: calc(0.25rem * 3);
}

.message__box-7 {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
}

.message__icon {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
}

.message__part {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
}

.message__part-2 {
  display: inline-flex;
  height: calc(0.25rem * 5);
  width: fit-content;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  overflow: hidden;
  border-radius: var(--radius-full, 9999px);
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
}

.message__icon-2 {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  pointer-events: none;
  width: calc(0.25rem * 3) !important;
  height: calc(0.25rem * 3) !important;
}

.message__icon-3 {
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  rotate: 180deg;
}

.message__box-8 {
  padding: calc(0.25rem * 4);
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  outline-style: none;
  animation-name: enter;
  animation-duration: 150ms;
}

.message__box-9 {
  overflow: hidden;
}

.message__title {
  margin-block-start: calc(calc(0.25rem * 2) * 0);
  margin-block-end: calc(calc(0.25rem * 2) * calc(1 - 0));
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  letter-spacing: 0.025em;
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  text-transform: uppercase;
}

.message__box-10 {
  border-radius: var(--radius-md, 8px);
  background-color: color-mix(in oklab, var(--color-semantic-muted, #ebebeb) 50%, transparent);
}

.message__box-11 {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-md, 8px);
  border-style: solid;
  border-width: 1px;
  background-color: var(--color-semantic-primary-foreground, #fafafa);
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
}

.message__box-12 {
  position: relative;
  overflow: auto;
}

.message__box-13 {
  margin: 0;
  padding: calc(0.25rem * 4);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.message__box-14 {
  font-family: var(--font-ui-monospace, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.message__part-3 {
  display: block;
}

.message__box-15 {
  margin-left: calc(0.25rem * -0.5);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation-duration: 150ms;
}

.message__button-2 {
  display: inline-flex;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full, 9999px);
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-clip: padding-box;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 50%, transparent);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.message__icon-4 {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.message__part-4 {
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

@keyframes pulse {
  50% {
  opacity: 0.5;
  }
}
```

## Thinking

_variant: Thinking_

```html
<div class="message" data-role="assistant" data-testid="message-assistant-loading">
  <div class="message__box"><div class="message__box-2"><div class="message__box-3"><svg height="13" stroke-linejoin="round" viewBox="0 0 16 16" width="13" style="color: currentcolor;"><path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path><path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path><path d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z" fill="currentColor"></path></svg></div></div><div class="message__box-4"><span class="message__part" style="--spread: 20px; background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) calc(50% - 20px), var(--color-semantic-primary-foreground, rgb(250, 250, 250)), rgba(0, 0, 0, 0) calc(50% + 20px)), linear-gradient(var(--color-semantic-muted-foreground, rgb(122, 122, 122)), var(--color-semantic-muted-foreground, rgb(122, 122, 122))); background-position: 0% center;">Waiting...</span></div></div>
</div>
```

```css
:where(.message, .message *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.message, .message *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.message, .message *):where(svg) {
  display: block;
  vertical-align: middle;
}

.message {
  width: 720px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.message__box {
  display: flex;
  align-items: flex-start;
  gap: calc(0.25rem * 3);
}

.message__box-2 {
  display: flex;
  height: calc(13px * 1.65);
  flex-shrink: 0;
  align-items: center;
}

.message__box-3 {
  display: flex;
  width: calc(0.25rem * 7);
  height: calc(0.25rem * 7);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg, 10px);
  background-color: color-mix(in oklab, var(--color-semantic-muted, #ebebeb) 60%, transparent);
  color: var(--color-semantic-muted-foreground, #7a7a7a);
  box-shadow: 0 0 0 calc(1px + 0px) color-mix(in oklab, var(--color-semantic-input, #dedede) 50%, transparent);
}

.message__box-4 {
  display: flex;
  min-height: calc(13px * 1.65);
  min-width: 0;
  align-items: center;
  font-size: 13px;
  line-height: 1.65;
}

.message__part {
  position: relative;
  display: inline-block;
  background-size: 250% 100%, auto;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 500;
  overflow-wrap: break-word;
  white-space: normal;
  color: transparent;
}
```
