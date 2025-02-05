import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';
import { DialogTrigger } from '@/shared/Dialog/DialogTrigger';
import { DialogContent } from '@/shared/Dialog/dialogContent';
import { Button } from '@/shared/Button/Button';
import { DialogClose } from '@/shared/Dialog/DialogClose';

const meta: Meta<typeof Dialog> = {
  title: 'Shared/Dialog',
  component: Dialog,
  parameters: {
    // layout: 'centered',
  },
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
        <DialogContent className="max-w-96 flex flex-col gap-4">
          <h1>Hello world</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum!</p>

          <div className="flex items-center gap-2 w-full">
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
        <DialogContent className="max-w-96 flex flex-col gap-4">
          <h1>Hello world</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum!</p>

          <div className="flex items-center gap-2 w-full">
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
