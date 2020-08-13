import { useCallback, useEffect, useState } from "react"

enum Keys {
  ARROW_DOWN = "ArrowDown",
  ARROW_UP = "ArrowUp",
  ARROW_RIGHT = "ArrowRight",
  ARROW_LEFT = "ArrowLeft",
  SPACE = " ",
  ENTER = "Enter",
}

type Direction = "ltr" | "rtl"

interface RenderProps {
  index: number | null
}

interface Props {
  items: any[]
  children: (renderProps: RenderProps) => JSX.Element
  onForward: (renderProps: RenderProps) => boolean | void
  onBack: (renderProps: RenderProps) => boolean | void
  onSelect: (renderProps: RenderProps) => void
  dir?: Direction
}

export const KeyboardNavigableList = (props: Props) => {
  const { items, children, onForward, onBack, onSelect, dir = "ltr" } = props
  const [index, setCurrentIndex] = useState<number | null>(null)
  const limit = items.length - 1

  const up = useCallback(
    evt => {
      evt.preventDefault()
      setCurrentIndex(prev => {
        if (prev == null) return limit

        const isAtStart = prev === 0
        return isAtStart ? limit : prev - 1
      })
    },
    [limit]
  )

  const down = useCallback(
    evt => {
      evt.preventDefault()
      setCurrentIndex(prev => {
        if (prev == null) return 0

        const isAtLimit = prev === limit
        return isAtLimit ? 0 : prev + 1
      })
    },
    [limit]
  )

  const forward = useCallback(
    evt => {
      evt.preventDefault()
      const result = onForward({ index })
      if (result !== false) setCurrentIndex(0)
    },
    [onForward, index]
  )

  const back = useCallback(
    evt => {
      evt.preventDefault()
      const result = onBack({ index })
      if (result !== false) setCurrentIndex(0)
    },
    [onBack, index]
  )

  const select = useCallback(
    evt => {
      // don't interfere with keyboard SPACE and ENTER events on native
      // interactive elements like <a>, <button>
      if (evt.target !== document.body) {
        return
      }

      evt.preventDefault()
      onSelect({ index })
    },
    [onSelect, index]
  )

  const handleKeys = useCallback(
    (evt: KeyboardEvent) => {
      switch (evt.key) {
        case Keys.ARROW_UP:
          return up(evt)
        case Keys.ARROW_DOWN:
          return down(evt)
        case Keys.ARROW_LEFT:
          return dir === "ltr" ? back(evt) : forward(evt)
        case Keys.ARROW_RIGHT:
          return dir === "ltr" ? forward(evt) : back(evt)
        case Keys.SPACE:
        case Keys.ENTER:
          return select(evt)
        default:
          return
      }
    },
    [up, down, forward, back, select]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeys)
    return () => {
      document.removeEventListener("keydown", handleKeys)
    }
  }, [handleKeys])

  return children({ index })
}
