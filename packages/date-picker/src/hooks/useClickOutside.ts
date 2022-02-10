import { useEffect } from "react"

// Listens for clicks outside of ref and closes calendar.
export function useClickOutside(
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  referenceElement: HTMLDivElement | null,
  wrapperRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    if (!isOpen) return undefined

    const callback = (e: Event) => {
      const elem = wrapperRef.current
      if (!elem) return

      const didClickOnPopover =
        elem === e.target || elem.contains(e.target as Node)
      const didClickOnReferenceElement =
        referenceElement &&
        (referenceElement === e.target ||
          referenceElement.contains(e.target as Node))
      if (!didClickOnPopover && !didClickOnReferenceElement) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", callback, false)

    return () => {
      document.removeEventListener("click", callback, false)
    }
  }, [isOpen, referenceElement])
}
