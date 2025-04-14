import type { VariantProps } from "class-variance-authority";

import type { AccordionContextProperties } from "../lib/accordionContext";

import * as AccordionBase from "@radix-ui/react-accordion";
import { cva } from "class-variance-authority";
import { type FC, useMemo } from "react";

import { AccordionContext } from "../lib/accordionContext";

export const accordionVariants = cva("", {
 defaultVariants: {
  variant: "filled",
 },
 variants: {
  variant: {
   clear: "",
   filled: "",
   outline: "",
  },
 },
});

export type AccordionProperties = (
 | AccordionBase.AccordionMultipleProps
 | AccordionBase.AccordionSingleProps
) &
 VariantProps<typeof accordionVariants>;

export const Accordion: FC<AccordionProperties> = (properties) => {
 const { children, variant = "filled", ...otherProperties } = properties;

 const memoVariants = useMemo<AccordionContextProperties>(
  () => ({
   variant,
  }),
  [variant],
 );

 return (
  <AccordionContext value={memoVariants}>
   <AccordionBase.Root {...otherProperties}>{children}</AccordionBase.Root>
  </AccordionContext>
 );
};
