import { createContext } from 'react';
import { VariantProps } from 'class-variance-authority';
import { accordionVariants } from '../Accordion';

export interface AccordionContextProps {
  variant: VariantProps<typeof accordionVariants>['variant'];
}

const initialState: AccordionContextProps = {
  variant: 'clear',
};

export const AccordionContext = createContext<AccordionContextProps>(initialState);
