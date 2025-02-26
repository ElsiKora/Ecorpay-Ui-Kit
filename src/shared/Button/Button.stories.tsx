import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => {
    return (
      <div className="flex items-end gap-3">
        <Button variant="primary-m" {...args}>
          Primary medium
        </Button>
        <Button variant="primary-l" {...args}>
          Primary large
        </Button>
      </div>
    );
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary-l',
    loading: true,
    children: 'Example',
  },
};

export const Secondary: Story = {
  render: (args) => {
    return (
      <div className="flex items-end gap-3">
        <Button variant="secondary-m" {...args}>
          Secondary medium
        </Button>
        <Button variant="secondary-l" {...args}>
          Secondary large
        </Button>
      </div>
    );
  },
};

export const Red: Story = {
  render: (args) => {
    return (
      <div className="flex items-end gap-3">
        <Button variant="red-l" {...args}>
          Red large
        </Button>
      </div>
    );
  },
};

export const Gray: Story = {
  render: (args) => {
    return (
      <div className="flex items-end gap-3">
        <Button variant="gray-m" {...args}>
          Gray medium
        </Button>
        <Button variant="gray-l" {...args}>
          Gray large
        </Button>
      </div>
    );
  },
};

export const White: Story = {
  render: (args) => {
    return (
      <div className="flex items-end gap-3">
        <Button variant="white-m" {...args}>
          White medium
        </Button>
      </div>
    );
  },
};

export const OutlinePrimary: Story = {
  render: (args) => {
    return (
      <div className="flex items-end gap-3">
        <Button variant="outline-primary-s" {...args}>
          Outline small
        </Button>
      </div>
    );
  },
};

export const OutlineGray: Story = {
  render: (args) => {
    return (
      <div className="flex items-end gap-3">
        <Button variant="outline-gray-s" {...args}>
          Outline small
        </Button>
      </div>
    );
  },
};

export const Text: Story = {
  render: (args) => {
    return (
      <div className="flex items-end gap-3">
        <Button variant="text-l" {...args}>
          Text large
        </Button>
      </div>
    );
  },
};
