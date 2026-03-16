import React, { type HTMLAttributes } from 'react'
import { type Meta, type StoryFn } from '@storybook/react'
import { Heading } from '~components/Heading'
import { tokens } from '~design-tokens/js'

export default {
  title: 'Guides/Tokens/Color Tokens',
  parameters: {
    chromatic: {
      disable: false,
      diffThreshold: 0,
    },
    docsLayout: 'fullPage',
  },
} satisfies Meta

/**
 * Use this for showing a simple horizontal or vertical stack of elements, with the support of padding/gaps between each of them.
 */
const Stack = ({
  children,
  gapSize,
  horizontal,
  style,
  ...divAttributes
}: HTMLAttributes<HTMLDivElement> & {
  horizontal?: boolean
  gapSize?: keyof typeof tokens.spacing
}): JSX.Element => (
  <div
    style={{
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      gap: gapSize && tokens.spacing[gapSize],
      ...style,
    }}
    {...divAttributes}
  >
    {children}
  </div>
)

/**
 * A component to show a simple color block with a name
 */
const ColorDemo = ({ color, name }: { color: string; name?: string }): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <h4 style={{ ...tokens.typography.heading4, writingMode: 'vertical-lr', minWidth: '3rem' }}>
      {name}
    </h4>
    <div
      style={{
        width: '20rem',
        height: '5rem',
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Heading variant="heading-6" tag="span">
        <span style={{ color, filter: 'invert(1) grayscale(1) contrast(100)' }}>{color}</span>
      </Heading>
    </div>
  </div>
)

/**
 * A section of components, displayed as a column, with some styles such as a top and left border, a heading/title, and `contain: content` to ensure nothing bleeds out of it such as fixed or absolute positioned elements.
 */
const ComponentsSection = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div
    style={{
      maxWidth: 'calc(100vw - 4rem)',
      contain: 'content',
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(auto-fill, 400px)',
    }}
  >
    {children}
  </div>
)

const ColorPaletteDemo = ({
  name,
  palette,
}: {
  name: string
  palette: Record<string, string>
}): JSX.Element => (
  <Stack gapSize={12}>
    <Heading variant="heading-3">{name}</Heading>
    {Object.entries(palette).map(([step, color]) => (
      <ColorDemo key={step} name={step} color={color} />
    ))}
  </Stack>
)

export const ColorTokens: StoryFn = () => (
  <div style={{ padding: tokens.spacing[24] }}>
    <Stack horizontal gapSize={48}>
      <ComponentsSection>
        <ColorPaletteDemo name="Purple" palette={tokens.color.purple} />
        <ColorPaletteDemo name="Blue" palette={tokens.color.blue} />
        <ColorPaletteDemo name="Cyan" palette={tokens.color.cyan} />
        <ColorPaletteDemo name="Green" palette={tokens.color.green} />
        <ColorPaletteDemo name="Lime" palette={tokens.color.lime} />
        <ColorPaletteDemo name="Yellow" palette={tokens.color.yellow} />
        <ColorPaletteDemo name="Orange" palette={tokens.color.orange} />
        <ColorPaletteDemo name="Red" palette={tokens.color.red} />
        <ColorPaletteDemo name="Pink" palette={tokens.color.pink} />
        <ColorPaletteDemo name="Grey Cool" palette={tokens.color['grey-cool']} />
        <ColorPaletteDemo name="Grey Warm" palette={tokens.color['grey-warm']} />
        <Stack gapSize={12}>
          <Heading variant="heading-3">White / Black</Heading>
          <ColorDemo name="White" color={tokens.color.white} />
          <ColorDemo name="Black" color={tokens.color.black} />
        </Stack>
      </ComponentsSection>
    </Stack>
  </div>
)
