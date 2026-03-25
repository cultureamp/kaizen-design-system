/* eslint import/no-extraneous-dependencies: 0 */
import { create, type ThemeVars } from '@storybook/theming'
import { tokens } from '@kaizen/design-tokens/js'
const colors = tokens.color

// For styles that cannot be achieved through the folowing config, see
// storybook/manager-head.html or storybook/manager.tsx
const theme: ThemeVars = create({
  base: 'light',
  colorSecondary: colors.purple['800'],
  // UI
  appBg: colors.purple['050'],
  appContentBg: colors.white,
  appBorderColor: colors['gray-warm']['100'],
  appBorderRadius: 7,
  // Typography
  fontBase: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
  // Text colors
  textColor: colors['gray-cool']['950'],
  textInverseColor: colors.white,
  textMutedColor: 'rgba(85, 75, 95)',
  // Toolbar default and active colors
  barTextColor: colors['gray-cool']['700'],
  barSelectedColor: colors.purple['800'],
  barBg: colors.white,
  // Form colors
  inputBg: colors.white,
  inputBorder: colors['gray-cool']['500'],
  inputTextColor: colors['gray-cool']['700'],
  inputBorderRadius: 20,
  brandTitle: 'Kaizen Storybook',
  brandImage: './static/media/kaizen-badge.svg',
})

export default theme
