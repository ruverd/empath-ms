import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  it("should render basic card", () => {
    render(<Card>Card Content</Card>);

    const card = screen.getByText("Card Content");
    expect(card).toBeInTheDocument();
    expect(card.closest("div")).toHaveClass(
      "rounded-lg",
      "border",
      "bg-card",
      "text-card-foreground",
      "shadow-sm"
    );
  });

  it("should render card with all subcomponents", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Test Title")).toHaveClass(
      "text-2xl",
      "font-semibold",
      "leading-none",
      "tracking-tight"
    );
    expect(screen.getByText("Test Description")).toHaveClass(
      "text-sm",
      "text-muted-foreground"
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Test Content").closest("div")).toHaveClass(
      "p-6",
      "pt-0"
    );
    expect(screen.getByText("Test Footer").closest("div")).toHaveClass(
      "flex",
      "items-center",
      "p-6",
      "pt-0"
    );
  });

  it("should render CardHeader with correct spacing", () => {
    render(
      <CardHeader>
        <div>Header Content</div>
      </CardHeader>
    );

    const header = screen.getByText("Header Content").closest("div");
    expect(header?.parentElement).toHaveClass(
      "flex",
      "flex-col",
      "space-y-1.5",
      "p-6"
    );
  });

  it("should apply custom className to all components", () => {
    const customClass = "custom-class";

    render(
      <Card className={customClass}>
        <CardHeader className={customClass}>
          <CardTitle className={customClass}>Title</CardTitle>
          <CardDescription className={customClass}>Description</CardDescription>
        </CardHeader>
        <CardContent className={customClass}>Content</CardContent>
        <CardFooter className={customClass}>Footer</CardFooter>
      </Card>
    );

    const elements = screen.getAllByText(/Title|Description|Content|Footer/);
    elements.forEach((element) => {
      expect(element.closest("div")).toHaveClass(customClass);
    });
  });

  it("should forward ref to all components", () => {
    const testId = "test-ref";

    render(
      <Card data-testid={`${testId}-card`}>
        <CardHeader data-testid={`${testId}-header`}>
          <CardTitle data-testid={`${testId}-title`}>Title</CardTitle>
          <CardDescription data-testid={`${testId}-description`}>
            Description
          </CardDescription>
        </CardHeader>
        <CardContent data-testid={`${testId}-content`}>Content</CardContent>
        <CardFooter data-testid={`${testId}-footer`}>Footer</CardFooter>
      </Card>
    );

    const components = [
      "card",
      "header",
      "title",
      "description",
      "content",
      "footer",
    ];

    components.forEach((component) => {
      expect(screen.getByTestId(`${testId}-${component}`)).toBeInTheDocument();
    });
  });

  it("should match snapshot with all subcomponents", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
