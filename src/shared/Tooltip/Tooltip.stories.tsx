import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Shared/Tooltip',
  component: Tooltip,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Question: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad dolor reprehenderit',
  },
};

export const QuestionOpened: Story = {
  args: {
    rootProps: { open: true },
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad dolor reprehenderit',
  },
};

export const Exclamation: Story = {
  args: {
    triggerType: 'exclamation',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad dolor reprehenderit',
  },
};

export const ExclamationOpened: Story = {
  args: {
    triggerType: 'exclamation',
    rootProps: { open: true },
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad dolor reprehenderit',
  },
};
