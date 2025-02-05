import CloseIcon from '@/icons/close.svg';

import { FC, ReactNode } from 'react';
import {
  Portal,
  Overlay,
  Content,
  type DialogOverlayProps,
  type DialogPortalProps,
  type DialogContentProps as ContentProps,
} from '@radix-ui/react-dialog';
import { DialogClose } from './DialogClose';
import { cn } from '@/utils/cn';

export interface DialogContentProps extends ContentProps {
  className?: string;
  portalProps?: DialogPortalProps;
  overlayProps?: DialogOverlayProps;
  withCloseIcon?: boolean;

  children: ReactNode;
}

export const DialogContent: FC<DialogContentProps> = (props) => {
  const {
    children,
    className,
    withCloseIcon = true,
    portalProps,
    overlayProps,
    ...otherProps
  } = props;

  return (
    <Portal {...portalProps}>
      <Overlay
        className="fixed inset-0 bg-[rgba(0,0,0,0.50)] data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn"
        {...overlayProps}
      />
      <Content
        className={cn(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white mob:p-15px tablet:p-30px mob:rounded-2xl tablet:rounded-[1.25rem] transform-gpu data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn will-change-transform origin-top-left',
          className
        )}
        {...otherProps}
      >
        {withCloseIcon ? (
          <DialogClose className="absolute mob:right-[10px] mob:top-[10px] tablet:right-5 tablet:top-5">
            <button>
              <CloseIcon />
            </button>
          </DialogClose>
        ) : null}

        {children}
      </Content>
    </Portal>
  );
};
