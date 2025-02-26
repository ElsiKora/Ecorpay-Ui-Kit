import { cn } from '@/utils/cn';
import { FC, ReactNode } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputFieldClassName?: string;
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  align?: 'left' | 'center';
  type?: 'number' | 'text' | 'password' | 'email' | 'search';
}

export const Input: FC<InputProps> = (props) => {
  const {
    className,
    label,
    errorMsg,
    isError,
    disabled,
    leftContent,
    rightContent,
    align,
    type = 'text',
    inputFieldClassName,
    ...otherProps
  } = props;

  return (
    <label
      className={cn(
        'relative flex flex-col gap-5px mob:p-15px tablet:p-5 mob:rounded-[15px] tablet:rounded-[20px] cursor-text transition-colors border-2',
        {
          'justify-center text-center': align === 'center',
          'border-red-400': isError,
          'border-black-100 hover:border-accent focus-within:border-accent': !isError,
          'cursor-default bg-black-100 pointer-events-none': disabled,
        },
        className
      )}
    >
      {/* Label text */}
      {label ? (
        <span className="mob:text-xxs tablet:text-sm text-black-300 font-medium">{label}</span>
      ) : null}

      {/* Inpfur field container */}
      <div className="flex gap-[5px] mob:text-xs tablet:text-base">
        {leftContent}
        <input
          className={cn(
            'outline-none flex-1 text-black placeholder:text-black-300 bg-transparent transition-colors',
            {
              'text-red-400': isError,
              'justify-center text-center placeholder:text-center focus-visible:placeholder:opacity-0':
                align === 'center',
            },
            inputFieldClassName
          )}
          disabled={disabled}
          type={type}
          {...otherProps}
        />
        {rightContent}
      </div>

      {/* Error msg */}
      <span
        className={cn(
          'absolute -bottom-[5px] translate-y-full text-red-400 opacity-0 transition-opacity',
          {
            'opacity-100': isError,
          }
        )}
      >
        {errorMsg}
      </span>
    </label>
  );
};
