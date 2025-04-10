import type { FC, ReactNode } from "react";

import { Close, type DialogCloseProps as CloseProperties } from "@radix-ui/react-dialog";

export interface DialogCloseProperties extends CloseProperties {
 children: ReactNode;
 className?: string;
}

export const DialogClose: FC<DialogCloseProperties> = (properties) => {
 const { asChild = true, children, ...otherProperties } = properties;

 return (
  <Close asChild={asChild} {...otherProperties}>
   {children}
  </Close>
 );
};
