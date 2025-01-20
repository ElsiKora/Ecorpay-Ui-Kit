import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Shared/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Check me',
  },
};

export const Checked: Story = {
  args: {
    label: 'Check me',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Check me',
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Check me',
    checked: true,
    disabled: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Check me',
    checked: false,
    disabled: true,
  },
};
