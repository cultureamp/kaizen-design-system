/* Stories Modules */
import * as AvatarStories from "@kaizen/draft-avatar/docs/Avatar.stories"
import * as ButtonStories from "@kaizen/draft-button/docs/Button.stories"
import * as CheckboxFieldStories from "@kaizen/draft-form/docs/CheckboxField.stories"
import * as CheckboxGroupStories from "@kaizen/draft-form/docs/CheckboxGroup.stories"
import * as CollapsibleStories from "@kaizen/draft-collapsible/KaizenDraft/Collapsible/Collapsible.stories"
import * as DividerStories from "@kaizen/draft-divider/docs/Divider.stories"
import * as DropdownStories from "@kaizen/draft-dropdown/docs/Dropdown.stories"
import * as EmptyStateStories from "@kaizen/draft-empty-state/docs/EmptyState.stories"
import * as FilterMenuButtonStories from "@kaizen/draft-filter-menu-button/docs/FilterMenuButton.stories"
import * as GlobalNotificationStories from "@kaizen/component-library/stories/GlobalNotification.stories"
import * as GuidanceBlockStories from "@kaizen/draft-guidance-block/docs/GuidanceBlock.stories"
import * as HeadingStories from "@kaizen/component-library/stories/Heading.stories"
import * as HeroCardStories from "@kaizen/draft-hero-card/docs/HeroCard.stories"
import * as HeroPanelStories from "@kaizen/draft-hero-panel/docs/HeroPanel.stories"
import * as HierarchicalMenuStories from "@kaizen/draft-hierarchical-menu/docs/HierarchicalMenu.stories"
import * as HierarchicalSelectStories from "@kaizen/draft-hierarchical-select/docs/HierarchicalSelect.stories"
import * as IconStories from "@kaizen/component-library/stories/Icon.stories"
import * as IconButtonStories from "@kaizen/draft-button/docs/IconButton.stories"
import * as IllustrationSceneStories from "@kaizen/draft-illustration/docs/IllustrationScene.stories"
import * as IllustrationSpotStories from "@kaizen/draft-illustration/docs/IllustrationSpot.stories"
import * as InlineNotificationStories from "@kaizen/component-library/stories/InlineNotification.stories"
import * as LoadingPlaceholderStories from "@kaizen/draft-loading-placeholder/docs/LoadingPlaceholder.stories"
import * as LoadingSpinnerStories from "@kaizen/draft-loading-spinner/docs/LoadingSpinner.stories"
import * as MenuStories from "@kaizen/draft-menu/docs/Menu.stories"
import * as ModalStories from "@kaizen/draft-modal/docs/Modal.stories"
import * as NavigationBarStories from "@kaizen/component-library/stories/NavigationBar.stories"
import * as PageLayoutStories from "@kaizen/draft-page-layout/docs/PageLayout.stories"
import * as ParagraphStories from "@kaizen/component-library/stories/Paragraph.stories"
import * as PopoverStories from "@kaizen/draft-popover/docs/Popover.stories"
import * as RadioFieldStories from "@kaizen/draft-form/docs/RadioField.stories"
import * as RadioGroupStories from "@kaizen/draft-page-layout/docs/RadioGroup.stories"
import * as SearchBoxStories from "@kaizen/draft-search-box/docs/SearchBox.stories"
import * as SelectStories from "@kaizen/draft-select/docs/Select.stories"
import * as SplitButtonStories from "@kaizen/draft-split-button/docs/SplitButton.stories"
import * as TableStories from "@kaizen/draft-table/docs/Table.stories"
import * as TagStories from "@kaizen/draft-tag/docs/Tag.stories"
import * as TextAreaFieldStories from "@kaizen/draft-form/docs/TextAreaField.stories"
import * as TextFieldStories from "@kaizen/draft-form/docs/TextField.stories"
import * as TileStories from "@kaizen/draft-tile/docs/Tile.stories"
import * as TitleBlockZenStories from "@kaizen/draft-title-block-zen/docs/TitleBlockZen.stories"
import * as ToastNotificationStories from "@kaizen/component-library/stories/ToastNotification.stories"
import * as ToggleSwitchFieldStories from "@kaizen/draft-form/docs/ToggleSwitchField.stories"
import * as TooltipStories from "@kaizen/draft-tooltip/docs/Tooltip.stories"
import * as VerticalProgressIndicatorStories from "@kaizen/draft-vertical-progress-step/docs/VerticalProgressIndicator.stories"
import * as VerticalProgressStepStories from "@kaizen/draft-vertical-progress-step/docs/VerticalProgressStep.stories"
import * as WellStories from "@kaizen/draft-well/docs/Well.stories"
import * as ZenNavigationBarStories from "@kaizen/draft-zen-navigation-bar/docs/ZenNavigationBar.stories"

