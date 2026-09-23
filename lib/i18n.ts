import { en } from "./dictionaries/en";
import { kk } from "./dictionaries/kk";
import { ru, type Dictionary } from "./dictionaries/ru";

export const locales = ["ru", "kk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const localeLabels: Record<Locale, string> = {
  ru: "РУС",
  kk: "ҚАЗ",
  en: "ENG",
};

const dictionaries: Record<Locale, Dictionary> = { ru, kk, en };

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale) => dictionaries[locale];

export type { Dictionary };
