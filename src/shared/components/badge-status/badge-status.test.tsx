import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { STATUS } from "@/shared/constants/status";
import { Status } from "@/shared/enums/status";

import { BadgeStatus } from "./badge-status";

describe("BadgeStatus", () => {
  it("should renders with ON_TRACK variant", () => {
    render(<BadgeStatus variant={Status.ON_TRACK} />);

    const statusText = screen.getByText(STATUS[Status.ON_TRACK]);
    expect(statusText).toBeInTheDocument();
  });

  it("should renders the status indicator dot", () => {
    render(<BadgeStatus variant={Status.ON_TRACK} />);

    const container = screen.getByText(STATUS[Status.ON_TRACK]).parentElement;
    const dot = container?.firstChild;
    expect(dot).toHaveClass("size-2", "rounded-full", "bg-secondary-green");
  });

  it("should match snapshot", () => {
    const { container } = render(<BadgeStatus variant={Status.ON_TRACK} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
