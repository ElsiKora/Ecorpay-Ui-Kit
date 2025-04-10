import type { VariantProps } from "class-variance-authority";
import type { ElementType, FC } from "react";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

export const skeletonVariants = cva("block animate-pulse bg-black-100", {
 defaultVariants: {
  rounded: "default",
 },
 variants: {
  rounded: {
   default: "rounded-[1.25rem]",
   full: "rounded-full",
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
