export type ScaleValue = -1 | 1 | 2 | 3 | 4 | 5

export type ScaleItem = {
  value: ScaleValue
  label: string
}

export type ColorSchema = 'classical' | 'blue'

export type Scale = ScaleItem[]
