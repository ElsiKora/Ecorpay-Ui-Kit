import type { Meta, StoryObj } from "@storybook/react";

import { Boundary } from "./Boundary";

const meta: Meta<typeof Boundary> = {
 component: Boundary,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/Boundary",
};

export default meta;

type Story = StoryObj<typeof Boundary>;

export const Compact: Story = {
 args: {},
 render: () => {
  const mockError = {
   error: "Bad Request",
   hint: "Valid sorting fields are: 'name', 'createdAt', 'updatedAt'.",
   message: "Invalid query parameter 'sort': 'unknownField' is not a valid sorting field.",
   status: 400,
  };

  return (
   <Boundary
    className="max-w-96"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate vero suscipit sed veritatis est recusandae quae, quia, provident architecto ducimus iste vitae explicabo voluptas ut odio error! Provident, saepe."
    errorText={mockError}
    errorTitle={mockError.error}
    size="compact"
    title="Some error"
   />
  );
 },
};

export const FullSize: Story = {
 args: {},
 render: () => {
  const mockError = {
   error: "Bad Request",
   hint: "Valid sorting fields are: 'name', 'createdAt', 'updatedAt'.",
   message: "Invalid query parameter 'sort': 'unknownField' is not a valid sorting field.",
   status: 400,
  };

  return (
   <Boundary
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate vero suscipit sed veritatis est recusandae quae, quia, provident architecto ducimus iste vitae explicabo voluptas ut odio error! Provident, saepe."
    errorText={mockError}
    errorTitle={mockError.error}
    size="full"
    title="Some error"
   />
  );
 },
};
