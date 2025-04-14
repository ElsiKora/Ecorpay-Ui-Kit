import type { VariantProps } from "class-variance-authority";
import type { FC } from "react";

import BoundaryIcon from "@/icons/boundary.svg";
import ShevronIcon from "@/icons/shevron.svg";
import { CopyButton } from "@/shared/CopyButton/CopyButton";
import { cn } from "@/utils/cn";
import * as AccordionBase from "@radix-ui/react-accordion";
import { cva } from "class-variance-authority";

import s from "./Boundary.module.scss";

const boundaryVariants = cva(s.boundary, {
 defaultVariants: {
  size: "compact",
 },
 variants: {
  size: {
   compact: s.compact,
   full: s.full,
  },
 },
});

export type BoundaryProperties = CommonBoundaryProperties &
 (WithErrorProperties | WithoutErrorProperties);

interface CommonBoundaryProperties extends VariantProps<typeof boundaryVariants> {
 className?: string;
 description: string;
 title: string;
}

type ErrorText = {
 [key: string]: ErrorText | number | string;
};

interface WithErrorProperties {
 errorText: ErrorText;
 errorTitle: string;
}

interface WithoutErrorProperties {
 errorText?: never;
 errorTitle?: never;
}

export const Boundary: FC<BoundaryProperties> = (properties) => {
 const { className, description, errorText, errorTitle, size = "compact", title } = properties;

 return (
  <section className={cn(boundaryVariants({ size }), className)}>
   <BoundaryIcon
    className={cn(s.icon, {
     [s.compact]: size === "compact",
     [s.full]: size === "full",
    })}
   />

   <div className={s.content}>
    <h2 className={s.title}>{title}</h2>
    <p className={s.description}>{description}</p>
   </div>

   <AccordionBase.Root className={s.accordion} collapsible type="single">
    <AccordionBase.Item className={s.accordionItem} value="error">
     <AccordionBase.Trigger className={s.accordionTrigger}>
      {errorTitle}
      <ShevronIcon className={s.shevron} />
     </AccordionBase.Trigger>
     <AccordionBase.Content className={s.accordionContent}>
      <div className={s.accordionInner}>
       <pre className={s.pre}>{JSON.stringify(errorText, null, 2)}</pre>
       <CopyButton className={s.copyButton} valueToCopy={JSON.stringify(errorText, null, 2)} />
      </div>
     </AccordionBase.Content>
    </AccordionBase.Item>
   </AccordionBase.Root>
  </section>
 );
};
