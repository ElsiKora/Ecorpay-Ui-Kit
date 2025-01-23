import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Shared/Banner',
  component: Banner,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Warning: Story = {
  args: {
    titile: 'Внимание!',
    description:
      'Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.',
  },
};

export const Danger: Story = {
  args: {
    titile: 'Внимание!',
    variant: 'danger',
    as: 'div',
    description:
      'Оператор Сервиса принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя.',
  },
};
