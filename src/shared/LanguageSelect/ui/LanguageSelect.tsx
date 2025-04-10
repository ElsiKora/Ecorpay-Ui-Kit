import type { VariantProps } from "class-variance-authority";
import type { FC } from "react";

import type { LangItem } from "../model/language.type";

import ShevronIcon from "@/icons/shevron.svg";
import { cn } from "@/utils/cn";
import * as SelectBase from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import { useState } from "react";

import { ScrollArea } from "../../ScrollArea/ScrollArea";
import { filterLanguageList } from "../helper/filterLanguageList";

import { FlagIcon } from "./FlagIcon";
import { LanguageItem } from "./LanguageItem";

const languageSelectVariants = cva("border-black-100 border-2 text-sm", {
 defaultVariants: {
  variant: "rounded",
 },
 variants: {
  variant: {
   rounded: "p-7px w-[108px] rounded-[1.875rem]",
   square: "p-8px w-[115px] rounded-[0.625rem]",
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
     "group font-medium flex items-center data-[state=closed]:transition-colors outline-hidden hover:border-accent data-[state=open]:rounded-ee-none data-[state=open]:rounded-es-none data-[state=open]:border-b-0",
     { "max-h-45px": variant === "rounded", "max-h-52px": variant === "square" },
     triggerClassName,
    )}>
    <span className="gap-5px p-6px flex w-full items-center">
     <FlagIcon code={rootProperties?.value ?? rootProperties?.defaultValue ?? ""} />
     <SelectBase.Value />
     <ShevronIcon className="h-8px w-14px text-black-300 group-hover:text-accent ml-auto transition-all group-data-[state=open]:-rotate-180" />
    </span>
   </SelectBase.Trigger>

   <SelectBase.Portal>
    <SelectBase.Content
     avoidCollisions
     className={cn(
      "z-30 min-w-88px bg-white shadow-langSelect rounded-se-none rounded-ss-none border-l-2 border-r-2 border-b-2 border-black-100 text-sm",
      {
       "animate-language-close": !isAnimate,
       "animate-language-open": isAnimate,
       "rounded-es-[0.625rem] rounded-ee-[0.625rem] w-[115px] p-8px": variant === "square",
       "rounded-es-[1.875rem] rounded-ee-[1.875rem] w-[108px] p-7px": variant === "rounded",
      },
      contentClassName,
     )}
     position="popper"
     side="bottom"
     sideOffset={0}>
     <SelectBase.Viewport className="SelectBaseViewport">
      <ScrollArea className="pr-10px flex max-h-[160px]">
       {filterLanguageList(langList, rootProperties.value ?? rootProperties.defaultValue ?? "").map(
        ({ code, label }, key) => (
         <LanguageItem
          className="
						mb-5px
						gap-5px
						p-6px

						outline-hidden
						data-[state=unchecked]:data-highlighted:border-black-100
						data-[state=checked]:bg-accent-100

						flex
						items-center

						rounded-[0.625rem]
						border-2
						border-transparent
						text-sm
						font-medium

						leading-none

						transition-colors
						last-of-type:mb-0

						data-[state=checked]:cursor-default
						data-[state=unchecked]:cursor-pointer
					"
          key={code + key.toString()}
          value={code}>
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
