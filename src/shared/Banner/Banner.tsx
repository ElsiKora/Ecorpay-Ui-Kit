import type { VariantProps } from "class-variance-authority";
import type { ElementType, FC } from "react";

import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// import CloseIcon from '@/icons/close.svg';
import s from "./Banner.module.scss";

export const bannerVariants = cva(s.banner, {
 defaultVariants: {
  variant: "warn",
 },
 variants: {
  variant: {
   danger: s.danger,
   warn: s.warn,
  },
 },
});

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
   <h3 className={s.title}>{titile}</h3>
   <p className={s.description}>{description}</p>
   {/* <button className="absolute mob:right-15px mob:top-17px tablet:right-5 tablet:top-5">
        <CloseIcon />
      </button> */}
  </Comp>
 );
};
