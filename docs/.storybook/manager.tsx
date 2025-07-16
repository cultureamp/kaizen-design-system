// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/
import React from 'react'
import { addons } from '@storybook/manager-api'
import { tokens } from '@kaizen/design-tokens/src/js'
import KaizenTheme from '../theme'

const CATEGORIES_ICON: Record<string, string> = {
  'Introduction': '👋',
  'Guides': '📚',
  'Components': '⚙️',
  'Pages': '📖',
  'Helpers': '🤝',
  'Design Tokens': '🎨',
  'Deprecated': '💣',
  'Systems': '🤖',
  'AIO': '📦',
}

const colors = tokens.color

addons.setConfig({
  theme: KaizenTheme,
  sidebar: {
    renderLabel: (item): JSX.Element => {
      const statusTag =
        item.type === 'group' || item.type === 'component'
          ? item.tags?.find((tag) => ['alpha', 'next', 'deprecated'].includes(tag))
          : undefined

      const statusStyles: Record<string, React.CSSProperties> = {
        alpha: {
          backgroundColor: colors.blue['200'],
          color: colors.blue['800'],
        },
        next: {
          backgroundColor: colors.green['200'],
          color: colors.green['800'],
        },
        deprecated: {
          backgroundColor: colors.red['200'],
          color: colors.red['800'],
        },
      }

      if (item.type === 'root') {
        return (
          <span
            style={{
              color: colors.purple['800'],
              textTransform: 'capitalize',
              fontSize: '13px',
              letterSpacing: 'normal',
              fontWeight: 600,
            }}
          >
            <span aria-hidden style={{ marginRight: tokens.spacing[6] }}>
              {CATEGORIES_ICON[item.name]}
            </span>
            {item.name}
          </span>
        )
      }

      if (statusTag) {
        return (
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{item.name}</span>
            <span
              style={{
                ...statusStyles[statusTag],
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '999px',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              {statusTag}
            </span>
          </span>
        )
      }
      return <span style={{ margin: '1px 0' }}>{item.name}</span>
    },
  },
})
