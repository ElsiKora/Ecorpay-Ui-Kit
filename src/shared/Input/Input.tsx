import type { FC, ReactNode } from "react";

import { cn } from "@/utils/cn";

import s from "./Input.module.scss";

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
    s.label,
    {
     [s.center]: align === "center",
     [s.disabled]: disabled,
     [s.error]: isError,
    },
    className,
   )}>
   {/* Label text */}
   {label ? <span className={s.labelText}>{label}</span> : null}

   {/* Inpfur field container */}
   <div className={s.inputContainer}>
    {leftContent}
    <input
     className={cn(
      s.input,
      {
       [s.center]: align === "center",
       [s.error]: isError,
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
   <span className={s.errorMsg}>{errorMsg}</span>
  </label>
 );
};
