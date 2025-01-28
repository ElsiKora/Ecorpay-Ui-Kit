import { FC } from 'react';
import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  Trigger,
} from '@radix-ui/react-accordion';
import { cn } from '@/utils/cn';
import { useAccordionContext } from './hooks/useAccordionContext';
import ShevronIcon from '@/icons/shevron.svg';

export const AccordionTrigger: FC<RadixAccordionTriggerProps> = (props) => {
  const { className, children, ...otherProps } = props;
  const { variant } = useAccordionContext();

  return (
    <Trigger
      className={cn(
        'font-medium mob:text-xs rounded-2xl tablet:text-base mob:p-15px tablet:p-5 data-[state=open]:text-accent w-full flex items-center justify-between transition-colors outline-none',
        {
          'focus-visible:bg-accent-200': variant == 'filled',
          'focus-visible:bg-accent-100': variant == 'outline',
        },
        className
      )}
      {...otherProps}
    >
      {children}
      {variant === 'filled' ? (
        <span className="relative  w-[12px] h-[12px]">
          {/* Vertical Line */}
          <span className="absolute left-[50%] -translate-x-[50%] h-[12px] w-[2px] rounded-[15px] bg-accent block group-data-[state=open]:rotate-90 transition-transform"></span>

          {/* Horizontal Line */}
          <span
            className={cn(
              'absolute top-[50%] -translate-y-[50%] h-[2px] w-[12px] rounded-[15px] bg-accent block group-data-[state=open]:opacity-0 transition-opacity'
            )}
          ></span>
        </span>
      ) : null}

      {variant === 'outline' ? (
        <ShevronIcon className="text-accent group-data-[state=open]:rotate-180 transition-transform" />
      ) : null}
    </Trigger>
  );
};
