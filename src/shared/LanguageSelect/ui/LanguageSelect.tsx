import { ScrollArea } from '../../ScrollArea/ScrollArea';
import * as SelectBase from '@radix-ui/react-select';
import { FC } from 'react';
import ShevronIcon from '@/icons/shevron.svg';
import { LangItem } from '../model/language.type';
import { FlagIcon } from './FlagIcon';
import { LanguageItem } from './LanguageItem';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

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
  const { langList, rootProps, variant, triggerClassName, contentClassName } = props;

  return (
    <SelectBase.Root {...rootProps}>
      <SelectBase.Trigger
        className={cn(
          languageSelectVariants({ variant }),
          'relative z-40 data-[state=open]:border-transparent group font-medium flex items-center transition-colors outline-none hover:border-accent',
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
            languageSelectVariants({ variant }),
            'z-30 min-w-88px bg-white shadow-langSelect',
            {
              '-translate-y-47px pt-47px pb-20px': variant === 'rounded',
              '-translate-y-52px pt-52px pb-10px': variant === 'square',
            },

            contentClassName
          )}
          side="bottom"
          sideOffset={0}
          position="popper"
          avoidCollisions
        >
          <SelectBase.Viewport className="SelectBaseViewport">
            <ScrollArea className="flex max-h-[155px] pr-10px">
              {langList.map(({ label, code }, key) => (
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
						rounded-[0.9375rem]
						outline-none
						border-2
						border-transparent
						
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
              ))}
            </ScrollArea>
          </SelectBase.Viewport>
        </SelectBase.Content>
      </SelectBase.Portal>
    </SelectBase.Root>
  );
};
