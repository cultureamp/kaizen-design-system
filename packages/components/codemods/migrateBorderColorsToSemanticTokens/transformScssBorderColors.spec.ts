import { transformScssBorderColors } from './transformScssBorderColors'

describe('transformScssBorderColors()', () => {
  it('rewrites SCSS $color-* variables to the semantic $border-* variable', () => {
    const input = `@import "~@kaizen/design-tokens/sass/color";
.a {
  border: 1px solid $color-gray-500;
}`
    const { code, converted } = transformScssBorderColors(input)
    expect(code).toContain('border: 1px solid $border-secondary;')
    expect(converted).toHaveLength(1)
    expect(converted[0]).toMatchObject({ from: '$color-gray-500', to: '$border-secondary' })
  })

  it('rewrites CSS custom property references inside SCSS too', () => {
    const input = `.a {
  &:hover { border-color: var(--color-gray-500); }
}`
    const { code } = transformScssBorderColors(input)
    expect(code).toContain('border-color: var(--border-secondary);')
  })

  it('preserves nested rules and unrelated $variables', () => {
    const input = `$x: 1;
.a {
  &:hover { border-color: $color-gray-600; }
}`
    const { code } = transformScssBorderColors(input)
    expect(code).toContain('border-color: $border-primary;')
    expect(code).toContain('$x: 1;')
  })

  it('adds the semantic sass import (matching existing import style) when introducing a $border-* var', () => {
    const input = `@import "~@kaizen/design-tokens/sass/color";
.a {
  border-color: $color-gray-600;
}`
    const { code } = transformScssBorderColors(input)
    expect(code).toContain('@import "~@kaizen/design-tokens/sass/semantic";')
    expect(code).toContain('border-color: $border-primary;')
  })

  it('prepends a plain semantic import when no kaizen sass import exists', () => {
    const { code } = transformScssBorderColors('.a { border-color: $color-blue-500; }')
    expect(code).toContain("@import '@kaizen/design-tokens/sass/semantic';")
    expect(code).toContain('border-color: $border-brand;')
  })

  it('does not duplicate the semantic import when already present', () => {
    const input = `@import "~@kaizen/design-tokens/sass/color";
@import "~@kaizen/design-tokens/sass/semantic";
.a {
  border-color: $color-gray-600;
}`
    const { code } = transformScssBorderColors(input)
    expect(code.match(/sass\/semantic/g)).toHaveLength(1)
  })

  it('skips and reports rgba()/alpha border colors for a design decision', () => {
    const input = `@import "~@kaizen/design-tokens/sass/color";
.footer {
  border-top: 1px solid rgba($color-gray-600-rgb, 0.1);
}`
    const { code, converted, skipped } = transformScssBorderColors(input)
    expect(code).toContain('border-top: 1px solid rgba($color-gray-600-rgb, 0.1);')
    expect(code).not.toContain('$border-')
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(1)
    expect(skipped[0]).toMatchObject({ property: 'border-top' })
  })

  it('skips and reports unmapped $color-* border variables', () => {
    const input = '.a { border-color: $color-gray-400; }'
    const { code, converted, skipped } = transformScssBorderColors(input)
    expect(code).toContain('border-color: $color-gray-400;')
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(1)
  })

  it('leaves non-border $color-* usages untouched', () => {
    const input = '.a { background: $color-gray-500; }'
    const { code, converted } = transformScssBorderColors(input)
    expect(code).toBe(input)
    expect(converted).toHaveLength(0)
  })
})
