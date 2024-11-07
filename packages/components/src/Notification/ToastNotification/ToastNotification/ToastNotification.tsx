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
  const reactId = useId()
  const id = propsId ?? reactId
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
  // Only run the callback once (proper fix would likely be a refactor)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

ToastNotification.displayName = 'ToastNotification'
