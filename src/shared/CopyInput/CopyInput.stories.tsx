import type { Meta, StoryObj } from "@storybook/react";

import { CopyInput } from "./CopyInput";
// import { useState } from 'react';

const meta: Meta<typeof CopyInput> = {
 args: {
  // disabled: false,
 },
 component: CopyInput,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/CopyInput",
};

export default meta;

type Story = StoryObj<typeof CopyInput>;

export const Default: Story = {
 args: {
  disabled: false,
  label: "Номер для перевода",
  valueToCopy: "+7 (999) 999 99 99",
 },
};

export const Disabled: Story = {
 args: {
  disabled: true,
  label: "Номер для перевода",
  valueToCopy: "+7 (999) 999 99 99",
 },
};
