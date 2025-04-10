import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
 component: Checkbox,
 parameters: {
  layout: "centered",
 },
 title: "Shared/Checkbox",
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
 args: {
  label: "Check me",
 },
};

export const Checked: Story = {
 args: {
  checked: true,
  label: "Check me",
 },
};

export const Unchecked: Story = {
 args: {
  checked: false,
  label: "Check me",
 },
};

export const DisabledChecked: Story = {
 args: {
  checked: true,
  disabled: true,
  label: "Check me",
 },
};

export const DisabledUnchecked: Story = {
 args: {
  checked: false,
  disabled: true,
  label: "Check me",
 },
};
