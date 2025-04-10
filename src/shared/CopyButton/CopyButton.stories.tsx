import type { Meta, StoryObj } from "@storybook/react";

import { CopyButton } from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
 args: {
  // disabled: false,
 },
 component: CopyButton,
 parameters: {
  layout: "centered",
 },
 title: "Shared/CopyButton",
};

export default meta;

type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
 args: {
  children: "Copy text",
  valueToCopy: "Copy text",
 },
};

export const Disabled: Story = {
 args: {
  children: "Copy text",
  disabled: true,
  valueToCopy: "Copy text",
 },
};
