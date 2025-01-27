import type { Meta, StoryObj } from '@storybook/react';

import { TechWork } from './TechWork';
import { Button } from '@/shared/Button/Button';

const meta: Meta<typeof TechWork> = {
  title: 'Shared/TechWork',
  component: TechWork,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TechWork>;

export const Default: Story = {
  args: {
    title: 'На сайте ведутся технические работы до 12:00 МСК.',
    description:
      'Уважаемый пользователь, мы делаем все возможное, чтобы Вы как можно скорее вернулись возможностям кошелька.',
    children: <Button variant="primary-l">Обновить</Button>,
  },
};
