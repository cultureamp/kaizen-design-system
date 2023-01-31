import React from "react"
import { Story } from "@storybook/react"
import colorString from "color-string"
import flatMap from "lodash.flatmap"
import { Box } from "@kaizen/component-library"
import { useTheme } from "@kaizen/design-tokens"
import { Heading } from "@kaizen/typography"

export default {
  title: "Design Tokens/Classname References/Color Tokens",
  parameters: {
    chromatic: { disable: false },
    layout: "fullscreen",
    docs: {
      description: {
        component:
          'Import the color tokens into your SCSS with `@import "~@kaizen/design-tokens/sass/color`.',
      },
    },
  },
}

const Padding = ({
  size = 1,
}: {
  size?: React.ComponentProps<typeof Box>["p"]
}): JSX.Element => <Box p={size}> </Box>

/**
 * Use this for showing a simple horizontal or vertical stack of elements, with the support of padding/gaps between each of them.
 */
const Stack = React.memo(
  ({
    children,
    gapSize,
    childStyle,
    horizontal,
    ...divProps
  }: {
    children: React.ReactNode
    childStyle?: React.CSSProperties
    horizontal?: boolean
    gapSize?: React.ComponentProps<typeof Padding>["size"]
  } & JSX.IntrinsicElements["div"]) => {
    const childrenArray = React.Children.toArray(children)
    return (
      <div
        {...divProps}
        style={{
          display: "flex",
          flexDirection: horizontal ? "row" : "column",
          ...divProps.style,
        }}
      >
        {flatMap(childrenArray, (child, i) =>
          i === childrenArray.length - 1
            ? [
                <div style={{ flexShrink: 0, ...childStyle }} key={i}>
                  {child}
                </div>,
              ]
            : [
                <div style={{ flexShrink: 0, ...childStyle }} key={i}>
                  {child}
                </div>,
                <Padding key={`${i}-padding`} size={gapSize} />,
              ]
        )}
      </div>
    )
  }
)

/**
 * A component to show a simple color block with a name
 */
const ColorDemo = (props: { color: string; name?: string }): JSX.Element => {
  const theme = useTheme()
  const parsedColor = colorString.get(props.color)
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h4
        style={{
          ...theme.typography.heading4,
          writingMode: "vertical-lr",
        }}
      >
        {props.name}
      </h4>
      <div
        style={{
          width: "20rem",
          height: "10rem",
          backgroundColor: props.color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {parsedColor && (
          <>
            <Heading variant="heading-5">
              <span
                style={{
                  color: props.color,
                  filter: "invert(1) grayscale(1) contrast(100)",
                }}
              >
                {colorString.to.hex(parsedColor.value)}
              </span>
            </Heading>
            <Heading variant="heading-5">
              <span
                style={{
                  color: props.color,
                  filter: "invert(1) grayscale(1) contrast(100)",
                }}
              >
                {colorString.to.rgb(parsedColor.value)}
              </span>
            </Heading>
          </>
        )}
      </div>
    </div>
  )
}

/**
 * A section of components, displayed as a column, with some styles such as a top and left border, a heading/title, and `contain: content` to ensure nothing bleeds out of it such as fixed or absolute positioned elements.
 */
const ComponentsSection = React.forwardRef<
  HTMLDivElement,
  { title: React.ReactNode; children: React.ReactNode }
>((props, ref) => (
  <>
    <Heading variant="heading-2">{props.title}</Heading>
    <Padding />
    <div
      ref={ref}
      style={{
        maxWidth: "100vw",
        contain: "content",
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fill, 400px)",
      }}
    >
      {props.children}
    </div>
  </>
))

