/**
 * Spacing is in grid units (24px grid)
 */
export type Spacing = {
  p?: GridFractions
  pt?: GridFractions
  pr?: GridFractions
  pb?: GridFractions
  pl?: GridFractions
  px?: GridFractions
  py?: GridFractions
  m?: GridFractions
  mt?: GridFractions
  mr?: GridFractions
  mb?: GridFractions
  ml?: GridFractions
  mx?: GridFractions
  my?: GridFractions
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
