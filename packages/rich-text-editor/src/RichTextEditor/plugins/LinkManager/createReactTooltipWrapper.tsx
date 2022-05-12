import Nanobus from "nanobus"
import React, { ElementType, useEffect, useState } from "react"
import ReactDOM from "react-dom"

export type TooltipComponentType = string | unknown

function Wrapper({
  emitter,
  componentProps,
  Component,
}: {
  emitter: Nanobus
  componentProps: TooltipComponentType
  Component: ElementType
}) {
  const [localComponentProps, setLocalComponentProps] =
    useState<TooltipComponentType>(componentProps)

  useEffect(() => {
    function onUpdate(newComponentProps: TooltipComponentType) {
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
export function createReactTooltipWrapper(
  parentNode: HTMLElement,
  Component: ElementType,
  componentProps: TooltipComponentType
) {
  const emitter = new Nanobus()
  const node = document.createElement("div")
  parentNode.appendChild(node)

  ReactDOM.render(
    <Wrapper
      componentProps={componentProps}
      Component={Component}
      emitter={emitter}
    />,
    node
  )

  function destroy() {
    ReactDOM.unmountComponentAtNode(node)
    emitter.removeAllListeners("*")
    node.remove()
  }

  function update(props: TooltipComponentType) {
    emitter.emit("update", props)
  }

  return { destroy, update }
}
