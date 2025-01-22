import { useEffect, useState } from 'react'

/** This is a helper util to resolve the focus jumping issue with future Select and FilterSelect.
 * Due to the floating element's position starting as a negative value on render and then jumping to the correct position, this caused the focus to jump to the top of the page.
 * This now polls to check if the element's position is stable by comparing the first and last position.
 */
export const useHasCalculatedListboxPosition = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isStable, setIsStable] = useState(false)
  const [lastYPosition, setLastYPosition] = useState<number | null>(null)

  useEffect(() => {
    const checkPosition = (): void => {
      if (ref.current) {
        const { y } = ref.current.getBoundingClientRect()
        if (lastYPosition === null) {
          setLastYPosition(y)
        } else if (y === lastYPosition && y >= 0) {
          setIsStable(true)
        } else {
          setLastYPosition(y)
        }
      }
    }

    const intervalId = setInterval(checkPosition, 1)

    return () => clearInterval(intervalId)
  }, [ref, lastYPosition])

  return isStable
}
