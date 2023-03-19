export const isRefObject = (
  ref: React.ForwardedRef<any>
): ref is React.MutableRefObject<any> => ref !== null && "current" in ref
