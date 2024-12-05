export type ButtonVariants = 'primary' | 'secondary' | 'tertiary'

export type ButtonSizes = 'small' | 'medium' | 'large'

export type PendingPropsUndefined = {
  isPending?: undefined
  /** Rendered as the child while `isPending` is `true`. This determines the accessible label for the Button while pending. */
  pendingLabel?: never
  /** Visually hides the `pendingLabel` and renders the loading spinner. This will maintain the width of the Button's `children` to avoid layout shifts.
   * @default false
   */
  hasHiddenPendingLabel?: never
}

export type PendingProps = {
  isPending: boolean
  /** Rendered as the child while `pendingLabel` is `true`. This determines the accessible label for the Button while pending. */
  pendingLabel: string
  /** Visually Hides the `pendingLabel` and renders the loading spinner. This will maintain the width of the Button's `children` to avoid layout shifts.
   * @default false
   */
  hasHiddenPendingLabel?: boolean
}

export type PendingButtonProps = PendingProps | PendingPropsUndefined
