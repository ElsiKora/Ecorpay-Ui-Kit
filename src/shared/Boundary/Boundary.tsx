import { FC } from 'react';

import BoundaryIcon from '@/icons/boundary.svg';
import { cn } from '@/utils/cn';
import * as AccordionBase from '@radix-ui/react-accordion';
import ShevronIcon from '@/icons/shevron.svg';
import { CopyButton } from '@/shared/CopyButton/CopyButton';
import { cva, VariantProps } from 'class-variance-authority';

const boundaryVariants = cva('mob:gap-20px tablet:gap-30px mob:p-15px tablet:p-30px bg-white', {
  variants: {
    size: {
      compact: 'flex flex-col',
      full: 'mob:flex mob:flex-col tablet:grid tablet:grid-cols-[auto_minmax(450px,_1fr)]',
    },
  },
  defaultVariants: {
    size: 'compact',
  },
});

interface CommonBoundaryProps extends VariantProps<typeof boundaryVariants> {
  className?: string;
  title: string;
  description: string;
}

type ErrorText = {
  [key: string]: string | number | ErrorText;
};

interface WithErrorProps {
  errorTitle: string;
  errorText: ErrorText;
}

interface WithoutErrorProps {
  errorTitle?: never;
  errorText?: never;
}

export type BoundaryProps = CommonBoundaryProps & (WithErrorProps | WithoutErrorProps);

export const Boundary: FC<BoundaryProps> = (props) => {
  const { className, title, description, errorText, errorTitle, size = 'compact' } = props;

  return (
    <section className={cn(boundaryVariants({ size }), className)}>
      <BoundaryIcon
        className={cn('', {
          'w-49px h-56px self-center': size === 'full',
          'mob:w-49px mob:h-56px tablet:w-81px tablet:h-92px': size === 'compact',
        })}
      />

      <div className="flex flex-col mob:gap-5px tablet:gap-10px">
        <h2 className="tablet:text-xl mob:text-base">{title}</h2>
        <p className="text-black-300 mob:text-xs tablet:text-base">{description}</p>
      </div>

      <AccordionBase.Root type="single" className="col-span-full" collapsible>
        <AccordionBase.Item
          className="group rounded-2xl transition-colors bg-accent-100 data-[state=closed]:hover:bg-accent-200"
          value="error"
        >
          <AccordionBase.Trigger
            className={cn(
              'font-medium mob:text-xs rounded-2xl tablet:text-base mob:p-15px tablet:p-5 text-accent w-full flex items-center gap-8px transition-colors outline-none focus-visible:bg-accent-200'
            )}
          >
            {errorTitle}

            <ShevronIcon className="text-accent group-data-[state=open]:rotate-180 transition-transform" />
          </AccordionBase.Trigger>
          <AccordionBase.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="flex mob:pr-15px mob:pb-15px mob:pl-15px tablet:pl-5 tablet:pb-5 tablet:pr-5 mob:pt-5px tablet:pt-0 mob:text-xs tablet:text-sm">
              <pre className="flex-1 text-wrap text-black-300">
                {JSON.stringify(errorText, null, 2)}
              </pre>
              <CopyButton className="self-end" valueToCopy={JSON.stringify(errorText, null, 2)} />
            </div>
          </AccordionBase.Content>
        </AccordionBase.Item>
      </AccordionBase.Root>
    </section>
  );
};
