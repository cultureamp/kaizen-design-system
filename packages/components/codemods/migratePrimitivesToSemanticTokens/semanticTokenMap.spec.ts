import { semanticColorTokens } from '../../../design-tokens/src/js/semanticColorTokens'
import {
  PRIMITIVE_TO_SEMANTIC,
  SEMANTIC_TO_PRIMITIVE,
  groupForProperty,
  type SemanticGroup,
} from './semanticTokenMap'

/** Reduce a source token value (`var(--color-gray-600)` | null) to `gray-600` | null. */
const toPrimitive = (value: string | null): string | null => {
  if (value === null) return null
  const match = /var\(\s*--color-([a-z0-9-]+)\s*\)/i.exec(value)
  return match ? match[1] : null
}

describe('semanticTokenMap', () => {
  describe('SEMANTIC_TO_PRIMITIVE mirror', () => {
    // Guards against drift from the design-tokens source of truth. If a token's
    // primitive changes (or a token is added/removed/un-nulled), this fails and
    // the mirror must be updated.
    const groups: SemanticGroup[] = ['background', 'text', 'foreground', 'border']

    it.each(groups)('matches the non-null %s entries in semanticColorTokens.ts', (group) => {
      const expected: Record<string, string> = {}
      for (const [token, value] of Object.entries(semanticColorTokens[group])) {
        const primitive = toPrimitive(value)
        if (primitive) expected[token] = primitive
      }
      expect(SEMANTIC_TO_PRIMITIVE[group]).toEqual(expected)
    })
  })

  describe('PRIMITIVE_TO_SEMANTIC (inverted, collisions dropped)', () => {
    it('drops primitives that back more than one token in a group', () => {
      // gray-200 → bg-secondary AND bg-secondary_hover; white → bg-primary AND bg-overlay.
      expect(PRIMITIVE_TO_SEMANTIC.background).not.toHaveProperty('gray-200')
      expect(PRIMITIVE_TO_SEMANTIC.background).not.toHaveProperty('white')
      // yellow-400 → bg-warning-secondary AND bg-warning-solid.
      expect(PRIMITIVE_TO_SEMANTIC.background).not.toHaveProperty('yellow-400')
      // gray-550 → text-quaternary AND text-placeholder; white → two on-brand tokens.
      expect(PRIMITIVE_TO_SEMANTIC.text).not.toHaveProperty('gray-550')
      expect(PRIMITIVE_TO_SEMANTIC.text).not.toHaveProperty('white')
      // purple-800 backs four fg-* tokens.
      expect(PRIMITIVE_TO_SEMANTIC.foreground).not.toHaveProperty('purple-800')
    })

    it('keeps confident 1:1 mappings per group', () => {
      expect(PRIMITIVE_TO_SEMANTIC.background['gray-300']).toBe('bg-tertiary')
      expect(PRIMITIVE_TO_SEMANTIC.background['blue-500']).toBe('bg-brand-solid')
      expect(PRIMITIVE_TO_SEMANTIC.text['gray-700']).toBe('text-secondary')
      expect(PRIMITIVE_TO_SEMANTIC.text['blue-500']).toBe('text-brand-primary')
      expect(PRIMITIVE_TO_SEMANTIC.foreground['gray-500']).toBe('fg-tertiary')
      expect(PRIMITIVE_TO_SEMANTIC.foreground['blue-500']).toBe('fg-brand-primary')
      expect(PRIMITIVE_TO_SEMANTIC.border['gray-500']).toBe('border-secondary')
    })

    it('resolves the same primitive to different tokens across groups by context', () => {
      // blue-500 means something different depending on the surface it paints.
      expect(PRIMITIVE_TO_SEMANTIC.background['blue-500']).toBe('bg-brand-solid')
      expect(PRIMITIVE_TO_SEMANTIC.text['blue-500']).toBe('text-brand-primary')
      expect(PRIMITIVE_TO_SEMANTIC.foreground['blue-500']).toBe('fg-brand-primary')
      expect(PRIMITIVE_TO_SEMANTIC.border['blue-500']).toBe('border-brand')
    })
  })

  describe('groupForProperty', () => {
    it('maps standard properties to their group', () => {
      expect(groupForProperty('color')).toBe('text')
      expect(groupForProperty('background')).toBe('background')
      expect(groupForProperty('background-color')).toBe('background')
      expect(groupForProperty('fill')).toBe('foreground')
      expect(groupForProperty('stroke')).toBe('foreground')
      expect(groupForProperty('border-color')).toBe('border')
      expect(groupForProperty('border-inline-start')).toBe('border')
    })

    it('infers a group for custom properties from a keyword', () => {
      expect(groupForProperty('--border-color')).toBe('border')
      expect(groupForProperty('--background-hover')).toBe('background')
      expect(groupForProperty('--text-color')).toBe('text')
      expect(groupForProperty('--icon-fill')).toBe('foreground')
    })

    it('returns null for properties with no confident group', () => {
      expect(groupForProperty('box-shadow')).toBeNull()
      expect(groupForProperty('outline-color')).toBeNull()
      expect(groupForProperty('--spacing')).toBeNull()
    })
  })
})
