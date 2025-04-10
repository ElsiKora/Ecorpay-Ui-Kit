import type { FC, ReactNode } from "react";

import { cn } from "@/utils/cn";

export interface InputProperties extends React.InputHTMLAttributes<HTMLInputElement> {
 align?: "center" | "left";
 className?: string;
 errorMsg?: string;
 inputFieldClassName?: string;
 isError?: boolean;
 label?: string;
 leftContent?: ReactNode;
 rightContent?: ReactNode;
 type?: "email" | "number" | "password" | "search" | "text";
}

export const Input: FC<InputProperties> = (properties) => {
 const {
  align,
  className,
  disabled,
  errorMsg,
  inputFieldClassName,
  isError,
  label,
  leftContent,
  rightContent,
  type = "text",
  ...otherProperties
 } = properties;

 return (
  <label
   className={cn(
    "relative flex flex-col gap-5px mob:p-15px tablet:p-5 mob:rounded-[15px] tablet:rounded-[20px] cursor-text transition-colors border-2",
    {
     "border-black-100 hover:border-accent focus-within:border-accent": !isError,
     "border-red-400": isError,
     "cursor-default bg-black-100 pointer-events-none": disabled,
     "justify-center text-center": align === "center",
    },
    className,
   )}>
   {/* Label text */}
   {label ? (
    <span className="font-medium text-black-300 mob:text-xxs tablet:text-sm">{label}</span>
   ) : null}

   {/* Inpfur field container */}
   <div className="flex gap-[5px] mob:text-xs tablet:text-base">
    {leftContent}
    <input
     className={cn(
      "outline-none flex-1 text-black placeholder:text-black-300 bg-transparent transition-colors",
      {
       "justify-center text-center placeholder:text-center focus-visible:placeholder:opacity-0":
        align === "center",
       "text-red-400": isError,
      },
      inputFieldClassName,
     )}
     disabled={disabled}
     type={type}
     {...otherProperties}
    />
    {rightContent}
   </div>

   {/* Error msg */}
   <span
    className={cn(
     "absolute -bottom-[5px] translate-y-full text-red-400 opacity-0 transition-opacity",
     {
      "opacity-100": isError,
     },
    )}>
    {errorMsg}
   </span>
  </label>
 );
};
