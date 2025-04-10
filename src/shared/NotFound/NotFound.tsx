import type { FC, ReactNode } from "react";

import NotFoundIcon from "@/icons/404.svg";
import { cn } from "@/utils/cn";

export interface NotFoundProperties {
 children?: ReactNode;
 className?: string;
 description?: string;
 title: string;
}

export const NotFound: FC<NotFoundProperties> = (properties) => {
 const { children, className, description, title } = properties;

 return (
  <section className={cn("flex flex-col mob:gap-30px tablet:gap-50px items-center", className)}>
   <NotFoundIcon className="mob:h-63px mob:w-[11.75rem] tablet:h-98px tablet:w-[18.25rem]" />

   <div className="flex flex-col items-center mob:gap-10px tablet:gap-5">
    <h1 className="text-center font-medium mob:text-base tablet:text-xl">{title}</h1>
    {description ? (
     <p className="max-w-[350px] text-center font-normal mob:text-xs tablet:text-base">
      {description}
     </p>
    ) : null}
   </div>

   {children}
  </section>
 );
};
