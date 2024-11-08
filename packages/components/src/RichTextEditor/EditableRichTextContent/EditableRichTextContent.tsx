import React, { MouseEvent, HTMLAttributes } from "react"
import classnames from "classnames"
import { Label } from "~components/Label"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { OverrideClassName } from "~components/types/OverrideClassName"
import { RichTextContent, RichTextContentProps } from "../RichTextContent"
import { EditorContentArray } from "../types"
import styles from "./EditableRichTextContent.module.scss"

export type EditableRichTextContentProps = {
  onClick: (event: MouseEvent<HTMLElement>) => void
  content: EditorContentArray
  labelText: string
  isLabelHidden?: boolean
  contentProps?: Omit<RichTextContentProps, "content">
} & OverrideClassName<
  Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "content">
>

const handleEditableClick = (
  e: MouseEvent<HTMLElement>,
  onClick: (event: MouseEvent<HTMLElement>) => void,
): void => {
  if ((e.target as HTMLElement).hasAttribute("href")) {
    return
  }
  return onClick(e)
}

export const EditableRichTextContent = ({
  onClick,
  content,
  classNameOverride,
  labelText,
  isLabelHidden = false,
  contentProps,
  ...restProps
}: EditableRichTextContentProps): JSX.Element => (
  <>
    {!isLabelHidden && (
      <Label classNameOverride={styles.editorLabel} labelText={labelText} />
    )}
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
      <RichTextContent content={content} {...contentProps} />
    </div>
  </>
)

EditableRichTextContent.displayName = "EditableRichTextContent"
