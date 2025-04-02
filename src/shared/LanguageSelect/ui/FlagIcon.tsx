import { cn } from '@/utils/cn';
import { FC } from 'react';

interface FlagIconProps {
  code: string;
  className?: string;
}

const BASE_URL =
  process.env.NODE_ENV === 'development' ? '' : 'node_modules/@elsikora/ecorpay-ui-kit/dist';

export const FlagIcon: FC<FlagIconProps> = ({ code, className }) => {
  const flagSrc = `${BASE_URL}/icons/flags/${code.toLowerCase()}.svg`;
  const fallback = `${BASE_URL}/icons/flags/fallback.svg`;

  return (
    <img
      className={cn('w-20px h-20px shrink-0 border-2 border-black-100 rounded-md', className)}
      alt={`${code} flag`}
      src={flagSrc}
      width={22}
      height={22}
      onError={(e) => {
        e.currentTarget.src = fallback;
      }}
    />
  );
};
