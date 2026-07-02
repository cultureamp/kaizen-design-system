import { transformCssSemanticColors } from './transformCssSemanticColors'

describe('transformCssSemanticColors()', () => {
  it('rewrites a text color (color → text-*)', () => {
    const { code, converted } = transformCssSemanticColors('.a { color: var(--color-gray-700); }')
    expect(code).toContain('color: var(--text-secondary);')
    expect(converted).toHaveLength(1)
    expect(converted[0]).toMatchObject({ to: 'var(--text-secondary)' })
  })

  it('rewrites a background color (background / background-color → bg-*)', () => {
    const { code } = transformCssSemanticColors(
      '.a { background: var(--color-blue-500); } .b { background-color: var(--color-gray-300); }',
    )
    expect(code).toContain('background: var(--bg-brand-solid);')
    expect(code).toContain('background-color: var(--bg-tertiary);')
  })

  it('rewrites a foreground color (fill / stroke → fg-*)', () => {
    const { code } = transformCssSemanticColors(
      '.a { fill: var(--color-red-500); stroke: var(--color-blue-500); }',
    )
    expect(code).toContain('fill: var(--fg-error-primary);')
    expect(code).toContain('stroke: var(--fg-brand-primary);')
  })

  it('rewrites a border color (border → border-*)', () => {
    const { code } = transformCssSemanticColors(
      '.a { border: 1px solid var(--color-gray-500); }',
    )
    expect(code).toContain('border: 1px solid var(--border-secondary);')
  })

  it('maps the same primitive to a different token per property (context)', () => {
    // blue-500 → bg-brand-solid on background, text-brand-primary on color.
    const { code } = transformCssSemanticColors(
      '.a { background: var(--color-blue-500); color: var(--color-blue-500); }',
    )
    expect(code).toContain('background: var(--bg-brand-solid);')
    expect(code).toContain('color: var(--text-brand-primary);')
  })

  it('rewrites a group-inferred custom property', () => {
    const { code } = transformCssSemanticColors('.a { --text-color: var(--color-purple-800); }')
    expect(code).toContain('--text-color: var(--text-primary);')
  })

  it('skips and reports colliding primitives (no confident 1:1 mapping)', () => {
    // gray-200 backs both bg-secondary and bg-secondary_hover.
    const { code, converted, skipped } = transformCssSemanticColors(
      '.a { background: var(--color-gray-200); }',
    )
    expect(code).toContain('background: var(--color-gray-200);')
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(1)
    expect(skipped[0]).toMatchObject({ property: 'background', value: 'var(--color-gray-200)' })
  })

  it('skips and reports primitives with no mapping in the group', () => {
    const { skipped } = transformCssSemanticColors('.a { color: var(--color-orange-500); }')
    expect(skipped).toHaveLength(1)
  })

  it('skips and reports alpha / rgb() usages for a design decision', () => {
    const { code, converted, skipped } = transformCssSemanticColors(
      '.a { background: rgba(var(--color-blue-500), 0.5); }',
    )
    expect(code).toContain('rgba(var(--color-blue-500), 0.5)')
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(1)
  })

  it('leaves colors in out-of-scope properties untouched and unreported', () => {
    const input = '.a { box-shadow: 0 0 0 1px var(--color-gray-500); outline-color: var(--color-red-500); }'
    const { code, converted, skipped } = transformCssSemanticColors(input)
    expect(code).toBe(input)
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(0)
  })
})
