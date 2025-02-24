import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription className="text-muted-foreground">
            This is a description of the sheet content.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">Some content goes here</div>
      </SheetContent>
    </Sheet>
  ),
};

export const CustomTheme: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-shades-violet-5 text-shades-white hover:bg-shades-violet-6">
          Open Custom Sheet
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-shades-violet-1 text-shades-white border-shades-violet-5">
        <SheetHeader>
          <SheetTitle className="text-shades-white">
            Custom Theme Sheet
          </SheetTitle>
          <SheetDescription className="text-shades-violet-8">
            This sheet uses our custom violet theme colors.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 text-shades-violet-6">Custom themed content</div>
      </SheetContent>
    </Sheet>
  ),
};

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left" className="border-secondary-aqua">
        <SheetHeader>
          <SheetTitle className="text-secondary-aqua">
            Left Side Sheet
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            This sheet opens from the left side.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">Left side content</div>
      </SheetContent>
    </Sheet>
  ),
};

export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-primary-indigo text-primary-cloud hover:bg-shades-violet-2">
          Open Top Sheet
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="bg-primary-cloud border-primary-indigo"
      >
        <SheetHeader>
          <SheetTitle className="text-primary-indigo">Top Sheet</SheetTitle>
          <SheetDescription className="text-shades-violet-5">
            This sheet slides down from the top.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">Top content</div>
      </SheetContent>
    </Sheet>
  ),
};

export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-secondary-aqua text-shades-violet-1 hover:bg-shades-aqua-5">
          Open Bottom Sheet
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="bg-shades-violet-1 text-shades-white border-secondary-aqua"
      >
        <SheetHeader>
          <SheetTitle className="text-secondary-aqua">Bottom Sheet</SheetTitle>
          <SheetDescription className="text-shades-aqua-8">
            This sheet slides up from the bottom.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 text-shades-white">Bottom content</div>
      </SheetContent>
    </Sheet>
  ),
};
