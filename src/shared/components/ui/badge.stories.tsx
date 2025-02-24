import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "bg-secondary-aqua text-white border-secondary-aqua",
  },
};

export const LongText: Story = {
  args: {
    children: "This is a very long badge text to show wrapping",
  },
};
