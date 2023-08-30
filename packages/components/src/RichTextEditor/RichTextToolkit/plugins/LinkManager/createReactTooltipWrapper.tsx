import React, { ElementType, useEffect, useState } from "react"
import Nanobus from "nanobus"
import { createRoot } from "react-dom/client"
import { LinkEditorProps } from "./components"

type WrapperProps = {
  emitter: Nanobus
  componentProps: LinkEditorProps
  Component: ElementType
}
function Wrapper({
  emitter,
  componentProps,
  Component,
}: WrapperProps): JSX.Element {
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
): { destroy: () => void; update: (props: LinkEditorProps) => void } => {
  const emitter = new Nanobus()
  const node = document.createElement("div")
  parentNode.appendChild(node)
  const root = createRoot(node)

  root.render(
    <Wrapper
      componentProps={componentProps}
      Component={Component}
      emitter={emitter}
    />
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
