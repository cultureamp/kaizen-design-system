import React, { useEffect, useId } from 'react'
import {
  GenericNotificationType,
  GenericNotificationVariant,
} from '~components/Notification/subcomponents/GenericNotification'
import { useToastNotificationContext } from '../context/ToastNotificationContext'
import { ToastNotificationObjBase } from '../types'

export type ToastNotificationProps = Omit<
  ToastNotificationObjBase,
  'id' | 'message' | 'persistent'
> & {
  children: React.ReactNode
  id?: string
  /**
   * Removes the dismiss trigger. Functions the same as `persistent` in `addToastNotification`.
   * If this is true you will need to manage the removal of notifications manually.
   * @default false
   */
  hideCloseIcon?: boolean
} & (GenericNotificationType | GenericNotificationVariant)

export const ToastNotification = ({
  id: propsId,
  hideCloseIcon = false,
  title,
  onHide,
  children,
  ...restProps
}: ToastNotificationProps): null => {
  const fallbackId = useId()
  const id = propsId ?? fallbackId
  const { addToastNotification } = useToastNotificationContext()
  const persistent = hideCloseIcon

  useEffect(() => {
    addToastNotification({
      id,
      title,
      message: children,
      persistent,
      onHide,
      ...restProps,
    })
    // Only run on first render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

ToastNotification.displayName = 'ToastNotification'
