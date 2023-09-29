export const ValidationTagVariants = [
  "validationPositive",
  "validationInformative",
  "validationNegative",
  "validationCautionary",
] as const

export const SentimentTagVariants = [
  "sentimentPositive",
  "sentimentNeutral",
  "sentimentNegative",
  "sentimentNone",
] as const

export const StatusTagVariants = [
  "statusLive",
  "statusDraft",
  "statusClosed",
  "statusAction",
] as const

export const TagVariants = [
  "default",
  ...StatusTagVariants,
  ...SentimentTagVariants,
  ...ValidationTagVariants,
] as const
