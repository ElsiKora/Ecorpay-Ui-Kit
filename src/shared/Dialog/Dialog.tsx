import { Root, type DialogProps as DialogRootProps } from '@radix-ui/react-dialog';
import { FC, ReactNode } from 'react';

export interface DialogProps extends DialogRootProps {
  children: ReactNode;
}

export const Dialog: FC<DialogProps> = (props) => {
  const { children, ...otherProps } = props;

  return <Root {...otherProps}>{children}</Root>;
};
