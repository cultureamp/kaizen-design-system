import React, { useState, useEffect, HTMLAttributes, ReactNode } from "react"
import { v4 } from "uuid"
import classnames from "classnames"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { EditorState } from "prosemirror-state"
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
import { createInitialState, createDocFromContent } from "./state"
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
}

export const RichTextEditor: React.VFC<RichTextEditorProps> = props => {
  const {
    onChange,
    value,
    labelText,
    classNameOverride,
    controls,
    ...restProps
  } = props
  const [schema] = useState<Schema>(createSchemaFromControls([]))
  const marksFromControls =
    controls &&
    controls.map(controlGroup =>
      controlGroup.map(control => schema.marks[control])
    )
  console.log("controls:", controls)
  console.log("marks from control:", marksFromControls)
  const [labelId] = useState<string>(v4())
  const [editorRef, editorState, dispatchTransaction] = useRichTextEditor(
    EditorState.create({
      doc: value
        ? Node.fromJSON(schema, {
            type: "doc",
            contentObject: value,
          })
        : null,
      schema,
      plugins: [
        history(),
        keymap({
          ...baseKeymap,
          ...buildKeymap(schema),
        }),
        buildInputRules(),
      ],
    }),
    { "aria-labelledby": labelId }
  )

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)
    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
  }, [editorState])

  return (
    <>
      {labelText && <Label id={labelId} labelText={labelText} />}
      {/* TODO: add a bit of margin here once we have a classNameOverride on Label */}
      <Toolbar aria-controls="toolbar-ref-id" aria-label="Test Toolbar">
        {controls &&
          marksFromControls?.map((controlSection, sectionIndex) => (
            <ToolbarSection key={sectionIndex}>
              {controlSection.map((mark, markIndex) => {
                // const isActive = markIsActive(editorState, mark) || false
                // const action = !isActive ? addMark(mark) : removeMark(mark)
                console.log(mark)
                return (
                  <ToggleIconButton
                    key={markIndex}
                    icon={mark.spec.control.icon}
                    label={mark.spec.control.label}
                    // isActive={isActive}
                    // onClick={() => dispatchTransaction(action)}
                  />
                )
              })}
            </ToolbarSection>
          ))}
      </Toolbar>
      <div
        ref={editorRef}
        className={classnames(styles.editor, classNameOverride)}
        {...restProps}
      />
    </>
  )
}

RichTextEditor.displayName = "RichTextEditor"
