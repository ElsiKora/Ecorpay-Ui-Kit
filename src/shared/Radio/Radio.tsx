import { FC, InputHTMLAttributes } from 'react';
import CheckedIcon from '@/icons/radioChecked.svg';
import UncheckedIcon from '@/icons/radioUnchecked.svg';
import { cn } from '@/utils/cn';

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio: FC<RadioProps> = (props) => {
  const { label, disabled, ...otherProps } = props;

  return (
    <label
      className={cn('relative flex items-center gap-7px font-normal text-black text-sm', {
        'cursor-default': disabled,
        'cursor-pointer': !disabled,
      })}
    >
      <input className="peer opacity-0 w-4 h-4" type="radio" disabled={disabled} {...otherProps} />

      <CheckedIcon
        className={cn(
          ' outline-1 outline-accent absolute left-0 opacity-0 peer-checked:opacity-100 peer-focus-visible:outline transition-opacity',
          {
            'text-black-300': disabled,
            'text-accent': !disabled,
          }
        )}
      />
      <UncheckedIcon
        className={cn(
          'outline-1 outline-accent absolute left-0 opacity-100 peer-checked:opacity-0 peer-focus-visible:outline transition-opacity',
          {
            'text-black-300': disabled,
            'text-accent': !disabled,
          }
        )}
      />

      {label ? (
        <span
          className={cn({
            'text-black-300': disabled,
            'text-black': !disabled,
          })}
        >
          {label}
        </span>
      ) : null}
    </label>
  );
};
