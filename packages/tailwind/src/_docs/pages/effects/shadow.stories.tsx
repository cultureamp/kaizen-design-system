import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import classnames from 'classnames'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'shadow-'
const classEntries: { utilityClassName: string; cssProperty: string }[] = Object.entries(
  kaizenTailwindTheme.boxShadow || [],
).map(([suffix, cssProperty]) => ({
  utilityClassName: `${prefix}${suffix}`,
  cssProperty,
}))

export default {
  title: 'Guides/Tailwind/Utility Class References/Effects/Box Shadow',
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

export const BoxShadow: StoryFn = () => (
  <TailwindStoryTemplate
    compiledCssPropertyName="box-shadow"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div className={classnames('w-[100px] h-[100px]', utilityClass)} />
    )}
  />
)
