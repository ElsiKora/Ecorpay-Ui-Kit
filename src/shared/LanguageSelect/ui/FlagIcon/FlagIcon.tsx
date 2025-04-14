import type { FC } from "react";

import { cn } from "@/utils/cn";

import s from "./FlagIcon.module.scss";

interface FlagIconProperties {
 className?: string;
 code: string;
}

const BASE_URL =
 process.env.NODE_ENV === "development" ? "" : "node_modules/@elsikora/ecorpay-ui-kit/dist";

export const FlagIcon: FC<FlagIconProperties> = ({ className, code }) => {
 const flagSource = `${BASE_URL}/icons/flags/${code.toLowerCase()}.svg`;
 const fallback = `${BASE_URL}/icons/flags/fallback.svg`;

 return (
  <img
   alt={`${code} flag`}
   className={cn(s.flag, className)}
   height={22}
   onError={(event) => {
    event.currentTarget.src = fallback;
   }}
   src={flagSource}
   width={22}
  />
 );
};
