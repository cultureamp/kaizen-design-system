export type OverrideClassName<T extends Record<string, any>> =
  | Omit<T, "className"> & { classNameOverride?: string }

export type DataAttributes = { [key: `data-${string}`]: string | undefined }
