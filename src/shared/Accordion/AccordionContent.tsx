import type { AccordionContentProps as RadixAccordionContentProperties } from "@radix-ui/react-accordion";
import type { FC } from "react";

import { cn } from "@/utils/cn";
import { Content } from "@radix-ui/react-accordion";

export const AccordionContent: FC<RadixAccordionContentProperties> = (properties) => {
 const { children, className, ...otherProperties } = properties;

 return (
  <Content
   className={cn(
    "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    className,
   )}
   {...otherProperties}>
   <div
    className={cn(
     "mob:pr-15px mob:pb-15px mob:pl-15px tablet:pl-5 tablet:pb-5 tablet:pr-5 mob:pt-5px tablet:pt-0 mob:text-xs tablet:text-sm",
    )}>
    {children}
   </div>
  </Content>
 );
};
