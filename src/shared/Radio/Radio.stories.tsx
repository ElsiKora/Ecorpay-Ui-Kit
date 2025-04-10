import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
 args: {
  // disabled: false,
 },
 component: Radio,
 parameters: {
  layout: "centered",
 },
 title: "Shared/Radio",
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
 args: {
  label: "Check me",
 },
 render: () => {
  return (
   <div>
    <Radio label="One" name="test" />
    <Radio label="Two" name="test" />
    <Radio label="Three" name="test" />
   </div>
  );
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
