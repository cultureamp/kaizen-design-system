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
// @TODO add data attributes
// @TODO enforce data-test-id (check name)?

export type AllowedTags = {
  pre: HTMLPreElement
  p: HTMLParagraphElement
  a: HTMLAnchorElement
  div: HTMLDivElement
  span: HTMLSpanElement
  h1: HTMLHeadingElement
  h2: HTMLHeadingElement
  h3: HTMLHeadingElement
  h4: HTMLHeadingElement
  h5: HTMLHeadingElement
  h6: HTMLHeadingElement
}

/**
 * Scale refers to difference in size of components within the same component family
 */
export type Sizing = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

export type GridFractions = "1/8" | "1/4" | "1/2" | "0" | "1" | "2" | "3" | "4"

export type Breakpoint = {
  mobile: "0"
  tablet: "768"
  desktop: "1024"
}

export type Scale =
  | {
      [key in keyof Breakpoint]?: Sizing
    }
  | Sizing

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
