import { AriaAttributes } from "react"

export type Safelist = AriaAttributes & {
  id?: string
  itemProp?: string
  itemScope?: string
  itemType?: string
  itemID?: string
  itemRef?: string
  tabIndex?: string
  title?: string
  role?: string
}

export type GridFractions =
  | 0
  | 0.25
  | 0.5
  | 0.75
  | 1
  | 1.25
  | 1.5
  | 1.75
  | 2
  | 2.5
  | 3
  | 3.5
  | 4

export type Breakpoint = {
  mobile: "0"
  tablet: "768"
  desktop: "1024"
}

export type ResponsiveSpacing =
  | {
      [key in keyof Breakpoint]?: GridFractions
    }
  | GridFractions

export type Padding = ResponsiveSpacing
export type Margin = ResponsiveSpacing

export type Spacing = {
  p?: ResponsiveSpacing
  pt?: GridFractions
  pr?: GridFractions
  pb?: GridFractions
  pl?: GridFractions
  px?: GridFractions
  py?: GridFractions
  m?: ResponsiveSpacing
  mt?: GridFractions
  mr?: GridFractions
  mb?: GridFractions
  ml?: GridFractions
  mx?: GridFractions
  my?: GridFractions
}

export type className = {
  classNameAndIHaveSpokenToDST?: string
}
