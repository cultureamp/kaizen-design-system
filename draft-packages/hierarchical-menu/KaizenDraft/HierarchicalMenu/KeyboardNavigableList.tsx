import { useCallback, useEffect, useState } from "react"
import keyboardShortcutEmitter, {
  Keys,
  start,
  stop,
} from "./keyboardShortcutEmitter"

type Direction = "ltr" | "rtl"

interface RenderProps {
  index: number
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
  const [index, setCurrentIndex] = useState(0)
  const limit = items.length - 1

  const up = useCallback(
    evt => {
      evt.preventDefault()
      setCurrentIndex(prev => {
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

  useEffect(() => {
    keyboardShortcutEmitter.on(Keys.ARROW_UP, up)
    keyboardShortcutEmitter.on(Keys.ARROW_DOWN, down)
    keyboardShortcutEmitter.on(Keys.ARROW_RIGHT, dir === "ltr" ? forward : back)
    keyboardShortcutEmitter.on(Keys.ARROW_LEFT, dir === "ltr" ? back : forward)
    keyboardShortcutEmitter.on(Keys.SPACE, select)
    keyboardShortcutEmitter.on(Keys.ENTER, select)
    return () => {
      keyboardShortcutEmitter.off(Keys.ARROW_UP, up)
      keyboardShortcutEmitter.off(Keys.ARROW_DOWN, down)
      keyboardShortcutEmitter.off(Keys.ARROW_RIGHT, forward)
      keyboardShortcutEmitter.off(Keys.ARROW_RIGHT, back)
      keyboardShortcutEmitter.off(Keys.ARROW_LEFT, forward)
      keyboardShortcutEmitter.off(Keys.ARROW_LEFT, back)
      keyboardShortcutEmitter.off(Keys.SPACE, select)
      keyboardShortcutEmitter.off(Keys.ENTER, select)
    }
  }, [up, down, forward, back, select, dir])

  useEffect(() => {
    start()
    return () => {
      stop()
    }
  }, [])

  return children({ index })
}
