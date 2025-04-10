import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/Button/Button";

import { NotFound } from "./NotFound";

const meta: Meta<typeof NotFound> = {
 component: NotFound,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/NotFound",
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
 args: {
  children: <Button variant="primary-l">На главную</Button>,
  description: "Возможно, ссылка оказалась неверной или страница была удалена.",
  title: "Кажется, такой страницы не существует.",
 },
};

export const WithoutLink: Story = {
 args: {
  description: "Возможно, ссылка оказалась неверной или страница была удалена.",
  title: "Кажется, такой страницы не существует.",
 },
};

export const WithoutDescription: Story = {
 args: {
  children: <Button variant="primary-l">На главную</Button>,
  title: "Кажется, такой страницы не существует.",
 },
};

export const OnlyTitle: Story = {
 args: {
  title: "Кажется, такой страницы не существует.",
 },
};
