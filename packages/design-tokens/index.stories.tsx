import { Box, Heading } from "@kaizen/component-library"
import * as AvatarStories from "@kaizen/draft-avatar/docs/Avatar.stories"
import * as ButtonStories from "@kaizen/draft-button/docs/Button.stories"
import * as IconButtonStories from "@kaizen/draft-button/docs/IconButton.stories"
import * as CheckboxFieldStories from "@kaizen/draft-form/docs/CheckboxField.stories"
import * as CheckboxGroupStories from "@kaizen/draft-form/docs/CheckboxGroup.stories"
import * as RadioFieldStories from "@kaizen/draft-form/docs/RadioField.stories"
import * as CollapsibleStories from "@kaizen/draft-collapsible/KaizenDraft/Collapsible/Collapsible.stories"
import * as DividerStories from "@kaizen/draft-divider/docs/Divider.stories"
import * as DropdownStories from "@kaizen/draft-dropdown/docs/Dropdown.stories"
import * as EmptyStateStories from "@kaizen/draft-empty-state/docs/EmptyState.stories"
import * as FilterMenuButtonStories from "@kaizen/draft-filter-menu-button/docs/FilterMenuButton.stories"
import * as GlobalNotificationStories from "@kaizen/component-library/stories/GlobalNotification.stories"
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

const ColorDemo = (props: { color: string; name: string }) => {
  const theme = useTheme()
  return (
    <>
      <h4
        style={{
          ...theme.typography.heading4,
        }}
      >
        {props.name}
      </h4>
      <div
        style={{
          width: "20rem",
          height: "10rem",
          backgroundColor: props.color,
          ...theme.border.solid,
        }}
      ></div>
    </>
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
  meta: Meta
  storyModule: {
    [key: string]: Story | Meta | (React.ComponentType<any> & { story: Story })
  }
}) => {
  const theme = useTheme()
  return (
    <ComponentsSection title={props.meta.title}>
      <Stack>
        {Object.entries(props.storyModule).map(([k, V]) => {
          if (typeof V !== "function") return null
          const parameters = "story" in V ? V.story.parameters : V.parameters
          const storyElement = (
            <V {...props.meta.args} {...("story" in V ? V.story.args : {})} />
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
          <Stack>
            <ColorDemo name="Wisteria 100" color={theme.color.wisteria[100]} />
            <ColorDemo name="Wisteria 200" color={theme.color.wisteria[200]} />
            <ColorDemo name="Wisteria 300" color={theme.color.wisteria[300]} />
            <ColorDemo name="Wisteria 400" color={theme.color.wisteria[400]} />
            <ColorDemo name="Wisteria 500" color={theme.color.wisteria[500]} />
            <ColorDemo name="Wisteria 600" color={theme.color.wisteria[600]} />
            <ColorDemo name="Wisteria 700" color={theme.color.wisteria[700]} />
          </Stack>
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
          </Stack>
        </ComponentsSection>

        <StoriesContainer
          meta={AvatarStories.default}
          storyModule={AvatarStories}
        />
        <StoriesContainer
          meta={ButtonStories.default}
          storyModule={ButtonStories}
        />
        <StoriesContainer
          meta={IconButtonStories.default}
          storyModule={IconButtonStories}
        />
        <StoriesContainer
          meta={CardStories.default}
          storyModule={CardStories}
        />
        <StoriesContainer
          meta={CheckboxFieldStories.default}
          storyModule={CheckboxFieldStories}
        />
        <StoriesContainer
          meta={CheckboxGroupStories.default}
          storyModule={CheckboxGroupStories}
        />
        <StoriesContainer
          meta={CollapsibleStories.default}
          storyModule={CollapsibleStories}
        />
        <StoriesContainer
          meta={DividerStories.default}
          storyModule={DividerStories}
        />
        <StoriesContainer
          meta={DropdownStories.default}
          storyModule={DropdownStories}
        />
        <StoriesContainer
          meta={EmptyStateStories.default}
          storyModule={EmptyStateStories}
        />
        <StoriesContainer
          meta={FilterMenuButtonStories.default}
          storyModule={FilterMenuButtonStories}
        />
        <StoriesContainer
          meta={GlobalNotificationStories.default}
          storyModule={GlobalNotificationStories}
        />
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