import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import * as CardStories from "@kaizen/draft-card/docs/Card.stories"
import { Meta, Story } from "@storybook/react"
import flatMap from "lodash.flatmap"
import React from "react"
import {
  InteractionState,
  MapInteraction,
  MapInteractionCSS,
} from "react-map-interaction"
import { Button } from "@kaizen/draft-button"
import * as SliderStories from "../../draft-packages/stories/Slider.stories"
import { cssVarBackgrounds } from "../../storybook/backgrounds"
import { useTheme } from "./react"

export default {
  title: "Design Tokens/Overview",
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const Padding = ({
  size = 1,
}: {
  size?: React.ComponentProps<typeof Box>["p"]
}) => <Box p={size}> </Box>

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

const ColorDemo = (props: { color: string; name?: string }) => {
  const theme = useTheme()
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h4
        style={{
          ...theme.typography.heading4,
          writingMode: "vertical-lr",
          flex: 1,
        }}
      >
        {props.name}
      </h4>
      <div
        style={{
          flex: 11,
          flexShrink: 0,
          width: "20rem",
          height: "10rem",
          backgroundColor: props.color,
          ...theme.border.solid,
        }}
      ></div>
    </div>
  )
}

const ComponentCard = (props: { children: React.ReactNode; title: string }) => (
  <Card>
    <Box p={1}>
      <Heading variant="heading-3">{props.title}</Heading>
      <Padding />
      {props.children}
    </Box>
  </Card>
)

