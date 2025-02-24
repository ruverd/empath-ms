import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ComingSoonPage } from "./coming-soon-page";

describe("ComingSoonPage", () => {
  it("should renders with feature name", () => {
    render(<ComingSoonPage featureName="Analytics" />);

    expect(screen.getByText("Analytics")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("should renders description with feature name in lowercase", () => {
    render(<ComingSoonPage featureName="Analytics" />);

    expect(
      screen.getByText(
        /we're working hard to bring you an amazing analytics experience/i
      )
    ).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<ComingSoonPage featureName="Analytics" />);
    expect(container).toMatchSnapshot();
  });
});
