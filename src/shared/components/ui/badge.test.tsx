import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("should render with default variant", () => {
    render(<Badge>Test Badge</Badge>);

    const badge = screen.getByText("Test Badge");
    expect(badge).toBeInTheDocument();
  });

  it("should render with outline variant", () => {
    render(<Badge variant="outline">Test Badge</Badge>);

    const badge = screen.getByText("Test Badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("text-foreground bg-transparent");
  });

  it("should apply custom className", () => {
    const customClass = "custom-class";
    render(<Badge className={customClass}>Test Badge</Badge>);

    const badge = screen.getByText("Test Badge");
    expect(badge).toHaveClass(customClass);
  });

  it("should render with all base classes", () => {
    render(<Badge>Test Badge</Badge>);

    const badge = screen.getByText("Test Badge");
    expect(badge).toHaveClass(
      "inline-flex",
      "items-center",
      "border-shades-violet-5",
      "rounded-full",
      "border",
      "px-2.5",
      "py-1",
      "text-xs",
      "font-semibold"
    );
  });

  it("should pass through additional props", () => {
    const testId = "test-badge";
    render(<Badge data-testid={testId}>Test Badge</Badge>);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it("should match snapshot with default variant", () => {
    const { container } = render(<Badge>Test Badge</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should match snapshot with outline variant", () => {
    const { container } = render(<Badge variant="outline">Test Badge</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
