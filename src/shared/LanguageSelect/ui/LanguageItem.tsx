import { Item, ItemText, SelectItemProps } from '@radix-ui/react-select';
import { FC, RefObject } from 'react';
import { FlagIcon } from './FlagIcon';
import { cn } from '@/utils/cn';

interface LanguageItemProps extends SelectItemProps {
  flagIconClassName?: string;
  ref?: RefObject<HTMLDivElement | null>;
}

export const LanguageItem: FC<LanguageItemProps> = (props) => {
  const { className, ref, children, flagIconClassName, value, ...otherProps } = props;

  return (
    <Item className={cn(className)} ref={ref} value={value} {...otherProps}>
      <FlagIcon className={flagIconClassName} code={value} />
      <ItemText>{children}</ItemText>
    </Item>
  );
};
