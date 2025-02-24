import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProgressCircle } from "./progress-circle";

describe("ProgressCircle", () => {
  it("should renders with correct percentage text", () => {
    render(<ProgressCircle percentage={75} />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("should renders with correct size", () => {
    render(<ProgressCircle percentage={50} />);
    const container = screen.getByText("50%").parentElement;
    expect(container).toHaveStyle({ width: "40px", height: "40px" });
  });

  it("should renders gradient definition", () => {
    render(<ProgressCircle percentage={50} />);
    const gradient = document.querySelector("linearGradient");

    expect(gradient).toHaveAttribute("id", "progressGradient");
    expect(gradient?.querySelector("stop:first-child")).toHaveAttribute(
      "stop-color",
      "#5C15A7"
    );
    expect(gradient?.querySelector("stop:last-child")).toHaveAttribute(
      "stop-color",
      "#0098BD"
    );
  });

  it("should renders with zero percentage", () => {
    render(<ProgressCircle percentage={0} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("should renders with full percentage", () => {
    render(<ProgressCircle percentage={100} />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<ProgressCircle percentage={50} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
