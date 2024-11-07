import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import classnames from 'classnames'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'p-'
const classEntries: { utilityClassName: string, cssProperty: string }[] =
  Object.entries(kaizenTailwindTheme.spacing || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    }),
  )

export default {
  title: 'Guides/Tailwind/Utility Class References/Spacing/Padding',
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

export const Padding: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="padding"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <p
        className={classnames(
          'border border-purple-100 w-min rounded bg-blue-100',
          utilityClass,
        )}
      >
        Padding
      </p>
    )}
    isReversed={isReversed}
  />
)
