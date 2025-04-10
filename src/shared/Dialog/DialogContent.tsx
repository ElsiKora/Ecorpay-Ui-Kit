import type { FC, ReactNode } from "react";

import CloseIcon from "@/icons/close.svg";
import { cn } from "@/utils/cn";
import {
 Content,
 type DialogContentProps as ContentProperties,
 type DialogOverlayProps,
 type DialogPortalProps,
 Overlay,
 Portal,
} from "@radix-ui/react-dialog";

import { DialogClose } from "./DialogClose";

export interface DialogContentProperties extends ContentProperties {
 children: ReactNode;
 className?: string;
 overlayProps?: DialogOverlayProps;
 portalProps?: DialogPortalProps;

 withCloseIcon?: boolean;
}

export const DialogContent: FC<DialogContentProperties> = (properties) => {
 const {
  children,
  className,
  overlayProps,
  portalProps,
  withCloseIcon = true,
  ...otherProperties
 } = properties;

 return (
  <Portal {...portalProps}>
   <Overlay
    className="data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn fixed inset-0 bg-[rgba(0,0,0,0.50)]"
    {...overlayProps}
   />
   <Content
    className={cn(
     "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white mob:p-15px tablet:p-30px mob:rounded-2xl tablet:rounded-[1.25rem] transform-gpu data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn will-change-transform origin-top-left",
     className,
    )}
    {...otherProperties}>
    {withCloseIcon ? (
     <DialogClose className="mob:right-[10px] mob:top-[10px] tablet:right-5 tablet:top-5 absolute">
      <button type="button">
       <CloseIcon />
      </button>
     </DialogClose>
    ) : null}

    {children}
   </Content>
  </Portal>
 );
};
