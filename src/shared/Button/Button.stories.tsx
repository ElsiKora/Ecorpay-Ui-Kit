import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
 args: {
  disabled: false,
 },
 component: Button,
 parameters: {
  layout: "centered",
 },
 title: "Shared/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
 render: (arguments_) => {
  return (
   <div className="flex items-end gap-3">
    <Button variant="primary-m" {...arguments_}>
     Primary medium
    </Button>
    <Button variant="primary-l" {...arguments_}>
     Primary large
    </Button>
   </div>
  );
 },
};

export const Loading: Story = {
 args: {
  children: "Example",
  loading: true,
  variant: "primary-l",
 },
};

export const Secondary: Story = {
 render: (arguments_) => {
  return (
   <div className="flex items-end gap-3">
    <Button variant="secondary-m" {...arguments_}>
     Secondary medium
    </Button>
    <Button variant="secondary-l" {...arguments_}>
     Secondary large
    </Button>
   </div>
  );
 },
};

export const Red: Story = {
 render: (arguments_) => {
  return (
   <div className="flex items-end gap-3">
    <Button variant="red-l" {...arguments_}>
     Red large
    </Button>
   </div>
  );
 },
};

export const Gray: Story = {
 render: (arguments_) => {
  return (
   <div className="flex items-end gap-3">
    <Button variant="gray-m" {...arguments_}>
     Gray medium
    </Button>
    <Button variant="gray-l" {...arguments_}>
     Gray large
    </Button>
   </div>
  );
 },
};

export const White: Story = {
 render: (arguments_) => {
  return (
   <div className="flex items-end gap-3">
    <Button variant="white-m" {...arguments_}>
     White medium
    </Button>
   </div>
  );
 },
};

export const OutlinePrimary: Story = {
 render: (arguments_) => {
  return (
   <div className="flex items-end gap-3">
    <Button variant="outline-primary-s" {...arguments_}>
     Outline small
    </Button>
   </div>
  );
 },
};

export const OutlineGray: Story = {
 render: (arguments_) => {
  return (
   <div className="flex items-end gap-3">
    <Button variant="outline-gray-s" {...arguments_}>
     Outline small
    </Button>
   </div>
  );
 },
};

export const Text: Story = {
 render: (arguments_) => {
  return (
   <div className="flex items-end gap-3">
    <Button variant="text-l" {...arguments_}>
     Text large
    </Button>
   </div>
  );
 },
};
