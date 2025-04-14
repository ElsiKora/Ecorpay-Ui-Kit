import type { FC, ReactNode } from "react";

import NotFoundIcon from "@/icons/404.svg";
import { cn } from "@/utils/cn";

import s from "./NotFound.module.scss";

export interface NotFoundProperties {
 children?: ReactNode;
 className?: string;
 description?: string;
 title: string;
}

export const NotFound: FC<NotFoundProperties> = (properties) => {
 const { children, className, description, title } = properties;

 return (
  <section className={cn(s.section, className)}>
   <NotFoundIcon className={s.icon} />

   <div className={s.content}>
    <h1 className={s.title}>{title}</h1>
    {description ? <p className={s.description}>{description}</p> : null}
   </div>

   {children}
  </section>
 );
};
