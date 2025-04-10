import type { VariantProps } from "class-variance-authority";
import type { ElementType, FC } from "react";

import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
// import CloseIcon from '@/icons/close.svg';

export const bannerVariants = cva(
 "mob:p-25px tablet:p-40px relative flex flex-col gap-5 rounded-[1.25rem]",
 {
  defaultVariants: {
   variant: "warn",
  },
  variants: {
   variant: {
    danger: "border-2 border-red-400 text-red-400",
    warn: "border-2 border-orange-400 text-orange-400",
   },
  },
 },
);

export interface BannerProperties extends VariantProps<typeof bannerVariants> {
 as?: ElementType;
 asChild?: boolean;

 className?: string;
 description: string;
 titile: string;
}

export const Banner: FC<BannerProperties> = (properties) => {
 const { as = "section", asChild, description, titile, variant } = properties;
 const Comp = asChild ? Slot : as;

 return (
  <Comp className={cn(bannerVariants({ variant }))}>
   <h3 className="mob:text-base tablet:text-xl font-medium">{titile}</h3>
   <p className="mob:text-xs tablet:text-sm text-black">{description}</p>
   {/* <button className="absolute mob:right-15px mob:top-17px tablet:right-5 tablet:top-5">
        <CloseIcon />
      </button> */}
  </Comp>
 );
};
