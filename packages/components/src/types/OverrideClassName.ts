export type OverrideClassName<T extends Record<string, any>> = Omit<
  T,
  "className"
> & { classNameOverride?: string }
