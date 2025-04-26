import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ui-kit/ui";

const meta = {
  title: "Components/button",
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Click me",
  },
} satisfies Story;
