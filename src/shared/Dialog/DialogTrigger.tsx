import { FC, ReactNode } from 'react';
import { Trigger, type DialogTriggerProps as TriggerProps } from '@radix-ui/react-dialog';

interface DialogTriggerProps extends TriggerProps {
  className?: string;
  children: ReactNode;
}

export const DialogTrigger: FC<DialogTriggerProps> = (props) => {
  const { children, asChild = true, ...otherProps } = props;

  return (
    <Trigger asChild={asChild} {...otherProps}>
      {children}
    </Trigger>
  );
};
