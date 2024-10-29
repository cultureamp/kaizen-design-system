export type ButtonVariant = "primary" | "secondary" | "tertiary"

export type ButtonSize = "small" | "medium" | "large"

export type PendingPropsUndefined = {
  isPending?: undefined
  /** Rendered as the child while `pendingLabel` is `true` */
  pendingLabel?: never
  /** Hides the `pendingLabel` rendering only the loading spinner. This will still be used as the accessible label.
   * @default false
   */
  isPendingLabelHidden?: never
}

export type PendingProps = {
  isPending: boolean
  /** Rendered as the child while `pendingLabel` is `true` */
  pendingLabel: string
  /** Hides the `pendingLabel` rendering only the loading spinner. This will still be used as the accessible label.
   * @default false
   */
  isPendingLabelHidden?: boolean
}

export type PendingButtonProps = PendingProps | PendingPropsUndefined