const ComponentsSection = (props: {
  title: string
  children: React.ReactNode
}) => {
  const theme = useTheme()
  const border = `solid 1px ${theme.color.wisteria[700]}`
  return (
    <div
      style={{
        borderLeft: border,
        borderTop: border,
        contain: "content",
        maxWidth: "100vw",
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

const StoriesContainer = (props: {
  storyModule: { default: Meta } & {
    [key: string]: Story | Meta | (React.ComponentType<any> & { story: Story })
  }
}) => {
  const theme = useTheme()
  const meta = props.storyModule.default
  return (
    <ComponentsSection title={meta.title}>
      <Stack>
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
    </ComponentsSection>
  )
}
const initialInteractionState = {
  scale: 0.9,
  translation: { x: 50, y: 50 },
}
export const Everything = () => {
  const theme = useTheme()
  const [
    interactionState,
    setInteractionState,
  ] = React.useState<InteractionState>(initialInteractionState)

  const resetInteraction = React.useCallback(() => {
    setInteractionState(initialInteractionState)
  }, [])

  /* We don't really need to update any of the stories from above, unless the theme changes. */
  const memoizedChildren = React.useMemo(
    () => (
      <Stack horizontal gapSize={2}>
        <ComponentsSection title="Colors">
          <Heading variant="heading-3">Wisteria</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.wisteria[100]} />
            <ColorDemo name="200" color={theme.color.wisteria[200]} />
            <ColorDemo name="300" color={theme.color.wisteria[300]} />
            <ColorDemo name="400" color={theme.color.wisteria[400]} />
            <ColorDemo name="500" color={theme.color.wisteria[500]} />
            <ColorDemo name="600" color={theme.color.wisteria[600]} />
            <ColorDemo name="700" color={theme.color.wisteria[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Cluny</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.cluny[100]} />
            <ColorDemo name="200" color={theme.color.cluny[200]} />
            <ColorDemo name="300" color={theme.color.cluny[300]} />
            <ColorDemo name="400" color={theme.color.cluny[400]} />
            <ColorDemo name="500" color={theme.color.cluny[500]} />
            <ColorDemo name="600" color={theme.color.cluny[600]} />
            <ColorDemo name="700" color={theme.color.cluny[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Coral</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.coral[100]} />
            <ColorDemo name="200" color={theme.color.coral[200]} />
            <ColorDemo name="300" color={theme.color.coral[300]} />
            <ColorDemo name="400" color={theme.color.coral[400]} />
            <ColorDemo name="500" color={theme.color.coral[500]} />
            <ColorDemo name="600" color={theme.color.coral[600]} />
            <ColorDemo name="700" color={theme.color.coral[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Peach</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.peach[100]} />
            <ColorDemo name="200" color={theme.color.peach[200]} />
            <ColorDemo name="300" color={theme.color.peach[300]} />
            <ColorDemo name="400" color={theme.color.peach[400]} />
            <ColorDemo name="500" color={theme.color.peach[500]} />
            <ColorDemo name="600" color={theme.color.peach[600]} />
            <ColorDemo name="700" color={theme.color.peach[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Seedling</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.seedling[100]} />
            <ColorDemo name="200" color={theme.color.seedling[200]} />
            <ColorDemo name="300" color={theme.color.seedling[300]} />
            <ColorDemo name="400" color={theme.color.seedling[400]} />
            <ColorDemo name="500" color={theme.color.seedling[500]} />
            <ColorDemo name="600" color={theme.color.seedling[600]} />
            <ColorDemo name="700" color={theme.color.seedling[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Yuzu</Heading>
          <Padding />
          <Stack gapSize={0.5}>
            <ColorDemo name="100" color={theme.color.yuzu[100]} />
            <ColorDemo name="200" color={theme.color.yuzu[200]} />
            <ColorDemo name="300" color={theme.color.yuzu[300]} />
            <ColorDemo name="400" color={theme.color.yuzu[400]} />
            <ColorDemo name="500" color={theme.color.yuzu[500]} />
            <ColorDemo name="600" color={theme.color.yuzu[600]} />
            <ColorDemo name="700" color={theme.color.yuzu[700]} />
          </Stack>
          <Padding size={2} />
          <Heading variant="heading-3">Ash</Heading>
          <Padding />
          <ColorDemo color={theme.color.ash} />
          <Padding size={2} />
          <Heading variant="heading-3">Stone</Heading>
          <Padding />
          <ColorDemo color={theme.color.stone} />
          <Padding size={2} />
          <Heading variant="heading-3">Iron</Heading>
          <Padding />
          <ColorDemo color={theme.color.iron} />
          <Padding size={2} />
          <Heading variant="heading-3">White</Heading>
          <Padding />
          <ColorDemo color={theme.color.white} />
          <Padding size={2} />
          <Heading variant="heading-3">Slate</Heading>
          <Padding />
          <ColorDemo color={theme.color.slate} />
        </ComponentsSection>

        <ComponentsSection title="Typography">
          <Stack>
            <Heading variant="display-0">Display 0</Heading>
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
        <StoriesContainer storyModule={DropdownStories} />
        <StoriesContainer storyModule={EmptyStateStories} />
        <StoriesContainer storyModule={FilterMenuButtonStories} />
        <StoriesContainer storyModule={GlobalNotificationStories} />
        <StoriesContainer storyModule={GuidanceBlockStories} />
        <StoriesContainer storyModule={HeadingStories} />
        <StoriesContainer storyModule={HeroCardStories} />
        <StoriesContainer storyModule={HeroPanelStories} />
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
        <StoriesContainer storyModule={NavigationBarStories} />
        <StoriesContainer storyModule={PageLayoutStories} />
        <StoriesContainer storyModule={ParagraphStories} />
        <StoriesContainer storyModule={PopoverStories} />
        <StoriesContainer storyModule={RadioFieldStories} />
        <StoriesContainer storyModule={RadioGroupStories} />
        <StoriesContainer storyModule={SearchBoxStories} />
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
        <StoriesContainer storyModule={VerticalProgressIndicatorStories} />
        <StoriesContainer storyModule={VerticalProgressStepStories} />
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
        backgroundColor: theme.color.stone,
        ...{
          contentVisibility: "auto",
        },
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
Everything.storyName = "All the things"
