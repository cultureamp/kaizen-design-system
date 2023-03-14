import { useMemo } from "react"
import { v4 } from "uuid"

export const useUuid = (): string => useMemo(() => v4(), [])
