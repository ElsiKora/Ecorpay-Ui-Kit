import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
 args: {
  disabled: false,
 },
 component: Input,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/Input",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
 args: {
  label: "ФИО",
  placeholder: "Иванов Иван Иванович",
 },
};

export const Fail: Story = {
 args: {
  errorMsg: "Некорректное заполнение",
  isError: true,
  label: "ФИО",
  placeholder: "Иванов Иван Иванович",
 },
};

export const Centered: Story = {
 args: {
  align: "center",
  placeholder: "Введите код",
  type: "number",
 },
};

export const LeftContent: Story = {
 args: {
  label: "Сумма",
  leftContent: "$",
  placeholder: "100",
  type: "number",
 },
};

export const RightContent: Story = {
 args: {
  label: "Сумма",
  placeholder: "100",
  rightContent: "РУБ.",
  type: "number",
 },
};
