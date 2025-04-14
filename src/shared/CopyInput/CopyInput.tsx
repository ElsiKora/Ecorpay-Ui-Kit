import type { CopyButtonProperties } from "@/shared/CopyButton/CopyButton";
import type { InputProperties } from "@/shared/Input/Input";
import type { FC } from "react";

import IconCopy from "@/icons/copy.svg";
import IconCopyDone from "@/icons/copyDone.svg";
import { CopyButton } from "@/shared/CopyButton/CopyButton";
import { Input } from "@/shared/Input/Input";
import { cn } from "@/utils/cn";
import { useState } from "react";

import s from "./CopyInput.module.scss";

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
   className={cn(s.button, { [s.copied]: isCopied }, className)}
   copiedStateHideDelay={copiedStateHideDelay}
   copyHandler={setIsCopied}
   disabled={disabled}
   valueToCopy={valueToCopy}
   variant="clear"
   withIcon={false}>
   <Input
    className={s.input}
    disabled={disabled}
    inputFieldClassName="cursor-pointer"
    label={label}
    leftContent={leftContent}
    readOnly
    rightContent={
     isCopied ? (
      <IconCopyDone className={cn(s.copiedIcon, copiedIconClassName)} />
     ) : (
      <IconCopy className={copyIconClassName} />
     )
    }
    value={valueToCopy}
   />
  </CopyButton>
 );
};
