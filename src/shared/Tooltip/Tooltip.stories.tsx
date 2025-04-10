import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
 component: Tooltip,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/Tooltip",
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Question: Story = {
 args: {
  children:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad dolor reprehenderit",
 },
};

export const QuestionOpened: Story = {
 args: {
  children:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad dolor reprehenderit",
  rootProps: { open: true },
 },
};

export const Exclamation: Story = {
 args: {
  children:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad dolor reprehenderit",
  triggerType: "exclamation",
 },
};

export const ExclamationOpened: Story = {
 args: {
  children:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad dolor reprehenderit",
  rootProps: { open: true },
  triggerType: "exclamation",
 },
};
