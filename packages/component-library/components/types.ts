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

export type GridFractions = "1/8" | "1/4" | "1/2" | "0" | "1" | "2" | "3" | "4"

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
