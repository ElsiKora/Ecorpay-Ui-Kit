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

import { DialogClose } from "../DialogClose";

import s from "./DialogContent.module.scss";

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
   <Overlay className={s.overlay} {...overlayProps} />
   <Content className={cn(s.content, className)} {...otherProperties}>
    {withCloseIcon ? (
     <DialogClose className={s.close}>
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
