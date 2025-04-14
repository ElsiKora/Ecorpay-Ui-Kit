import type { FC, ReactNode } from "react";

import { cn } from "@/utils/cn";
import * as ScrollAreaBase from "@radix-ui/react-scroll-area";

import s from "./ScrollArea.module.scss";

export interface ScrollAreaProperties extends ScrollAreaBase.ScrollAreaProps {
 children: ReactNode;

 scrollbarClassName?: string;
 scrollbarProps?: Omit<ScrollAreaBase.ScrollAreaScrollbarProps, "className">;
 scrollThumbClassName?: string;

 scrollThumbProps?: Omit<ScrollAreaBase.ScrollAreaThumbProps, "className">;
 scrollViewportClassName?: string;
 scrollViewportProps?: Omit<ScrollAreaBase.ScrollAreaViewportProps, "className">;
}

export const ScrollArea: FC<ScrollAreaProperties> = (properties) => {
 const {
  children,
  className,
  scrollbarClassName,

  scrollbarProps,
  scrollThumbClassName,
  scrollThumbProps,

  scrollViewportClassName,
  scrollViewportProps,
  type = "auto",

  ...otherProperties
 } = properties;

 return (
  <ScrollAreaBase.Root
   className={cn(
    s.scrollRoot,
    {
     [s.col]: scrollbarProps?.orientation !== "horizontal",
    },
    className,
   )}
   type={type}
   {...otherProperties}>
   <ScrollAreaBase.Viewport
    {...scrollViewportProps}
    className={cn(s.scrollViewport, scrollViewportClassName)}>
    {children}
   </ScrollAreaBase.Viewport>

   <ScrollAreaBase.Scrollbar {...scrollbarProps} className={cn(s.scrollbar, scrollbarClassName)}>
    <ScrollAreaBase.Thumb
     {...scrollThumbProps}
     className={cn(s.scrollThumb, scrollThumbClassName)}
    />
   </ScrollAreaBase.Scrollbar>
  </ScrollAreaBase.Root>
 );
};
