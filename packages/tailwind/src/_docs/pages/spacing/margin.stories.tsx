import React from 'react'
import { type Meta, type StoryFn } from '@storybook/react'
import classnames from 'classnames'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'm-'
const classEntries: { utilityClassName: string; cssProperty: string }[] = Object.entries(
  kaizenTailwindTheme.spacing ?? [],
).map(([suffix, cssProperty]) => ({
  utilityClassName: `${prefix}${suffix}`,
  cssProperty,
}))

export default {
  title: 'Guides/Tailwind/Utility Class References/Spacing/Margin',
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

export const Margin: StoryFn = () => (
  <TailwindStoryTemplate
    compiledCssPropertyName="margin"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div className="w-min border rounded">
        <p
          className={classnames('p-4 border border-dashed w-min rounded bg-blue-100', utilityClass)}
        >
          Margin
        </p>
      </div>
    )}
  />
)
