import React, { useRef, useState } from "react"
import { InputEditModal } from "~components/Modal"
import { TextField } from "~components/TextField"
import { ValidationResponse, validateLink } from "../../validation"

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
  const [validationStatus, setValidationStatus] = useState<ValidationResponse>({
    status: "default",
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (): void => {
    const validation = validateLink(href)
    if (validation.status !== "success") {
      inputRef.current?.focus()
      setValidationStatus(validation)
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
        validationMessage={validationStatus.message}
        status={validationStatus.status}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setHref(e.target.value)
        }}
        inline
      />
    </InputEditModal>
  )
}

LinkModal.displayName = "LinkModal"
