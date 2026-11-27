import React, { act } from 'react'
import { renderHook, type RenderHookResult } from '@testing-library/react'
import { type ToastNotificationObj } from '../types'
import {
  ToastNotificationProvider,
  useToastNotificationContext,
  type ToastNotificationContextValue,
} from './ToastNotificationContext'

const wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <ToastNotificationProvider>{children}</ToastNotificationProvider>
)

const renderToastContext = (): RenderHookResult<ToastNotificationContextValue, unknown> =>
  renderHook(() => useToastNotificationContext(), { wrapper })

const toast = (id: string, title = `Toast ${id}`): ToastNotificationObj => ({
  id,
  variant: 'success',
  title,
  message: `Message for ${id}`,
})

describe('ToastNotificationProvider', () => {
  it('keeps the action functions stable across toast changes', () => {
    const { result } = renderToastContext()
    const initial = result.current

    act(() => {
      initial.addToastNotification(toast('a'))
    })
    act(() => {
      initial.updateToastNotification(toast('a', 'Updated'))
    })
    act(() => {
      initial.removeToastNotification('a')
    })
    act(() => {
      initial.clearToastNotifications()
    })

    expect(result.current.addToastNotification).toBe(initial.addToastNotification)
    expect(result.current.updateToastNotification).toBe(initial.updateToastNotification)
    expect(result.current.removeToastNotification).toBe(initial.removeToastNotification)
    expect(result.current.clearToastNotifications).toBe(initial.clearToastNotifications)
  })

  it('keeps the context value stable when the provider re-renders without a toast change', () => {
    const { result, rerender } = renderToastContext()
    const initial = result.current

    rerender()

    expect(result.current).toBe(initial)
  })

  describe('addToastNotification', () => {
    it('generates an id when the id is explicitly undefined', () => {
      const { result } = renderToastContext()

      act(() => {
        result.current.addToastNotification({ ...toast('ignored'), id: undefined })
      })

      expect(result.current.notifications).toHaveLength(1)
      expect(result.current.notifications[0].id).toEqual(expect.any(String))
      expect(result.current.notifications[0].id).not.toBe('')
    })

    it('does not add a toast whose id is already in the list', () => {
      const { result } = renderToastContext()

      act(() => {
        result.current.addToastNotification(toast('a'))
        result.current.addToastNotification(toast('a', 'Duplicate'))
      })

      expect(result.current.notifications).toEqual([toast('a')])
    })
  })

  describe('updateToastNotification', () => {
    it('replaces the toast with the matching id', () => {
      const { result } = renderToastContext()

      act(() => {
        result.current.addToastNotification(toast('a'))
        result.current.addToastNotification(toast('b'))
      })
      act(() => {
        result.current.updateToastNotification(toast('a', 'Updated'))
      })

      expect(result.current.notifications).toEqual([toast('a', 'Updated'), toast('b')])
    })

    it('leaves the list unchanged when the id is not found', () => {
      const { result } = renderToastContext()

      act(() => {
        result.current.addToastNotification(toast('a'))
        result.current.addToastNotification(toast('b'))
      })
      const before = result.current.notifications

      act(() => {
        result.current.updateToastNotification(toast('unknown'))
      })

      expect(result.current.notifications).toBe(before)
      expect(result.current.notifications).toEqual([toast('a'), toast('b')])
    })

    it('keeps toasts added after the update function was captured', () => {
      const { result } = renderToastContext()

      act(() => {
        result.current.addToastNotification(toast('a'))
      })
      const { updateToastNotification } = result.current

      act(() => {
        result.current.addToastNotification(toast('b'))
      })
      act(() => {
        updateToastNotification(toast('a', 'Updated'))
      })

      expect(result.current.notifications).toEqual([toast('a', 'Updated'), toast('b')])
    })
  })
})
