import React, { useState, useEffect, HTMLAttributes, ReactNode } from "react"
import { v4 } from "uuid"
import classnames from "classnames"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { Node, Schema, MarkType, NodeType } from "prosemirror-model"
import { wrapInList } from "prosemirror-schema-list"
import { EditorState } from "prosemirror-state"
import { Label } from "@kaizen/draft-form"
import { baseKeymap } from "prosemirror-commands"
import {
  useRichTextEditor,
  markIsActive,
  removeMark,
  addMark,
} from "@cultureamp/rich-text-toolkit"
import { OverrideClassName } from "@kaizen/component-base"
import { EditorContentArray, EditorRows } from "./types"
import { createSchemaFromControls } from "./schema"
import { buildKeymap } from "./keymap"
import { buildInputRules } from "./inputrules"
import styles from "./RichTextEditor.scss"
import { Toolbar, ToolbarSection, ToggleIconButton } from "./"

export type ToolbarControls =
  | "bold"
  | "italic"
  | "underline"
  | "bullet_list"
  | "ordered_list"

type ToolbarControlSpec = MarkType | NodeType
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
  rows?: EditorRows
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
  const [editorId] = useState<string>(v4())
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
        keymap(buildKeymap(schema)),
        keymap(baseKeymap),
        buildInputRules(schema),
      ],
    }),
    { "aria-labelledby": labelId }
  )

  const toolbarItemsFromControls: ToolbarControlSpec[][] | undefined =
    controls?.map(controlGroup =>
      controlGroup.map(control => {
        if (schema.marks[control]) {
          return schema.marks[control]
        } else {
          return schema.nodes[control]
        }
      })
    )

  const createNodeAction = (node: NodeType) => {
    switch (node.name) {
      case "bullet_list":
        return () => {
          console.log("bullet list action")
          wrapInList(schema.nodes.bullet_list)
        }
      default:
        return console.log("no schema action")
    }
  }

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)
    console.log(schema)
    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
  }, [editorState])
  return (
    <>
      {labelText && <Label id={labelId} labelText={labelText} />}
      {/* TODO: add a bit of margin here once we have a classNameOverride on Label */}
      <div className={styles.editorWrapper}>
        {controls && (
          <Toolbar aria-controls={editorId} aria-label="Text formatting">
            {toolbarItemsFromControls?.map((controlSection, sectionIndex) => (
              <ToolbarSection key={sectionIndex}>
                {controlSection.map(
                  (control: MarkType | NodeType, controlIndex) => {
                    // console.log(control)
                    if (control instanceof NodeType) {
                      // TODO: function to generate node config
                      // nodes can respond differently so may require different implementations
                      // the main requirement is that a toggle-able action be passed into the button

                      const action = createNodeAction(control)
                      return (
                        <ToggleIconButton
                          key={controlIndex}
                          icon={control.spec.control.icon}
                          label={control.spec.control.label}
                          isActive={false}
                          onClick={() => dispatchTransaction(action)}
                        />
                      )
                    } else if (control instanceof MarkType) {
                      console.log(control)
                      // TODO: function to generate mark config
                      const isActive =
                        markIsActive(editorState, control) || false
                      const action = isActive
                        ? removeMark(control)
                        : addMark(control)
                      return (
                        <ToggleIconButton
                          key={controlIndex}
                          icon={control.spec.control.icon}
                          label={control.spec.control.label}
                          isActive={isActive}
                          onClick={() => dispatchTransaction(action)}
                        />
                      )
                    }
                  }
                )}
              </ToolbarSection>
            ))}
          </Toolbar>
        )}
        <div
          id={editorId}
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
