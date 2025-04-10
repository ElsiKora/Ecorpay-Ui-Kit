import "./assets/fonts.css";
import "./assets/style.css";
import "./assets/tailwind.css";

export { default as tailwindConfig } from "../tailwind.config";
export {
 Accordion,
 type AccordionProperties as AccordionProps,
} from "./shared/Accordion/Accordion";
export { AccordionItem, type AccordionItemProperties } from "./shared/Accordion/AccordionItem";
export { Banner, type BannerProperties as BannerProps } from "./shared/Banner/Banner";
export { Boundary, type BoundaryProperties as BoundaryProps } from "./shared/Boundary/Boundary";
export { Button, type ButtonProperties as ButtonProps } from "./shared/Button/Button";
export { Checkbox, type CheckboxProperties as CheckboxProps } from "./shared/Checkbox/Checkbox";
export {
 CopyButton,
 type CopyButtonProperties as CopyButtonProps,
} from "./shared/CopyButton/CopyButton";
export {
 CopyInput,
 type CopyInputProperties as CopyInputProps,
} from "./shared/CopyInput/CopyInput";
export { Dialog, type DialogProperties as DialogProps } from "./shared/Dialog/Dialog";
export {
 DialogClose,
 type DialogCloseProperties as DialogCloseProps,
} from "./shared/Dialog/DialogClose";
export {
 DialogContent,
 type DialogContentProperties as DialogContentProps,
} from "./shared/Dialog/DialogContent";
export {
 DialogTrigger,
 type DialogTriggerProperties as DialogTriggerProps,
} from "./shared/Dialog/DialogTrigger";
export { Input, type InputProperties as InputProps } from "./shared/Input/Input";
export { type LangItem, LanguageSelect } from "./shared/LanguageSelect";
export { NotFound, type NotFoundProperties as NotFoundProps } from "./shared/NotFound/NotFound";
export { Radio, type RadioProperties as RadioProps } from "./shared/Radio/Radio";
export {
 ScrollArea,
 type ScrollAreaProperties as ScrollAreaProps,
} from "./shared/ScrollArea/ScrollArea";
export { Skeleton, type SkeletonProperties as SkeletonProps } from "./shared/Skeleton/Skeleton";
export { Switch, type SwitchProperties as SwitchProps } from "./shared/Switch/Switch";
export { TechWork, type TechWorkProperties as TechWorkProps } from "./shared/TechWork/TechWork";
export { Toast, type ToastProperties as ToastProps } from "./shared/Toast/Toast";

export { Tooltip, type TooltipProperties as TooltipProps } from "./shared/Tooltip/Tooltip";

export { Slot, type SlotProps } from "@radix-ui/react-slot";
