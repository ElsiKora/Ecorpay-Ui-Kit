import { FC, ReactNode } from 'react';
import { cn } from '@/utils/cn';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children?: ReactNode;
}

const SwitchThumb: FC<Omit<SwitchProps, 'children'>> = (props) => {
  const { disabled, className, ...otherProps } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      (e.target as HTMLSpanElement).click();
    }
  };

  return (
    <label className={cn('relative', className)}>
      <input
        className="peer opacity-0 w-0 h-0"
        type="checkbox"
        disabled={disabled}
        {...otherProps}
      />
      <span
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="switch"
        className={cn(
          "mob:w-30px mob:h-16px tablet:w-46px tablet:h-24px inline-block relative cursor-pointer rounded-[1.25rem] bg-accent-300 peer-checked:bg-accent mob:peer-checked:before:translate-x-[14px] tablet:peer-checked:before:translate-x-[22px] before:rounded-full transition-all before:absolute before:content-[''] mob:before:h-[14px] mob:before:w-[14px] tablet:before:h-5 tablet:before:w-5 mob:before:left-[1px] mob:before:bottom-[1px] tablet:before:left-[2px] tablet:before:bottom-[2px] before:bg-white before:transition-all",
          { 'bg-black-300 cursor-default': disabled }
        )}
      />
    </label>
  );
};

export const Switch: FC<SwitchProps> = (props) => {
  const { className, children, disabled, ...otherProps } = props;

  return children ? (
    <div
      className={cn(
        'flex items-center justify-between mob:text-xs tablet:text-base text-black font-medium mob:p-15px tablet:p-5 bg-accent-100 rounded-[1.25rem]',
        {
          'bg-black-100 text-black-300': disabled,
        },
        className
      )}
    >
      {children}
      <SwitchThumb disabled={disabled} {...otherProps} />
    </div>
  ) : (
    <SwitchThumb {...props} />
  );
};
