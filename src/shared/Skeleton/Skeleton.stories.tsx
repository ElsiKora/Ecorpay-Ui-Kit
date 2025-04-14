import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";

import s from "./Skeleton.stories.module.scss";

const meta: Meta<typeof Skeleton> = {
 component: Skeleton,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/Skeleton",
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
 args: {
  className: s.skeleton,
 },
};

export const Text: Story = {
 args: {
  className: s.skeleton,
 },
 render: () => {
  return (
   <div className={s.container}>
    <Skeleton className={s.skeleton} />
    <Skeleton className={s.skeleton} />
    <Skeleton className={s.skeleton} />
   </div>
  );
 },
};
