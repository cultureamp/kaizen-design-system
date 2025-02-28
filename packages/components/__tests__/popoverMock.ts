import { vi } from 'vitest'

export const popoverMock = (): any => {
  HTMLElement.prototype.showPopover = vi.fn()
  HTMLElement.prototype.hidePopover = vi.fn()
}
