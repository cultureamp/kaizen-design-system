export const moodsList = [
  "positive",
  "informative",
  "cautionary",
  "assertive",
  "negative",
  "prominent",
] as const

export type Moods = (typeof moodsList)[number]
