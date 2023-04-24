import arLang from 'lang/ar.json';
import enLang from 'lang/en.json';
import { Lang } from '@interfaces';

export const getI18n = (lang: Lang) => (lang === Lang.AR ? arLang : enLang);

export type I18n = typeof enLang;
