export type PopoverSize = 'small' | 'large'

export const popoverPlacements = [
  'top',
  'bottom',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'left',
  'right',
] as const

export type Placement = (typeof popoverPlacements)[number]
