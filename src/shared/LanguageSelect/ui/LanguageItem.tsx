import type { SelectItemProps } from "@radix-ui/react-select";
import type { FC, RefObject } from "react";

import { FlagIcon } from "@/shared/FlagIcon/FlagIcon";
import { cn } from "@/utils/cn";
import { Item, ItemText } from "@radix-ui/react-select";

interface LanguageItemProperties extends SelectItemProps {
 flagIconClassName?: string;
 ref?: RefObject<HTMLDivElement | null>;
}

export const LanguageItem: FC<LanguageItemProperties> = (properties) => {
 const { children, className, flagIconClassName, ref, value, ...otherProperties } = properties;

 return (
  <Item className={cn(className)} ref={ref} value={value} {...otherProperties}>
   <FlagIcon className={flagIconClassName} code={value} />
   <ItemText>{children}</ItemText>
  </Item>
 );
};
