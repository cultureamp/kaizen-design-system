import { useState } from "react"

export type UseScrollWithShadowValue = {
  boxShadow: string
  onScrollHandler: (event: React.UIEvent<HTMLElement>) => void
}

export function useScrollWithShadow(): UseScrollWithShadowValue {
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const onScrollHandler = (event: React.UIEvent<HTMLElement>): void => {
    setScrollTop(event.currentTarget.scrollTop)
    setScrollHeight(event.currentTarget.scrollHeight)
    setClientHeight(event.currentTarget.clientHeight)
  }

  function getBoxShadow(): string {
    const isBottom = clientHeight === scrollHeight - scrollTop
    const isTop = scrollTop === 0
    const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop

    let boxShadow = "none"
    const top = "inset 0px 24px 24px -24px rgba(0, 0, 0, 0.32)"
    const bottom = "inset 0px -24px 24px -24px rgba(0, 0, 0, 0.32)"

    if (isTop) {
      boxShadow = bottom
    } else if (isBetween) {
      boxShadow = `${top}, ${bottom}`
    } else if (isBottom) {
      boxShadow = top
    }
    return boxShadow
  }

  return { boxShadow: getBoxShadow(), onScrollHandler }
}
