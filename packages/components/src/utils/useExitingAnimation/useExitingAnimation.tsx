import React, { useEffect, useState } from 'react'

/** a utility hook for handling an the addition and removal of an animation and exit animation class */
export const useExitingAnimation = (
  shouldAnimate: boolean | undefined,
  animatingClass: string,
  exitingClass: string,
  exitDuration: number = 1000,
): string => {
  const [animationClass, setAnimationClass] = useState('')
  const previousIsLoading = React.useRef<boolean | undefined>(undefined)

  useEffect(() => {
    if (shouldAnimate !== undefined) {
      if (previousIsLoading.current === true && shouldAnimate === false) {
        setAnimationClass(exitingClass)

        const timeout = setTimeout(() => {
          setAnimationClass('')
        }, exitDuration)

        return () => clearTimeout(timeout)
      }
      if (shouldAnimate === true) {
        setAnimationClass(animatingClass)
      }
    }
    previousIsLoading.current = shouldAnimate
    return
  }, [shouldAnimate, animatingClass, exitingClass, exitDuration])

  return animationClass
}
