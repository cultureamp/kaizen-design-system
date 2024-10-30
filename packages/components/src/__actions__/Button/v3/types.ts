export type ButtonVariant = "primary" | "secondary" | "tertiary"

export type ButtonSize = "small" | "medium" | "large"

export type PendingPropsUndefined = {
  isPending?: undefined
  pendingLabel?: never
  isPendingLabelHidden?: never
}

export type PendingProps = {
  isPending: boolean
  /** Rendered as the child while `pendingLabel` is `true` */
  pendingLabel: string
  /** Visually Hides the `pendingLabel` rendering only the loading spinner. This will maintain the width of the Button's `children` to avoid layout shifts.
   * @default false
   */
  isPendingLabelHidden?: boolean
}

export type PendingButtonProps = PendingProps | PendingPropsUndefined
