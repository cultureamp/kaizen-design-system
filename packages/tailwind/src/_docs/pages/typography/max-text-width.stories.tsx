import React from 'react'
import { type Meta, type StoryFn } from '@storybook/react'
import { TailwindStoryTemplate } from '~tailwind/_docs/utils/TailwindStoryTemplate'
import { utilityDescription } from '~tailwind/_docs/utils/utilityDescription'
import { kaizenTailwindTheme } from '~tailwind/tailwind-presets'

const prefix = 'max-w-'
const classEntries = Object.entries(kaizenTailwindTheme.extend.maxWidth ?? []).map(
  ([suffix, cssPropertyArr]) => ({
    utilityClassName: `${prefix}${suffix}`,
    cssProperty: cssPropertyArr as string,
  }),
)

export default {
  title: 'Guides/Tailwind/Utility Class References/Typography/Max Text Width',
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

const fontClasses = {
  'max-w-paragraph-lede': 'text-paragraph-lede leading-paragraph-lede',
  'max-w-paragraph': 'text-paragraph leading-paragraph',
  'max-w-paragraph-sm': 'text-paragraph-sm leading-paragraph-sm',
  'max-w-paragraph-xs': 'text-paragraph-xs leading-paragraph-xs',
}

const getFontClass = (utilityClass: string): string =>
  fontClasses[utilityClass as keyof typeof fontClasses] || ''

export const MaxTextWidth: StoryFn = () => (
  <TailwindStoryTemplate
    compiledCssPropertyName="max-width"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <>
        <p className={[utilityClass, getFontClass(utilityClass)].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio incidunt explicabo
          facilis ipsam, porro magni vero libero itaque rerum deserunt quo molestiae expedita dolor?
          Alias iusto ad maiores odit! ({[utilityClass, getFontClass(utilityClass)].join(' ')})
        </p>
        <code className="text-paragraph-sm bg-gray-300 py-4 px-8">
          {[utilityClass, getFontClass(utilityClass)].join(' ')}
        </code>
      </>
    )}
  />
)
