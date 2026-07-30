import { transformScssSemanticColors } from './transformScssSemanticColors'

describe('transformScssSemanticColors()', () => {
  it('rewrites SCSS $color-* variables to the semantic variable per group', () => {
    const input = `@import "~@kaizen/design-tokens/sass/color";
.a {
  color: $color-gray-700;
  background: $color-blue-500;
}`
    const { code, converted } = transformScssSemanticColors(input)
    expect(code).toContain('color: $text-secondary;')
    expect(code).toContain('background: $bg-brand-solid;')
    expect(converted).toHaveLength(2)
  })

  it('rewrites CSS custom property references inside SCSS too', () => {
    const input = `.a {
  &:hover { color: var(--color-gray-700); }
}`
    const { code } = transformScssSemanticColors(input)
    expect(code).toContain('color: var(--text-secondary);')
  })

  it('rewrites shade-less primitives ($color-white → fg-white in a fill context)', () => {
    const { code } = transformScssSemanticColors('.a { fill: $color-white; }')
    expect(code).toContain('fill: $fg-white;')
  })

  it('adds the semantic-color sass import (matching existing style) when introducing a semantic var', () => {
    const input = `@import "~@kaizen/design-tokens/sass/color";
.a {
  color: $color-gray-700;
}`
    const { code } = transformScssSemanticColors(input)
    expect(code).toContain('@import "~@kaizen/design-tokens/sass/semantic-color";')
    expect(code).toContain('color: $text-secondary;')
  })

  it('prepends a plain semantic-color import when no kaizen sass import exists', () => {
    const { code } = transformScssSemanticColors('.a { background: $color-blue-500; }')
    expect(code).toContain("@import '@kaizen/design-tokens/sass/semantic-color';")
    expect(code).toContain('background: $bg-brand-solid;')
  })

  it('does not duplicate the semantic-color import when already present', () => {
    const input = `@import "~@kaizen/design-tokens/sass/color";
@import "~@kaizen/design-tokens/sass/semantic-color";
.a {
  color: $color-gray-700;
}`
    const { code } = transformScssSemanticColors(input)
    expect(code.match(/sass\/semantic-color/g)).toHaveLength(1)
  })

  it('skips and reports rgba()/alpha usages for a design decision', () => {
    const input = `@import "~@kaizen/design-tokens/sass/color";
.footer {
  background: rgba($color-gray-600-rgb, 0.1);
}`
    const { code, converted, skipped } = transformScssSemanticColors(input)
    expect(code).toContain('background: rgba($color-gray-600-rgb, 0.1);')
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(1)
    expect(skipped[0]).toMatchObject({ property: 'background' })
  })

  it('skips and reports colliding / unmapped $color-* variables', () => {
    const input = '.a { background: $color-gray-200; color: $color-gray-400; }'
    const { code, converted, skipped } = transformScssSemanticColors(input)
    expect(code).toContain('background: $color-gray-200;')
    expect(code).toContain('color: $color-gray-400;')
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(2)
  })

  it('leaves out-of-scope $color-* usages untouched', () => {
    const input = '.a { box-shadow: 0 0 1px $color-gray-500; }'
    const { code, converted } = transformScssSemanticColors(input)
    expect(code).toBe(input)
    expect(converted).toHaveLength(0)
  })
})
