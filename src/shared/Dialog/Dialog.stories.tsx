import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/Button/Button";
import { DialogClose } from "@/shared/Dialog/DialogClose";
import { DialogContent } from "@/shared/Dialog/dialogContent";
import { DialogTrigger } from "@/shared/Dialog/DialogTrigger";

import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
 component: Dialog,
 parameters: {
  // layout: 'centered',
 },
 title: "Shared/Dialog",
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
 args: {},
 render: () => {
  return (
   <Dialog>
    <DialogTrigger>
     <Button>Trigger</Button>
    </DialogTrigger>
    <DialogContent className="flex max-w-96 flex-col gap-4">
     <h1>Hello world</h1>

     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum!</p>

     <div className="flex w-full items-center gap-2">
      <DialogClose>
       <Button className="flex-1" variant="red-l">
        Cancel
       </Button>
      </DialogClose>
      <DialogClose>
       <Button className="flex-1" variant="primary-l">
        Submit
       </Button>
      </DialogClose>
     </div>
    </DialogContent>
   </Dialog>
  );
 },
};

export const Open: Story = {
 args: {},
 render: () => {
  return (
   <Dialog open>
    <DialogTrigger>
     <Button>Trigger</Button>
    </DialogTrigger>
    <DialogContent className="flex max-w-96 flex-col gap-4">
     <h1>Hello world</h1>

     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum!</p>

     <div className="flex w-full items-center gap-2">
      <DialogClose>
       <Button className="flex-1" variant="red-l">
        Cancel
       </Button>
      </DialogClose>
      <DialogClose>
       <Button className="flex-1" variant="primary-l">
        Submit
       </Button>
      </DialogClose>
     </div>
    </DialogContent>
   </Dialog>
  );
 },
};
