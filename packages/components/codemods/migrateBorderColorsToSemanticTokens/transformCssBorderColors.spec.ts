import { transformCssBorderColors } from './transformCssBorderColors'

describe('transformCssBorderColors()', () => {
  it('swaps only the color token in a border shorthand', () => {
    const input = `.a {
  border: var(--border-solid-border-width) var(--border-solid-border-style) var(--color-gray-500);
}`
    const { code, converted } = transformCssBorderColors(input)
    expect(code).toContain(
      'border: var(--border-solid-border-width) var(--border-solid-border-style) var(--border-secondary);',
    )
    expect(converted).toHaveLength(1)
    expect(converted[0]).toMatchObject({ to: 'var(--border-secondary)' })
  })

  it('rewrites border-color longhand', () => {
    const { code } = transformCssBorderColors('.a { border-color: var(--color-gray-600); }')
    expect(code).toContain('border-color: var(--border-primary);')
  })

  it('rewrites a border-related custom property', () => {
    const { code } = transformCssBorderColors('.a { --border-color: var(--color-blue-500); }')
    expect(code).toContain('--border-color: var(--border-brand);')
  })

  it('rewrites per-side and logical border color properties', () => {
    const { code } = transformCssBorderColors(
      '.a { border-bottom-color: var(--color-red-500); border-inline-start: 1px solid var(--color-red-300); }',
    )
    expect(code).toContain('border-bottom-color: var(--border-error);')
    expect(code).toContain('border-inline-start: 1px solid var(--border-error_subtle);')
  })

  it('leaves non-border usages of the same primitive untouched', () => {
    const input = '.a { background: var(--color-gray-500); color: var(--color-gray-600); }'
    const { code, converted } = transformCssBorderColors(input)
    expect(code).toBe(input)
    expect(converted).toHaveLength(0)
  })

  it('skips and reports border colors with no confident semantic mapping', () => {
    const { code, converted, skipped } = transformCssBorderColors(
      '.a { border-color: var(--color-yellow-700); }',
    )
    expect(code).toContain('border-color: var(--color-yellow-700);')
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(1)
    expect(skipped[0]).toMatchObject({ property: 'border-color', value: 'var(--color-yellow-700)' })
  })

  it('does not touch border-width / border-style / border-radius', () => {
    const input =
      '.a { border-width: var(--color-gray-500); border-radius: var(--color-gray-500); }'
    // These properties never carry a color; even if a color var appears we leave it.
    const { converted } = transformCssBorderColors(input)
    expect(converted).toHaveLength(0)
  })
})
