import type { FC, ReactNode } from "react";

import TechWorkIcon from "@/icons/techWwork.svg";
import { cn } from "@/utils/cn";

export interface TechWorkProperties {
 children?: ReactNode;

 className?: string;
 description?: string;
 title: string;
}

export const TechWork: FC<TechWorkProperties> = (properties) => {
 const { children, className, description, title } = properties;

 return (
  <section className={cn("flex flex-col mob:gap-30px tablet:gap-50px items-center", className)}>
   <TechWorkIcon className="mob:size-56px tablet:size-92px pc:size-[7.1875rem]" />

   <div className="mob:gap-10px tablet:gap-5 flex flex-col items-center">
    <h1 className="mob:text-base tablet:text-xl max-w-[400px] text-center font-medium text-black">
     {title}
    </h1>
    {description ? (
     <p className="mob:text-xs tablet:text-base max-w-[400px] text-center font-normal">
      {description}
     </p>
    ) : null}
   </div>

   {children}
  </section>
 );
};
