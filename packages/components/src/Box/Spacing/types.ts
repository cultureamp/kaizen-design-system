/**
 * Spacing is in grid units (24px grid)
 */
export type Spacing = {
  /**
   * padding
   */
  p?: GridFractions
  /**
   * padding top
   */
  pt?: GridFractions
  /**
   * padding right
   */
  pr?: GridFractions
  /**
   * padding bottom
   */
  pb?: GridFractions
  /**
   * padding left
   */
  pl?: GridFractions
  /**
   * padding about the x-axis - padding left and right
   */
  px?: GridFractions
  /**
   * padding about the y-axis - padding top and bottom
   */
  py?: GridFractions
  /**
   * margin
   */
  m?: GridFractions
  /**
   * margin top
   */
  mt?: GridFractions
  /**
   * margin right
   */
  mr?: GridFractions
  /**
   * margin bottom
   */
  mb?: GridFractions
  /**
   * margin left
   */
  ml?: GridFractions
  /**
   * margin about the x-axis - padding left and right
   */
  mx?: GridFractions
  /**
   * margin about the y-axis - padding top and bottom
   */
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
