/* eslint-disable import/order */

// TODO: This file could be refactored to be more readable and maintainable.

import { Box, Heading, Paragraph } from "@kaizen/component-library"
/* Stories Modules */
import * as GlobalNotificationStories from "@kaizen/notification/docs/GlobalNotification.stories"
import * as HeadingStories from "@kaizen/component-library/stories/Heading.stories"
import * as IconStories from "@kaizen/component-library/stories/Icon.stories"
import * as InlineNotificationStories from "@kaizen/notification/docs/InlineNotification.stories"
import * as ParagraphStories from "@kaizen/component-library/stories/Paragraph.stories"
import * as ToastNotificationStories from "@kaizen/notification/docs/ToastNotification.stories"
import * as AvatarStories from "@kaizen/draft-avatar/docs/Avatar.stories"
import { Button } from "@kaizen/draft-button"
import * as ButtonStories from "@kaizen/draft-button/docs/Button.stories"
import * as IconButtonStories from "@kaizen/draft-button/docs/IconButton.stories"
import * as CardStories from "@kaizen/draft-card/docs/Card.stories"
import * as CollapsibleStories from "@kaizen/draft-collapsible/docs/Collapsible.stories"
import * as DividerStories from "@kaizen/draft-divider/docs/Divider.stories"
import * as EmptyStateStories from "@kaizen/draft-empty-state/docs/EmptyState.stories"
import * as FilterMenuButtonStories from "@kaizen/draft-filter-menu-button/docs/FilterMenuButton.stories"
import * as CheckboxFieldStories from "@kaizen/draft-form/docs/CheckboxField.stories"
import * as CheckboxGroupStories from "@kaizen/draft-form/docs/CheckboxGroup.stories"
import * as RadioFieldStories from "@kaizen/draft-form/docs/RadioField.stories"
import * as SliderStories from "@kaizen/draft-form/docs/Slider.stories"
import * as TextAreaFieldStories from "@kaizen/draft-form/docs/TextAreaField.stories"
import * as TextFieldStories from "@kaizen/draft-form/docs/TextField.stories"
import * as ToggleSwitchFieldStories from "@kaizen/draft-form/docs/ToggleSwitchField.stories"
import * as GuidanceBlockStories from "@kaizen/draft-guidance-block/docs/GuidanceBlock.stories"
import * as HeroCardStories from "@kaizen/draft-hero-card/docs/HeroCard.stories"
import * as HierarchicalMenuStories from "@kaizen/draft-hierarchical-menu/docs/HierarchicalMenu.stories"
import * as HierarchicalSelectStories from "@kaizen/draft-hierarchical-select/docs/HierarchicalSelect.stories"
import * as IllustrationSceneStories from "@kaizen/draft-illustration/docs/IllustrationScene.stories"
import * as IllustrationSpotStories from "@kaizen/draft-illustration/docs/IllustrationSpot.stories"
import * as LoadingPlaceholderStories from "@kaizen/draft-loading-placeholder/docs/LoadingPlaceholder.stories"
import * as LoadingSpinnerStories from "@kaizen/draft-loading-spinner/docs/LoadingSpinner.stories"
import * as MenuStories from "@kaizen/draft-menu/docs/Menu.stories"
import * as ModalStories from "@kaizen/draft-modal/docs/Modal.stories"
import * as PageLayoutStories from "@kaizen/draft-page-layout/docs/PageLayout.stories"
import * as RadioGroupStories from "@kaizen/draft-form/docs/RadioGroup.stories"
import * as PopoverStories from "@kaizen/draft-popover/docs/Popover.stories"
import * as SelectStories from "@kaizen/draft-select/docs/Select.stories"
import * as SplitButtonStories from "@kaizen/draft-split-button/docs/SplitButton.stories"
import * as TableStories from "@kaizen/draft-table/docs/Table.stories"
import * as TagStories from "@kaizen/draft-tag/docs/Tag.stories"
import * as TileStories from "@kaizen/draft-tile/docs/Tile.stories"
import * as TitleBlockZenStories from "@kaizen/draft-title-block-zen/docs/TitleBlockZen.stories"
import * as TooltipStories from "@kaizen/draft-tooltip/docs/Tooltip.stories"
import * as WellStories from "@kaizen/draft-well/docs/Well.stories"
import * as ZenNavigationBarStories from "@kaizen/draft-zen-navigation-bar/docs/ZenNavigationBar.stories"
import { Meta, Story } from "@storybook/react"
import flatMap from "lodash.flatmap"
import React from "react"
import { useInView } from "react-intersection-observer"
import { InteractionState, MapInteractionCSS } from "react-map-interaction"
import { cssVarBackgrounds } from "../../../storybook/backgrounds"
import { useTheme } from "../react"
import colorString from "color-string"
export default {
  title: "Design Tokens/Story Board",
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const Padding = ({
  size = 1,
}: {
  size?: React.ComponentProps<typeof Box>["p"]
}) => <Box p={size}> </Box>

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
const ColorDemo = (props: { color: string; name?: string }) => {
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
          ...theme.border.solid,
        }}
      >
        {parsedColor && (
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
        )}
        {parsedColor && (
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
        )}
      </div>
    </div>
  )
}

