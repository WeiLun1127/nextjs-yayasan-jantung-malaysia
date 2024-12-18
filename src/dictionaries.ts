import 'server-only';

import type { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  cn: () => import('./dictionaries/cn.json').then((module) => module.default),
  my: () => import('./dictionaries/my.json').then((module) => module.default),
};

export const getDictionary = async (
  locale: Locale,
): Promise<Dict.Dictionaries> => dictionaries[locale]?.() ?? dictionaries.en();
