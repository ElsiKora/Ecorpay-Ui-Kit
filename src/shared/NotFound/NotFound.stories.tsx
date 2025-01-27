import type { Meta, StoryObj } from '@storybook/react';

import { NotFound } from './NotFound';
import { Button } from '@/shared/Button/Button';

const meta: Meta<typeof NotFound> = {
  title: 'Shared/NotFound',
  component: NotFound,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  args: {
    title: 'Кажется, такой страницы не существует.',
    description: 'Возможно, ссылка оказалась неверной или страница была удалена.',
    children: <Button variant="primary-l">На главную</Button>,
  },
};

export const WithoutLink: Story = {
  args: {
    title: 'Кажется, такой страницы не существует.',
    description: 'Возможно, ссылка оказалась неверной или страница была удалена.',
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'Кажется, такой страницы не существует.',
    children: <Button variant="primary-l">На главную</Button>,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Кажется, такой страницы не существует.',
  },
};
