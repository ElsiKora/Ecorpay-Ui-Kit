import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: 'h-5 w-[300px]',
  },
};

export const Text: Story = {
  args: {
    className: 'h-5 w-[300px]',
  },
  render: () => {
    return (
      <div className="flex flex-col gap-1">
        <Skeleton className="h-5 w-[200px]" />
        <Skeleton className="h-5 w-[270px]" />
        <Skeleton className="h-5 w-[300px]" />
      </div>
    );
  },
};