/**
 * A section of components, displayed as a column, with some styles such as a top and left border, a heading/title, and `contain: content` to ensure nothing bleeds out of it such as fixed or absolute positioned elements.
 */
const ComponentsSection = React.forwardRef(
  (
    props: {
      title: React.ReactNode
      children: React.ReactNode
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const border = `solid 1px ${theme.color.purple[700]}`
    return (
      <div
        ref={ref}
        style={{
          borderLeft: border,
          borderTop: border,
          maxWidth: "100vw",
          contain: "content",
        }}
      >
        <Box p={1}>
          <Heading variant="heading-2">{props.title}</Heading>
          <Padding />
          {props.children}
        </Box>
      </div>
    )
  }
)

/**
 * A very heavy component that expects a story module like `import * as storyModule from 'blah.stories.tsx'`, and displays a ComponentSection
 * for it and it's stories.
 * It will also only render when it is visible to the user, as a performance optimisation for the board of all stories.
 * Once rendered, however, it won't un-render, as to preserve the layout.
 *
 * NOTE: This relies on the assumption that the user starts their navigation from top: 0, left: 0 within the MapInteraction container.
 * If they don't, prior elements won't be rendered initially, which will cause layout shifts.
 *
 * At the time of writing, it wasn't intended for scalable or framework-like usage. It could most definitely be made more rigorous and portable though, if you wanted to expose it and re-use it.
 */
const StoriesContainer = (props: {
  storyModule: { default: Meta } & {
    [key: string]: Story | Meta | (React.ComponentType<any> & { story: Story })
  }
  onRender?: () => void
}) => {
  const theme = useTheme()
  const meta = props.storyModule.default
  const [shouldRender, setShouldRender] = React.useState(false)
  const [ref, inView] = useInView()
  const [key, setKey] = React.useState(0)
  React.useEffect(() => {
    if (inView && !shouldRender) {
      setShouldRender(true)
    }
  }, [inView])
  return (
    <ComponentsSection
      ref={ref}
      title={
        <span>
          {meta.title}{" "}
          <Button
            secondary
            label="Re-render"
            onClick={() => setKey(k => k + 1)}
          />
        </span>
      }
    >
      {shouldRender && (
        <Stack key={key}>
          {Object.entries(props.storyModule).map(([k, V]) => {
            if (typeof V !== "function") return null
            const parameters = "story" in V ? V.story.parameters : V.parameters
            const storyElement = (
              <V {...meta.args} {...("story" in V ? V.story.args : {})} />
            )
            return (
              <div key={k}>
                <Heading variant="heading-3">
                  {"story" in V && "name" in V.story
                    ? V.story.name
                    : "storyName" in V
                    ? V.storyName
                    : k}
                </Heading>
                <Padding size={0.5} />
                {parameters &&
                parameters.backgrounds &&
                parameters.backgrounds.default ? (
                  <div
                    style={{
                      backgroundColor: cssVarBackgrounds.find(
                        b => b.name === parameters.backgrounds.default
                      )?.value,
                      padding: theme.spacing.md,
                    }}
                  >
                    {storyElement}
                  </div>
                ) : (
                  storyElement
                )}
              </div>
            )
          })}
        </Stack>
      )}
    </ComponentsSection>
  )
}
const initialInteractionState = {
  scale: 0.9,
  translation: { x: 50, y: 50 },
}
export const Everything: Story = () => {
  const theme = useTheme()
  const [
    interactionState,
    setInteractionState,
  ] = React.useState<InteractionState>(initialInteractionState)

  const resetInteraction = React.useCallback(() => {
    setInteractionState(initialInteractionState)
  }, [])

  const [rendering, setRendering] = React.useState(true)

  /* We don't really need to update any of the stories elements unless the theme changes. This memoization causes a huge perf boost. */
  const memoizedChildren = React.useMemo(
    () => (
      <Stack horizontal gapSize={2}>
        <ComponentsSection title="Colors">
          <Heading variant="heading-3">Purple</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.purple[100]} />
            <ColorDemo name="200" color={theme.color.purple[200]} />
            <ColorDemo name="300" color={theme.color.purple[300]} />
            <ColorDemo name="400" color={theme.color.purple[400]} />
            <ColorDemo name="500" color={theme.color.purple[500]} />
            <ColorDemo name="600" color={theme.color.purple[600]} />
            <ColorDemo name="700" color={theme.color.purple[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Blue</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.blue[100]} />
            <ColorDemo name="200" color={theme.color.blue[200]} />
            <ColorDemo name="300" color={theme.color.blue[300]} />
            <ColorDemo name="400" color={theme.color.blue[400]} />
            <ColorDemo name="500" color={theme.color.blue[500]} />
            <ColorDemo name="600" color={theme.color.blue[600]} />
            <ColorDemo name="700" color={theme.color.blue[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Red</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.red[100]} />
            <ColorDemo name="200" color={theme.color.red[200]} />
            <ColorDemo name="300" color={theme.color.red[300]} />
            <ColorDemo name="400" color={theme.color.red[400]} />
            <ColorDemo name="500" color={theme.color.red[500]} />
            <ColorDemo name="600" color={theme.color.red[600]} />
            <ColorDemo name="700" color={theme.color.red[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Orange</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.orange[100]} />
            <ColorDemo name="200" color={theme.color.orange[200]} />
            <ColorDemo name="300" color={theme.color.orange[300]} />
            <ColorDemo name="400" color={theme.color.orange[400]} />
            <ColorDemo name="500" color={theme.color.orange[500]} />
            <ColorDemo name="600" color={theme.color.orange[600]} />
            <ColorDemo name="700" color={theme.color.orange[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Green</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.green[100]} />
            <ColorDemo name="200" color={theme.color.green[200]} />
            <ColorDemo name="300" color={theme.color.green[300]} />
            <ColorDemo name="400" color={theme.color.green[400]} />
            <ColorDemo name="500" color={theme.color.green[500]} />
            <ColorDemo name="600" color={theme.color.green[600]} />
            <ColorDemo name="700" color={theme.color.green[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Yellow</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.yellow[100]} />
            <ColorDemo name="200" color={theme.color.yellow[200]} />
            <ColorDemo name="300" color={theme.color.yellow[300]} />
            <ColorDemo name="400" color={theme.color.yellow[400]} />
            <ColorDemo name="500" color={theme.color.yellow[500]} />
            <ColorDemo name="600" color={theme.color.yellow[600]} />
            <ColorDemo name="700" color={theme.color.yellow[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Gray</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.gray[100]} />
            <ColorDemo name="200" color={theme.color.gray[200]} />
            <ColorDemo name="300" color={theme.color.gray[300]} />
            <ColorDemo name="400" color={theme.color.gray[400]} />
            <ColorDemo name="500" color={theme.color.gray[500]} />
            <ColorDemo name="600" color={theme.color.gray[600]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">White</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="White" color={theme.color.white} />
          </Stack>
        </ComponentsSection>

        <ComponentsSection title="Typography">
          <Stack>
            <Heading variant="display-0">A better world of work</Heading>
            <Heading variant="heading-1">Heading 1</Heading>
            <Heading variant="heading-2">Heading 2</Heading>
            <Heading variant="heading-3">Heading 3</Heading>
            <Heading variant="heading-4">Heading 4</Heading>
            <Heading variant="heading-5">Heading 5</Heading>
            <Heading variant="heading-6">Heading 6</Heading>
            <Paragraph variant="intro-lede">Intro Lede</Paragraph>
            <Paragraph variant="body">Body</Paragraph>
            <Paragraph variant="small">Small</Paragraph>
            <Paragraph variant="extra-small">Extra Small</Paragraph>
          </Stack>
        </ComponentsSection>

        <StoriesContainer storyModule={AvatarStories} />
        <StoriesContainer storyModule={ButtonStories} />
        <StoriesContainer storyModule={CardStories} />
        <StoriesContainer storyModule={CheckboxFieldStories} />
        <StoriesContainer storyModule={CheckboxGroupStories} />
        <StoriesContainer storyModule={CollapsibleStories} />
        <StoriesContainer storyModule={DividerStories} />
        <StoriesContainer storyModule={EmptyStateStories} />
        <StoriesContainer storyModule={FilterMenuButtonStories} />
        <StoriesContainer storyModule={GlobalNotificationStories} />
        <StoriesContainer storyModule={GuidanceBlockStories} />
        <StoriesContainer storyModule={HeadingStories} />
        <StoriesContainer storyModule={HeroCardStories} />
        <StoriesContainer storyModule={HierarchicalMenuStories} />
        <StoriesContainer storyModule={HierarchicalSelectStories} />
        <StoriesContainer storyModule={IconStories} />
        <StoriesContainer storyModule={IconButtonStories} />
        <StoriesContainer storyModule={IllustrationSceneStories} />
        <StoriesContainer storyModule={IllustrationSpotStories} />
        <StoriesContainer storyModule={InlineNotificationStories} />
        <StoriesContainer storyModule={LoadingPlaceholderStories} />
        <StoriesContainer storyModule={LoadingSpinnerStories} />
        <StoriesContainer storyModule={MenuStories} />
        <StoriesContainer storyModule={ModalStories} />
        <StoriesContainer storyModule={PageLayoutStories} />
        <StoriesContainer storyModule={ParagraphStories} />
        <StoriesContainer storyModule={PopoverStories} />
        <StoriesContainer storyModule={RadioFieldStories} />
        <StoriesContainer storyModule={RadioGroupStories} />
        <StoriesContainer storyModule={SelectStories} />
        <StoriesContainer storyModule={SliderStories} />
        <StoriesContainer storyModule={SplitButtonStories} />
        <StoriesContainer storyModule={TableStories} />
        <StoriesContainer storyModule={TagStories} />
        <StoriesContainer storyModule={TextAreaFieldStories} />
        <StoriesContainer storyModule={TextFieldStories} />
        <StoriesContainer storyModule={TileStories} />
        <StoriesContainer storyModule={TitleBlockZenStories} />
        <StoriesContainer storyModule={ToastNotificationStories} />
        <StoriesContainer storyModule={ToggleSwitchFieldStories} />
        <StoriesContainer storyModule={TooltipStories} />
        <StoriesContainer storyModule={WellStories} />
        <StoriesContainer storyModule={ZenNavigationBarStories} />
      </Stack>
    ),
    [theme]
  )

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme.color.gray["100"],
      }}
    >
      <div
        style={{
          position: "fixed",
          zIndex: 10,
          right: theme.spacing.xxl,
          top: theme.spacing.md,
        }}
      >
        <Button label="Reset" onClick={resetInteraction} />
      </div>
      <MapInteractionCSS
        showControls
        value={interactionState}
        onChange={newState => setInteractionState(newState)}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            padding: theme.spacing.md,
          }}
        >
          {memoizedChildren}
        </div>
      </MapInteractionCSS>
    </div>
  )
}
Everything.storyName = "Story Board"
Everything.parameters = {
  chromatic: { disable: true },
}
