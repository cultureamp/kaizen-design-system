import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'font-'
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> = Object.entries(
  kaizenTailwindTheme.fontFamily || [],
).map(([suffix, cssPropertyArr]) => ({
  utilityClassName: `${prefix}${suffix}`,
  cssProperty: cssPropertyArr[0],
}))

export default {
  title: 'Guides/Tailwind/Utility Class References/Typography/Font Family',
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

export const FontFamily: StoryFn = () => (
  <TailwindStoryTemplate
    compiledCssPropertyName="font-family"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <p className={utilityClass}>Aa</p>
    )}
  />
)
