import { ScaleValue, ScaleItem } from "../types"

/**
 * Takes a keypress on a div that's imitating a radio and determines where the selection should go.
 * Uses the following as a guide, with one modification - allowing space press on a selected item to unselect:
 * https://www.w3.org/TR/wai-aria-practices/examples/radio/radio-1/radio-1.html
 */

const SCALE_VALUE_RESPONSE = new Map<number, ScaleValue>([
  [-1, -1],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
])

const determineSelectionFromKeyPress = (
  keyCode: number,
  currentSelection: ScaleItem | null,
  focusedItem: ScaleItem
): null | ScaleValue => {
  const supportedKeyCodes = [32, 37, 38, 39, 40]
  if (supportedKeyCodes.indexOf(keyCode) === -1) {
    return null
  }

  const spacePressed = keyCode === 32
  const backPressed = keyCode === 37 || keyCode === 38
  const forwardPressed = keyCode === 39 || keyCode === 40
  const noCurrentSelection = !currentSelection || currentSelection.value <= 0

  if (spacePressed) {
    return noCurrentSelection ? focusedItem.value : -1
  }

  if (noCurrentSelection || !currentSelection) {
    if (backPressed) {
      return oneSelectionBackward(focusedItem.value)
    }
    return oneSelectionForward(focusedItem.value)
  }

  if (backPressed) {
    return oneSelectionBackward(currentSelection.value)
  }

  if (forwardPressed) {
    return oneSelectionForward(currentSelection.value)
  }

  return null
}

const oneSelectionForward = (value: ScaleValue): ScaleValue | null => {
  if (value === 5) {
    return 1
  }
  const calculatedPosition = SCALE_VALUE_RESPONSE.get(value + 1)
  return calculatedPosition || null
}

const oneSelectionBackward = (value: ScaleValue): ScaleValue | null => {
  if (value === 1) {
    return 5
  }
  const calculatedPosition = SCALE_VALUE_RESPONSE.get(value - 1)
  return calculatedPosition || null
}

export default determineSelectionFromKeyPress
