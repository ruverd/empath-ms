import type { Meta, StoryObj } from "@storybook/react";

import { USER_AUTHENTICATED } from "@/shared/constants/user";
import { MOCK_STATS } from "@/shared/mocks/stats.mock";

import { MyProgress } from "./my-progress";

const meta = {
  title: "Components/MyProgress",
  component: MyProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  progress: 50,
  user: USER_AUTHENTICATED,
  stats: MOCK_STATS.stats,
};

export const Default: Story = {
  args: defaultProps,
};
