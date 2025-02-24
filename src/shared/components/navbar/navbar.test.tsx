import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { Navbar } from "./navbar";

vi.mock("./components/nav", () => ({
  Nav: ({ onNavigate }: { onNavigate?: () => void }) => (
    <div data-testid="nav" onClick={onNavigate}>
      Nav Component
    </div>
  ),
}));

vi.mock("./components/user-actions", () => ({
  UserActions: ({ onAction }: { onAction?: () => void }) => (
    <div data-testid="user-actions" onClick={onAction}>
      User Actions Component
    </div>
  ),
}));

vi.mock("../logo", () => ({
  Logo: () => <div data-testid="logo">Logo Component</div>,
}));

const renderNavbar = () => {
  return render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  it("should match snapshot", () => {
    const { container } = renderNavbar();
    expect(container).toMatchSnapshot();
  });

  it("should render all components correctly", () => {
    renderNavbar();

    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("user-actions")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /toggle menu/i })
    ).toBeInTheDocument();
  });

  it("should open mobile menu when toggle button is clicked", () => {
    renderNavbar();

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    expect(screen.getAllByTestId("nav")).toHaveLength(2);
    expect(screen.getAllByTestId("user-actions")).toHaveLength(2);
  });

  it("should close mobile menu when navigation occurs", () => {
    renderNavbar();

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    const mobileNav = screen.getAllByTestId("nav")[1];
    fireEvent.click(mobileNav);

    expect(screen.getAllByTestId("nav")).toHaveLength(1);
    expect(screen.getAllByTestId("user-actions")).toHaveLength(1);
  });
});
