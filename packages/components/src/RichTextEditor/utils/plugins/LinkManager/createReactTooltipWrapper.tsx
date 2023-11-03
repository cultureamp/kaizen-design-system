import React, { ElementType, useEffect, useState } from "react"
import Nanobus from "nanobus"
import { createRoot } from "react-dom/client";
import { LinkEditorProps } from "./components"

const Wrapper = ({
  emitter,
  componentProps,
  Component,
}: {
  emitter: Nanobus
  componentProps: LinkEditorProps
  Component: ElementType
}): JSX.Element => {
  const [localComponentProps, setLocalComponentProps] =
    useState<LinkEditorProps>(componentProps)

  useEffect(() => {
    const onUpdate = (newComponentProps: LinkEditorProps): void => {
      setLocalComponentProps(newComponentProps)
    }
    emitter.addListener("update", onUpdate)

    return () => {
      emitter.removeListener("update", onUpdate)
    }
  }, [emitter])

  return <Component {...localComponentProps} />
}

/**
 * Create a wrapping connector for rendering a React element into a separate
 * part of the DOM while being able to update it without remounting.
 */
export const createReactTooltipWrapper = (
  parentNode: HTMLElement,
  Component: ElementType,
  componentProps: LinkEditorProps
): {
  destroy: () => void
  update: (props: LinkEditorProps) => void
} => {
  const emitter = new Nanobus()
  const container = document.createElement("div")
  parentNode.appendChild(container)
  const root = createRoot(container)

  root.render(
    <Wrapper
      componentProps={componentProps}
      Component={Component}
      emitter={emitter}
    />,
  )

  function destroy(): void {
    root.unmount()
    emitter.removeAllListeners("*")
  }

  function update(props: LinkEditorProps): void {
    emitter.emit("update", props)
  }

  return { destroy, update }
}
