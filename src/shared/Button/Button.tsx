import { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import IconLoader from '@/icons/loader.svg';

const buttonVariants = cva(
  'disabled:bg-black-100 disabled:text-black-300 transition-all font-medium',
  {
    variants: {
      variant: {
        // Primary variants
        'primary-l':
          'bg-accent text-white hover:bg-accent-500 mob:text-sm tablet:text-base py-15px px-30px mob:rounded-[0.9375rem] tablet:rounded-[1.25rem]',
        'primary-m':
          'bg-accent text-white hover:bg-accent-500 mob:text-xs tablet:text-sm py-10px mob:px-15px tablet:px-20px rounded-[1.25rem]',

        // Red variants
        'red-l':
          'bg-red-200 text-red-400 hover:bg-red-300 hover:text-red mob:text-sm tablet:text-base py-15px px-30px mob:rounded-[0.9375rem] tablet:rounded-[1.25rem]',

        //   Gray variants
        'gray-l':
          'bg-black-100 text-black hover:bg-black-200 mob:text-sm tablet:text-base py-15px px-30px mob:rounded-[0.9375rem] tablet:rounded-[1.25rem]',
        'gray-m':
          'bg-black-100 text-black hover:bg-black-200 mob:text-xs tablet:text-sm py-10px mob:px-15px tablet:px-20px rounded-[1.25rem]',

        // Secondary variants
        'secondary-l':
          'bg-accent-100 text-accent hover:bg-accent-200 mob:text-sm tablet:text-base py-15px px-30px mob:rounded-[0.9375rem] tablet:rounded-[1.25rem]',
        'secondary-m':
          'bg-accent-100 text-accent hover:bg-accent-200 mob:text-xs tablet:text-sm py-10px mob:px-15px tablet:px-20px rounded-[1.25rem]',

        // White variants
        'white-m':
          'bg-white text-black hover:bg-black hover:text-white mob:text-xs tablet:text-sm py-10px mob:px-15px tablet:px-20px rounded-[1.25rem]',

        // Outline variants
        'outline-primary-s':
          'border-2 border-accent text-accent mob:text-xxs tablet:text-xs mob:py-7px mob:px-10px tablet:py-10px tablet:px-15px rounded-[1.25rem]',
        'outline-gray-s':
          'border-2 border-black-100 text-black-300 hover:border-accent hover:text-accent mob:text-xxs tablet:text-xs mob:py-7px mob:px-10px tablet:py-10px tablet:px-15px rounded-[1.25rem]',

        // Text variants
        'text-l':
          'bg-transparent mob:text-black tablet:text-black-300 mob:hover:border-accent-100 mob:hover:bg-accent-100 tablet:hover:text-accent mob:border-2 tablet:border-none mob:border-black-100 mob:text-sm tablet:text-base py-15px px-30px mob:rounded-[0.9375rem] tablet:rounded-[1.25rem]',

        //   Clear variant
        clear: '',
      },
    },
    defaultVariants: {
      variant: 'primary-m',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { variant, className, asChild, loading, children, ...otherProps } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={cn(buttonVariants({ variant }), className)} {...otherProps}>
      {loading ? (
        <>
          <span className="opacity-0">{children}</span>
          <IconLoader className="w-20px h-20px absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </>
      ) : (
        children
      )}
    </Comp>
  );
};
