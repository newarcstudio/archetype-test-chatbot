# Weather Card

Result of the getWeather tool inside an assistant message: current temperature, today's high and low, and the next hours. Day and night have different colors.

Key: `weather`

## Default

```html
<div class="weather"><div class="weather__box"></div><div class="weather__box-2"><div class="weather__box-3"><div class="weather__box-4">37.8°, -122.4°</div><div class="weather__box-5">Oct 7, 7:30 PM</div></div><div class="weather__box-6"><div class="weather__box-7"><div class="weather__box-8"><svg fill="none" height="32" viewBox="0 0 24 24" width="32"><path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z" fill="currentColor"></path></svg></div><div class="weather__box-9">30<span class="weather__part">°C</span></div></div><div class="weather__box-10"><div class="weather__box-11">H: 37°</div><div class="weather__box-12">L: 21°</div></div></div><div class="weather__box-13"><div class="weather__box-14">Hourly Forecast</div><div class="weather__box-15"><div class="weather__box-16"><div class="weather__box-17">Now</div><div class="weather__box-18"><svg fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="none" stroke="currentColor" stroke-width="2"></path></svg></div><div class="weather__box-19">33°</div></div><div class="weather__box-16"><div class="weather__box-17">9PM</div><div class="weather__box-18"><svg fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="none" stroke="currentColor" stroke-width="2"></path></svg></div><div class="weather__box-19">29°</div></div><div class="weather__box-16"><div class="weather__box-17">10PM</div><div class="weather__box-18"><svg fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="none" stroke="currentColor" stroke-width="2"></path></svg></div><div class="weather__box-19">27°</div></div><div class="weather__box-16"><div class="weather__box-17">11PM</div><div class="weather__box-18"><svg fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="none" stroke="currentColor" stroke-width="2"></path></svg></div><div class="weather__box-19">26°</div></div><div class="weather__box-16"><div class="weather__box-17">12AM</div><div class="weather__box-18"><svg fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="none" stroke="currentColor" stroke-width="2"></path></svg></div><div class="weather__box-19">23°</div></div><div class="weather__box-16"><div class="weather__box-17">1AM</div><div class="weather__box-18"><svg fill="none" height="16" viewBox="0 0 24 24" width="16"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="none" stroke="currentColor" stroke-width="2"></path></svg></div><div class="weather__box-19">22°</div></div></div></div><div class="weather__box-20"><div>Sunrise: 7:15 AM</div><div>Sunset: 7:00 PM</div></div></div></div>
```

```css
:where(.weather, .weather *) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor;
  scrollbar-color: oklch(0 0 0 / 0.12) transparent;
  scrollbar-width: thin;
}

:where(.weather, .weather *)::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.weather, .weather *)::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
  border-color: oklch(0.9 0 0);
}

:where(.weather, .weather *):where(svg) {
  display: block;
  vertical-align: middle;
}

.weather {
  position: relative;
  display: flex;
  width: 450px;
  flex-direction: column;
  gap: calc(0.25rem * 3);
  overflow: hidden;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right in oklab, oklch(0.359 0.144 278.697) 0%, oklch(0.381 0.176 304.987) 50%, oklch(0.208 0.042 265.755) 100%);
  padding: calc(0.25rem * 4);
  box-shadow: 0 0 0 calc(0px + 0px) currentcolor, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  backdrop-filter: blur(8px);
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: oklch(0.12 0 0);
  -webkit-font-smoothing: antialiased;
}

.weather__box {
  position: absolute;
  inset: 0;
  background-color: color-mix(in oklab, #fff 10%, transparent);
  backdrop-filter: blur(8px);
}

.weather__box-2 {
  position: relative;
  z-index: 10;
}

.weather__box-3 {
  margin-bottom: calc(0.25rem * 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.weather__box-4 {
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  color: color-mix(in oklab, #fff 80%, transparent);
}

.weather__box-5 {
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: color-mix(in oklab, #fff 60%, transparent);
}

.weather__box-6 {
  margin-bottom: calc(0.25rem * 3);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.weather__box-7 {
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 3);
}

.weather__box-8 {
  color: color-mix(in oklab, #fff 90%, transparent);
}

.weather__box-9 {
  font-size: 1.875rem;
  line-height: calc(2.25 / 1.875);
  font-weight: 300;
  color: #fff;
}

.weather__part {
  font-size: 1.125rem;
  line-height: calc(1.75 / 1.125);
  color: color-mix(in oklab, #fff 80%, transparent);
}

.weather__box-10 {
  text-align: right;
}

.weather__box-11 {
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  color: color-mix(in oklab, #fff 90%, transparent);
}

.weather__box-12 {
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: color-mix(in oklab, #fff 70%, transparent);
}

.weather__box-13 {
  border-radius: calc(0.625rem + 4px);
  background-color: color-mix(in oklab, #fff 10%, transparent);
  padding: calc(0.25rem * 3);
  backdrop-filter: blur(8px);
}

.weather__box-14 {
  margin-bottom: calc(0.25rem * 2);
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  color: color-mix(in oklab, #fff 80%, transparent);
}

.weather__box-15 {
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
}

.weather__box-16 {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  border-radius: calc(0.625rem - 2px);
  padding-inline: 0.25rem;
  padding-block: calc(0.25rem * 1.5);
}

.weather__box-17 {
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  color: color-mix(in oklab, #fff 70%, transparent);
}

.weather__box-18 {
  color: color-mix(in oklab, #fff 60%, transparent);
}

.weather__box-19 {
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  font-weight: 500;
  color: #fff;
}

.weather__box-20 {
  margin-top: calc(0.25rem * 2);
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  color: color-mix(in oklab, #fff 60%, transparent);
}
```
