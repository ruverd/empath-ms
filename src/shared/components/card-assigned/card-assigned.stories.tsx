import type { Meta, StoryObj } from "@storybook/react";

import {
  MOCK_ASSIGNED_COURSES,
  MOCK_COURSES,
} from "@/shared/mocks/course.mock";
import { CardAssigned } from "./card-assigned";

const meta = {
  title: "Components/CardAssigned",
  component: CardAssigned,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardAssigned>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...MOCK_ASSIGNED_COURSES[0],
  },
};

export const WithoutHighlightTag: Story = {
  args: {
    course: {
      ...MOCK_COURSES[0],
      highlightTag: undefined,
    },
    percentageCompleted: 75,
    currentLesson: 5,
    isOnTrack: true,
    dueDate: new Date("2024-04-15"),
  },
};

export const WithoutDueDate: Story = {
  args: {
    course: MOCK_COURSES[0],
    percentageCompleted: 25,
    currentLesson: 2,
    isOnTrack: true,
  },
};

export const NotStarted: Story = {
  args: {
    course: {
      ...MOCK_COURSES[0],
      highlightTag: {
        title: "Required",
        variant: "primary" as const,
      },
    },
    percentageCompleted: 0,
    currentLesson: 1,
    isOnTrack: true,
    dueDate: new Date("2024-05-01"),
  },
};

export const AlmostComplete: Story = {
  args: {
    course: {
      ...MOCK_COURSES[0],
      highlightTag: {
        title: "Almost Done",
        variant: "primary" as const,
      },
    },
    percentageCompleted: 90,
    currentLesson: 9,
    isOnTrack: true,
    dueDate: new Date("2024-04-10"),
  },
};
