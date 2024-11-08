import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import classnames from 'classnames'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'rounded-'
const classEntries: { utilityClassName: string; cssProperty: string }[] = Object.entries(
  kaizenTailwindTheme.borderRadius || [],
).map(([suffix, cssProperty]) => ({
  utilityClassName: `${prefix}${suffix}`,
  cssProperty,
}))

export default {
  title: 'Guides/Tailwind/Utility Class References/Borders/Border Radius',
  parameters: {
    a11y: { disable: true },
    chromatic: { disable: false },
    docsLayout: 'fullPage',
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[3].utilityClassName),
      },
    },
  },
} satisfies Meta

export const BorderRadius: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="border-radius"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames(
          'w-[100px] h-[100px] border border-purple-500',
          utilityClass.replace('-DEFAULT', ''),
        )}
      />
    )}
    isReversed={isReversed}
  />
)
