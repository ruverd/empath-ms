import type { Meta, StoryObj } from "@storybook/react";

import { Status } from "@/shared/enums/status";

import { BadgeStatus } from "./badge-status";

const meta = {
  title: "Components/BadgeStatus",
  component: BadgeStatus,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center gap-2 size-80 bg-primary-indigo">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof BadgeStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: Status.ON_TRACK,
  },
};
