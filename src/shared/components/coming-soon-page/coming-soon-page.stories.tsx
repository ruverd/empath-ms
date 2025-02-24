import type { Meta, StoryObj } from "@storybook/react";
import { ComingSoonPage } from "./coming-soon-page";

const meta = {
  title: "Components/ComingSoonPage",
  component: ComingSoonPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ComingSoonPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    featureName: "Analytics Dashboard",
  },
};

export const LongFeatureName: Story = {
  args: {
    featureName:
      "Advanced Machine Learning and AI-Powered Recommendations System",
  },
};

export const ShortFeatureName: Story = {
  args: {
    featureName: "Reports",
  },
};
