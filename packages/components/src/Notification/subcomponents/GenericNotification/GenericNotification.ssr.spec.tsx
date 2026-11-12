import React, { StrictMode } from 'react'
import { act, fireEvent } from '@testing-library/react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { GlobalNotification } from '../../GlobalNotification'
import { GenericNotification } from './GenericNotification'

describe('notification SSR and hydration', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it.each(['global', 'inline', 'toast'] as const)(
    'does not serialize style attributes for the %s animation',
    (style) => {
      const html = renderToString(
        <GenericNotification style={style} variant="informative">
          Notification
        </GenericNotification>,
      )
      expect(html).not.toMatch(/\sstyle=/i)
    },
  )

  it.each([1, 2])('hydrates %i global notifications without mismatches', async (count) => {
    const notifications = (
      <StrictMode>
        {Array.from({ length: count }, (_, index) => (
          <GlobalNotification key={index} variant="informative" persistent={index === 0}>
            Notification {index + 1}
          </GlobalNotification>
        ))}
      </StrictMode>
    )
    const container = document.createElement('div')
    container.innerHTML = renderToString(notifications)
    document.body.append(container)
    const onRecoverableError = vi.fn()
    const consoleError = vi.spyOn(console, 'error')
    const frames = new Map<number, FrameRequestCallback>()
    let nextFrame = 0
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      frames.set(++nextFrame, callback)
      return nextFrame
    })
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => {
      frames.delete(id)
    })

    const root = hydrateRoot(container, notifications, { onRecoverableError })
    try {
      await act(() => Promise.resolve())
      // StrictMode cancels the first effect's frame before scheduling its replacement.
      expect(frames.size).toBe(count)
      await act(async () => {
        frames.forEach((callback) => callback(0))
        frames.clear()
      })
      expect(container.querySelectorAll('[style]')).toHaveLength(0)
      expect(onRecoverableError).not.toHaveBeenCalled()
      expect(consoleError).not.toHaveBeenCalled()
    } finally {
      await act(async () => root.unmount())
      container.remove()
    }
  })

  it('cancels the entrance frame when unmounted before it runs', async () => {
    vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(42)
    const cancelFrame = vi.spyOn(window, 'cancelAnimationFrame')
    const container = document.createElement('div')
    const notification = <GlobalNotification variant="success">Notification</GlobalNotification>
    container.innerHTML = renderToString(notification)
    const root = hydrateRoot(container, notification)
    await act(() => Promise.resolve())
    await act(async () => root.unmount())
    expect(cancelFrame).toHaveBeenCalledWith(42)
  })

  it('can dismiss immediately after hydration without the entrance frame reopening it', async () => {
    vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(42)
    const cancelFrame = vi.spyOn(window, 'cancelAnimationFrame')
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(120)
    const onHide = vi.fn()
    const notification = (
      <GlobalNotification variant="success" onHide={onHide}>
        <span>Notification</span>
      </GlobalNotification>
    )
    const container = document.createElement('div')
    container.innerHTML = renderToString(notification)
    const root = hydrateRoot(container, notification)
    try {
      await act(() => Promise.resolve())
      const element = container.firstElementChild as HTMLDivElement
      const button = container.querySelector('button')!
      fireEvent.click(button)
      fireEvent.click(button)
      expect(cancelFrame).toHaveBeenCalledWith(42)
      expect(element.style.marginTop).toBe('-120px')
      expect(onHide).not.toHaveBeenCalled()

      const endTransition = (target: Element, propertyName: string): void => {
        const event = new Event('transitionend', { bubbles: true })
        Object.defineProperty(event, 'propertyName', { value: propertyName })
        fireEvent(target, event)
      }
      endTransition(button, 'margin-top')
      endTransition(element, 'opacity')
      expect(onHide).not.toHaveBeenCalled()
      endTransition(element, 'margin-top')
      expect(onHide).toHaveBeenCalledTimes(1)
      expect(container).toBeEmptyDOMElement()
    } finally {
      await act(async () => root.unmount())
    }
  })
})
