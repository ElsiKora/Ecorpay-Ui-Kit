import type { FC, ReactNode } from "react";

import { useAccordionContext } from "@/shared/Accordion/hooks/useAccordionContext";
import { cn } from "@/utils/cn";
import * as AccordionBase from "@radix-ui/react-accordion";

import { AccordionContent } from "../AccordionContent/AccordionContent";
import { AccordionTrigger } from "../AccordionTrigger/AccordionTrigger";

import s from "./AccordionItem.module.scss";

export interface AccordionItemProperties extends AccordionBase.AccordionItemProps {
 children: ReactNode | string;
 contentProps?: AccordionBase.AccordionContentProps;

 triggerProps?: AccordionBase.AccordionTriggerProps;
 triggerText: string;
}

export const AccordionItem: FC<AccordionItemProperties> = (properties) => {
 const { children, className, contentProps, triggerProps, triggerText, ...otherProperties } =
  properties;
 const { variant } = useAccordionContext();

 return (
  <AccordionBase.Item
   className={cn(
    s.item,
    {
     [s.filled]: variant === "filled",
     [s.outline]: variant === "outline",
    },
    className,
   )}
   {...otherProperties}>
   <AccordionTrigger {...triggerProps}>{triggerText}</AccordionTrigger>
   <AccordionContent {...contentProps}>{children}</AccordionContent>
  </AccordionBase.Item>
 );
};
