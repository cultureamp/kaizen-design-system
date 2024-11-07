import React, {
  useState,
  useEffect,
  HTMLAttributes,
  ReactNode,
  useId,
} from 'react'
import classnames from 'classnames'
import { FieldMessage } from '~components/FieldMessage'
import { Label } from '~components/Label'
import { InlineNotification } from '~components/Notification'
import { OverrideClassName } from '~components/types/OverrideClassName'
import { ToolbarItems, EditorContentArray, EditorRows } from '../types'
import { useRichTextEditor } from '../utils/core'
import { createLinkManager } from '../utils/plugins'
import {
  ProseMirrorCommands,
  ProseMirrorHistory,
  ProseMirrorKeymap,
  ProseMirrorModel,
  ProseMirrorState,
} from '../utils/prosemirror'
import { createSchemaFromControls } from './schema'
import { ToggleIconButton } from './subcomponents/ToggleIconButton'
import { Toolbar } from './subcomponents/Toolbar'
import { ToolbarSection } from './subcomponents/ToolbarSection'
import { buildControlMap } from './utils/controlmap'
import { buildInputRules } from './utils/inputrules'
import { buildKeymap } from './utils/keymap'
import styles from './RichTextEditor.module.scss'

type BaseRichTextEditorProps = {
  id?: string
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
  status?: 'default' | 'error' | 'caution'
  /**
   * A descriptive message for `error` or `caution` states
   */
  validationMessage?: React.ReactNode
  /**
   * A description that provides context
   */
  description?: React.ReactNode
} & OverrideClassName<
  Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>
>

type WithLabelText = {
  'labelText': ReactNode
  'aria-labelledby'?: never
}

type WithLabelledBy = {
  'labelText'?: never
  'aria-labelledby': string
}

export type RichTextEditorProps = BaseRichTextEditorProps &
  (WithLabelText | WithLabelledBy)
/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896752/Rich+Text+Editor Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-richtexteditor--docs Storybook}
 */
export const RichTextEditor = ({
  id,
  onChange,
  defaultValue,
  labelText,
  'aria-labelledby': labelledBy,
  'aria-describedby': describedBy,
  classNameOverride,
  controls,
  rows = 3,
  dataError,
  onDataError,
  validationMessage,
  description,
  status = 'default',
  ...restProps
}: RichTextEditorProps): JSX.Element => {
  const generatedId = useId()
  const [schema] = useState<ProseMirrorModel.Schema>(
    createSchemaFromControls(controls),
  )

  const editorId = id || generatedId
  const labelId = labelledBy || `${editorId}-rte-label`
  const validationMessageAria = validationMessage
    ? `${editorId}-rte-validation-message`
    : ''
  const descriptionAria = description ? `${editorId}-rte-description` : ''

  const ariaDescribedBy = classnames(
    validationMessageAria,
    descriptionAria,
    describedBy,
  )

  const useRichTextEditorResult = (():
    | ReturnType<typeof useRichTextEditor>
    | Error => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useRichTextEditor(
        ProseMirrorState.EditorState.create({
          doc: ProseMirrorModel.Node.fromJSON(schema, {
            type: 'doc',
            // we're converting empty arrays to the ProseMirror default "empty" state because when
            // given an empty array ProseMirror returns undefined, breaking the type
            content:
              defaultValue?.length > 0 ? defaultValue : [{ type: 'paragraph' }],
          }),
          schema,
          plugins: getPlugins(controls, schema),
        }),
        {
          'aria-labelledby': labelId,
          'role': 'textbox',
          'aria-describedby': ariaDescribedBy,
        },
      )
    } catch {
      return new Error('Bad data error')
    }
  })()

  if (useRichTextEditorResult instanceof Error) {
    onDataError?.()
    return (
      <InlineNotification
        headingProps={{
          children: 'Error',
          variant: 'heading-6',
        }}
        type="negative"
        persistent
      >
        {dataError || 'Something went wrong'}
      </InlineNotification>
    )
  }

  const [editorRef, editorState, dispatchTransaction] = useRichTextEditorResult

  const controlMap = buildControlMap(schema, editorState, controls)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    onChange(editorState)
  // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState])

  return (
    <>
      {!labelledBy && labelText && (
        <Label
          classNameOverride={styles.editorLabel}
          id={labelId}
          labelText={labelText}
        />
      )}
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
                      dispatchTransaction(controlConfig.action)}
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
            controls != null && controls.length > 0 && styles.hasToolbar,
          )}
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

RichTextEditor.displayName = 'RichTextEditor'

type Plugin = ProseMirrorState.Plugin<unknown> | ProseMirrorState.Plugin<{
  transform: ProseMirrorState.Transaction
  from: number
  to: number
  text: string
} | null>

function getPlugins(
  controls: ToolbarItems[] | undefined,
  schema: ProseMirrorModel.Schema,
): Plugin[] {
  const allControlNames: string[] = controls
    ? controls.reduce((acc: string[], c: ToolbarItems) => [...acc, c.name], [])
    : []
  const plugins = [
    ProseMirrorHistory.history(),
    ProseMirrorKeymap.keymap(buildKeymap(schema)),
    ProseMirrorKeymap.keymap(ProseMirrorCommands.baseKeymap),
    buildInputRules(schema),
  ]

  if (allControlNames.includes('link')) {
    plugins.push(
      createLinkManager({
        markType: schema.marks.link,
      }),
    )
  }

  return plugins
}
