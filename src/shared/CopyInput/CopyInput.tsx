import { CopyButton, CopyButtonProps } from '@/shared/CopyButton/CopyButton';
import { Input, InputProps } from '@/shared/Input/Input';
import { FC, useState } from 'react';
import IconCopy from '@/icons/copy.svg';
import IconCopyDone from '@/icons/copyDone.svg';
import { cn } from '@/utils/cn';

export interface CopyInputProps
  extends Pick<
      CopyButtonProps,
      'valueToCopy' | 'copiedStateHideDelay' | 'copyIconClassName' | 'copiedIconClassName'
    >,
    Pick<InputProps, 'label' | 'leftContent'> {
  className?: string;
  disabled?: boolean;
}
export const CopyInput: FC<CopyInputProps> = (props) => {
  const {
    valueToCopy,
    className,
    label,
    leftContent,
    copiedStateHideDelay,
    copiedIconClassName,
    copyIconClassName,
    disabled,
  } = props;

  const [isCopied, setIsCopied] = useState(false);

  return (
    <CopyButton
      className={cn('text-left', className)}
      valueToCopy={valueToCopy}
      withIcon={false}
      variant="clear"
      copyHandler={setIsCopied}
      copiedStateHideDelay={copiedStateHideDelay}
      disabled={disabled}
    >
      <Input
        className="cursor-pointer hover:bg-accent-100 hover:border-black-100 focus-within:border-black-100"
        inputFieldClassName="cursor-pointer"
        readOnly
        label={label}
        value={valueToCopy}
        leftContent={leftContent}
        disabled={disabled}
        rightContent={
          isCopied ? (
            <IconCopyDone
              className={cn(
                'transition-colors',
                { 'group-hover:text-black-300': isCopied },
                copiedIconClassName
              )}
            />
          ) : (
            <IconCopy className={copyIconClassName} />
          )
        }
      />
    </CopyButton>
  );
};
