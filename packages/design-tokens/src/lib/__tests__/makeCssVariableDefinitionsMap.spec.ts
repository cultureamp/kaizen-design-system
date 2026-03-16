import { makeCssVariableDefinitionsMap } from '../makeCssVariableDefinitionsMap'
import { heartColorNamePattern, themeForTesting } from './mocks'

describe('makeCssVariableDefinitionsMap()', () => {
  const cssVariableDefinitions = makeCssVariableDefinitionsMap(themeForTesting)

  // We don't want any CSS variable identifiers within CSS variables - we don't need them
  // E.g. we want to avoid: `--kz-var-color-wisteria-100-id: --kz-var-color-wisteria-100`
  it("doesn't contain any CSS variable identifiers in values", () => {
    Object.values(cssVariableDefinitions).forEach((value) => {
      expect(value).not.toMatch(/^--/)
    })
  })

  const cssVariableKeysThatAreColors = Object.keys(cssVariableDefinitions).filter((key) =>
    key.startsWith('--color-'),
  )
  it('produces heart color vars', () => {
    cssVariableKeysThatAreColors.forEach((key) => {
      // eslint-disable-next-line vitest/no-conditional-expect
      if (key.startsWith('--color')) expect(key).toMatch(heartColorNamePattern)
    })
  })

  it('produces the correct output with the test theme', () => {
    const actual = makeCssVariableDefinitionsMap(themeForTesting)
    expect(actual).toStrictEqual({
      '--border-dashed-border-width': '2px',
      '--border-dashed-red': 'oklch(52.52% 0.1745 15.36)',
      '--color-purple-100': 'oklch(93.30% 0.0210 313.83)',
      '--color-purple-200': 'oklch(86.85% 0.0524 314.91)',
      '--color-blue-100': 'oklch(93.11% 0.0253 249.96)',
      '--color-blue-200': 'oklch(86.19% 0.0533 250.19)',
      '--color-red-100': 'oklch(93.36% 0.0271 3.41)',
      '--color-red-200': 'oklch(86.98% 0.0544 6.81)',
      '--color-orange-100': 'oklch(93.31% 0.0366 45.67)',
      '--color-orange-200': 'oklch(86.91% 0.0749 44.43)',
      '--color-green-100': 'oklch(92.69% 0.0393 178.60)',
      '--color-green-200': 'oklch(85.16% 0.0852 175.92)',
      '--color-yellow-100': 'oklch(91.96% 0.1314 95.60)',
      '--color-yellow-200': 'oklch(86.45% 0.1651 88.30)',
      '--color-grey-cool-100': 'oklch(92.97% 0.0026 228.79)',
      '--color-grey-cool-200': 'oklch(86.17% 0.0036 219.54)',
      '--color-grey-warm-100': 'oklch(93.23% 0.0128 63.91)',
      '--color-grey-warm-200': 'oklch(86.21% 0.0095 52.08)',
    })
  })
})
