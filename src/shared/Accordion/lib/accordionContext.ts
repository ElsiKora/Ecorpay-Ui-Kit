import type { VariantProps } from "class-variance-authority";

import type { accordionVariants } from "../ui/Accordion";

import { createContext } from "react";

export interface AccordionContextProperties {
 variant: VariantProps<typeof accordionVariants>["variant"];
}

const initialState: AccordionContextProperties = {
 variant: "clear",
};

export const AccordionContext = createContext<AccordionContextProperties>(initialState);