export const ColorTokens: Story = () => {
  const theme = useTheme()

  /* We don't really need to update any of the stories elements unless the theme changes. This memoization causes a huge perf boost. */
  const memoizedChildren = React.useMemo(
    () => (
      <Stack horizontal gapSize={2}>
        <ComponentsSection title="Colors">
          <Stack gapSize={0.5}>
            <Heading variant="heading-3">Purple</Heading>
            <ColorDemo name="100" color={theme.color.purple[100]} />
            <ColorDemo name="200" color={theme.color.purple[200]} />
            <ColorDemo name="300" color={theme.color.purple[300]} />
            <ColorDemo name="400" color={theme.color.purple[400]} />
            <ColorDemo name="500" color={theme.color.purple[500]} />
            <ColorDemo name="600" color={theme.color.purple[600]} />
            <ColorDemo name="700" color={theme.color.purple[700]} />
          </Stack>
          <Stack gapSize={0.5}>
            <Heading variant="heading-3">Blue</Heading>
            <ColorDemo name="100" color={theme.color.blue[100]} />
            <ColorDemo name="200" color={theme.color.blue[200]} />
            <ColorDemo name="300" color={theme.color.blue[300]} />
            <ColorDemo name="400" color={theme.color.blue[400]} />
            <ColorDemo name="500" color={theme.color.blue[500]} />
            <ColorDemo name="600" color={theme.color.blue[600]} />
            <ColorDemo name="700" color={theme.color.blue[700]} />
          </Stack>
          <Stack gapSize={0.5}>
            <Heading variant="heading-3">Red</Heading>
            <ColorDemo name="100" color={theme.color.red[100]} />
            <ColorDemo name="200" color={theme.color.red[200]} />
            <ColorDemo name="300" color={theme.color.red[300]} />
            <ColorDemo name="400" color={theme.color.red[400]} />
            <ColorDemo name="500" color={theme.color.red[500]} />
            <ColorDemo name="600" color={theme.color.red[600]} />
            <ColorDemo name="700" color={theme.color.red[700]} />
          </Stack>
          <Stack gapSize={0.5}>
            <Heading variant="heading-3">Orange</Heading>
            <ColorDemo name="100" color={theme.color.orange[100]} />
            <ColorDemo name="200" color={theme.color.orange[200]} />
            <ColorDemo name="300" color={theme.color.orange[300]} />
            <ColorDemo name="400" color={theme.color.orange[400]} />
            <ColorDemo name="500" color={theme.color.orange[500]} />
            <ColorDemo name="600" color={theme.color.orange[600]} />
            <ColorDemo name="700" color={theme.color.orange[700]} />
          </Stack>
          <Stack gapSize={0.5}>
            <Heading variant="heading-3">Green</Heading>
            <ColorDemo name="100" color={theme.color.green[100]} />
            <ColorDemo name="200" color={theme.color.green[200]} />
            <ColorDemo name="300" color={theme.color.green[300]} />
            <ColorDemo name="400" color={theme.color.green[400]} />
            <ColorDemo name="500" color={theme.color.green[500]} />
            <ColorDemo name="600" color={theme.color.green[600]} />
            <ColorDemo name="700" color={theme.color.green[700]} />
          </Stack>
          <Stack gapSize={0.5}>
            <Heading variant="heading-3">Yellow</Heading>
            <ColorDemo name="100" color={theme.color.yellow[100]} />
            <ColorDemo name="200" color={theme.color.yellow[200]} />
            <ColorDemo name="300" color={theme.color.yellow[300]} />
            <ColorDemo name="400" color={theme.color.yellow[400]} />
            <ColorDemo name="500" color={theme.color.yellow[500]} />
            <ColorDemo name="600" color={theme.color.yellow[600]} />
            <ColorDemo name="700" color={theme.color.yellow[700]} />
          </Stack>
          <Stack gapSize={0.5}>
            <Heading variant="heading-3">Gray</Heading>
            <ColorDemo name="100" color={theme.color.gray[100]} />
            <ColorDemo name="200" color={theme.color.gray[200]} />
            <ColorDemo name="300" color={theme.color.gray[300]} />
            <ColorDemo name="400" color={theme.color.gray[400]} />
            <ColorDemo name="500" color={theme.color.gray[500]} />
            <ColorDemo name="600" color={theme.color.gray[600]} />
          </Stack>
          <Stack gapSize={0.5}>
            <Heading variant="heading-3">White</Heading>
            <ColorDemo name="White" color={theme.color.white} />
          </Stack>
        </ComponentsSection>
      </Stack>
    ),
    [theme]
  )

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: theme.spacing.md,
      }}
    >
      {memoizedChildren}
    </div>
  )
}
