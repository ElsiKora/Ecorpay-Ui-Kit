import { FC, ReactNode } from 'react';
import NotFoundIcon from '@/icons/404.svg';
import { cn } from '@/utils/cn';

export interface NotFoundProps {
  className?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}
export const NotFound: FC<NotFoundProps> = (props) => {
  const { title, children, className, description } = props;

  return (
    <section className={cn('flex flex-col mob:gap-30px tablet:gap-50px items-center', className)}>
      <NotFoundIcon className="mob:w-[11.75rem] mob:h-63px tablet:w-[18.25rem] tablet:h-98px" />

      <div className="flex flex-col mob:gap-10px tablet:gap-5 items-center">
        <h1 className="mob:text-base tablet:text-xl text-center font-medium">{title}</h1>
        {description ? (
          <p className="mob:text-xs tablet:text-base text-center font-normal max-w-[350px]">
            {description}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
};
