import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

describe("Sheet", () => {
  it("should render sheet trigger button", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>Content</SheetContent>
      </Sheet>
    );
    expect(screen.getByText("Open Sheet")).toBeInTheDocument();
  });

  it("should render sheet content when triggered", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>Sheet Content</SheetContent>
      </Sheet>
    );

    fireEvent.click(screen.getByText("Open Sheet"));
    expect(screen.getByText("Sheet Content")).toBeInTheDocument();
  });

  it("should render sheet with header components", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Test Title</SheetTitle>
            <SheetDescription>Test Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );

    fireEvent.click(screen.getByText("Open Sheet"));
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("closes sheet when close button is clicked", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>Sheet Content</SheetContent>
      </Sheet>
    );

    fireEvent.click(screen.getByText("Open Sheet"));
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    // The content should be removed from the document
    expect(screen.queryByText("Sheet Content")).not.toBeInTheDocument();
  });

  it("should match snapshot with all subcomponents", () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Test Title</SheetTitle>
            <SheetDescription>Test Description</SheetDescription>
          </SheetHeader>
          Sheet Content
        </SheetContent>
      </Sheet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
