import '../../packages/components/styles/global.css'
import 'highlight.js/styles/a11y-light.css'
import './preview.css'
import './tailwind-build.css'

import React, { useEffect } from 'react'
import { decorators as bgDecorators } from '@storybook/addon-backgrounds/preview'
import { type Decorator, type Preview } from '@storybook/react'
import { KaizenProvider } from '~components/KaizenProvider'
import { I18nProvider } from '~components/__react-aria-components__'
import { ReversedColors } from '~components/utils'
import { DefaultDocsContainer } from '../components/DocsContainer'
import { backgrounds } from '../utils/backgrounds'
import { globalA11yRules } from '../utils/global-a11y-rules'

const [, withBackground] = bgDecorators

const globalTypes: Preview['globalTypes'] = {
  textDirection: {
    name: 'Text direction',
    description: '',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'globe',
      items: ['ltr', 'rtl'],
    },
  },
}

const RACDecorator: Decorator = (Story, context) => {
  const dir = context.parameters.textDirection ?? context.globals.textDirection

  useEffect(() => {
    if (document.body.getAttribute('dir') !== dir) document.body.setAttribute('dir', dir)
  }, [dir])

  return (
    <I18nProvider locale={dir === 'rtl' ? 'ar' : 'en'}>
      <Story />
    </I18nProvider>
  )
}

const KaizenProviderDecorator: Decorator = (Story) => (
  <KaizenProvider>
    <Story />
  </KaizenProvider>
)

const decorators: Preview['decorators'] = [
  RACDecorator,
  KaizenProviderDecorator,
  // reverseColor parameter wraps story in ReversedColors context and sets default background to Purple 700
  (Story, context) => {
    if (
      // set in top toolbar
      !context.globals.backgrounds &&
      // set on story
      !context.moduleExport?.parameters?.backgrounds
    ) {
      context.parameters.backgrounds.default = context.parameters.reverseColors
        ? 'Purple 700'
        : 'White'
    }

    return withBackground(
      () =>
        context.parameters.reverseColors ? (
          <ReversedColors>
            <Story />
          </ReversedColors>
        ) : (
          <Story />
        ),
      context,
    )
  },
]

const preview = {
  parameters: {
    backgrounds: {
      default: 'White',
      values: backgrounds,
    },
    docs: {
      toc: {
        title: 'Table of contents',
        headingSelector: '.tocbot-content > h2, .tocbot-content > h3',
        ignoreSelector: '#primary',
      },
      source: {
        excludeDecorators: true,
        language: 'tsx',
      },
      container: DefaultDocsContainer,
    },
    options: {
      storySort: (a, b) => {
        // Two exact same stories
        if (a.id === b.id) {
          return 0
        }

        // Custom ordering for Tailwind docs
        if (a.id.includes('tailwind') && b.id.includes('tailwind')) {
          if (b.title.includes('References')) {
            if (a.title.includes('References')) {
              // Overview above all other stories
              if (a.title.includes('Overview')) return -1
              if (b.title.includes('Overview')) return 1
              return 0
            }
            // Put References below other stories
            return -1
          }

          // Put References below other stories
          if (a.title.includes('References')) return 1

          if (a.type === 'docs' && b.type === 'docs') {
            const docs = ['Overview', 'Getting Started', 'Configuration', 'Working with Tailwind']
            const docsNameA = a.title.split('/').pop()
            const docsNameB = b.title.split('/').pop()
            if (docs.includes(docsNameA) && docs.includes(docsNameB)) {
              const docsDifference = docs.indexOf(docsNameA) - docs.indexOf(docsNameB)
              if (docsDifference !== 0) {
                // Sort docs by listed order
                return docsDifference
              }
            }

            // Sort listed docs above unlisted ones
            if (docs.includes(docsNameA)) return -1
            // Sort unlisted docs below listed ones
            if (docs.includes(docsNameB)) return 1
          }

          // All other stories appear in the order they are defined
          return 0
        }

        const customDocNames = ['Usage Guidelines', 'API Specification']
        // Don't type the param - we can't use TypeScript within storySort
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        const removeCustomDocNames = (title) => {
          return customDocNames.reduce((acc, docName) => {
            const regex = new RegExp(`/${docName}$`)
            return acc.replace(regex, '')
          }, title)
        }

        const titleA = removeCustomDocNames(a.title)
        const titleB = removeCustomDocNames(b.title)

        const groupA = titleA.split('/')[0]
        const groupB = titleB.split('/')[0]

        const groups = ['Introduction', 'Guides', 'Components', 'Pages']
        const groupDifference = groups.indexOf(groupA) - groups.indexOf(groupB)
        if (groupDifference !== 0) {
          // Sort stories of different groups manually by the groups array
          return groupDifference
        }

        // Sort Kaizen Provider to top
        if (a.title.includes('KaizenProvider')) {
          // If both are Kaizen Provider, do not sort
          if (b.title.includes('KaizenProvider')) return 0
          return -1
        }
        if (b.title.includes('KaizenProvider')) return 1

        const titleDifference = titleA.localeCompare(titleB, undefined, {
          numeric: true,
        })

        if (titleDifference !== 0) {
          // Sort nested stories to top
          if (a.title.includes(b.title)) return -1
          if (b.title.includes(a.title)) return 1

          return titleDifference
        }

        if (a.type === 'docs' && b.type === 'docs') {
          const docs = ['Usage Guidelines', 'API Specification', 'Docs']
          const docsNameA = a.title.split('/').pop()
          const docsNameB = b.title.split('/').pop()

          const docsDifference = docs.indexOf(docsNameA) - docs.indexOf(docsNameB)
          if (docsDifference !== 0) {
            // Sort stories of different groups manually by the groups array
            return docsDifference
          }
        }

        // Let stories appear in the order they are defined
        return 0
      },
    },
    chromatic: { disable: true },
    a11y: {
      config: {
        rules: globalA11yRules,
      },
    },
  },
  globalTypes,
  decorators,
} satisfies Preview

export default preview
