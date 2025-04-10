import type { FC } from "react";

import { cn } from "@/utils/cn";

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
   className={cn("w-20px h-20px shrink-0 border-2 border-black-100 rounded-md", className)}
   height={22}
   onError={(event) => {
    event.currentTarget.src = fallback;
   }}
   src={flagSource}
   width={22}
  />
 );
};
