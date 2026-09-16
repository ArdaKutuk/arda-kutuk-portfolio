import type { Locale } from "./config";
import type { Dictionary } from "./types";
import tr from "./tr";
import en from "./en";

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
