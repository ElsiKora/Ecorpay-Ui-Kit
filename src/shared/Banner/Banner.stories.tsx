import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
 component: Banner,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/Banner",
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Warning: Story = {
 args: {
  description:
   "Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.",
  titile: "Внимание!",
 },
};

export const Danger: Story = {
 args: {
  as: "div",
  description:
   "Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.",
  titile: "Внимание!",
  variant: "danger",
 },
};
