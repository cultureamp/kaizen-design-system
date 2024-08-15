import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import styles from "./IconPoc.module.scss"

/**
 * @note: CDN must be set up:
 * - in preview-head.html for SB
 * - in <head> of apps
 *
 * This cannot be done in plain HTML, so we either need to:
 * 1. get the consumers to insert manually
 * 2. add an injection into KaizenProvider
 * 3. use react-helmet
 * 4. ??
 */

/**
 * Notes:
 * - "material-symbols-outlined" must be used for the icons to come through
 */

/**
 * Design questions:
 * - Do we want sizes to be relative to text it sits next to or static?
 *   - Notes:
 *     - MUI default is 24px
 *     - Inheriting size must either be our baked in default or done manually by the consumer
 *   1. Scale with text - no `size` prop
 *     - Pro: Simpler implementation
 *     - Con: Optical size cannot be baked in
 *     - Allowance: CSS vars are available for customisation by consumer
 *   2. `size` prop - static sizes
 *     - Pro: Can control optical size; more visually pleasing
 *     - Pro: Consistent scaling
 *     - Con: More thought required for implementation
 *     - Allowance: CSS vars are available for customisation by consumer
 *   3. [X - scratch this option] `opticalSize` prop - relative sizes
 *     - Inherits the size of the parent text
 *     - Pro: Assists with known values
 *     - Con: Can control with CSS vars already - rather unnecessary
 *
 * - Font weight (declare font-weight as opposed to wght in font-variation-settings)
 *   1. Inherit font weight
 *     - Pro: Weight will scale to match parent
 *     - Con: May not be what we want
 *   2. Baked in font weight
 *     - Pro: We can create cohesion for controlled sizes
 *     - Con: Consumer will need to manually set uncontrolled scaling
 *
 * - Expectations for RTL? Should we try to bake it in, or rely on the consumer?
 *   1. Bake it in - have a list of names which we know to apply a mirror
 *   2. Add a prop - something like `shouldMirrorInRTL`
 *   3. Do nothing - Leave it to the consumer to handle the mirror
 *
 * - Any missed test cases?
 */

/**
 * Technical questions:
 * - Can we bake in vertical alignment?
 * - Intellisense for name?
 * - `name` or `children`?
 */

export type IconPocBaseProps = {
  name: string
  isFilled?: boolean
} & HTMLAttributes<HTMLSpanElement>

export const IconPocBase = ({
  name,
  isFilled,
  className,
  ...restProps
}: IconPocBaseProps): JSX.Element => (
  <span
    className={classnames(
      "material-symbols-outlined",
      styles.iconPocBase,
      isFilled && styles.filled,
      className
    )}
    {...restProps}
    >
    {name}
  </span>
)

export type IconPocWithSizeProps = {
  name: string
  isFilled?: boolean
  /** @default inherit */
  size?: "small" | "medium" | "large" | "inherit"
} & HTMLAttributes<HTMLSpanElement>

export const IconPocWithSize = ({
  name,
  isFilled,
  size = "inherit",
  className,
  ...restProps
}: IconPocWithSizeProps): JSX.Element => (
  <span
    className={classnames(
      "material-symbols-outlined",
      styles.iconPocWithSize,
      isFilled && styles.filled,
      size && styles[size],
      className
    )}
    {...restProps}
    >
    {name}
  </span>
)

export type IconPocInheritWeightProps = {
  name: string
  isFilled?: boolean
} & HTMLAttributes<HTMLSpanElement>

export const IconPocInheritWeight = ({
  name,
  isFilled,
  className,
  ...restProps
}: IconPocInheritWeightProps): JSX.Element => (
  <span
    className={classnames(
      "material-symbols-outlined",
      styles.iconPocInheritWeight,
      isFilled && styles.filled,
      className
    )}
    {...restProps}
    >
    {name}
  </span>
)
