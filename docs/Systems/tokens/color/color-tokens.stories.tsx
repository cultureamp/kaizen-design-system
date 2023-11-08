import React, { HTMLAttributes } from "react"
import { Meta, StoryFn } from "@storybook/react"
import colorString from "color-string"
import { Heading } from "~components/Heading"
import { tokens } from "~design-tokens/js"

export default {
  title: "Systems/Tokens/Classname References/Color Tokens",
  parameters: {
    chromatic: { disable: false },
    docsLayout: "fullPage",
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
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
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
const ColorDemo = ({
  color,
  name,
}: {
  color: string
  name?: string
}): JSX.Element | null => {
  const parsedColor = colorString.get(color)

  if (!parsedColor) return null

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h4 style={{ ...tokens.typography.heading4, writingMode: "vertical-lr" }}>
        {name}
      </h4>

      <div
        style={{
          width: "20rem",
          height: "10rem",
          backgroundColor: color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading variant="heading-5" tag="span">
          <span
            style={{ color, filter: "invert(1) grayscale(1) contrast(100)" }}
          >
            {colorString.to.hex(parsedColor.value)}
          </span>
        </Heading>
        <Heading variant="heading-5" tag="span">
          <span
            style={{ color, filter: "invert(1) grayscale(1) contrast(100)" }}
          >
            {colorString.to.rgb(parsedColor.value)}
          </span>
        </Heading>
      </div>
    </div>
  )
}

/**
 * A section of components, displayed as a column, with some styles such as a top and left border, a heading/title, and `contain: content` to ensure nothing bleeds out of it such as fixed or absolute positioned elements.
 */
const ComponentsSection = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => (
  <div
    style={{
      maxWidth: "calc(100vw - 4rem)",
      contain: "content",
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: "repeat(auto-fill, 400px)",
    }}
  >
    {children}
  </div>
)

export const ColorTokens: StoryFn = () => (
  <div style={{ padding: tokens.spacing[24] }}>
    <Stack horizontal gapSize={48}>
      <ComponentsSection>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Purple</Heading>
          <ColorDemo name="100" color={tokens.color.purple[100]} />
          <ColorDemo name="200" color={tokens.color.purple[200]} />
          <ColorDemo name="300" color={tokens.color.purple[300]} />
          <ColorDemo name="400" color={tokens.color.purple[400]} />
          <ColorDemo name="500" color={tokens.color.purple[500]} />
          <ColorDemo name="600" color={tokens.color.purple[600]} />
          <ColorDemo name="700" color={tokens.color.purple[700]} />
          <ColorDemo name="800" color={tokens.color.purple[800]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Blue</Heading>
          <ColorDemo name="100" color={tokens.color.blue[100]} />
          <ColorDemo name="200" color={tokens.color.blue[200]} />
          <ColorDemo name="300" color={tokens.color.blue[300]} />
          <ColorDemo name="400" color={tokens.color.blue[400]} />
          <ColorDemo name="500" color={tokens.color.blue[500]} />
          <ColorDemo name="600" color={tokens.color.blue[600]} />
          <ColorDemo name="700" color={tokens.color.blue[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Red</Heading>
          <ColorDemo name="100" color={tokens.color.red[100]} />
          <ColorDemo name="200" color={tokens.color.red[200]} />
          <ColorDemo name="300" color={tokens.color.red[300]} />
          <ColorDemo name="400" color={tokens.color.red[400]} />
          <ColorDemo name="500" color={tokens.color.red[500]} />
          <ColorDemo name="600" color={tokens.color.red[600]} />
          <ColorDemo name="700" color={tokens.color.red[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Orange</Heading>
          <ColorDemo name="100" color={tokens.color.orange[100]} />
          <ColorDemo name="200" color={tokens.color.orange[200]} />
          <ColorDemo name="300" color={tokens.color.orange[300]} />
          <ColorDemo name="400" color={tokens.color.orange[400]} />
          <ColorDemo name="500" color={tokens.color.orange[500]} />
          <ColorDemo name="600" color={tokens.color.orange[600]} />
          <ColorDemo name="700" color={tokens.color.orange[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Green</Heading>
          <ColorDemo name="100" color={tokens.color.green[100]} />
          <ColorDemo name="200" color={tokens.color.green[200]} />
          <ColorDemo name="300" color={tokens.color.green[300]} />
          <ColorDemo name="400" color={tokens.color.green[400]} />
          <ColorDemo name="500" color={tokens.color.green[500]} />
          <ColorDemo name="600" color={tokens.color.green[600]} />
          <ColorDemo name="700" color={tokens.color.green[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Yellow</Heading>
          <ColorDemo name="100" color={tokens.color.yellow[100]} />
          <ColorDemo name="200" color={tokens.color.yellow[200]} />
          <ColorDemo name="300" color={tokens.color.yellow[300]} />
          <ColorDemo name="400" color={tokens.color.yellow[400]} />
          <ColorDemo name="500" color={tokens.color.yellow[500]} />
          <ColorDemo name="600" color={tokens.color.yellow[600]} />
          <ColorDemo name="700" color={tokens.color.yellow[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Gray</Heading>
          <ColorDemo name="100" color={tokens.color.gray[100]} />
          <ColorDemo name="200" color={tokens.color.gray[200]} />
          <ColorDemo name="300" color={tokens.color.gray[300]} />
          <ColorDemo name="400" color={tokens.color.gray[400]} />
          <ColorDemo name="500" color={tokens.color.gray[500]} />
          <ColorDemo name="600" color={tokens.color.gray[600]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">White</Heading>
          <ColorDemo name="White" color={tokens.color.white} />
        </Stack>
      </ComponentsSection>
    </Stack>
  </div>
)
