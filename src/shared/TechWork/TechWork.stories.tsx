import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/Button/Button";

import { TechWork } from "./TechWork";

const meta: Meta<typeof TechWork> = {
 component: TechWork,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/TechWork",
};

export default meta;

type Story = StoryObj<typeof TechWork>;

export const Default: Story = {
 args: {
  children: <Button variant="primary-l">Обновить</Button>,
  description:
   "Уважаемый пользователь, мы делаем все возможное, чтобы Вы как можно скорее вернулись возможностям кошелька.",
  title: "На сайте ведутся технические работы до 12:00 МСК.",
 },
};
