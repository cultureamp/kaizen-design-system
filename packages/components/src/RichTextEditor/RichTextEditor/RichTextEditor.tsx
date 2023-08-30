import React, { useState, useEffect, HTMLAttributes, ReactNode } from "react"
import classnames from "classnames"
import { baseKeymap } from "prosemirror-commands"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { Schema, Node } from "prosemirror-model"
import { EditorState, Plugin, Transaction } from "prosemirror-state"
import { v4 } from "uuid"
import { FieldMessage, Label } from "@kaizen/draft-form"
import { InlineNotification } from "~components/Notification"
import { OverrideClassName } from "~types/OverrideClassName"
import { useRichTextEditor, createLinkManager } from "../RichTextToolkit"
import { Toolbar, ToolbarSection, ToggleIconButton } from "../subcomponents"
import { ToolbarItems, EditorContentArray, EditorRows } from "../types"
import { buildControlMap } from "../utils/controlmap"
import { buildInputRules } from "../utils/inputrules"
import { buildKeymap } from "../utils/keymap"
import { createSchemaFromControls } from "../utils/schema"
import styles from "./RichTextEditor.module.scss"

export interface BaseRichTextEditorProps
  extends OverrideClassName<
    Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "content">
  > {
  onChange: (content: EditorState) => void
  value: EditorContentArray
  controls?: ToolbarItems[]
  /**
   * Sets a default min-height for the editable area in units of body paragraph line height, similar to the 'rows' attribute on <textarea>.
   * The editable area will autogrow, so this only affects the component when the content doesn't exceed this height.
   */
  rows?: EditorRows
  dataError?: React.ReactElement
  onDataError?: () => void
  status?: "default" | "error" | "caution"
  /**
   * A descriptive message for `error` or `caution` states
   */
  validationMessage?: React.ReactNode
  /**
   * A description that provides context
   */
  description?: React.ReactNode
}

interface RTEWithLabelText extends BaseRichTextEditorProps {
  labelText: ReactNode
  "aria-labelledby"?: never
}

interface RTEWithLabelledBy extends BaseRichTextEditorProps {
  labelText?: never
  "aria-labelledby": string
}

export type RichTextEditorProps = RTEWithLabelText | RTEWithLabelledBy
/**
 * {@link https://cultureamp.design/components/rich-text-editor/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-rich-text-editor--default Storybook}
 */
export const RichTextEditor = (props: RichTextEditorProps): JSX.Element => {
  const {
    onChange,
    value,
    labelText,
    "aria-labelledby": labelledBy,
    classNameOverride,
    controls,
    rows = 3,
    dataError = "Something went wrong",
    onDataError,
    validationMessage,
    description,
    status = "default",
    ...restProps
  } = props
  const [schema] = useState<Schema>(createSchemaFromControls(controls))
  const [labelId] = useState<string>(labelledBy || v4())
  const [editorId] = useState<string>(v4())

  const useRichTextEditorResult = (():
    | ReturnType<typeof useRichTextEditor>
    | Error => {
    try {
      return useRichTextEditor(
        EditorState.create({
          doc: Node.fromJSON(schema, {
            type: "doc",
            // we're converting empty arrays to the ProseMirror default "empty" state because when
            // given an empty array ProseMirror returns undefined, breaking the type
            content: value?.length > 0 ? value : [{ type: "paragraph" }],
          }),
          schema,
          plugins: getPlugins(controls, schema),
        }),
        { "aria-labelledby": labelId, role: "textbox" }
      )
    } catch {
      return new Error("Bad data error")
    }
  })()

  if (useRichTextEditorResult instanceof Error) {
    onDataError && onDataError()
    return (
      <InlineNotification title="Error" type="negative" persistent>
        {dataError}
      </InlineNotification>
    )
  }

  const [editorRef, editorState, dispatchTransaction] = useRichTextEditorResult

  const controlMap = buildControlMap(schema, editorState, controls)

  useEffect(() => {
    onChange(editorState)
    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
  }, [editorState])

  const validationMessageAria = validationMessage
    ? `${editorId}-rte-validation-message`
    : ""
  const descriptionAria = description ? `${editorId}-rte-description` : ""

  const ariaDescribedBy = `${validationMessageAria} ${descriptionAria}`

  return (
    <>
      {!labelledBy && labelText && <Label id={labelId} labelText={labelText} />}
      {/* TODO: add a bit of margin here once we have a classNameOverride on Label */}
      <div className={classnames(styles.editorWrapper, styles[status])}>
        {controls && (
          <Toolbar
            aria-controls={editorId}
            aria-label="Text formatting"
            classNameOverride={styles.toolbar}
          >
            {controlMap.map((section, index) => (
              <ToolbarSection key={index}>
                {section.map((controlConfig, controlKeyIndex) => (
                  <ToggleIconButton
                    key={controlKeyIndex}
                    icon={controlConfig.icon}
                    disabled={controlConfig.disabled}
                    label={controlConfig.label}
                    isActive={controlConfig.isActive}
                    onClick={(): void =>
                      dispatchTransaction(controlConfig.action)
                    }
                  />
                ))}
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
            classNameOverride,
            controls != null && controls.length > 0 && styles.hasToolbar
          )}
          aria-describedby={ariaDescribedBy}
          {...restProps}
        />
      </div>

      {validationMessage && (
        <FieldMessage
          id={validationMessageAria}
          message={validationMessage}
          status={status}
        />
      )}

      {description && (
        <FieldMessage id={descriptionAria} message={description} />
      )}
    </>
  )
}

function getPlugins(
  controls: ToolbarItems[] | undefined,
  schema: Schema
): Array<
  | Plugin<unknown>
  | Plugin<{
      transform: Transaction
      from: number
      to: number
      text: string
    } | null>
> {
  const allControlNames: string[] = controls
    ? controls.reduce((acc: string[], c: ToolbarItems) => [...acc, c.name], [])
    : []
  const plugins = [
    history(),
    keymap(buildKeymap(schema)),
    keymap(baseKeymap),
    buildInputRules(schema),
  ]

  if (allControlNames.includes("link")) {
    plugins.push(
      createLinkManager({
        markType: schema.marks.link,
      })
    )
  }

  return plugins
}

RichTextEditor.displayName = "RichTextEditor"
