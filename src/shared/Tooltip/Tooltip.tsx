import { FC, ReactNode } from 'react';
import * as TooltipBase from '@radix-ui/react-tooltip';
import QuestionIcon from '@/icons/question.svg';
import ExclamationIcon from '@/icons/exclamation.svg';
import { cn } from '@/utils/cn';

export interface TooltipProps {
  children: ReactNode;

  triggerType?: 'question' | 'exclamation';

  triggerClassName?: string;
  contentClassName?: string;

  rootProps?: Omit<TooltipBase.TooltipProps, 'children'>;
  portalProps?: Omit<TooltipBase.TooltipPortalProps, 'children'>;
  contentProps?: Omit<TooltipBase.TooltipContentProps, 'children' | 'asChild' | 'className'>;
}

export const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    triggerType = 'question',
    rootProps,
    portalProps,
    contentProps,
    triggerClassName,
    contentClassName,
  } = props;

  return (
    <TooltipBase.Provider>
      <TooltipBase.Root delayDuration={rootProps?.delayDuration || 400} {...rootProps}>
        <TooltipBase.Trigger className={triggerClassName} asChild>
          <button>
            {triggerType === 'question' && <QuestionIcon />}
            {triggerType === 'exclamation' && <ExclamationIcon />}
          </button>
        </TooltipBase.Trigger>
        <TooltipBase.Portal {...portalProps}>
          <TooltipBase.Content
            className={cn(
              'mob:p-15px tablet:p-5 mob:rounded-[0.9375rem] tablet:rounded-[1.25rem] border-2 border-black-100 bg-white shadow-[0_15px_30px_0px_rgba(3,18,48,0.11)]',
              contentClassName
            )}
            asChild
            sideOffset={contentProps?.sideOffset || 5}
            {...contentProps}
          >
            {typeof children === 'string' ? <div>{children}</div> : children}
          </TooltipBase.Content>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  );
};
