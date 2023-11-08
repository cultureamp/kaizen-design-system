import React, { useState } from "react"
import { SelectionPosition } from "../../types"
import { LinkModal } from "../LinkModal"
import { LinkPopover } from "../LinkPopover"

export type LinkEditorAttrs = {
  href: string | null
  _metadata: { [key: string]: unknown } | null
}

export type LinkEditorProps = {
  removeMark: () => void
  updateAttrs: ({ href }: LinkEditorAttrs) => void
  attrs: LinkEditorAttrs
  selectionPosition: SelectionPosition
  focusEditor: () => void
}

export const LinkEditor = ({
  attrs,
  removeMark,
  updateAttrs,
  selectionPosition,
  focusEditor,
}: LinkEditorProps): JSX.Element => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(
    attrs.href != null
  )
  const [modalOpen, setModalOpen] = useState<boolean>(
    // eslint-disable-next-line no-underscore-dangle
    attrs._metadata?.added === true
  )

  const [href, setHref] = useState<string | undefined>(
    attrs.href ? attrs.href : undefined
  )

  return (
    <>
      {isPopoverOpen && (
        <LinkPopover
          href={href}
          selectionPosition={selectionPosition}
          onRemove={() => {
            removeMark()
            focusEditor()
          }}
          onEdit={() => {
            setIsPopoverOpen(false)
            setModalOpen(true)
          }}
        />
      )}
      <LinkModal
        defaultHref={href}
        isOpen={modalOpen}
        onAfterLeave={focusEditor}
        onSubmit={(submittedHref: string) => {
          setHref(submittedHref)
          updateAttrs({ href: submittedHref, _metadata: null })
          setModalOpen(false)
        }}
        onDismiss={() => {
          setModalOpen(false)
          if (href) {
            setIsPopoverOpen(true)
          } else {
            removeMark()
          }
        }}
      />
    </>
  )
}

LinkEditor.displayName = "LinkEditor"
