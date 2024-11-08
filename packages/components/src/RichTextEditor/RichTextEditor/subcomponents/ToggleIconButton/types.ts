export const moodsList = [
  "default",
  "secondary",
  "primary",
  "destructive",
  "secondary-destructive",
] as const

export type ToggleIconButtonMoods = (typeof moodsList)[number]
