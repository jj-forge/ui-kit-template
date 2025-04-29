import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ui-kit/ui/components";

const meta = {
  title: "Components/button",
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Click me",
    className: "bg-blue-500 dark:bg-blue-600",
  },
} satisfies Story;
