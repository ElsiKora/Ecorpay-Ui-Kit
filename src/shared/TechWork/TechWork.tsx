import { cn } from '@/utils/cn';
import { FC, ReactNode } from 'react';
import TechWorkIcon from '@/icons/techWwork.svg';

interface TechWorkProps {
  title: string;

  description?: string;
  children?: ReactNode;
  className?: string;
}
export const TechWork: FC<TechWorkProps> = (props) => {
  const { title, children, className, description } = props;
  return (
    <section className={cn('flex flex-col mob:gap-30px tablet:gap-50px items-center', className)}>
      <TechWorkIcon className="mob:w-56px mob:h-56px tablet:w-92px tablet:h-92px pc:w-[7.1875rem] pc:h-[7.1875rem]" />

      <div className="flex flex-col mob:gap-10px tablet:gap-5 items-center">
        <h1 className="mob:text-base tablet:text-xl text-center font-medium max-w-[400px] text-black">
          {title}
        </h1>
        {description ? (
          <p className="mob:text-xs tablet:text-base text-center font-normal max-w-[400px]">
            {description}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
};
