import React, {
  useState,
  useEffect,
  HTMLAttributes,
  ReactNode,
  useId,
} from "react"
import classnames from "classnames"
import { FieldMessage } from "~components/FieldMessage"
import { Label } from "~components/Label"
import { InlineNotification } from "~components/Notification"
import { OverrideClassName } from "~types/OverrideClassName"
import { ToolbarItems, EditorContentArray, EditorRows } from "../types"
import { useRichTextEditor } from "../utils/core"
import { createLinkManager } from "../utils/plugins"
import {
  ProseMirrorCommands,
  ProseMirrorHistory,
  ProseMirrorKeymap,
  ProseMirrorModel,
  ProseMirrorState,
} from "../utils/prosemirror"
import { createSchemaFromControls } from "./schema"
import { ToggleIconButton } from "./subcomponents/ToggleIconButton"
import { Toolbar } from "./subcomponents/Toolbar"
import { ToolbarSection } from "./subcomponents/ToolbarSection"
import { buildControlMap } from "./utils/controlmap"
import { buildInputRules } from "./utils/inputrules"
import { buildKeymap } from "./utils/keymap"
import styles from "./RichTextEditor.module.scss"

type BaseRichTextEditorProps = {
  onChange: (content: ProseMirrorState.EditorState) => void
  defaultValue: EditorContentArray
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
} & OverrideClassName<
  Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">
>

type WithLabelText = {
  labelText: ReactNode
  "aria-labelledby"?: never
}

type WithLabelledBy = {
  labelText?: never
  "aria-labelledby": string
}

export type RichTextEditorProps = BaseRichTextEditorProps &
  (WithLabelText | WithLabelledBy)
/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896752/Rich+Text+Editor Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-richtexteditor--docs Storybook}
 */
export const RichTextEditor = ({
  onChange,
  defaultValue,
  labelText,
  "aria-labelledby": labelledBy,
  "aria-describedby": describedBy,
  classNameOverride,
  controls,
  rows = 3,
  dataError,
  onDataError,
  validationMessage,
  description,
  status = "default",
  ...restProps
}: RichTextEditorProps): JSX.Element => {
  const reactId = useId()
  const [schema] = useState<ProseMirrorModel.Schema>(
    createSchemaFromControls(controls)
  )
  const [labelId] = useState<string>(labelledBy || reactId)
  const [editorId] = useState<string>(reactId)

  const useRichTextEditorResult = (():
    | ReturnType<typeof useRichTextEditor>
    | Error => {
    try {
      return useRichTextEditor(
        ProseMirrorState.EditorState.create({
          doc: ProseMirrorModel.Node.fromJSON(schema, {
            type: "doc",
            // we're converting empty arrays to the ProseMirror default "empty" state because when
            // given an empty array ProseMirror returns undefined, breaking the type
            content:
              defaultValue?.length > 0 ? defaultValue : [{ type: "paragraph" }],
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
      <InlineNotification
        headingProps={{
          children: "Error",
          variant: "heading-6",
        }}
        type="negative"
        persistent
      >
        {dataError || "Something went wrong"}
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

  const ariaDescribedBy = classnames(
    validationMessageAria,
    descriptionAria,
    describedBy
  )

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

RichTextEditor.displayName = "RichTextEditor"

function getPlugins(
  controls: ToolbarItems[] | undefined,
  schema: ProseMirrorModel.Schema
): Array<
  | ProseMirrorState.Plugin<unknown>
  | ProseMirrorState.Plugin<{
      transform: ProseMirrorState.Transaction
      from: number
      to: number
      text: string
    } | null>
> {
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
