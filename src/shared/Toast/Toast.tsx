import type { VariantProps } from "class-variance-authority";
import type { FC } from "react";

import CancelIcon from "@/icons/cancel.svg";
import CloseIcon from "@/icons/close.svg";
import WarnIcon from "@/icons/warn.svg";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const toastVariants = cva(
 "flex items-center gap-7px mob:rounded-[0.9375rem] mob:p-15px mob:text-xs tablet:rounded-[1.25rem] tablet:p-5 tablet:text-sm",
 {
  defaultVariants: {
   variant: "default",
  },
  variants: {
   variant: {
    danger: "border-2 border-red-300 bg-red-100 text-red-400",
    default: "border-2 border-black-100 bg-white text-black",
    warn: "border-2 border-orange-300 bg-orange-100 text-orange-400",
   },
  },
 },
);

export interface ToastProperties extends VariantProps<typeof toastVariants> {
 className?: string;

 description: string;
 onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Toast: FC<ToastProperties> = (properties) => {
 const { className, description, onClose, variant } = properties;

 return (
  <div className={cn(toastVariants({ variant }), className)}>
   {variant === "danger" && <CancelIcon className="shrink-0" />}
   {variant === "warn" && <WarnIcon className="shrink-0 text-orange-300" />}
   {!variant && <WarnIcon className="shrink-0 text-black" />}

   <p>{description}</p>

   <button className="ml-auto" onClick={(event) => onClose?.(event)} type="button">
    <CloseIcon />
   </button>
  </div>
 );
};
