import { render, screen } from "@testing-library/react";
import { Mail } from "lucide-react";
import { describe, expect, it } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("should render with default variant", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  it("should render all variants correctly", () => {
    const variants = ["secondary", "outline", "ghost", "link"] as const;

    variants.forEach((variant) => {
      render(<Button variant={variant}>{variant} button</Button>);
      const button = screen.getByRole("button", { name: `${variant} button` });

      switch (variant) {
        case "secondary":
          expect(button).toHaveClass(
            "bg-secondary",
            "text-secondary-foreground"
          );
          break;
        case "outline":
          expect(button).toHaveClass(
            "border-secondary-aqua",
            "text-secondary-aqua",
            "bg-primary-indigo"
          );
          break;
        case "ghost":
          expect(button).toHaveClass(
            "hover:bg-accent",
            "hover:text-primary-cloud"
          );
          break;
        case "link":
          expect(button).toHaveClass("text-primary");
          break;
      }
    });
  });

  it("should render all sizes correctly", () => {
    const sizes = ["default", "xs", "sm", "lg", "icon"] as const;

    sizes.forEach((size) => {
      render(<Button size={size}>{size} button</Button>);
      const button = screen.getByRole("button", { name: `${size} button` });

      switch (size) {
        case "default":
          expect(button).toHaveClass("h-10", "px-4", "py-2");
          break;
        case "xs":
          expect(button).toHaveClass("h-8", "px-4");
          break;
        case "sm":
          expect(button).toHaveClass("h-9", "px-4");
          break;
        case "lg":
          expect(button).toHaveClass("h-11", "px-8");
          break;
        case "icon":
          expect(button).toHaveClass("h-10", "w-10");
          break;
      }
    });
  });

  it("should render in active state", () => {
    render(<Button isActive>Active Button</Button>);

    const button = screen.getByRole("button", { name: "Active Button" });
    expect(button).toHaveClass("bg-accent", "text-accent-foreground");
  });

  it("should render as disabled", () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole("button", { name: "Disabled Button" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      "disabled:pointer-events-none",
      "disabled:opacity-50"
    );
  });

  it("should render with icon", () => {
    render(
      <Button>
        <Mail data-testid="mail-icon" />
        With Icon
      </Button>
    );

    const button = screen.getByRole("button", { name: "With Icon" });
    const icon = screen.getByTestId("mail-icon");

    expect(button).toContainElement(icon);
    expect(button).toHaveClass("[&_svg]:size-4", "[&_svg]:shrink-0");
  });

  it("should apply custom className", () => {
    const customClass = "custom-class";
    render(<Button className={customClass}>Custom Button</Button>);

    const button = screen.getByRole("button", { name: "Custom Button" });
    expect(button).toHaveClass(customClass);
  });

  it("should render as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should match snapshot with default variant", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should match snapshot with icon and secondary variant", () => {
    const { container } = render(
      <Button variant="secondary">
        <Mail data-testid="mail-icon" />
        With Icon
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should match snapshot when disabled", () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
