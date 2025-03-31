import React, { useEffect, useState } from 'react'

/** a utility hook for handling an the addition and removal of an animation and exit animation class */
export const useExitingAnimation = (
  shouldAnimate: boolean | undefined,
  animatingClass: string,
  exitingClass: string,
  exitDuration: number = 1000,
): string | undefined => {
  const [animationClass, setAnimationClass] = useState('')
  const prevIsAiLoading = React.useRef<boolean | undefined>(undefined)

  useEffect(() => {
    if (shouldAnimate !== undefined) {
      if (prevIsAiLoading.current === true && shouldAnimate === false) {
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
    prevIsAiLoading.current = shouldAnimate

    return undefined
  }, [shouldAnimate, animatingClass, exitingClass, exitDuration])

  return animationClass
}
