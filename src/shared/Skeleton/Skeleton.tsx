import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { ElementType, FC } from 'react';

export const skeletonVariants = cva('block animate-pulse bg-black-100', {
  variants: {
    rounded: {
      default: 'rounded-[1.25rem]',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    rounded: 'default',
  },
});

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  className?: string;
  as?: ElementType;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { as = 'span', className, rounded } = props;

  const Comp = as;

  return <Comp className={cn(skeletonVariants({ rounded }), className)} />;
};
