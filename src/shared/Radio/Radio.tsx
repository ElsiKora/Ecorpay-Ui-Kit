import type { FC, InputHTMLAttributes } from "react";

import CheckedIcon from "@/icons/radioChecked.svg";
import UncheckedIcon from "@/icons/radioUnchecked.svg";
import { cn } from "@/utils/cn";

import s from "./Radio.module.scss";

export interface RadioProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
 label?: string;
}

export const Radio: FC<RadioProperties> = (properties) => {
 const { disabled, label, ...otherProperties } = properties;

 return (
  <label className={cn(s.label, { [s.disabled]: disabled })}>
   <input className={s.input} disabled={disabled} type="radio" {...otherProperties} />

   <CheckedIcon className={cn(s.checkedIcon, { [s.disabled]: disabled })} />
   <UncheckedIcon className={cn(s.uncheckedIcon, { [s.disabled]: disabled })} />

   {label ? <span className={cn(s.labelText, { [s.disabled]: disabled })}>{label}</span> : null}
  </label>
 );
};
