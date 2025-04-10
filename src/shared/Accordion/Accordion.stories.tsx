import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";

const meta: Meta<typeof Accordion> = {
 component: Accordion,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/Accordion",
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Filled: Story = {
 render: () => {
  return (
   <>
    <Accordion className="flex flex-col gap-4" collapsible type="single" variant="filled">
     <AccordionItem triggerText="Hello" value="1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus fugiat fugit
      nobis, perspiciatis facilis sapiente ex corrupti adipisci delectus laudantium! Excepturi non
      fuga, quos eum asperiores accusamus sit corporis.
     </AccordionItem>
     <AccordionItem triggerText="Hello" value="2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim quo nam voluptatum
      doloremque qui eius dignissimos. Ipsum at labore consequuntur ea dolore quisquam quibusdam
      inventore velit suscipit rerum nulla cupiditate quia perspiciatis, totam, nam recusandae illum
      error fugiat, neque sed deleniti voluptatem ducimus? Quod enim modi necessitatibus rerum nihil
      at. Ad quia doloremque ex alias rem doloribus voluptate veritatis?
     </AccordionItem>
     <AccordionItem triggerText="Hello" value="3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta placeat voluptatem maiores
      porro laudantium modi illum ea quia rerum!
     </AccordionItem>
    </Accordion>
   </>
  );
 },
};

export const Outline: Story = {
 render: () => {
  return (
   <>
    <Accordion className="flex flex-col gap-4" collapsible type="single" variant="outline">
     <AccordionItem triggerText="Hello" value="1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus fugiat fugit
      nobis, perspiciatis facilis sapiente ex corrupti adipisci delectus laudantium! Excepturi non
      fuga, quos eum asperiores accusamus sit corporis.
     </AccordionItem>
     <AccordionItem triggerText="Hello" value="2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim quo nam voluptatum
      doloremque qui eius dignissimos. Ipsum at labore consequuntur ea dolore quisquam quibusdam
      inventore velit suscipit rerum nulla cupiditate quia perspiciatis, totam, nam recusandae illum
      error fugiat, neque sed deleniti voluptatem ducimus? Quod enim modi necessitatibus rerum nihil
      at. Ad quia doloremque ex alias rem doloribus voluptate veritatis?
     </AccordionItem>
     <AccordionItem triggerText="Hello" value="3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta placeat voluptatem maiores
      porro laudantium modi illum ea quia rerum!
     </AccordionItem>
    </Accordion>
   </>
  );
 },
};
