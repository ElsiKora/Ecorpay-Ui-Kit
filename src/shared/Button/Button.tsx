import type { FC } from "react";

import IconLoader from "@/icons/loader.svg";
import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import s from "./Button.module.scss";

const buttonVariants = cva(s.button, {
 defaultVariants: {
  variant: "primary-m",
 },
 variants: {
  variant: {
   //   Clear variant
   clear: "",
   //   Gray variants
   "gray-l": s.gray_l,
   "gray-m": s.gray_m,

   // Outline variants
   "outline-gray-s": s.outline_gray_s,
   "outline-primary-s": s.outline_primary_s,

   // Primary variants
   "primary-l": s.primary_l,
   "primary-m": s.primary_m,

   // Red variants
   "red-l": s.red_l,

   // Secondary variants
   "secondary-l": s.secondary_l,
   "secondary-m": s.secondary_m,

   // Text variants
   "text-l": s.text_l,

   // White variants
   "white-m": s.white_m,
  },
 },
});

export interface ButtonProperties
 extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
 asChild?: boolean;
 loading?: boolean;
}

export const Button: FC<ButtonProperties> = (properties) => {
 const {
  asChild,
  children,
  className,
  loading,
  type = "button",
  variant,
  ...otherProperties
 } = properties;

 const Comp = asChild ? Slot : "button";

 return (
  <Comp
   className={cn(buttonVariants({ variant }), className, { [s.loading]: loading })}
   type={type}
   {...otherProperties}>
   {loading ? (
    <>
     <span className={cn(s.content, { [s.loading]: loading })}>{children}</span>
     <IconLoader className={s.loader} />
    </>
   ) : (
    children
   )}
  </Comp>
 );
};
