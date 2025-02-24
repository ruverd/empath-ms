import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { USER_AUTHENTICATED } from "@/shared/constants/user";
import { MOCK_STATS } from "@/shared/mocks/stats.mock";

import { MyProgress } from "./my-progress";
import type { MyProgressProps } from "./my-progress.types";

const mockProps: MyProgressProps = {
  progress: 50,
  user: USER_AUTHENTICATED,
  stats: MOCK_STATS.stats,
};

describe("MyProgress", () => {
  it("should match desktop snapshot", () => {
    const { container } = render(<MyProgress {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should match mobile snapshot", () => {
    global.innerWidth = 375;
    const { container } = render(<MyProgress {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should match mobile snapshot with sheet open", () => {
    global.innerWidth = 375;
    const { container } = render(<MyProgress {...mockProps} />);

    const button = screen.getByRole("button", { name: /my progress/i });
    fireEvent.click(button);

    expect(container).toMatchSnapshot();
  });

  it("should renders desktop version correctly", () => {
    render(<MyProgress {...mockProps} />);

    expect(screen.getByText(`${mockProps.user.name}!`)).toBeInTheDocument();
    expect(screen.getByText("My Progress")).toBeInTheDocument();
  });

  it("should renders mobile version with button", () => {
    // Mock window width for mobile view
    global.innerWidth = 375;
    render(<MyProgress {...mockProps} />);

    const button = screen.getByRole("button", { name: /my progress/i });
    expect(button).toBeInTheDocument();
  });

  it("should opens sheet on mobile button click", () => {
    global.innerWidth = 375;
    render(<MyProgress {...mockProps} />);

    const button = screen.getByRole("button", { name: /my progress/i });
    fireEvent.click(button);

    // Check if sheet content is visible
    expect(screen.getAllByText(`${mockProps.user.name}!`)[0]).toBeVisible();
  });

  it("should displays correct progress information", () => {
    render(<MyProgress {...mockProps} />);

    mockProps.stats.forEach((stat) => {
      expect(screen.getByText(stat.highlightText)).toBeInTheDocument();
      if (stat.auxText) {
        expect(screen.getByText(stat.auxText)).toBeInTheDocument();
      }
    });
  });
});
