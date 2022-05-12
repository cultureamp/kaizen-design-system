import React, { useState, useRef } from "react"
import { InputEditModal } from "@kaizen/draft-modal"
import { TextField } from "@kaizen/draft-form"

interface LinkModalProps {
  onSubmit: (href: string) => void
  onDismiss: () => void
  onAfterLeave: () => void
  isOpen: boolean
  defaultHref?: string
}

export const LinkModal: React.VFC<LinkModalProps> = props => {
  const { onSubmit, onDismiss, onAfterLeave, isOpen, defaultHref } = props
  const [href, setHref] = useState<string>(defaultHref || "")
  const [validationError, setValidationError] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (href.trim().length < 1) {
      inputRef.current?.focus()
      setValidationError(true)
      return
    }

    onSubmit(href)
  }

  return (
    <InputEditModal
      submitLabel={defaultHref ? "Save" : "Add"}
      mood="positive"
      isOpen={isOpen}
      title={defaultHref ? "Edit link" : "Add link"}
      onSubmit={handleSubmit}
      onDismiss={onDismiss}
      onAfterLeave={onAfterLeave}
    >
      <TextField
        id="href"
        type="text"
        defaultValue={href ?? ""}
        labelText="Link URL"
        inputRef={inputRef}
        validationMessage={validationError ? "Please enter a URL" : undefined}
        status={validationError ? "error" : undefined}
        onChange={e => {
          setHref(e.target.value)
        }}
        inline
      />
    </InputEditModal>
  )
}

LinkModal.displayName = "LinkModal"
