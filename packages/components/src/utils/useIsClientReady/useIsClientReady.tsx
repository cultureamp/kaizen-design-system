import { useEffect, useState } from 'react'

/**
 * A hook that returns a truthy value indicating if the code can be run on client side.
 * This is a useful hook for determining if the `document` or `window` objects are available.
 */
export const useIsClientReady = (): boolean => {
  const [isClientReady, setIsClientReady] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setIsClientReady(true)
    }
  }, [])

  return isClientReady
}
