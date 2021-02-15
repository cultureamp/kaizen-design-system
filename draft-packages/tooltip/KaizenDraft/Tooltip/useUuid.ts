import { useMemo } from "react"
import uuid from "uuid/v4"

export const useUuid = (): string => {
  return useMemo(() => uuid(), [])
}
