import React, { MouseEvent, HTMLAttributes } from "react"
import classnames from "classnames"
import { VisuallyHidden } from "@kaizen/a11y"
import { OverrideClassName } from "@kaizen/component-base"
import { Label } from "@kaizen/draft-form"
import { EditorContentArray, RichTextContent } from "../../"
import styles from "./EditableRichTextContent.module.scss"

export interface EditableRichTextContentProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "onClick">> {
  onClick: (event: MouseEvent<HTMLElement>) => void
  content: EditorContentArray
  labelText: string
  isLabelHidden?: boolean
}

const handleEditableClick = (
  e: MouseEvent<HTMLElement>,
  onClick: (event: MouseEvent<HTMLElement>) => void
): void => {
  if ((e.target as HTMLElement).hasAttribute("href")) {
    return
  }
  return onClick(e)
}

export const EditableRichTextContent = (props: EditableRichTextContentProps): JSX.Element => {
  const {
    onClick,
    content,
    classNameOverride,
    labelText,
    isLabelHidden = false,
    ...restProps
  } = props

  return (
    <>
      {!isLabelHidden && <Label labelText={labelText} />}
      {/* Disabling these a11y linting errors because there is a <button> that mitigates these concerns. The onClick here is just an additional layer. */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        onClick={(e): void => handleEditableClick(e, onClick)}
        className={classnames(styles.editableContainer, classNameOverride)}
        {...restProps}
      >
        <VisuallyHidden classNameOverride={styles.hiddenButton}>
          <button
            type="button"
            onClick={onClick}
            aria-label={`Edit ${labelText}`}
          />
        </VisuallyHidden>
        <RichTextContent content={content} />
      </div>
    </>
  )
}

EditableRichTextContent.displayName = "EditableRichTextContent"
