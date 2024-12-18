import React from 'react'
import { type Meta, type StoryFn } from '@storybook/react'
import classnames from 'classnames'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { flattenEntries } from '~tailwind/_docs/utils/flattenEntries'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'border-'
const classEntries = flattenEntries(prefix, kaizenTailwindTheme.borderColor ?? {})

export default {
  title: 'Guides/Tailwind/Utility Class References/Borders/Border Color',
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

export const BorderColor: StoryFn = () => (
  <TailwindStoryTemplate
    compiledCssPropertyName="border-color"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames(
          'rounded w-[100px] h-[100px] border',
          utilityClass.replace('-DEFAULT', ''),
        )}
      />
    )}
  />
)
