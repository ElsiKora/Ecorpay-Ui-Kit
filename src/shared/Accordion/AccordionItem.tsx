import type { FC, ReactNode } from "react";

import { useAccordionContext } from "@/shared/Accordion/hooks/useAccordionContext";
import { cn } from "@/utils/cn";
import * as AccordionBase from "@radix-ui/react-accordion";

import { AccordionContent } from "./AccordionContent";
import { AccordionTrigger } from "./AccordionTrigger";

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
    "group rounded-2xl transition-colors",
    {
     "bg-accent-100 data-[state=closed]:hover:bg-accent-200": variant === "filled",
     "border-2 border-black-100 data-[state=closed]:hover:border-accent": variant === "outline",
    },
    className,
   )}
   {...otherProperties}>
   <AccordionTrigger {...triggerProps}>{triggerText}</AccordionTrigger>
   <AccordionContent {...contentProps}>{children}</AccordionContent>
  </AccordionBase.Item>
 );
};
