import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import classnames from 'classnames'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { flattenEntries } from '~tailwind/_docs/utils/flattenEntries'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'bg-'
const classEntries = flattenEntries(prefix, kaizenTailwindTheme.colors ?? {})

export default {
  title: 'Guides/Tailwind/Utility Class References/Backgrounds/Background Color',
  parameters: {
    a11y: { disable: true },
    chromatic: { disable: false },
    docsLayout: 'fullPage',
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
} satisfies Meta

export const BackgroundColor: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="background-color"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames('w-[100px] h-[100px] border border-purple-100 rounded', utilityClass)}
      />
    )}
    isReversed={isReversed}
  />
)
