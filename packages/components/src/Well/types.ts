export const wellColors = [
  'white',
  'gray',
  'blue',
  'yellow',
  'orange',
  'red',
  'green',
  'purple',
] as const

export type WellColors = (typeof wellColors)[number]

export const borderStyleTypes = ['solid', 'dashed', 'none'] as const

export type WellBorderStyleType = (typeof borderStyleTypes)[number]
