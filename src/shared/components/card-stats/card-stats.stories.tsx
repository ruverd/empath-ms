import type { Meta, StoryObj } from "@storybook/react";

import { MOCK_STATS } from "@/shared/mocks/stats.mock";

import { CardStats } from "./card-stats";

const meta = {
  title: "Components/CardStats",
  component: CardStats,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center gap-2 size-80 bg-shades-violet-1">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof CardStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...MOCK_STATS.stats[0],
  },
};
