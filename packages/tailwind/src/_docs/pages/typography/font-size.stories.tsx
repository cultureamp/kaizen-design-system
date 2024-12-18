import React from 'react'
import { type StoryFn } from '@storybook/react'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'text-'
const classEntries = Object.entries(kaizenTailwindTheme.fontSize ?? []).map(
  ([suffix, cssProperty]) => ({
    utilityClassName: `${prefix}${suffix}`,
    cssProperty,
  }),
)

export default {
  title: 'Guides/Tailwind/Utility Class References/Typography/Font Size',
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
}

export const FontSize: StoryFn = () => (
  <TailwindStoryTemplate
    compiledCssPropertyName="font-size"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <p className={utilityClass}>Aa</p>
    )}
  />
)
