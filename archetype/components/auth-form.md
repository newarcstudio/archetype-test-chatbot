# Auth Form

Email and password form on the sign-in and sign-up pages, with the full-width submit button (spinner while submitting).

Key: `auth-form`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Mode` | `"Sign in" \| "Sign up"` | `Sign in` |  |
| `State` | `"Default" \| "Submitting"` | `Default` |  |

## Default

_variant: Sign in_

```html
<form class="auth-form"><div class="auth-form__box"><label data-slot="label" class="auth-form__label" for="email">Email</label><input data-slot="input" class="auth-form__field" autocomplete="email" id="email" placeholder="you@someo.ne" required type="email" value name="email" /></div><div class="auth-form__box"><label data-slot="label" class="auth-form__label" for="password">Password</label><input data-slot="input" class="auth-form__field" id="password" placeholder="••••••••" required type="password" name="password" /></div><button data-slot="button" data-variant="default" data-size="default" class="auth-form__button" aria-disabled="false" type="submit">Sign in<output aria-live="polite" class="auth-form__box-2">Submit form</output></button></form>
```

```css
:where(.auth-form, .auth-form *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.auth-form, .auth-form *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.auth-form, .auth-form *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.auth-form, .auth-form *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.auth-form, .auth-form *):where(button) {
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

.auth-form {
  display: flex;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  width: 360px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.auth-form__box {
  display: flex;
  flex-direction: column;
  gap: calc(0.25rem * 2);
}

.auth-form__label {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 400;
  color: oklch(0.58 0 0);
  -webkit-user-select: none;
  user-select: none;
}

.auth-form__field {
  height: calc(0.25rem * 10);
  width: 100%;
  min-width: 0;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, oklch(0.9 0 0) 50%, transparent);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.auth-form__button {
  position: relative;
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.12 0 0);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.985 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.auth-form__box-2 {
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

## Submitting

_variant: Sign in · state: submitting_

```html
<form class="auth-form"><div class="auth-form__box"><label data-slot="label" class="auth-form__label" for="email">Email</label><input data-slot="input" class="auth-form__field" autocomplete="email" id="email" placeholder="you@someo.ne" required type="email" value="user@acme.com" name="email" /></div><div class="auth-form__box"><label data-slot="label" class="auth-form__label" for="password">Password</label><input data-slot="input" class="auth-form__field" id="password" placeholder="••••••••" required type="password" name="password" /></div><button data-slot="button" data-variant="default" data-size="default" class="auth-form__button" aria-disabled="true" disabled type="submit">Sign in<span class="auth-form__part"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;" class="auth-form__icon"><g clip-path="url(#clip0_2393_1490)"><path d="M8 0V4" stroke="currentColor" stroke-width="1.5"></path><path d="M8 16V12" opacity="0.5" stroke="currentColor" stroke-width="1.5"></path><path d="M3.29773 1.52783L5.64887 4.7639" opacity="0.9" stroke="currentColor" stroke-width="1.5"></path><path d="M12.7023 1.52783L10.3511 4.7639" opacity="0.1" stroke="currentColor" stroke-width="1.5"></path><path d="M12.7023 14.472L10.3511 11.236" opacity="0.4" stroke="currentColor" stroke-width="1.5"></path><path d="M3.29773 14.472L5.64887 11.236" opacity="0.6" stroke="currentColor" stroke-width="1.5"></path><path d="M15.6085 5.52783L11.8043 6.7639" opacity="0.2" stroke="currentColor" stroke-width="1.5"></path><path d="M0.391602 10.472L4.19583 9.23598" opacity="0.7" stroke="currentColor" stroke-width="1.5"></path><path d="M15.6085 10.4722L11.8043 9.2361" opacity="0.3" stroke="currentColor" stroke-width="1.5"></path><path d="M0.391602 5.52783L4.19583 6.7639" opacity="0.8" stroke="currentColor" stroke-width="1.5"></path></g><defs><clipPath id="clip0_2393_1490"><rect fill="white" height="16" width="16"></rect></clipPath></defs></svg></span><output aria-live="polite" class="auth-form__box-2">Loading</output></button></form>
```

```css
:where(.auth-form, .auth-form *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.auth-form, .auth-form *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.auth-form, .auth-form *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.auth-form, .auth-form *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.auth-form, .auth-form *):where(button) {
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

:where(.auth-form, .auth-form *):where(svg) {
  display: block;
  vertical-align: middle;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  width: 360px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.auth-form__box {
  display: flex;
  flex-direction: column;
  gap: calc(0.25rem * 2);
}

.auth-form__label {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 400;
  color: oklch(0.58 0 0);
  -webkit-user-select: none;
  user-select: none;
}

.auth-form__field {
  height: calc(0.25rem * 10);
  width: 100%;
  min-width: 0;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, oklch(0.9 0 0) 50%, transparent);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.auth-form__button {
  position: relative;
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.12 0 0);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.985 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  opacity: 50%;
}

.auth-form__part {
  position: absolute;
  right: calc(0.25rem * 4);
  animation: spin 1s linear infinite;
}

.auth-form__icon {
  pointer-events: none;
  flex-shrink: 0;
  width: calc(0.25rem * 4);
  height: calc(0.25rem * 4);
}

.auth-form__box-2 {
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

@keyframes spin {
  100% {
  transform: rotate(360deg);
  }
}
```

## Sign up

_variant: Sign up_

```html
<form class="auth-form"><div class="auth-form__box"><label data-slot="label" class="auth-form__label" for="email">Email</label><input data-slot="input" class="auth-form__field" autocomplete="email" id="email" placeholder="you@someo.ne" required type="email" value name="email" /></div><div class="auth-form__box"><label data-slot="label" class="auth-form__label" for="password">Password</label><input data-slot="input" class="auth-form__field" id="password" placeholder="••••••••" required type="password" name="password" /></div><button data-slot="button" data-variant="default" data-size="default" class="auth-form__button" aria-disabled="false" type="submit">Sign up<output aria-live="polite" class="auth-form__box-2">Submit form</output></button></form>
```

```css
:where(.auth-form, .auth-form *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.auth-form, .auth-form *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.auth-form, .auth-form *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.auth-form, .auth-form *):where(input) {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

:where(.auth-form, .auth-form *):where(button) {
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

.auth-form {
  display: flex;
  flex-direction: column;
  gap: calc(0.25rem * 4);
  width: 360px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.auth-form__box {
  display: flex;
  flex-direction: column;
  gap: calc(0.25rem * 2);
}

.auth-form__label {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 400;
  color: oklch(0.58 0 0);
  -webkit-user-select: none;
  user-select: none;
}

.auth-form__field {
  height: calc(0.25rem * 10);
  width: 100%;
  min-width: 0;
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: color-mix(in oklab, oklch(0.9 0 0) 50%, transparent);
  background-color: color-mix(in oklab, oklch(0.94 0 0) 50%, transparent);
  padding-inline: calc(0.25rem * 3);
  padding-block: 0.25rem;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
}

.auth-form__button {
  position: relative;
  display: inline-flex;
  height: calc(0.25rem * 9);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  border-radius: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: oklch(0.12 0 0);
  background-clip: padding-box;
  padding-inline: calc(0.25rem * 3);
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: 500;
  white-space: nowrap;
  color: oklch(0.985 0 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.auth-form__box-2 {
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
