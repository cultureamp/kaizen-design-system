import React from 'react'
import { Heading } from '~components/Heading'
import { tokens, semanticColorTokens } from '~design-tokens/js'

/** Pull the primitive name out of a semantic value, e.g. `var(--color-blue-500)` → `color-blue-500`. */
const primitiveFromValue = (value: string): string | null =>
  value.match(/var\(--(.+?)\)/)?.[1] ?? null

/** Resolve a primitive CSS-var name (`color-blue-500`, `color-white`) to its hex value. */
const primitiveHex = (primitiveName: string): string | null => {
  const path = primitiveName.replace(/^color-/, '').split('-')
  const colors = tokens.color as Record<string, unknown>

  if (path.length === 1) {
    const value = colors[path[0]]
    return typeof value === 'string' ? value : null
  }

  const [hue, shade] = path
  const ramp = colors[hue] as Record<string, string> | undefined
  return ramp?.[shade] ?? null
}

/** A colour swatch; renders a hatched placeholder when there's no value. */
const Swatch = ({ hex }: { hex: string | null }): JSX.Element => (
  <div
    style={{
      width: '2.75rem',
      height: '2.75rem',
      flexShrink: 0,
      borderRadius: '6px',
      border: `1px solid ${tokens.color.gray[300]}`,
      ...(hex
        ? { backgroundColor: hex }
        : {
            background:
              'repeating-linear-gradient(45deg, #fff, #fff 6px, #f4f4f5 6px, #f4f4f5 12px)',
          }),
    }}
  />
)

/** A swatch paired with a token name and its resolved hex value. */
const Cell = ({ name, hex }: { name: string; hex: string | null }): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing[8], minWidth: '15rem' }}>
    <Swatch hex={hex} />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <code style={{ ...tokens.typography.paragraphBody, fontWeight: 600 }}>{name}</code>
      <span style={{ ...tokens.typography.paragraphSmall, color: tokens.color.gray[600] }}>
        {hex ?? 'No mapping yet'}
      </span>
    </div>
  </div>
)

/**
 * One mapping row: the primitive on the left, the semantic token it backs on
 * the right. Both swatches resolve to the same hex — that's the mapping. Tokens
 * with no mapping yet (`null`) are flagged with a dashed red outline.
 */
const MappingRow = ({
  semanticName,
  value,
}: {
  semanticName: string
  value: string | null
}): JSX.Element => {
  const isUnmapped = value === null
  const primitiveName = value ? primitiveFromValue(value) : null
  const hex = primitiveName ? primitiveHex(primitiveName) : null

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing[16],
        padding: tokens.spacing[8],
        borderRadius: '8px',
        border: isUnmapped
          ? `2px dashed ${tokens.color.red[400]}`
          : `1px solid ${tokens.color.gray[300]}`,
        backgroundColor: isUnmapped ? tokens.color.red[100] : tokens.color.white,
      }}
    >
      <Cell name={primitiveName ? `--${primitiveName}` : 'unmapped primitive'} hex={hex} />
      <span aria-hidden style={{ ...tokens.typography.heading3, color: tokens.color.gray[500] }}>
        →
      </span>
      <Cell name={semanticName} hex={hex} />
    </div>
  )
}

const GROUP_TITLES: Record<keyof typeof semanticColorTokens, string> = {
  background: 'Background',
  text: 'Text',
  foreground: 'Foreground',
  border: 'Border',
}

/**
 * The single source-of-truth colour reference: every semantic token mapped to
 * the primitive it resolves to, with names and hex values on both sides.
 */
export const ColorTokensDemo = (): JSX.Element => (
  <div
    style={{
      padding: tokens.spacing[24],
      display: 'flex',
      flexDirection: 'column',
      gap: tokens.spacing[32],
    }}
  >
    {(Object.keys(semanticColorTokens) as Array<keyof typeof semanticColorTokens>).map((group) => (
      <div
        key={group}
        style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing[12] }}
      >
        <Heading variant="heading-2" tag="h2">
          {GROUP_TITLES[group]}
        </Heading>
        {Object.entries(semanticColorTokens[group]).map(([name, value]) => (
          <MappingRow key={name} semanticName={name} value={value} />
        ))}
      </div>
    ))}
  </div>
)
