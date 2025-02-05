import { FC, ReactNode } from 'react';
import { Close, type DialogCloseProps as CloseProps } from '@radix-ui/react-dialog';

interface DialogCloseProps extends CloseProps {
  className?: string;
  children: ReactNode;
}

export const DialogClose: FC<DialogCloseProps> = (props) => {
  const { children, asChild = true, ...otherProps } = props;

  return (
    <Close asChild={asChild} {...otherProps}>
      {children}
    </Close>
  );
};
