import type { FC, ReactNode } from "react";

import { cn } from "@/utils/cn";

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
  <label className={cn("relative", className)}>
   <input
    className="peer size-0 opacity-0"
    disabled={disabled}
    type="checkbox"
    {...otherProperties}
   />
   <span
    aria-checked={otherProperties.checked}
    className={cn(
     "mob:w-30px mob:h-16px tablet:w-46px tablet:h-24px inline-block relative cursor-pointer rounded-[1.25rem] bg-accent-300 peer-checked:bg-accent mob:peer-checked:before:translate-x-[14px] tablet:peer-checked:before:translate-x-[22px] before:rounded-full transition-all before:absolute before:content-[''] mob:before:h-[14px] mob:before:w-[14px] tablet:before:h-5 tablet:before:w-5 mob:before:left-[1px] mob:before:bottom-[1px] tablet:before:left-[2px] tablet:before:bottom-[2px] before:bg-white before:transition-all",
     { "bg-black-300 cursor-default": disabled },
    )}
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
  <div
   className={cn(
    "flex items-center justify-between mob:text-xs tablet:text-base text-black font-medium mob:p-15px tablet:p-5 bg-accent-100 rounded-[1.25rem]",
    {
     "bg-black-100 text-black-300": disabled,
    },
    className,
   )}>
   {children}
   <SwitchThumb disabled={disabled} {...otherProperties} />
  </div>
 ) : (
  <SwitchThumb {...properties} />
 );
};
