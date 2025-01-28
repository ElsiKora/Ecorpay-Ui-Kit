import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

const meta: Meta<typeof Accordion> = {
  title: 'Shared/Accordion',
  component: Accordion,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Filled: Story = {
  render: () => {
    return (
      <>
        <Accordion className="flex flex-col gap-4" type="single" variant="filled" collapsible>
          <AccordionItem value="1" triggerText="Hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus fugiat
            fugit nobis, perspiciatis facilis sapiente ex corrupti adipisci delectus laudantium!
            Excepturi non fuga, quos eum asperiores accusamus sit corporis.
          </AccordionItem>
          <AccordionItem value="2" triggerText="Hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim quo nam voluptatum
            doloremque qui eius dignissimos. Ipsum at labore consequuntur ea dolore quisquam
            quibusdam inventore velit suscipit rerum nulla cupiditate quia perspiciatis, totam, nam
            recusandae illum error fugiat, neque sed deleniti voluptatem ducimus? Quod enim modi
            necessitatibus rerum nihil at. Ad quia doloremque ex alias rem doloribus voluptate
            veritatis?
          </AccordionItem>
          <AccordionItem value="3" triggerText="Hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta placeat voluptatem
            maiores porro laudantium modi illum ea quia rerum!
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
        <Accordion className="flex flex-col gap-4" type="single" variant="outline" collapsible>
          <AccordionItem value="1" triggerText="Hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus fugiat
            fugit nobis, perspiciatis facilis sapiente ex corrupti adipisci delectus laudantium!
            Excepturi non fuga, quos eum asperiores accusamus sit corporis.
          </AccordionItem>
          <AccordionItem value="2" triggerText="Hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim quo nam voluptatum
            doloremque qui eius dignissimos. Ipsum at labore consequuntur ea dolore quisquam
            quibusdam inventore velit suscipit rerum nulla cupiditate quia perspiciatis, totam, nam
            recusandae illum error fugiat, neque sed deleniti voluptatem ducimus? Quod enim modi
            necessitatibus rerum nihil at. Ad quia doloremque ex alias rem doloribus voluptate
            veritatis?
          </AccordionItem>
          <AccordionItem value="3" triggerText="Hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta placeat voluptatem
            maiores porro laudantium modi illum ea quia rerum!
          </AccordionItem>
        </Accordion>
      </>
    );
  },
};
