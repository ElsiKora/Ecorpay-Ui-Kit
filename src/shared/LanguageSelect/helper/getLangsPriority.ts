import type { LangItem } from "../model/language.type";

// Функция для определения приоритета языка
export const getLangsPriority = (item: LangItem, selectedLang: string): number => {
 if (item.code === selectedLang) return 0; // Выбранный язык - первый

 if (item.code === "ru") return 1; // Русский - второй

 if (item.code === "en") return 2; // Английский - третий

 return 3; // Все остальные
};
