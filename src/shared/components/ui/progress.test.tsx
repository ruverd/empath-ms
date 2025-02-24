import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "./progress";

describe("Progress", () => {
  it("should match snapshot", () => {
    const { container } = render(<Progress value={50} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should renders with default value", () => {
    render(<Progress value={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
  });

  it("should applies custom className", () => {
    render(<Progress value={50} className="custom-class" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass("custom-class");
  });
});
