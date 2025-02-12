import { FC, ReactNode } from 'react';
import * as ScrollAreaBase from '@radix-ui/react-scroll-area';
import { cn } from '@/utils/cn';

export interface ScrollAreaProps extends ScrollAreaBase.ScrollAreaProps {
  children: ReactNode;

  scrollViewportProps?: Omit<ScrollAreaBase.ScrollAreaViewportProps, 'className'>;
  scrollThumbProps?: Omit<ScrollAreaBase.ScrollAreaThumbProps, 'className'>;
  scrollbarProps?: Omit<ScrollAreaBase.ScrollAreaScrollbarProps, 'className'>;

  scrollViewportClassName?: string;
  scrollThumbClassName?: string;
  scrollbarClassName?: string;
}

export const ScrollArea: FC<ScrollAreaProps> = (props) => {
  const {
    children,
    className,
    type = 'auto',

    scrollViewportProps,
    scrollThumbProps,
    scrollbarProps,

    scrollViewportClassName,
    scrollThumbClassName,
    scrollbarClassName,

    ...otherProps
  } = props;

  return (
    <ScrollAreaBase.Root
      className={cn(
        'scrollRoot flex',
        {
          'flex-col': scrollbarProps?.orientation !== 'horizontal',
        },
        className
      )}
      type={type}
      {...otherProps}
    >
      <ScrollAreaBase.Viewport
        {...scrollViewportProps}
        className={cn('scrollViewport', scrollViewportClassName)}
      >
        {children}
      </ScrollAreaBase.Viewport>

      <ScrollAreaBase.Scrollbar {...scrollbarProps} className={cn('scrollbar', scrollbarClassName)}>
        <ScrollAreaBase.Thumb
          {...scrollThumbProps}
          className={cn('scrollThumb', scrollThumbClassName)}
        />
      </ScrollAreaBase.Scrollbar>
    </ScrollAreaBase.Root>
  );
};
