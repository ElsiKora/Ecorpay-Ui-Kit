import type { FC } from "react";

import IconLoader from "@/icons/loader.svg";
import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
 "disabled:bg-black-100 disabled:text-black-300 font-medium transition-all",
 {
  defaultVariants: {
   variant: "primary-m",
  },
  variants: {
   variant: {
    //   Clear variant
    clear: "",
    //   Gray variants
    "gray-l":
     "bg-black-100 px-30px py-15px hover:bg-black-200 mob:rounded-[0.9375rem] mob:text-sm tablet:rounded-[1.25rem] tablet:text-base text-black",

    "gray-m":
     "bg-black-100 py-10px hover:bg-black-200 mob:px-15px mob:text-xs tablet:px-20px tablet:text-sm rounded-[1.25rem] text-black",

    "outline-gray-s":
     "border-black-100 text-black-300 hover:border-accent hover:text-accent mob:px-10px mob:py-7px mob:text-xxs tablet:px-15px tablet:py-10px tablet:text-xs rounded-[1.25rem] border-2",
    // Outline variants
    "outline-primary-s":
     "border-accent text-accent mob:px-10px mob:py-7px mob:text-xxs tablet:px-15px tablet:py-10px tablet:text-xs rounded-[1.25rem] border-2",

    // Primary variants
    "primary-l":
     "bg-accent px-30px py-15px hover:bg-accent-500 mob:rounded-[0.9375rem] mob:text-sm tablet:rounded-[1.25rem] tablet:text-base text-white",
    "primary-m":
     "bg-accent py-10px hover:bg-accent-500 mob:px-15px mob:text-xs tablet:px-20px tablet:text-sm rounded-[1.25rem] text-white",

    // Red variants
    "red-l":
     "px-30px py-15px hover:text-red mob:rounded-[0.9375rem] mob:text-sm tablet:rounded-[1.25rem] tablet:text-base bg-red-200 text-red-400 hover:bg-red-300",

    // Secondary variants
    "secondary-l":
     "bg-accent-100 px-30px py-15px text-accent hover:bg-accent-200 mob:rounded-[0.9375rem] mob:text-sm tablet:rounded-[1.25rem] tablet:text-base",
    "secondary-m":
     "bg-accent-100 py-10px text-accent hover:bg-accent-200 mob:px-15px mob:text-xs tablet:px-20px tablet:text-sm rounded-[1.25rem]",

    // Text variants
    "text-l":
     "px-30px py-15px mob:rounded-[0.9375rem] mob:border-2 mob:border-black-100 mob:text-sm mob:text-black mob:hover:border-accent-100 mob:hover:bg-accent-100 tablet:rounded-[1.25rem] tablet:border-none tablet:text-base tablet:text-black-300 tablet:hover:text-accent bg-transparent",

    // White variants
    "white-m":
     "py-10px mob:px-15px mob:text-xs tablet:px-20px tablet:text-sm rounded-[1.25rem] bg-white text-black hover:bg-black hover:text-white",
   },
  },
 },
);

export interface ButtonProperties
 extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
 asChild?: boolean;
 loading?: boolean;
}

export const Button: FC<ButtonProperties> = (properties) => {
 const { asChild, children, className, loading, variant, ...otherProperties } = properties;

 const Comp = asChild ? Slot : "button";

 return (
  <Comp
   className={cn(buttonVariants({ variant }), className, { relative: loading })}
   {...otherProperties}>
   {loading ? (
    <>
     <span className="opacity-0">{children}</span>
     <IconLoader className="size-20px absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </>
   ) : (
    children
   )}
  </Comp>
 );
};
