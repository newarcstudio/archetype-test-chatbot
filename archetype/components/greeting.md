# Greeting

Centered welcome on an empty chat, above the suggested prompts and the composer.

Key: `greeting`

## Default

```html
<div class="greeting"><div class="greeting__box" style="opacity: 1; transform: none;">What can I help with?</div><div class="greeting__box-2" style="opacity: 1; transform: none;">Ask a question, write code, or explore ideas.</div></div>
```

```css
:where(.greeting, .greeting *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.greeting, .greeting *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

:where(.greeting, .greeting *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: var(--color-semantic-input, #dedede);
}

.greeting {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: calc(0.25rem * 4);
  width: 720px;
  font-family: var(--font-ui-sans-serif, ui-sans-serif), system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: var(--color-semantic-sidebar-accent-foreground, rgb(6, 6, 6));
  -webkit-font-smoothing: antialiased;
}

.greeting__box {
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--color-semantic-sidebar-accent-foreground, #060606);
  font-size: 1.875rem;
  line-height: calc(2.25 / 1.875);
}

.greeting__box-2 {
  margin-top: calc(0.25rem * 3);
  text-align: center;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  color: color-mix(in oklab, var(--color-semantic-muted-foreground, #7a7a7a) 80%, transparent);
}
```
