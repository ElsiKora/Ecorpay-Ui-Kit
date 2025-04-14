import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: Array<ClassValue | string>) {
 return clsx(inputs);
}
