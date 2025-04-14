import type { VariantProps } from "class-variance-authority";
import type { ElementType, FC } from "react";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

import s from "./Skeleton.module.scss";

export const skeletonVariants = cva(s.skeleton, {
 defaultVariants: {
  rounded: "default",
 },
 variants: {
  rounded: {
   default: s.rounded_default,
   full: s.rounded_full,
  },
 },
});

export interface SkeletonProperties extends VariantProps<typeof skeletonVariants> {
 as?: ElementType;
 className?: string;
}

export const Skeleton: FC<SkeletonProperties> = (properties) => {
 const { as = "span", className, rounded } = properties;

 const Comp = as;

 return <Comp className={cn(skeletonVariants({ rounded }), className)} />;
};
