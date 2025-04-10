import type { VariantProps } from "class-variance-authority";
import type { FC, ReactNode } from "react";

import IconCopy from "@/icons/copy.svg";
import IconCopyDone from "@/icons/copyDone.svg";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";

const copyButtonVariants = cva("group disabled:text-black-300", {
 defaultVariants: {
  variant: "text-m",
 },
 variants: {
  variant: {
   clear: "",
   "input-m": "",
   "text-m": "flex items-center gap-5px font-medium transition-colors mob:text-xs tablet:text-sm",
   "text-m-reversed":
    "flex flex-row-reverse items-center gap-5px font-medium transition-colors mob:text-xs tablet:text-sm",
  },
 },
});

export interface CopyButtonProperties
 extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof copyButtonVariants> {
 children?: ReactNode;
 copiedIconClassName?: string;
 copiedStateHideDelay?: number;
 copyHandler?: (isCopied: boolean) => void;
 copyIconClassName?: string;
 valueToCopy: string;
 withIcon?: boolean;
}

export const CopyButton: FC<CopyButtonProperties> = (properties) => {
 const {
  children,
  className,
  copiedIconClassName,
  copiedStateHideDelay = 3000,
  copyHandler,
  copyIconClassName,
  onClick,
  valueToCopy,
  variant = "text-m",
  withIcon = true,
  ...otherProperties
 } = properties;

 const [isCopied, setIsCopied] = useState(false);
 const timeoutReference = useRef<NodeJS.Timeout>(null);

 useEffect(() => {
  if (copyHandler) copyHandler(isCopied);
 }, [isCopied, copyHandler]);

 const handleCopy = () => {
  navigator.clipboard.writeText(valueToCopy).then(() => {
   setIsCopied(true);

   if (timeoutReference.current) {
    clearTimeout(timeoutReference.current);
   }

   timeoutReference.current = setTimeout(() => {
    setIsCopied(false);
    timeoutReference.current = null;
   }, copiedStateHideDelay);
  });
 };

 const renderIcon = () => {
  if (withIcon) {
   if (isCopied)
    return (
     <IconCopyDone
      className={cn(
       "transition-colors",
       { "group-hover:text-black": isCopied },
       copiedIconClassName,
      )}
     />
    );
   else return <IconCopy className={copyIconClassName} />;
  } else return null;
 };

 return (
  <button
   className={cn(
    copyButtonVariants({ variant }),
    {
     "text-accent hover:text-accent-500": !isCopied,
     "text-black-300": isCopied,
    },
    className,
   )}
   onClick={(event) => {
    handleCopy();

    if (onClick) onClick(event);
   }}
   type="button"
   {...otherProperties}>
   {children}
   {renderIcon()}
  </button>
 );
};
