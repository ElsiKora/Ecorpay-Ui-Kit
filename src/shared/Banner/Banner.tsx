import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { ElementType, FC } from 'react';
// import CloseIcon from '@/icons/close.svg';

export const bannerVariants = cva(
  'relative mob:p-25px tablet:p-40px rounded-[1.25rem] flex flex-col gap-5',
  {
    variants: {
      variant: {
        warn: 'border-2 border-orange-400 text-orange-400',
        danger: 'border-2 border-red-400 text-red-400',
      },
    },
    defaultVariants: {
      variant: 'warn',
    },
  }
);

export interface BannerProps extends VariantProps<typeof bannerVariants> {
  titile: string;
  description: string;

  className?: string;
  asChild?: boolean;
  as?: ElementType;
}
export const Banner: FC<BannerProps> = (props) => {
  const { variant, titile, description, as = 'section', asChild } = props;
  const Comp = asChild ? Slot : as;

  return (
    <Comp className={cn(bannerVariants({ variant }))}>
      <h3 className="font-medium mob:text-base tablet:text-[1.375rem]">{titile}</h3>
      <p className="text-black mob:text-xs tablet:text-sm">{description}</p>
      {/* <button className="absolute mob:right-15px mob:top-17px tablet:right-5 tablet:top-5">
        <CloseIcon />
      </button> */}
    </Comp>
  );
};
