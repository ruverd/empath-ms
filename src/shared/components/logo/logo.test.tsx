import * as useThemeHook from "@/shared/hooks/use-theme";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Logo } from "./logo";

vi.mock("@/assets/brand/logo-dark.svg", () => ({ default: "dark-logo.svg" }));
vi.mock("@/assets/brand/logo-light.svg", () => ({ default: "light-logo.svg" }));

describe("Logo", () => {
  it("should renders light theme logo by default", () => {
    vi.spyOn(useThemeHook, "useTheme").mockReturnValue({
      theme: "light",
      setTheme: vi.fn(),
    });

    render(<Logo />);

    const logo = screen.getByAltText("Brand Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "light-logo.svg");
  });

  it("should renders dark theme logo when theme is dark", () => {
    vi.spyOn(useThemeHook, "useTheme").mockReturnValue({
      theme: "dark",
      setTheme: vi.fn(),
    });

    render(<Logo />);

    const logo = screen.getByAltText("Brand Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "dark-logo.svg");
  });

  it("has correct alt text", () => {
    vi.spyOn(useThemeHook, "useTheme").mockReturnValue({
      theme: "light",
      setTheme: vi.fn(),
    });

    render(<Logo />);

    expect(screen.getByAltText("Brand Logo")).toBeInTheDocument();
  });

  it("matches light theme snapshot", () => {
    vi.spyOn(useThemeHook, "useTheme").mockReturnValue({
      theme: "light",
      setTheme: vi.fn(),
    });

    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });

  it("matches dark theme snapshot", () => {
    vi.spyOn(useThemeHook, "useTheme").mockReturnValue({
      theme: "dark",
      setTheme: vi.fn(),
    });

    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });
});
