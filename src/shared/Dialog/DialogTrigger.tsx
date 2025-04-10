import type { FC, ReactNode } from "react";

import { Trigger, type DialogTriggerProps as TriggerProperties } from "@radix-ui/react-dialog";

export interface DialogTriggerProperties extends TriggerProperties {
 children: ReactNode;
 className?: string;
}

export const DialogTrigger: FC<DialogTriggerProperties> = (properties) => {
 const { asChild = true, children, ...otherProperties } = properties;

 return (
  <Trigger asChild={asChild} {...otherProperties}>
   {children}
  </Trigger>
 );
};
