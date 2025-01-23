import { FC } from 'react';
import CloseIcon from '@/icons/close.svg';
import CancelIcon from '@/icons/cancel.svg';
import WarnIcon from '@/icons/warn.svg';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const toastVariants = cva(
  'mob:p-15px tablet:p-5 mob:text-xs tablet:text-sm mob:rounded-[0.9375rem] tablet:rounded-[1.25rem] flex items-center gap-7px',
  {
    variants: {
      variant: {
        warn: 'border-2 border-orange-300 bg-orange-100 text-orange-400',
        danger: 'border-2 border-red-300 bg-red-100 text-red-400',
        default: 'border-2 border-black-100 bg-white text-black',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ToastProps extends VariantProps<typeof toastVariants> {
  description: string;

  className?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Toast: FC<ToastProps> = (props) => {
  const { className, variant, description, onClose } = props;

  return (
    <div className={cn(toastVariants({ variant }), className)}>
      {variant === 'danger' && <CancelIcon className="shrink-0" />}
      {variant === 'warn' && <WarnIcon className="text-orange-300 shrink-0" />}
      {!variant && <WarnIcon className="text-black shrink-0" />}

      <p>{description}</p>

      <button className="ml-auto" onClick={(e) => onClose?.(e)}>
        <CloseIcon />
      </button>
    </div>
  );
};
