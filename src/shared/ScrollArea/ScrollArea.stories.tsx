/* eslint-disable @elsikora/sonar/no-duplicate-string */
import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "./ScrollArea";

import s from "./ScrollArea.stories.module.scss";

const meta: Meta<typeof ScrollArea> = {
 component: ScrollArea,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/ScrollArea",
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const itemsArray = [
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
 { label: "Lorem ipsum", text: "Lorem" },
];

export const Default: Story = {
 args: {},
 render: () => {
  return (
   <ScrollArea className={s.scrollArea} scrollbarClassName={s.scrollbarVertical}>
    <ul className={s.list}>
     {itemsArray.map(({ label, text }, index) => (
      <li className={s.item} key={label + index.toString()}>
       <span className={s.label}>{label}</span>
       <span className={s.badge}>{text}</span>
      </li>
     ))}
    </ul>
   </ScrollArea>
  );
 },
};

export const Horizontal: Story = {
 args: {},
 render: () => {
  return (
   <ScrollArea
    className={s.scrollArea}
    scrollbarClassName={s.scrollbarHorizontal}
    scrollbarProps={{ orientation: "horizontal" }}>
    <ul className={s.listHorizontal}>
     {itemsArray.map(({ label, text }, index) => (
      <li className={s.item} key={label + index.toString()}>
       <span className={s.label}>{label}</span>
       <span className={s.badge}>{text}</span>
      </li>
     ))}
    </ul>
   </ScrollArea>
  );
 },
};
