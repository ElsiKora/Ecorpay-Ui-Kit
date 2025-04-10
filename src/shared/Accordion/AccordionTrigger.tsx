import type { AccordionTriggerProps as RadixAccordionTriggerProperties } from "@radix-ui/react-accordion";
import type { FC } from "react";

import ShevronIcon from "@/icons/shevron.svg";
import { cn } from "@/utils/cn";
import { Trigger } from "@radix-ui/react-accordion";

import { useAccordionContext } from "./hooks/useAccordionContext";

export const AccordionTrigger: FC<RadixAccordionTriggerProperties> = (properties) => {
 const { children, className, ...otherProperties } = properties;
 const { variant } = useAccordionContext();

 return (
  <Trigger
   className={cn(
    "font-medium mob:text-xs rounded-2xl tablet:text-base mob:p-15px tablet:p-5 data-[state=open]:text-accent w-full flex items-center justify-between transition-colors outline-hidden",
    {
     "focus-visible:bg-accent-100": variant == "outline",
     "focus-visible:bg-accent-200": variant == "filled",
    },
    className,
   )}
   {...otherProperties}>
   {children}
   {variant === "filled" ? (
    <span className="relative  size-[12px]">
     {/* Vertical Line */}
     <span className="bg-accent absolute left-1/2 block h-[12px] w-[2px] -translate-x-1/2 rounded-[15px] transition-transform group-data-[state=open]:rotate-90" />

     {/* Horizontal Line */}
     <span
      className={cn(
       "absolute top-[50%] -translate-y-[50%] h-[2px] w-[12px] rounded-[15px] bg-accent block group-data-[state=open]:opacity-0 transition-opacity",
      )}
     />
    </span>
   ) : null}

   {variant === "outline" ? (
    <ShevronIcon className="text-accent transition-transform group-data-[state=open]:rotate-180" />
   ) : null}
  </Trigger>
 );
};
