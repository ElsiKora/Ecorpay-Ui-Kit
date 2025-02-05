import type { Meta, StoryObj } from '@storybook/react';

import { Boundary } from './Boundary';

const meta: Meta<typeof Boundary> = {
  title: 'Shared/Boundary',
  component: Boundary,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Boundary>;

export const Compact: Story = {
  args: {},
  render: () => {
    const mockError = {
      status: 400,
      error: 'Bad Request',
      message: "Invalid query parameter 'sort': 'unknownField' is not a valid sorting field.",
      hint: "Valid sorting fields are: 'name', 'createdAt', 'updatedAt'.",
    };

    return (
      <Boundary
        className="max-w-96"
        title="Some error"
        size="compact"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate vero suscipit sed veritatis est recusandae quae, quia, provident architecto ducimus iste vitae explicabo voluptas ut odio error! Provident, saepe."
        errorTitle={mockError.error}
        errorText={mockError}
      />
    );
  },
};

export const FullSize: Story = {
  args: {},
  render: () => {
    const mockError = {
      status: 400,
      error: 'Bad Request',
      message: "Invalid query parameter 'sort': 'unknownField' is not a valid sorting field.",
      hint: "Valid sorting fields are: 'name', 'createdAt', 'updatedAt'.",
    };

    return (
      <Boundary
        title="Some error"
        size="full"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate vero suscipit sed veritatis est recusandae quae, quia, provident architecto ducimus iste vitae explicabo voluptas ut odio error! Provident, saepe."
        errorTitle={mockError.error}
        errorText={mockError}
      />
    );
  },
};
