import { cn } from '@/utils/cn';
import { FC } from 'react';

interface FlagIconProps {
  code: string;
  className?: string;
}

export const FlagIcon: FC<FlagIconProps> = ({ code, className }) => {
  const flagSrc = `/icons/flags/${code.toLowerCase()}.svg`;
  const fallback = `/icons/flags/fallback.svg`;

  return (
    <img
      className={cn('w-20px h-20px shrink-0 border-2 border-black-100 rounded-md', className)}
      alt={`${code} flag`}
      src={new URL(flagSrc, import.meta.url).href}
      width={22}
      height={22}
      onError={(e) => {
        e.currentTarget.src = new URL(fallback, import.meta.url).href;
      }}
    />
  );
};
