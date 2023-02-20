export type OverrideClassName<T> = Omit<T, "className"> & {
  classNameOverride?: string
}

export type DataAttributes = { [key: `data-${string}`]: string | undefined }
