import { render, screen } from "@testing-library/react";
import { Users } from "lucide-react";
import { describe, expect, it } from "vitest";

import { CardStats } from "./card-stats";

describe("CardStats", () => {
  it("should renders with all required props", () => {
    render(
      <CardStats icon={Users} title="Total Students" highlightText="1,234" />
    );

    expect(screen.getByText("Total Students")).toBeInTheDocument();
    expect(screen.getByText("1,234")).toBeInTheDocument();
  });

  it("should renders with auxiliary text", () => {
    render(
      <CardStats
        icon={Users}
        title="Average Rating"
        highlightText="4.8"
        auxText="/5"
      />
    );

    expect(screen.getByText("4.8")).toBeInTheDocument();
    expect(screen.getByText("/5")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(
      <CardStats
        icon={Users}
        title="Total Students"
        highlightText="1,234"
        auxText="active"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
