import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your new project will be created in your workspace.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>Card with only content section</p>
      </CardContent>
    </Card>
  ),
};

export const HeaderAndContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Header Only</CardTitle>
        <CardDescription>With content but no footer</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some content here</p>
      </CardContent>
    </Card>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <Card className="w-[350px] border-primary bg-secondary text-secondary-foreground">
      <CardHeader className="border-b">
        <CardTitle className="text-xl">Custom Styled Card</CardTitle>
        <CardDescription className="text-secondary-foreground/70">
          With custom colors and borders
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p>Content with custom background</p>
      </CardContent>
      <CardFooter className="border-t">
        <p>Custom footer</p>
      </CardFooter>
    </Card>
  ),
};
