export type OverrideClassName<T extends Record<string, any>> = Omit<
  T,
  "className"
> & {
  /** Add extra classnames to the component. Try out some Tailwind classes (eg. `!mb-48`) to see! */
  classNameOverride?: string
}
