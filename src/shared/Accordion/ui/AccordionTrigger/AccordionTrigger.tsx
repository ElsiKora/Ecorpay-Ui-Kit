import type { AccordionTriggerProps as RadixAccordionTriggerProperties } from "@radix-ui/react-accordion";
import type { FC } from "react";

import ShevronIcon from "@/icons/shevron.svg";
import { cn } from "@/utils/cn";
import { Trigger } from "@radix-ui/react-accordion";

import { useAccordionContext } from "../../hooks/useAccordionContext";

import s from "./AccordionTrigger.module.scss";

export const AccordionTrigger: FC<RadixAccordionTriggerProperties> = (properties) => {
 const { children, className, ...otherProperties } = properties;
 const { variant } = useAccordionContext();

 return (
  <Trigger
   className={cn(
    s.trigger,
    {
     [s.filled]: variant == "filled",
     [s.outline]: variant == "outline",
    },
    className,
   )}
   {...otherProperties}>
   {children}
   {variant === "filled" ? (
    <span className={s.iconWrapper}>
     {/* Vertical Line */}
     <span className={s.verticalLine} />

     {/* Horizontal Line */}
     <span className={cn(s.horizontalLine)} />
    </span>
   ) : null}

   {variant === "outline" ? <ShevronIcon className={s.shevron} /> : null}
  </Trigger>
 );
};
