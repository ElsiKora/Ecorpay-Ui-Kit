import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
 component: Toast,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/Toast",
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
 args: {
  description:
   "Оператор Сервиса принимает необходимые и достаточные организационные и технические меры.",
 },
};

export const Primary: Story = {
 args: {
  description:
   "Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.",
  variant: "primary",
 },
};

export const Warning: Story = {
 args: {
  description:
   "Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.",
  variant: "warn",
 },
};

export const Danger: Story = {
 args: {
  description:
   "Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.",
  variant: "danger",
 },
};
