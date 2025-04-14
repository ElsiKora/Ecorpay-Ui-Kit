import type { AccordionContentProps as RadixAccordionContentProperties } from "@radix-ui/react-accordion";
import type { FC } from "react";

import { cn } from "@/utils/cn";
import { Content } from "@radix-ui/react-accordion";

import s from "./AccordionContent.module.scss";

export const AccordionContent: FC<RadixAccordionContentProperties> = (properties) => {
 const { children, className, ...otherProperties } = properties;

 return (
  <Content className={cn(s.content, className)} {...otherProperties}>
   <div className={cn(s.inner)}>{children}</div>
  </Content>
 );
};
