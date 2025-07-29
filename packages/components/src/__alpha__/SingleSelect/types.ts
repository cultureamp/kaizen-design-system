export type SelectItem = {
  label: string
  value: string
}

export type SelectSection = {
  label: string
  options: SelectItem[]
}

type PositionDataProp = number | string | undefined

export type PositionData = {
  top: PositionDataProp
  bottom: PositionDataProp
  insetInlineStart: PositionDataProp
  maxHeight: PositionDataProp
}
