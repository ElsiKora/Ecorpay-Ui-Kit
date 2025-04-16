import type { FC } from "react";

import FallbackIcon from "@/icons/flags/fallback.svg";
import { cn } from "@/utils/cn";

import * as FlagIcons from "./config/flagIconConfig";

import s from "./FlagIcon.module.scss";

type FlagIconComponentType = React.ComponentType<{
 className?: string;
 height: number;
 width: number;
}>;

interface FlagIconProperties {
 className?: string;
 code: string;
}

export const FlagIcon: FC<FlagIconProperties> = ({ className, code }) => {
 const FlagComponent = (FlagIcons[code.toLocaleUpperCase() as keyof typeof FlagIcons] ??
  FallbackIcon) as FlagIconComponentType;

 return <FlagComponent className={cn(s.flag, className)} height={22} width={22} />;
};
