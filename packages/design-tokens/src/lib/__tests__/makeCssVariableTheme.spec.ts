import { makeCSSVariableTheme } from '../makeCssVariableTheme'
import { themeForTesting } from './mocks'

describe('makeCSSVariableTheme()', () => {
  const cssVariableTheme = makeCSSVariableTheme(themeForTesting)

  it('adds -id fields to every leaf', () => {
    expect(cssVariableTheme).toStrictEqual({
      color: {
        purple: {
          100: 'var(--color-purple-100, oklch(93.30% 0.0210 313.83))',
          '100-id': '--color-purple-100',
          200: 'var(--color-purple-200, oklch(86.85% 0.0524 314.91))',
          '200-id': '--color-purple-200',
        },
        blue: {
          100: 'var(--color-blue-100, oklch(93.11% 0.0253 249.96))',
          '100-id': '--color-blue-100',
          200: 'var(--color-blue-200, oklch(86.19% 0.0533 250.19))',
          '200-id': '--color-blue-200',
        },
        yellow: {
          100: 'var(--color-yellow-100, oklch(91.96% 0.1314 95.60))',
          '100-id': '--color-yellow-100',
          200: 'var(--color-yellow-200, oklch(86.45% 0.1651 88.30))',
          '200-id': '--color-yellow-200',
        },
        red: {
          100: 'var(--color-red-100, oklch(93.36% 0.0271 3.41))',
          '100-id': '--color-red-100',
          200: 'var(--color-red-200, oklch(86.98% 0.0544 6.81))',
          '200-id': '--color-red-200',
        },
        green: {
          100: 'var(--color-green-100, oklch(92.69% 0.0393 178.60))',
          '100-id': '--color-green-100',
          200: 'var(--color-green-200, oklch(85.16% 0.0852 175.92))',
          '200-id': '--color-green-200',
        },
        orange: {
          100: 'var(--color-orange-100, oklch(93.31% 0.0366 45.67))',
          '100-id': '--color-orange-100',
          200: 'var(--color-orange-200, oklch(86.91% 0.0749 44.43))',
          '200-id': '--color-orange-200',
        },
        'grey-cool': {
          100: 'var(--color-grey-cool-100, oklch(92.97% 0.0026 228.79))',
          '100-id': '--color-grey-cool-100',
          200: 'var(--color-grey-cool-200, oklch(86.17% 0.0036 219.54))',
          '200-id': '--color-grey-cool-200',
        },
        'grey-warm': {
          100: 'var(--color-grey-warm-100, oklch(93.23% 0.0128 63.91))',
          '100-id': '--color-grey-warm-100',
          200: 'var(--color-grey-warm-200, oklch(86.21% 0.0095 52.08))',
          '200-id': '--color-grey-warm-200',
        },
      },
      border: {
        dashed: {
          'borderWidth': 'var(--border-dashed-border-width, 2px)',
          'borderWidth-id': '--border-dashed-border-width',
          'red': 'var(--border-dashed-red, oklch(52.52% 0.1745 15.36))',
          'red-id': '--border-dashed-red',
        },
      },
    })
  })
})
