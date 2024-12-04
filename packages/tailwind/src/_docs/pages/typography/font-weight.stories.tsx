import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'font-'
const classEntries: { utilityClassName: string; cssProperty: string }[] = Object.entries(
  kaizenTailwindTheme.fontWeight || [],
).map(([suffix, cssProperty]) => ({
  utilityClassName: `${prefix}${suffix}`,
  cssProperty,
}))

export default {
  title: 'Guides/Tailwind/Utility Class References/Typography/Font Weight',
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

export const FontWeight: StoryFn = () => (
  <TailwindStoryTemplate
    compiledCssPropertyName="font-weight"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <p className={utilityClass}>Aa</p>
    )}
  />
)
