import { FC } from 'react';
import {
  AccordionContentProps as RadixAccordionContentProps,
  Content,
} from '@radix-ui/react-accordion';
import { cn } from '@/utils/cn';
import { useAccordionContext } from './hooks/useAccordionContext';

export const AccordionContent: FC<RadixAccordionContentProps> = (props) => {
  const { className, children, ...otherProps } = props;
  const { variant } = useAccordionContext();

  return (
    <Content
      className={cn(
        'overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...otherProps}
    >
      <div
        className={cn(
          'mob:pr-15px mob:pb-15px mob:pl-15px tablet:pl-5 tablet:pb-5 tablet:pr-5 mob:pt-5px tablet:pt-0 mob:text-xs tablet:text-sm',
          { '': variant == 'filled', '': variant == 'outline' }
        )}
      >
        {children}
      </div>
    </Content>
  );
};
