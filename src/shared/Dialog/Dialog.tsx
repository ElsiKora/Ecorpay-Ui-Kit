import type { FC, ReactNode } from "react";

import { type DialogProps as DialogRootProperties, Root } from "@radix-ui/react-dialog";

export interface DialogProperties extends DialogRootProperties {
 children: ReactNode;
}

export const Dialog: FC<DialogProperties> = (properties) => {
 const { children, ...otherProperties } = properties;

 return <Root {...otherProperties}>{children}</Root>;
};
