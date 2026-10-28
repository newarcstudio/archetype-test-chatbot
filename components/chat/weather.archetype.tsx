import { defineComponent } from "archetype-os/components";
import { Weather } from "./weather";

const base = {
  latitude: 37.763283,
  longitude: -122.41286,
  generationtime_ms: 0.03,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 18,
  cityName: "San Francisco",
  current_units: { time: "iso8601", interval: "seconds", temperature_2m: "°C" },
  hourly_units: { time: "iso8601", temperature_2m: "°C" },
  daily_units: { time: "iso8601", sunrise: "iso8601", sunset: "iso8601" },
  daily: {
    time: ["2026-06-10", "2026-06-11"],
    sunrise: ["2026-06-10T05:48", "2026-06-11T05:48"],
    sunset: ["2026-06-10T20:31", "2026-06-11T20:31"],
  },
  hourly: {
    time: Array.from({ length: 48 }, (_, i) => `2026-06-${10 + Math.floor(i / 24)}T${String(i % 24).padStart(2, "0")}:00`),
    temperature_2m: Array.from({ length: 48 }, (_, i) => Math.round((15 + 7 * Math.sin(((i % 24) - 9) / 24 * 2 * Math.PI)) * 10) / 10),
  },
};

export default defineComponent({
  key: "weather",
  name: "Weather",
  description:
    "Result card of the getWeather tool: city, time, current temperature with high/low and a six-hour forecast strip. Blue gradient by day, indigo by night.",
  code: { import: "@/components/chat/weather", export: "Weather" },
  properties: {
    Time: ["Day", "Night"],
  },
  width: 450,
  render: ({ Time }) => (
    <Weather
      weatherAtLocation={{
        ...base,
        current: {
          time: Time === "Night" ? "2026-06-10T22:00" : "2026-06-10T14:00",
          interval: 900,
          temperature_2m: Time === "Night" ? 13.4 : 21.6,
        },
      }}
    />
  ),
});
