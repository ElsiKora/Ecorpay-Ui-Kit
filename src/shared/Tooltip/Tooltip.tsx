import type { FC, ReactNode } from "react";

import ExclamationIcon from "@/icons/exclamation.svg";
import QuestionIcon from "@/icons/question.svg";
import { cn } from "@/utils/cn";
import * as TooltipBase from "@radix-ui/react-tooltip";

import s from "./Tooltip.module.scss";

export interface TooltipProperties {
 children: ReactNode;

 contentClassName?: string;

 contentProps?: Omit<TooltipBase.TooltipContentProps, "asChild" | "children" | "className">;
 portalProps?: Omit<TooltipBase.TooltipPortalProps, "children">;

 rootProps?: Omit<TooltipBase.TooltipProps, "children">;
 triggerClassName?: string;
 triggerType?: "exclamation" | "question";
}

export const Tooltip: FC<TooltipProperties> = (properties) => {
 const {
  children,
  contentClassName,
  contentProps,
  portalProps,
  rootProps,
  triggerClassName,
  triggerType = "question",
 } = properties;

 return (
  <TooltipBase.Provider>
   <TooltipBase.Root delayDuration={rootProps?.delayDuration ?? 400} {...rootProps}>
    <TooltipBase.Trigger asChild className={triggerClassName}>
     <button type="button">
      {triggerType === "question" && <QuestionIcon />}
      {triggerType === "exclamation" && <ExclamationIcon />}
     </button>
    </TooltipBase.Trigger>
    <TooltipBase.Portal {...portalProps}>
     <TooltipBase.Content
      asChild
      className={cn(s.content, contentClassName)}
      sideOffset={contentProps?.sideOffset ?? 5}
      {...contentProps}>
      {typeof children === "string" ? <div>{children}</div> : children}
     </TooltipBase.Content>
    </TooltipBase.Portal>
   </TooltipBase.Root>
  </TooltipBase.Provider>
 );
};
