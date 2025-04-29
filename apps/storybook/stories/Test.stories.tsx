import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/test",
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => <div>Test</div>,
} satisfies Story;
