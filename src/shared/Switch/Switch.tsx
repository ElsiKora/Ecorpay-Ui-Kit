import type { FC, ReactNode } from "react";

import { cn } from "@/utils/cn";

import s from "./Switch.module.scss";

export interface SwitchProperties
 extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
 children?: ReactNode;
}

const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
 if (event.key === " " || event.key === "Enter") {
  event.preventDefault();
  (event.target as HTMLSpanElement).click();
 }
};

const SwitchThumb: FC<Omit<SwitchProperties, "children">> = (properties) => {
 const { className, disabled, ...otherProperties } = properties;

 return (
  <label className={cn(s.label, className)}>
   <input className={s.input} disabled={disabled} type="checkbox" {...otherProperties} />
   <span
    aria-checked={otherProperties.checked}
    className={cn(s.thumb, { [s.disabled]: disabled })}
    onKeyDown={handleKeyDown}
    role="switch"
    tabIndex={0}
   />
  </label>
 );
};

export const Switch: FC<SwitchProperties> = (properties) => {
 const { children, className, disabled, ...otherProperties } = properties;

 return children ? (
  <div className={cn(s.switcher, { [s.disabled]: disabled }, className)}>
   {children}
   <SwitchThumb disabled={disabled} {...otherProperties} />
  </div>
 ) : (
  <SwitchThumb {...properties} />
 );
};
