import React from "react"
import { Paragraph } from "@kaizen/typography"
import { IconButton } from "~components/Button"
import { RemoveLinkIcon, ExternalLinkIcon, EditIcon } from "~components/Icons"
import { usePopover } from "~components/Popover"
import { SelectionPosition } from "../../types"
import { Positioner } from "./Positioner"
import styles from "./LinkPopover.scss"

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
          <div className={styles.linkContent}>
            <Paragraph
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
            </Paragraph>
          </div>

          <div className={styles.popoverActions}>
            {/* TODO: replace with IconButton when ported across */}
            <button aria-label="Edit link" type="button" onClick={onEdit}>
              <EditIcon role="presentation" />
            </button>
          </div>
          {/* TODO: replace with IconButton when ported across */}
          <button aria-label="Remove link" type="button" onClick={onRemove}>
            <RemoveLinkIcon role="presentation" />
          </button>
        </div>
      </Popover>
    </>
  )
}

LinkPopover.displayName = "LinkPopover"
