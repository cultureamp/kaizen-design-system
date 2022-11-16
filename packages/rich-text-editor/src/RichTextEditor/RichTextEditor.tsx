import React, { useState, useEffect, HTMLAttributes, ReactNode } from "react"
import { v4 } from "uuid"
import classnames from "classnames"
import {
  ProseMirrorCommands,
  ProseMirrorState,
  ProseMirrorModel,
  ProseMirrorKeymap,
  ProseMirrorHistory,
  useRichTextEditor,
  createLinkManager,
} from "@kaizen/rich-text-toolkit"
import { FieldMessage, Label } from "@kaizen/draft-form"
import { OverrideClassName } from "@kaizen/component-base"
import { InlineNotification } from "@kaizen/notification"
import { ToolbarItems, EditorContentArray, EditorRows } from "../types"
import { createSchemaFromControls } from "./schema"
import { buildKeymap } from "./keymap"
import { buildControlMap } from "./controlmap"
import { buildInputRules } from "./inputrules"
import styles from "./RichTextEditor.module.scss"
import { Toolbar, ToolbarSection, ToggleIconButton } from "./"

export interface BaseRichTextEditorProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "onChange">> {
  onChange: (content: EditorContentArray) => void
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
export const RichTextEditor: React.VFC<RichTextEditorProps> = props => {
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
  const [schema] = useState<ProseMirrorModel.Schema>(
    createSchemaFromControls(controls)
  )
  const [labelId] = useState<string>(labelledBy || v4())
  const [editorId] = useState<string>(v4())

  const useRichTextEditorResult = (() => {
    try {
      return useRichTextEditor(
        ProseMirrorState.EditorState.create({
          doc: value
            ? ProseMirrorModel.Node.fromJSON(schema, {
                type: "doc",
                content: value,
              })
            : undefined,
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
    onChange(editorState.toJSON().doc.content)
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
                    onClick={() => dispatchTransaction(controlConfig.action)}
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
            { [styles.hasToolbar]: controls != null && controls.length > 0 }
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
  schema: ProseMirrorModel.Schema
) {
  const allControlNames: string[] = controls
    ? controls.reduce((acc: string[], c: ToolbarItems) => [...acc, c.name], [])
    : []
  const plugins = [
    ProseMirrorHistory.history(),
    ProseMirrorKeymap.keymap(buildKeymap(schema)),
    ProseMirrorKeymap.keymap(ProseMirrorCommands.baseKeymap),
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
