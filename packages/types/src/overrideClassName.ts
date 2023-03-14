export type OverrideClassName<T> = Omit<T, "className"> & {
  classNameOverride?: string
}
