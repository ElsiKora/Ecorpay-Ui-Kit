import type { VariantProps } from "class-variance-authority";
import type { FC } from "react";

import BoundaryIcon from "@/icons/boundary.svg";
import ShevronIcon from "@/icons/shevron.svg";
import { CopyButton } from "@/shared/CopyButton/CopyButton";
import { cn } from "@/utils/cn";
import * as AccordionBase from "@radix-ui/react-accordion";
import { cva } from "class-variance-authority";

const boundaryVariants = cva("mob:gap-20px mob:p-15px tablet:gap-30px tablet:p-30px bg-white", {
 defaultVariants: {
  size: "compact",
 },
 variants: {
  size: {
   compact: "flex flex-col",
   full: "mob:flex mob:flex-col tablet:grid tablet:grid-cols-[auto_minmax(450px,1fr)]",
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
    className={cn("", {
     "mob:w-49px mob:h-56px tablet:w-81px tablet:h-92px": size === "compact",
     "w-49px h-56px self-center": size === "full",
    })}
   />

   <div className="mob:gap-5px tablet:gap-10px flex flex-col">
    <h2 className="mob:text-base tablet:text-xl">{title}</h2>
    <p className="text-black-300 mob:text-xs tablet:text-base">{description}</p>
   </div>

   <AccordionBase.Root className="col-span-full" collapsible type="single">
    <AccordionBase.Item
     className="bg-accent-100 data-[state=closed]:hover:bg-accent-200 group rounded-2xl transition-colors"
     value="error">
     <AccordionBase.Trigger
      className={cn(
       "font-medium mob:text-xs rounded-2xl tablet:text-base mob:p-15px tablet:p-5 text-accent w-full flex items-center gap-8px transition-colors outline-hidden focus-visible:bg-accent-200",
      )}>
      {errorTitle}

      <ShevronIcon className="text-accent transition-transform group-data-[state=open]:rotate-180" />
     </AccordionBase.Trigger>
     <AccordionBase.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
      <div className="mob:px-15px mob:pb-15px mob:pt-5px mob:text-xs tablet:px-5 tablet:pb-5 tablet:pt-0 tablet:text-sm flex">
       <pre className="text-black-300 flex-1 text-wrap">{JSON.stringify(errorText, null, 2)}</pre>
       <CopyButton className="self-end" valueToCopy={JSON.stringify(errorText, null, 2)} />
      </div>
     </AccordionBase.Content>
    </AccordionBase.Item>
   </AccordionBase.Root>
  </section>
 );
};
