import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Full: Story = {
  args: {
    value: 100,
  },
};

export const CustomWidth: Story = {
  args: {
    value: 75,
    className: "w-[300px]",
  },
};

export const CustomStyles: Story = {
  args: {
    value: 60,
    className: "h-2 w-[200px]",
  },
};

export const PrimaryTheme: Story = {
  args: {
    value: 60,
    className: "bg-primary/20 [&>div]:bg-primary",
  },
};

export const SecondaryTheme: Story = {
  args: {
    value: 70,
    className: "bg-secondary/20 [&>div]:bg-secondary",
  },
};

export const AccentTheme: Story = {
  args: {
    value: 80,
    className: "bg-accent/20 [&>div]:bg-accent",
  },
};

export const CustomGradient: Story = {
  args: {
    value: 90,
    className:
      "h-4 [&>div]:bg-[linear-gradient(90deg,_var(--color-primary-violet)_0%,_var(--color-secondary-aqua)_100%)]",
  },
};

export const ShadesViolet: Story = {
  args: {
    value: 85,
    className: "bg-shades-violet-2 [&>div]:bg-shades-violet-6",
  },
};
