import type { FC, ReactNode } from "react";

import TechWorkIcon from "@/icons/techWwork.svg";
import { cn } from "@/utils/cn";

import s from "./TechWork.module.scss";

export interface TechWorkProperties {
 children?: ReactNode;

 className?: string;
 description?: string;
 title: string;
}

export const TechWork: FC<TechWorkProperties> = (properties) => {
 const { children, className, description, title } = properties;

 return (
  <section className={cn(s.section, className)}>
   <TechWorkIcon className={s.icon} />
   <div className={s.content}>
    <h1 className={s.title}>{title}</h1>
    {description ? <p className={s.description}>{description}</p> : null}
   </div>
   {children}
  </section>
 );
};
