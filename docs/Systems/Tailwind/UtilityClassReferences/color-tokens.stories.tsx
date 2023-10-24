import React, { HTMLAttributes } from "react"
import { Meta, StoryFn } from "@storybook/react"
import colorString from "color-string"
import { color as colorToken } from "@kaizen/design-tokens/tokens/color.json"
import { spacing } from "@kaizen/design-tokens/tokens/spacing.json"
import { typography } from "@kaizen/design-tokens/tokens/typography.json"
import { Heading } from "@kaizen/typography"

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
  gapSize?: keyof typeof spacing
}): JSX.Element => (
  <div
    style={{
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      gap: gapSize && spacing[gapSize],
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
      <h4 style={{ ...typography.heading4, writingMode: "vertical-lr" }}>
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
  <div style={{ padding: spacing[24] }}>
    <Stack horizontal gapSize={48}>
      <ComponentsSection>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Purple</Heading>
          <ColorDemo name="100" color={colorToken.purple[100]} />
          <ColorDemo name="200" color={colorToken.purple[200]} />
          <ColorDemo name="300" color={colorToken.purple[300]} />
          <ColorDemo name="400" color={colorToken.purple[400]} />
          <ColorDemo name="500" color={colorToken.purple[500]} />
          <ColorDemo name="600" color={colorToken.purple[600]} />
          <ColorDemo name="700" color={colorToken.purple[700]} />
          <ColorDemo name="800" color={colorToken.purple[800]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Blue</Heading>
          <ColorDemo name="100" color={colorToken.blue[100]} />
          <ColorDemo name="200" color={colorToken.blue[200]} />
          <ColorDemo name="300" color={colorToken.blue[300]} />
          <ColorDemo name="400" color={colorToken.blue[400]} />
          <ColorDemo name="500" color={colorToken.blue[500]} />
          <ColorDemo name="600" color={colorToken.blue[600]} />
          <ColorDemo name="700" color={colorToken.blue[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Red</Heading>
          <ColorDemo name="100" color={colorToken.red[100]} />
          <ColorDemo name="200" color={colorToken.red[200]} />
          <ColorDemo name="300" color={colorToken.red[300]} />
          <ColorDemo name="400" color={colorToken.red[400]} />
          <ColorDemo name="500" color={colorToken.red[500]} />
          <ColorDemo name="600" color={colorToken.red[600]} />
          <ColorDemo name="700" color={colorToken.red[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Orange</Heading>
          <ColorDemo name="100" color={colorToken.orange[100]} />
          <ColorDemo name="200" color={colorToken.orange[200]} />
          <ColorDemo name="300" color={colorToken.orange[300]} />
          <ColorDemo name="400" color={colorToken.orange[400]} />
          <ColorDemo name="500" color={colorToken.orange[500]} />
          <ColorDemo name="600" color={colorToken.orange[600]} />
          <ColorDemo name="700" color={colorToken.orange[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Green</Heading>
          <ColorDemo name="100" color={colorToken.green[100]} />
          <ColorDemo name="200" color={colorToken.green[200]} />
          <ColorDemo name="300" color={colorToken.green[300]} />
          <ColorDemo name="400" color={colorToken.green[400]} />
          <ColorDemo name="500" color={colorToken.green[500]} />
          <ColorDemo name="600" color={colorToken.green[600]} />
          <ColorDemo name="700" color={colorToken.green[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Yellow</Heading>
          <ColorDemo name="100" color={colorToken.yellow[100]} />
          <ColorDemo name="200" color={colorToken.yellow[200]} />
          <ColorDemo name="300" color={colorToken.yellow[300]} />
          <ColorDemo name="400" color={colorToken.yellow[400]} />
          <ColorDemo name="500" color={colorToken.yellow[500]} />
          <ColorDemo name="600" color={colorToken.yellow[600]} />
          <ColorDemo name="700" color={colorToken.yellow[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Gray</Heading>
          <ColorDemo name="100" color={colorToken.gray[100]} />
          <ColorDemo name="200" color={colorToken.gray[200]} />
          <ColorDemo name="300" color={colorToken.gray[300]} />
          <ColorDemo name="400" color={colorToken.gray[400]} />
          <ColorDemo name="500" color={colorToken.gray[500]} />
          <ColorDemo name="600" color={colorToken.gray[600]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">White</Heading>
          <ColorDemo name="White" color={colorToken.white} />
        </Stack>
      </ComponentsSection>
    </Stack>
  </div>
)
