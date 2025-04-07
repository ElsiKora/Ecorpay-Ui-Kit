import { ScrollArea } from '../../ScrollArea/ScrollArea';
import * as SelectBase from '@radix-ui/react-select';
import { FC, useState } from 'react';
import ShevronIcon from '@/icons/shevron.svg';
import { LangItem } from '../model/language.type';
import { FlagIcon } from './FlagIcon';
import { LanguageItem } from './LanguageItem';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { filterLanguageList } from '../helper/filterLanguageList';

const languageSelectVariants = cva('border-2 border-black-100 text-sm', {
  variants: {
    variant: {
      square: 'rounded-[0.625rem] w-[115px] p-8px',
      rounded: 'rounded-[1.875rem] w-[108px] p-7px',
    },
  },
  defaultVariants: {
    variant: 'rounded',
  },
});

export interface LanguageSelectProps extends VariantProps<typeof languageSelectVariants> {
  langList: LangItem[];
  rootProps?: SelectBase.SelectProps;
  triggerClassName?: string;
  contentClassName?: string;
}

export const LanguageSelect: FC<LanguageSelectProps> = (props) => {
  const { langList, rootProps = {}, variant, triggerClassName, contentClassName } = props;
  const { open, onOpenChange, ...otherRootProps } = rootProps;

  const [isOpen, setIsOpen] = useState(open || false);
  const [isAnimate, setIsAnimate] = useState(open || false);

  const openChangeHandler = (state: boolean) => {
    setIsAnimate(state);

    if (onOpenChange) {
      if (state) onOpenChange(state);
      else setTimeout(() => onOpenChange(state), 130);
    } else {
      if (state) setIsOpen(state);
      else setTimeout(() => setIsOpen(state), 130);
    }
  };

  return (
    <SelectBase.Root open={isOpen} onOpenChange={openChangeHandler} {...otherRootProps}>
      <SelectBase.Trigger
        className={cn(
          languageSelectVariants({ variant }),
          'group font-medium flex items-center data-[state=closed]:transition-colors outline-none hover:border-accent data-[state=open]:rounded-ee-none data-[state=open]:rounded-es-none data-[state=open]:border-b-0',
          { 'max-h-45px': variant === 'rounded', 'max-h-52px': variant === 'square' },
          triggerClassName
        )}
        aria-label="Language"
      >
        <span className="flex items-center w-full gap-5px p-6px">
          <FlagIcon code={rootProps?.value || rootProps?.defaultValue || ''} />
          <SelectBase.Value />
          <ShevronIcon className="group-data-[state=open]:-rotate-180 text-black-300 group-hover:text-accent w-14px h-8px transition-all ml-auto" />
        </span>
      </SelectBase.Trigger>

      <SelectBase.Portal>
        <SelectBase.Content
          className={cn(
            'z-30 min-w-88px bg-white shadow-langSelect rounded-se-none rounded-ss-none border-l-2 border-r-2 border-b-2 border-black-100 text-sm',
            {
              'animate-language-open': isAnimate,
              'animate-language-close': !isAnimate,
              'rounded-es-[1.875rem] rounded-ee-[1.875rem] w-[108px] p-7px': variant === 'rounded',
              'rounded-es-[0.625rem] rounded-ee-[0.625rem] w-[115px] p-8px': variant === 'square',
            },
            contentClassName
          )}
          side="bottom"
          sideOffset={0}
          position="popper"
          avoidCollisions
        >
          <SelectBase.Viewport className="SelectBaseViewport">
            <ScrollArea className="flex max-h-[160px] pr-10px">
              {filterLanguageList(langList, rootProps.value || rootProps.defaultValue || '').map(
                ({ label, code }, key) => (
                  <LanguageItem
                    className="
						flex 
						items-center 
						gap-5px 
						
						text-sm 
						font-medium 
						leading-none

						mb-5px
						last-of-type:mb-0
						
						p-6px
						outline-none
						border-2
						border-transparent
						rounded-[0.625rem]
						
						transition-colors
						
						data-[state=unchecked]:cursor-pointer
						data-[state=unchecked]:data-[highlighted]:border-black-100

						data-[state=checked]:bg-accent-100
						data-[state=checked]:cursor-default
					"
                    value={code}
                    key={code + key}
                  >
                    {label}
                  </LanguageItem>
                )
              )}
            </ScrollArea>
          </SelectBase.Viewport>
        </SelectBase.Content>
      </SelectBase.Portal>
    </SelectBase.Root>
  );
};
