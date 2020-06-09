interface NodeData {
  sizerId: string
  inputId: string
  defaultInputWidth: number
}

interface Ports {
  [key: string]: {
    subscribe: (arg?: (NodeData) => void) => void
  }
}

export default (ports: Ports) => {
  let activeMutationObserver: MutationObserver | undefined

  const config: MutationObserverInit = { characterData: true, subtree: true }

  const sizerCallback = (
    sizer: HTMLElement,
    input: HTMLElement,
    initialWidth: number,
    data: NodeData
  ): MutationCallback => {
    return () => {
      // Need to remove the initial width of the sizer to account for empty space.
      const currentSizerWidth: number =
        sizer.getBoundingClientRect().width - initialWidth
      // We also need to add the default width of the input which accounts for the cursor
      const calculatedInputWidth =
        currentSizerWidth < data.defaultInputWidth
          ? data.defaultInputWidth
          : currentSizerWidth + data.defaultInputWidth
      input.style.width = `${calculatedInputWidth.toString()}px`
    }
  }

  const initObserver = (
    sizer: HTMLElement,
    input: HTMLElement,
    nodeData: NodeData
  ): MutationObserver => {
    // The sizer does not start at 0px, we need to record the width and account for it in the calculation
    const initialSizerWidth: number = sizer.getBoundingClientRect().width
    activeMutationObserver = new MutationObserver(
      sizerCallback(sizer, input, initialSizerWidth, nodeData)
    )
    return activeMutationObserver
  }

  // PORTS

  ports.kaizenConnectSelectInputDynamicWidth.subscribe(
    (data: NodeData): void => {
      const sizerNode = document.getElementById(data.sizerId)
      const inputNode = document.getElementById(data.inputId)

      if (sizerNode && inputNode) {
        initObserver(sizerNode, inputNode, data).observe(sizerNode, config)
      }
    }
  )

  ports.kaizenDisconnectSelectInputDynamicWidth.subscribe(
    (data: NodeData): void => {
      const inputNode = document.getElementById(data.inputId)

      if (activeMutationObserver) {
        activeMutationObserver.disconnect()
      }

      if (inputNode) {
        inputNode.style.width = `${data.defaultInputWidth}px`
      }
    }
  )
}
