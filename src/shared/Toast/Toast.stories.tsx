import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Shared/Toast',
  component: Toast,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    description:
      'Оператор Сервиса принимает необходимые и достаточные организационные и технические меры.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warn',
    description:
      'Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    description:
      'Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.',
  },
};
