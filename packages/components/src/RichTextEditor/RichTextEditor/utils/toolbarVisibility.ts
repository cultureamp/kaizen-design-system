import { type ToolbarControlTypes, type ToolbarItems } from '../../types'

export const getToolbarVisibleControlNames = (controls: ToolbarItems[]): Set<ToolbarControlTypes> =>
  new Set(
    controls.filter((control) => control.showInToolbar !== false).map((control) => control.name),
  )

export const hasVisibleToolbarControls = (controls?: ToolbarItems[]): boolean => {
  if (!controls) return false
  return getToolbarVisibleControlNames(controls).size > 0
}
