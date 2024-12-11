import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { ProgressStepper } from '../subcomponents'

export default {
  title: 'Layout/Workflow/Components/Progress Stepper',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet layout="stretch">
      <StickerSheet.Row header="Progress States">
        <ProgressStepper
          currentStepId="preview-step"
          steps={[
            {
              id: 'settings-step',
              label: 'Settings',
            },
            {
              id: 'questions-step',
              label: 'Questions',
            },
            {
              id: 'preview-step',
              label: 'Preview',
            },
            {
              id: 'employees-step',
              label: 'Employees',
            },
            {
              id: 'schedule-step',
              label: 'Schedule',
            },
          ]}
        />
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    textDirection: 'rtl',
  },
}
