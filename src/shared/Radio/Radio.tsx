import type { FC, InputHTMLAttributes } from "react";

import CheckedIcon from "@/icons/radioChecked.svg";
import UncheckedIcon from "@/icons/radioUnchecked.svg";
import { cn } from "@/utils/cn";

export interface RadioProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
 label?: string;
}

export const Radio: FC<RadioProperties> = (properties) => {
 const { disabled, label, ...otherProperties } = properties;

 return (
  <label
   className={cn("relative flex items-center gap-7px font-normal text-black text-sm", {
    "cursor-default": disabled,
    "cursor-pointer": !disabled,
   })}>
   <input className="peer size-4 opacity-0" disabled={disabled} type="radio" {...otherProperties} />

   <CheckedIcon
    className={cn(
     " outline-1 outline-accent absolute left-0 opacity-0 peer-checked:opacity-100 peer-focus-visible:outline transition-opacity",
     {
      "text-accent": !disabled,
      "text-black-300": disabled,
     },
    )}
   />
   <UncheckedIcon
    className={cn(
     "outline-1 outline-accent absolute left-0 opacity-100 peer-checked:opacity-0 peer-focus-visible:outline transition-opacity",
     {
      "text-accent": !disabled,
      "text-black-300": disabled,
     },
    )}
   />

   {label ? (
    <span
     className={cn({
      "text-black": !disabled,
      "text-black-300": disabled,
     })}>
     {label}
    </span>
   ) : null}
  </label>
 );
};
