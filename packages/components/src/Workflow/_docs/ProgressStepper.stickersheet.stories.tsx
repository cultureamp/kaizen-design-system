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
      <StickerSheet.Row header="All Steps Complete">
        <ProgressStepper
          currentStepId="schedule-step"
          isComplete
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
      <StickerSheet.Row header="Fewer Steps">
        <ProgressStepper
          currentStepId="questions-step"
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
          ]}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Eight Steps">
        <ProgressStepper
          currentStepId="questions-step"
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
            {
              id: 'plan-step',
              label: 'Plan',
            },
            {
              id: 'provision-step',
              label: 'Provision',
            },
            {
              id: 'procure-step',
              label: 'Procure',
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
