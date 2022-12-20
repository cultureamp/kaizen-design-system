import React, { Ref, useCallback, useEffect, useRef, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

const defaultCallback = (entry: ResizeObserverEntry): ResizeObserverEntry =>
  entry

export interface DOMRectReadOnly {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
  readonly top: number
  readonly right: number
  readonly bottom: number
  readonly left: number
}

/**
 * Hook for observing changes to a DOM element via ResizeObserver.
 *
 * @param {resolveEntryCallback} resolveEntry - Callback for resolving the
 * desired value from each ResizeObserverEntry emitted by ResizeObserver
 * @return {Array} An array containing a ref for binding to the observed DOM
 * element, and the current value of the callback-resolved ResizeObserverEntry
 * @callback resolveEntryCallback
 */
export const useResizeObserver = <T, E extends Element = HTMLElement>(
  resolveEntry: (entry: ResizeObserverEntry) => any = defaultCallback
): [Ref<E>, T | undefined] => {
  const destroyResizeObserverRef: React.MutableRefObject<
    undefined | (() => void)
  > = useRef(undefined)
  const [dimensions, setDimensions] = useState<T | undefined>(undefined)
  const resolveEntryRef: React.MutableRefObject<
    (entry: ResizeObserverEntry) => any
  > = useRef(resolveEntry)

  const ref: Ref<E> = useCallback(
    (node: E) => {
      if (node) {
        const resizeObserver = new ResizeObserver(
          (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
              const value = resolveEntryRef.current(entry)
              if (value) {
                setDimensions(value)
              }
            }
          }
        )
        resizeObserver.observe(node)
        destroyResizeObserverRef.current = (): void => {
          resizeObserver.disconnect()
        }
      }
    },
    [destroyResizeObserverRef, setDimensions, resolveEntryRef]
  )

  // Ensure the resolveEntryRef has the latest value
  useEffect(() => {
    resolveEntryRef.current = resolveEntry
  }, [resolveEntry])

  // Destroy the observer on unmount
  useEffect(
    () => () => {
      if (destroyResizeObserverRef.current) {
        destroyResizeObserverRef.current()
      }
    },
    []
  )
  return [ref, dimensions]
}
