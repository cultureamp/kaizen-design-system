import React, { useEffect, useRef, useState } from "react"
import { InputEditModal } from "~components/Modal"
import { TextField } from "~components/TextField"
import { ValidationResponse, validateLink } from "../../validation"

type LinkModalProps = {
  onSubmit: (href: string) => void
  onDismiss: () => void
  onAfterLeave: () => void
  isOpen: boolean
  defaultHref?: string
}

export const LinkModal = ({
  onSubmit,
  onDismiss,
  onAfterLeave,
  isOpen,
  defaultHref,
}: LinkModalProps): JSX.Element => {
  const [href, setHref] = useState<string>(defaultHref || "")
  const [validationStatus, setValidationStatus] = useState<ValidationResponse>({
    status: "default",
  })
  const [inputEl, setInputEl] = useState<HTMLInputElement | null>(null)
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

  useEffect(() => {
    if (inputRef.current) {
      setInputEl(inputRef.current)
    }
  }, [])

  return (
    <InputEditModal
      submitLabel={defaultHref ? "Save" : "Add"}
      mood="positive"
      isOpen={isOpen}
      title={defaultHref ? "Edit link" : "Add link"}
      onSubmit={handleSubmit}
      onDismiss={onDismiss}
      onAfterLeave={onAfterLeave}
      onOpenFocusTo={inputEl}
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
