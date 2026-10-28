import { defineComponent } from "archetype-os/components";
import { Weather } from "./weather";

export default defineComponent({
  key: "weather",
  name: "Weather Card",
  description:
    "Result of the getWeather tool inside an assistant message: current temperature, today's high and low, and the next hours. Day and night have different colors.",
  code: { import: "@/components/chat/weather", export: "Weather" },
  width: 450,
  render: () => <Weather />,
});
