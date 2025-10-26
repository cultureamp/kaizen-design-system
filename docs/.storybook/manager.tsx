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

const statusStyles: Record<string, React.CSSProperties> = {
  alpha: {
    backgroundColor: colors.blue['100'],
    color: colors.blue['700'],
  },
  next: {
    backgroundColor: colors.green['100'],
    color: colors.green['700'],
  },
  deprecated: {
    backgroundColor: colors.red['100'],
    color: colors.red['700'],
  },
}

addons.setConfig({
  theme: KaizenTheme,
  sidebar: {
    renderLabel: (item): JSX.Element => {
      const statusTag =
        item.type === 'group' || item.type === 'component'
          ? item.tags?.find((tag) => ['alpha', 'next', 'deprecated'].includes(tag))
          : undefined

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
        const displayName = item.name.replace(/\s*Alpha|Next|Deprecated$/i, '')
        return (
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{displayName}</span>
            <span
              style={{
                ...statusStyles[statusTag],
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '999px',
                fontWeight: 500,
                textTransform: 'capitalize',
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
