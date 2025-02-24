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
    className: "w-[300px]",
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    className: "w-[300px]",
  },
};

export const Full: Story = {
  args: {
    value: 100,
    className: "w-[300px]",
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
