import type { FC, ReactNode } from "react";

import ExclamationIcon from "@/icons/exclamation.svg";
import QuestionIcon from "@/icons/question.svg";
import { cn } from "@/utils/cn";
import * as TooltipBase from "@radix-ui/react-tooltip";

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
  <TooltipBase>
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
      className={cn(
       "mob:p-15px tablet:p-5 mob:rounded-[0.9375rem] tablet:rounded-[1.25rem] border-2 border-black-100 bg-white shadow-[0_15px_30px_0px_rgba(3,18,48,0.11)]",
       contentClassName,
      )}
      sideOffset={contentProps?.sideOffset ?? 5}
      {...contentProps}>
      {typeof children === "string" ? <div>{children}</div> : children}
     </TooltipBase.Content>
    </TooltipBase.Portal>
   </TooltipBase.Root>
  </TooltipBase>
 );
};
