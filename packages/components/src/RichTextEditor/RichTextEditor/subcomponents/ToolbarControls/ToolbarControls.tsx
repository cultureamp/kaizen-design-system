import React, { useCallback } from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import type { ToolbarItems } from '../../../types'
import type { CommandOrTransaction } from '../../../utils/core'
import type { ProseMirrorModel, ProseMirrorState } from '../../../utils/prosemirror'
import { useControlMap } from '../../utils/controlmap'
import { ToggleIconButton } from '../ToggleIconButton'
import { Toolbar } from '../Toolbar'
import { ToolbarSection } from '../ToolbarSection'

type ToolbarControlsProps = {
  editorId: string
  controls?: ToolbarItems[]
  editorState: ProseMirrorState.EditorState
  schema: ProseMirrorModel.Schema<any, any>
  dispatchTransaction: (commandOrTransaction: CommandOrTransaction) => void
}

export const ToolbarControls = ({
  editorId,
  controls,
  editorState,
  schema,
  dispatchTransaction,
}: ToolbarControlsProps): JSX.Element | null => {
  const controlMap = useControlMap(schema, editorState, controls)
  const { formatMessage } = useIntl()
  const handleControlClick = useCallback(
    (action: ProseMirrorState.Command) => {
      dispatchTransaction(action)
    },
    [dispatchTransaction],
  )

  if (controlMap.length <= 0) return null

  return (
    <Toolbar
      aria-controls={editorId}
      aria-label={formatMessage({
        id: 'kz.rte.toolbar.aria_label',
        defaultMessage: 'Text formatting',
        description: 'Label for the text formatting toolbar in a Rich Text Editor',
      })}
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
              onClick={() => handleControlClick(controlConfig.action)}
            />
          ))}
        </ToolbarSection>
      ))}
    </Toolbar>
  )
}
