import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
 args: { disabled: false },
 component: Switch,
 parameters: {},
 title: "Shared/Switch",
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
 args: {
  children: "Some text",
  className: "testClass",
 },
};

export const Disabled: Story = {
 args: {
  checked: false,
  children: "Some text",
  disabled: true,
 },
};

export const WithoutChildren: Story = {
 args: {
  className: "testClass",
 },
};
