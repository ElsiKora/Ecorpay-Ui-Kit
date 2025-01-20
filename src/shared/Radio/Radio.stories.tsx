import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Shared/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  args: {
    // disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Check me',
  },
  render: () => {
    return (
      <div>
        <Radio name="test" label="One" />
        <Radio name="test" label="Two" />
        <Radio name="test" label="Three" />
      </div>
    );
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
