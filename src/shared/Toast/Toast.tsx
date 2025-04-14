import type { VariantProps } from "class-variance-authority";
import type { FC } from "react";

import CancelIcon from "@/icons/cancel.svg";
import CloseIcon from "@/icons/close.svg";
import WarnIcon from "@/icons/warn.svg";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

import s from "./Toast.module.scss";

const toastVariants = cva(s.toast, {
 defaultVariants: {
  variant: "default",
 },
 variants: {
  variant: {
   danger: s.danger,
   default: s.base,
   primary: s.primary,
   warn: s.warn,
  },
 },
});

export interface ToastProperties extends VariantProps<typeof toastVariants> {
 className?: string;

 description: string;
 onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
 withIcon?: boolean;
}

export const Toast: FC<ToastProperties> = (properties) => {
 const { className, description, onClose, variant, withIcon } = properties;

 const renderIcon = () => {
  return (
   <>
    {variant === "danger" && <CancelIcon className={s.icon} />}
    {variant === "warn" && <WarnIcon className={cn(s.icon, s.warn)} />}
    {variant === "default" && <WarnIcon className={cn(s.icon, s.base)} />}
   </>
  );
 };

 return (
  <div className={cn(toastVariants({ variant }), className)}>
   {withIcon ? renderIcon() : null}

   <p>{description}</p>

   {onClose ? (
    <button
     className={s.close}
     onClick={(event) => {
      onClose?.(event);
     }}
     type="button">
     <CloseIcon />
    </button>
   ) : null}
  </div>
 );
};
