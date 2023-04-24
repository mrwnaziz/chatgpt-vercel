import arLang from 'lang/ar.json';
import enLang from 'lang/en.json';
import { Lang } from '@interfaces';
type Lang = 'ar' | 'en';

export const getI18n = (lang: Lang) => (lang === 'ar' ? arLang : enLang);

export type I18n = ReturnType<typeof getI18n>;
