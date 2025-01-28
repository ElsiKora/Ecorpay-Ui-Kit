import { AccordionContent } from './AccordionContent';
import { AccordionTrigger } from './AccordionTrigger';
import * as AccordionBase from '@radix-ui/react-accordion';
import { FC, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { useAccordionContext } from '@/shared/Accordion/hooks/useAccordionContext';

export interface AccordionItemProps extends AccordionBase.AccordionItemProps {
  triggerText: string;
  children: string | ReactNode;

  triggerProps?: AccordionBase.AccordionTriggerProps;
  contentProps?: AccordionBase.AccordionContentProps;
}

export const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { triggerText, triggerProps, contentProps, children, className, ...otherProps } = props;
  const { variant } = useAccordionContext();

  return (
    <AccordionBase.Item
      className={cn(
        'group rounded-2xl transition-colors',
        {
          'bg-accent-100 data-[state=closed]:hover:bg-accent-200': variant === 'filled',
          'border-2 border-black-100 data-[state=closed]:hover:border-accent':
            variant === 'outline',
        },
        className
      )}
      {...otherProps}
    >
      <AccordionTrigger {...triggerProps}>{triggerText}</AccordionTrigger>
      <AccordionContent {...contentProps}>{children}</AccordionContent>
    </AccordionBase.Item>
  );
};
