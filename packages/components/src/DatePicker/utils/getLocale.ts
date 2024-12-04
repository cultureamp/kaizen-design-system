import type { Locale } from 'date-fns'
import {
  arSA,
  bg,
  cs,
  cy,
  da,
  de,
  el,
  enGB,
  enUS,
  es,
  et,
  fi,
  fr,
  frCA,
  he,
  hi,
  ht,
  hu,
  id,
  it,
  ja,
  km,
  ko,
  lt,
  lv,
  ms,
  nb,
  nl,
  pl,
  pt,
  ptBR,
  ro,
  ru,
  sk,
  sr,
  sv,
  th,
  tr,
  uk,
  vi,
  zhCN,
  zhTW,
} from 'date-fns/locale'

// Ensure you update the storybook DATE_PICKER_SUPPORTED_LOCALES arg options when updating DatePickerSupportedLocales.
export type DatePickerSupportedLocales = string

export const getLocale = (locale: DatePickerSupportedLocales): Locale => {
  switch (locale) {
    case 'zh':
      return zhCN
    case 'zh-TW':
      return zhTW
    case 'da':
      return da
    case 'nl':
      return nl
    case 'en-US':
      return enUS
    case 'fr':
      return fr
    case 'de':
      return de
    case 'he':
      return he
    case 'it':
      return it
    case 'ja':
      return ja
    case 'ko':
    case 'kr':
      return ko
    case 'es-419':
      return es
    case 'sv':
      return sv
    case 'ru':
      return ru
    // @todo: Add when locale is available https://github.com/date-fns/date-fns/issues/2627
    // case "mi":
    // return miNZ
    case 'pl':
      return pl
    case 'pt-BR':
      return ptBR
    case 'uk':
      return uk
    case 'en':
    case 'en-GB':
    case 'en-AU':
      return enGB
    case 'ar':
      return arSA
    case 'bg':
      return bg
    case 'cs':
      return cs
    case 'et':
      return et
    case 'fi':
      return fi
    case 'fr-CA':
      return frCA
    case 'ht':
      return ht
    case 'el':
      return el
    case 'hi':
      return hi
    case 'hu':
      return hu
    case 'id':
      return id
    case 'km-KH':
      return km
    case 'lv':
      return lv
    case 'lt':
      return lt
    case 'ms':
      return ms
    case 'nb':
    case 'no':
      return nb
    case 'pt':
      return pt
    case 'ro':
      return ro
    case 'sr':
      return sr
    // case "si-LK":
    //   return siLK
    case 'sk':
      return sk
    case 'es':
      return es
    // case "tl":
    //   return tlPH
    case 'th':
      return th
    case 'tr':
      return tr
    case 'vi':
      return vi
    case 'cy':
      return cy
    default:
      return enGB
  }
}
