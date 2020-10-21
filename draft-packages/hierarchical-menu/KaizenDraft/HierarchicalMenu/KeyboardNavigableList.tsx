import { useCallback, useEffect, useState } from "react"

enum Keys {
  ARROW_DOWN = "ArrowDown",
  ARROW_DOWN_IE = "Down", // IE/Edge specific value
  ARROW_UP = "ArrowUp",
  ARROW_UP_IE = "Up", // IE/Edge specific value
  ARROW_RIGHT = "ArrowRight",
  ARROW_RIGHT_IE = "Right", // IE/Edge specific value
  ARROW_LEFT = "ArrowLeft",
  ARROW_LEFT_IE = "Left", // IE/Edge specific value
  SPACE = " ",
  SPACE_IE = "Spacebar", // IE/Edge specific value
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
  initialIndex: number | null
  dir?: Direction
}

export const KeyboardNavigableList = (props: Props) => {
  const {
    items,
    children,
    onForward,
    onBack,
    onSelect,
    initialIndex = 0,
    dir = "ltr",
  } = props
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
      if (
        evt.target !== document.body &&
        evt.target !== document.documentElement // IE/Edge specific value
      ) {
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
        case Keys.ARROW_UP_IE:
          return up(evt)

        case Keys.ARROW_DOWN:
        case Keys.ARROW_DOWN_IE:
          return down(evt)

        case Keys.ARROW_LEFT:
        case Keys.ARROW_LEFT_IE:
          return dir === "ltr" ? back(evt) : forward(evt)

        case Keys.ARROW_RIGHT:
        case Keys.ARROW_RIGHT_IE:
          return dir === "ltr" ? forward(evt) : back(evt)

        case Keys.SPACE:
        case Keys.SPACE_IE:
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

  useEffect(() => {
    if (initialIndex != null && initialIndex !== -1) {
      setCurrentIndex(initialIndex)
    }
  }, [initialIndex])

  return children({ index })
}
