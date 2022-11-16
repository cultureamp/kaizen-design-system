import React from "react"
import { IconButton } from "@kaizen/button"
import { Box, Icon } from "@kaizen/component-library"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import externalLinkIcon from "@kaizen/component-library/icons/external-link.icon.svg"
import removeLinkIcon from "@kaizen/component-library/icons/remove-link.icon.svg"
import { usePopover } from "@kaizen/draft-popover"
import { Paragraph } from "@kaizen/typography"
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
          <Icon icon={externalLinkIcon} role="presentation" />
          <Box pl={0.5} pr={0.75}>
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
          </Box>
          <Box pr={0.25} pl={0.25} classNameOverride={styles.popoverActions}>
            <IconButton onClick={onEdit} icon={editIcon} label="Edit link" />
          </Box>
          <IconButton
            onClick={onRemove}
            icon={removeLinkIcon}
            label="Remove link"
          />
        </div>
      </Popover>
    </>
  )
}

LinkPopover.displayName = "LinkPopover"
