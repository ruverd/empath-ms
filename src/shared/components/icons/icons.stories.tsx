import { cn } from "@/shared/lib/utils";
import type { Meta, StoryObj } from "@storybook/react";
import {
  IconBell,
  IconGraduation,
  IconInfo,
  IconMoon,
  IconSearch,
  IconTime,
  IconTrophy,
  IconUsers,
} from "./index";

const meta = {
  title: "Components/Icons",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "p-4 border flex items-center justify-center border-shades-violet-2 rounded-lg bg-transparent",
      className
    )}
  >
    <div className="size-8 text-shades-violet-8 flex items-center justify-center">
      {children}
    </div>
  </div>
);

export const Bell: StoryObj = {
  render: () => (
    <IconWrapper>
      <IconBell />
    </IconWrapper>
  ),
};

export const Info: StoryObj = {
  render: () => (
    <IconWrapper>
      <IconInfo />
    </IconWrapper>
  ),
};

export const Moon: StoryObj = {
  render: () => (
    <IconWrapper>
      <IconMoon />
    </IconWrapper>
  ),
};

export const Search: StoryObj = {
  render: () => (
    <IconWrapper>
      <IconSearch />
    </IconWrapper>
  ),
};

export const Graduation: StoryObj = {
  render: () => (
    <IconWrapper className="bg-shades-violet-2">
      <IconGraduation />
    </IconWrapper>
  ),
};

export const Time: StoryObj = {
  render: () => (
    <IconWrapper className="bg-shades-violet-2">
      <IconTime />
    </IconWrapper>
  ),
};

export const Trophy: StoryObj = {
  render: () => (
    <IconWrapper className="bg-shades-violet-2">
      <IconTrophy />
    </IconWrapper>
  ),
};

export const Users: StoryObj = {
  render: () => (
    <IconWrapper className="bg-shades-violet-2">
      <IconUsers />
    </IconWrapper>
  ),
};

export const AllIcons: StoryObj = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <IconWrapper>
        <IconBell />
      </IconWrapper>
      <IconWrapper>
        <IconInfo />
      </IconWrapper>
      <IconWrapper>
        <IconMoon />
      </IconWrapper>
      <IconWrapper>
        <IconSearch />
      </IconWrapper>
      <IconWrapper className="bg-shades-violet-2">
        <IconGraduation />
      </IconWrapper>
      <IconWrapper className="bg-shades-violet-2">
        <IconTime />
      </IconWrapper>
      <IconWrapper className="bg-shades-violet-2">
        <IconTrophy />
      </IconWrapper>
      <IconWrapper className="bg-shades-violet-2">
        <IconUsers />
      </IconWrapper>
    </div>
  ),
};
