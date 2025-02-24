import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  IconBell,
  IconGraduation,
  IconInfo,
  IconMoon,
  IconSearch,
  IconTime,
  IconTrophy,
  IconUsers,
} from "./index";

const icons = [
  { name: "Bell", component: IconBell },
  { name: "Graduation", component: IconGraduation },
  { name: "Info", component: IconInfo },
  { name: "Moon", component: IconMoon },
  { name: "Search", component: IconSearch },
  { name: "Time", component: IconTime },
  { name: "Trophy", component: IconTrophy },
  { name: "Users", component: IconUsers },
];

describe("Icons", () => {
  icons.forEach(({ name, component: Icon }) => {
    describe(name, () => {
      it("should render as SVG", () => {
        const { container } = render(<Icon />);
        const svg = container.querySelector("svg");
        expect(svg).toBeInTheDocument();
      });
    });
  });
});
