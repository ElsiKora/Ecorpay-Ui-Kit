import type { VariantProps } from "class-variance-authority";
import type { FC } from "react";

import type { LangItem } from "../../model/language.type";

import ShevronIcon from "@/icons/shevron.svg";
import { FlagIcon } from "@/shared/FlagIcon/FlagIcon";
import { cn } from "@/utils/cn";
import * as SelectBase from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import { useState } from "react";

import { ScrollArea } from "../../../ScrollArea/ScrollArea";
import { filterLanguageList } from "../../helper/filterLanguageList";
import { LanguageItem } from "../LanguageItem";

import s from "./LanguageSelect.module.scss";

const languageSelectVariants = cva(s.select, {
 defaultVariants: {
  variant: "rounded",
 },
 variants: {
  variant: {
   rounded: s.rounded,
   square: s.square,
  },
 },
});

export interface LanguageSelectProperties extends VariantProps<typeof languageSelectVariants> {
 contentClassName?: string;
 langList: Array<LangItem>;
 rootProps?: SelectBase.SelectProps;
 triggerClassName?: string;
}

const defaultRoot: SelectBase.SelectProps = {};

export const LanguageSelect: FC<LanguageSelectProperties> = (properties) => {
 const {
  contentClassName,
  langList,
  rootProps: rootProperties = defaultRoot,
  triggerClassName,
  variant,
 } = properties;
 const { onOpenChange, open, ...otherRootProperties } = rootProperties;

 const [isOpen, setIsOpen] = useState(open ?? false);
 const [isAnimate, setIsAnimate] = useState(open ?? false);

 const openChangeHandler = (state: boolean) => {
  setIsAnimate(state);

  if (onOpenChange) {
   if (state) onOpenChange(state);
   else
    setTimeout(() => {
     onOpenChange(state);
    }, 130);
  } else {
   if (state) setIsOpen(state);
   else
    setTimeout(() => {
     setIsOpen(state);
    }, 130);
  }
 };

 return (
  <SelectBase.Root onOpenChange={openChangeHandler} open={isOpen} {...otherRootProperties}>
   <SelectBase.Trigger
    aria-label="Language"
    className={cn(
     languageSelectVariants({ variant }),
     s.trigger,
     {
      [s.rounded]: variant === "rounded",
      [s.square]: variant === "square",
     },
     triggerClassName,
    )}>
    <span className={s.triggerContent}>
     <FlagIcon code={rootProperties?.value ?? rootProperties?.defaultValue ?? ""} />
     <SelectBase.Value />
     <ShevronIcon className={s.shevron} />
    </span>
   </SelectBase.Trigger>

   <SelectBase.Portal>
    <SelectBase.Content
     avoidCollisions
     className={cn(
      s.content,
      {
       [s.animate_close]: !isAnimate,
       [s.animate_open]: isAnimate,
       [s.rounded]: variant === "rounded",
       [s.square]: variant === "square",
      },
      contentClassName,
     )}
     position="popper"
     side="bottom"
     sideOffset={0}>
     <SelectBase.Viewport className={s.viewport}>
      <ScrollArea
       className={cn(s.scrollArea, {
        [s.rounded]: variant === "rounded",
        [s.square]: variant === "square",
       })}>
       {filterLanguageList(langList, rootProperties.value ?? rootProperties.defaultValue ?? "").map(
        ({ code, label }, key) => (
         <LanguageItem className={s.item} key={code + key.toString()} value={code}>
          {label}
         </LanguageItem>
        ),
       )}
      </ScrollArea>
     </SelectBase.Viewport>
    </SelectBase.Content>
   </SelectBase.Portal>
  </SelectBase.Root>
 );
};
