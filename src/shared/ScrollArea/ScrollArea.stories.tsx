/* eslint-disable @elsikora/sonar/no-duplicate-string */
import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "./ScrollArea";

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
   <ScrollArea
    className="max-w-[550px] mob:max-h-[165px] tablet:max-h-[240px]"
    scrollbarClassName="translate-x-[10px]">
    <ul className="flex flex-col gap-2">
     {itemsArray.map(({ label, text }, index) => (
      <li className="flex items-center justify-between" key={label + index.toString()}>
       <span className="flex items-center gap-5px text-base">{label}</span>

       <span className="rounded-[1.375rem] bg-accent-200 px-15px py-6px text-sm text-accent">
        {text}
       </span>
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
    className="max-w-[550px] mob:max-h-[165px] tablet:max-h-[240px]"
    scrollbarClassName="translate-y-[10px]"
    scrollbarProps={{ orientation: "horizontal" }}>
    <ul className="flex gap-2">
     {itemsArray.map(({ label, text }, index) => (
      <li className="flex items-center justify-between" key={label + index.toString()}>
       <span className="flex items-center gap-5px text-base">{label}</span>

       <span className="rounded-[1.375rem] bg-accent-200 px-15px py-6px text-sm text-accent">
        {text}
       </span>
      </li>
     ))}
    </ul>
   </ScrollArea>
  );
 },
};
