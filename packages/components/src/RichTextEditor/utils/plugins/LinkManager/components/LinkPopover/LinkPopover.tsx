import React from "react"
import { EditIcon, ExternalLinkIcon, RemoveLinkIcon } from "~components/Icon"
import { usePopover } from "~components/Popover"
import { Text } from "~components/Text"
import { SelectionPosition } from "../../types"
import { Positioner } from "./Positioner"
import styles from "./LinkPopover.module.scss"

export interface LinkPopoverProps {
  href?: string
  onRemove: () => void
  onEdit: () => void
  selectionPosition: SelectionPosition
}

export const LinkPopover: React.VFC<LinkPopoverProps> = props => {
  const { href, onRemove, onEdit, selectionPosition } = props
  const [ElementRef, Popover] = usePopover()

  return (
    <>
      <Positioner ref={ElementRef} {...selectionPosition} />
      <Popover size="large">
        <div className={styles.popoverContent}>
          <ExternalLinkIcon role="presentation" />
          <div className={styles.popoverLinkContainer}>
            <Text
              variant="body"
              tag="div"
              classNameOverride={styles.paragraphFlex}
            >
              <a
                className={styles.popoverLink}
                href={href != null ? href : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                {href}
              </a>
            </Text>
          </div>
          <div className={styles.popoverActions}>
            <EditIcon role="img" onClick={onEdit} aria-label="Edit link" />
          </div>
          <RemoveLinkIcon
            role="img"
            onClick={onRemove}
            aria-label="Remove link"
          />
        </div>
      </Popover>
    </>
  )
}

LinkPopover.displayName = "LinkPopover"
