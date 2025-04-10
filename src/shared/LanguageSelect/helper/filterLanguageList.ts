import type { LangItem } from "../model/language.type";

import { getLangsPriority } from "./getLangsPriority";

export const filterLanguageList = (langs: Array<LangItem>, selectedLang: string) => {
 return langs.sort((a, b) => {
  const priorityA = getLangsPriority(a, selectedLang);
  const priorityB = getLangsPriority(b, selectedLang);

  // Сравниваем приоритеты
  return priorityA - priorityB;
 });
};
