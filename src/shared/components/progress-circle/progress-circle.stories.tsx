import type { Meta, StoryObj } from "@storybook/react";
import { ProgressCircle } from "./progress-circle";

const meta = {
  title: "Components/ProgressCircle",
  component: ProgressCircle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const Empty: Story = {
  args: {
    percentage: 0,
  },
};

export const Quarter: Story = {
  args: {
    percentage: 25,
  },
};

export const Half: Story = {
  args: {
    percentage: 50,
  },
};

export const ThreeQuarters: Story = {
  args: {
    percentage: 75,
  },
};

export const Full: Story = {
  args: {
    percentage: 100,
  },
};

export const CustomBackground: Story = {
  args: {
    percentage: 60,
  },
  decorators: [
    (Story) => (
      <div className="p-4 bg-shades-violet-1 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const MultipleProgress: Story = {
  render: () => (
    <div className="flex gap-4">
      <ProgressCircle percentage={25} />
      <ProgressCircle percentage={50} />
      <ProgressCircle percentage={75} />
    </div>
  ),
};
