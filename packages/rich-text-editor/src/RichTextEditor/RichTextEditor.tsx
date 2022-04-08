import React, { useState, useEffect, HTMLAttributes, ReactNode } from "react"
import { v4 } from "uuid"
import classnames from "classnames"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { Node, Schema } from "prosemirror-model"
import { Label } from "@kaizen/draft-form"
import { baseKeymap } from "prosemirror-commands"
import {
  useRichTextEditor,
  markIsActive,
  removeMark,
  addMark,
} from "@cultureamp/rich-text-toolkit"
import { OverrideClassName } from "@kaizen/component-base"
import { EditorContentArray } from "./types"
import { createSchemaFromControls } from "./schema"
import { createInitialState } from "./state"
import { buildKeymap } from "./keymap"
import { buildInputRules } from "./inputrules"
import styles from "./RichTextEditor.scss"
import { Toolbar, ToolbarSection, ToggleIconButton } from "./"

type ToolbarControls = "strong" | "em" | "underline"
export interface RichTextEditorProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "onChange">> {
  onChange: (content: EditorContentArray) => void
  value: EditorContentArray
  labelText: ReactNode
  controls?: ToolbarControls[][]
  /**
   * Sets a default min-height for the editable area in units of body paragraph line height, similar to the 'rows' attribute on <textarea>.
   * The editable area will autogrow, so this only affects the component when the content doesn't exceed this height.
   */
  rows?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
}

export const RichTextEditor: React.VFC<RichTextEditorProps> = props => {
  const {
    onChange,
    value,
    labelText,
    classNameOverride,
    controls,
    rows = 3,
    ...restProps
  } = props
  const [schema] = useState<Schema>(
    createSchemaFromControls(controls?.flat() || [])
  )
  const [labelId] = useState<string>(v4())
  const [editorRef, editorState, dispatchTransaction] = useRichTextEditor(
    createInitialState(value, schema, [
      history(),
      keymap(buildKeymap(schema)),
      keymap(baseKeymap),
      buildInputRules(schema),
    ]),
    { "aria-labelledby": labelId }
  )
  const marksFromControls = controls?.map(controlGroup =>
    controlGroup.map(control => schema.marks[control])
  )

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)
    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
  }, [editorState])

  return (
    <>
      {labelText && <Label id={labelId} labelText={labelText} />}
      {/* TODO: add a bit of margin here once we have a classNameOverride on Label */}
      <div className={styles.editorWrapper}>
        {controls && (
          <Toolbar aria-controls="toolbar-ref-id" aria-label="Text formatting">
            {marksFromControls?.map((controlSection, sectionIndex) => (
              <ToolbarSection key={sectionIndex}>
                {controlSection.map((mark, markIndex) => {
                  const isActive = markIsActive(editorState, mark) || false
                  const action = isActive ? removeMark(mark) : addMark(mark)
                  return (
                    <ToggleIconButton
                      key={markIndex}
                      icon={mark.spec.control.icon}
                      label={mark.spec.control.label}
                      isActive={isActive}
                      onClick={() => dispatchTransaction(action)}
                    />
                  )
                })}
              </ToolbarSection>
            ))}
          </Toolbar>
        )}
        <div
          ref={editorRef}
          className={classnames(
            styles.editor,
            styles[`rows${rows}`],
            classNameOverride
          )}
          {...restProps}
        />
      </div>
    </>
  )
}

RichTextEditor.displayName = "RichTextEditor"
