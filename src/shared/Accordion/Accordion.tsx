import { FC } from 'react';

import * as AccordionBase from '@radix-ui/react-accordion';
import { cva, VariantProps } from 'class-variance-authority';
import { AccordionContext } from './lib/accordionContext';

export const accordionVariants = cva('', {
  variants: {
    variant: {
      clear: '',
      outline: '',
      filled: '',
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
});

export type AccordionProps = VariantProps<typeof accordionVariants> &
  (AccordionBase.AccordionSingleProps | AccordionBase.AccordionMultipleProps);

export const Accordion: FC<AccordionProps> = (props) => {
  const { variant = 'filled', children, ...otherProps } = props;
  return (
    <AccordionContext value={{ variant }}>
      <AccordionBase.Root {...otherProps}>{children}</AccordionBase.Root>
    </AccordionContext>
  );
};
