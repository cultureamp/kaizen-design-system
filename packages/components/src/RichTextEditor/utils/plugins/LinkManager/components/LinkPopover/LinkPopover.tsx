import React from 'react'
import { usePopover } from '~components/Popover'
import { Text } from '~components/Text'
import { Icon } from '~components/__future__/Icon'
import { SelectionPosition } from '../../types'
import { Positioner } from './Positioner'
import styles from './LinkPopover.module.scss'

export type LinkPopoverProps = {
  href?: string
  onRemove: () => void
  onEdit: () => void
  selectionPosition: SelectionPosition
}

export const LinkPopover = ({
  href,
  onRemove,
  onEdit,
  selectionPosition,
}: LinkPopoverProps): JSX.Element => {
  const [ElementRef, Popover] = usePopover()

  return (
    <>
      <Positioner ref={ElementRef} {...selectionPosition} />
      <Popover size="large">
        <div className={styles.popoverContent}>
          <Icon name="open_in_new" isPresentational />
          <div className={styles.popoverLinkContainer}>
            <Text variant="body" tag="div" classNameOverride={styles.paragraphFlex}>
              <a
                className={styles.popoverLink}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {href}
              </a>
            </Text>
          </div>
          <div className={styles.popoverActions}>
            <Icon name="edit" onClick={onEdit} alt="Edit link" />
          </div>
          <Icon name="link_off" onClick={onRemove} alt="Remove link" />
        </div>
      </Popover>
    </>
  )
}

LinkPopover.displayName = 'LinkPopover'
