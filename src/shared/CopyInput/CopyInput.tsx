import type { CopyButtonProperties } from "@/shared/CopyButton/CopyButton";
import type { InputProperties } from "@/shared/Input/Input";
import type { FC } from "react";

import IconCopy from "@/icons/copy.svg";
import IconCopyDone from "@/icons/copyDone.svg";
import { CopyButton } from "@/shared/CopyButton/CopyButton";
import { Input } from "@/shared/Input/Input";
import { cn } from "@/utils/cn";
import { useState } from "react";

export interface CopyInputProperties
 extends Pick<
   CopyButtonProperties,
   "copiedIconClassName" | "copiedStateHideDelay" | "copyIconClassName" | "valueToCopy"
  >,
  Pick<InputProperties, "label" | "leftContent"> {
 className?: string;
 disabled?: boolean;
}

export const CopyInput: FC<CopyInputProperties> = (properties) => {
 const {
  className,
  copiedIconClassName,
  copiedStateHideDelay,
  copyIconClassName,
  disabled,
  label,
  leftContent,
  valueToCopy,
 } = properties;

 const [isCopied, setIsCopied] = useState(false);

 return (
  <CopyButton
   className={cn("text-left", className)}
   copiedStateHideDelay={copiedStateHideDelay}
   copyHandler={setIsCopied}
   disabled={disabled}
   valueToCopy={valueToCopy}
   variant="clear"
   withIcon={false}>
   <Input
    className="cursor-pointer focus-within:border-black-100 hover:border-black-100 hover:bg-accent-100"
    disabled={disabled}
    inputFieldClassName="cursor-pointer"
    label={label}
    leftContent={leftContent}
    readOnly
    rightContent={
     isCopied ? (
      <IconCopyDone
       className={cn(
        "transition-colors",
        { "group-hover:text-black-300": isCopied },
        copiedIconClassName,
       )}
      />
     ) : (
      <IconCopy className={copyIconClassName} />
     )
    }
    value={valueToCopy}
   />
  </CopyButton>
 );
};
