export type ScaleValueResponse = -1 | 1 | 2 | 3 | 4 | 5

export type ScaleItem = {
  value: ScaleValueResponse
  label: string
}

export type Scale = ScaleItem[]
