import type { FC, InputHTMLAttributes } from "react";

import CheckedIcon from "@/icons/checkboxChecked.svg";
import UncheckedIcon from "@/icons/checkboxUnchecked.svg";
import { cn } from "@/utils/cn";

import s from "./Checkbox.module.scss";

export interface CheckboxProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
 label?: string;
}

export const Checkbox: FC<CheckboxProperties> = (properties) => {
 const { disabled, label, ...otherProperties } = properties;

 return (
  <label
   className={cn(s.label, {
    [s.disabled]: disabled,
   })}>
   <input className={s.input} disabled={disabled} type="checkbox" {...otherProperties} />

   <CheckedIcon className={cn(s.checkedIcon, { [s.disabled]: disabled })} />
   <UncheckedIcon className={cn(s.uncheckedIcon, { [s.disabled]: disabled })} />

   {label ? (
    <span
     className={cn(s.labelText, {
      [s.disabled]: disabled,
     })}>
     {label}
    </span>
   ) : null}
  </label>
 );
};
