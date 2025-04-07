import { LangItem } from '../model/language.type';

export const filterLanguageList = (langs: LangItem[], selectedLang: string) => {
  return langs.sort((a, b) => {
    // Функция для определения приоритета языка
    const getPriority = (item: LangItem): number => {
      if (item.code === selectedLang) return 0; // Выбранный язык - первый
      if (item.code === 'ru') return 1; // Русский - второй
      if (item.code === 'en') return 2; // Английский - третий
      return 3; // Все остальные
    };

    const priorityA = getPriority(a);
    const priorityB = getPriority(b);

    // Сравниваем приоритеты
    return priorityA - priorityB;
  });
};
