import React from "react"
import { Box } from "@kaizen/component-library"
import { Paragraph } from "@kaizen/typography"
import { NavigationTab, TitleBlockZen } from "@kaizen/draft-title-block-zen"
import { withDesign } from "storybook-addon-designs"
import { Skirt, SkirtCard } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./PageLayout.stories.scss"

export default {
  title: `${CATEGORIES.components}/Page Layout/Skirt`,
  component: Skirt,
  parameters: {
    docs: {
      description: {
        component: 'import { Skirt } from "@kaizen/draft-page-layout"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=6243%3A4094"
    ),
  },
  decorators: [withDesign],
}

export const SkirtStory = () => (
  <>
    <TitleBlockZen
      title="Skirt"
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[<NavigationTab text="Label" href="#" active />]}
    />
    <Skirt>
      <SkirtCard>
        <Box p={1}>
          <Paragraph variant="body">
            The Skirt component extends the background color from the Title
            Block into the content area.
          </Paragraph>
        </Box>
      </SkirtCard>
    </Skirt>
  </>
)

SkirtStory.storyName = "Skirt (default)"

export const SkirtEducationVariant = () => (
  <>
    <TitleBlockZen
      variant="education"
      title="Education variant"
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab variant="education" text="Label" href="#" active />,
      ]}
    />
    <Skirt variant="education">
      <SkirtCard>
        <Box p={1}>
          <Paragraph variant="body">
            The Skirt component extends the background color from the Title
            Block into the content area.
          </Paragraph>
        </Box>
      </SkirtCard>
    </Skirt>
  </>
)
SkirtEducationVariant.storyName = "Skirt (Education variant)"
SkirtEducationVariant.parameters = { chromatic: { disable: false } }

export const SkirtWithoutTitleBlockNavigation = () => (
  <>
    <TitleBlockZen
      title="Without Title Block navigation"
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      collapseNavigationAreaWhenPossible={true}
    />
    <Skirt titleBlockHasNavigation={false}>
      <SkirtCard>
        <Box p={1}>
          <Box mb={1}>
            <Box mb={1}>
              <Paragraph variant="body">
                When the navigation area for the Title Block is collapsed,
                there’s an additional prop to ensure the maximum height of the
                skirt is consistent when it moves up. If you navigate to the
                default Skirt story (which has navigation) you should see the
                bottom level of the Skirt in both that story and this one match.
              </Paragraph>
            </Box>
            <Box>
              <Paragraph variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                semper odio vitae sem gravida rutrum. Praesent vel sapien eget
                eros dictum luctus scelerisque eu nibh. Etiam ullamcorper
                lobortis gravida. Suspendisse massa tortor, ultricies et ipsum
                at, iaculis bibendum est. Mauris vestibulum interdum ultricies.
                Proin sed elit lacinia, malesuada leo in, auctor enim.
                Suspendisse venenatis, tortor vel eleifend cursus, metus sem
                luctus nunc, at maximus magna metus at mi. Curabitur porttitor
                dignissim ante, sit amet tincidunt nibh elementum convallis.
                Morbi accumsan rutrum elit eget sagittis. Pellentesque id quam
                at enim dictum placerat sit amet in purus. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Suspendisse quam elit, facilisis sit amet libero vitae,
                congue rutrum nisi. Ut non aliquet ex.
              </Paragraph>
            </Box>
          </Box>
        </Box>
      </SkirtCard>
    </Skirt>
  </>
)

SkirtWithoutTitleBlockNavigation.storyName =
  "Skirt (Title Block without navigation)"

SkirtWithoutTitleBlockNavigation.parameters = { chromatic: { disable: false } }

export const WithoutSkirtCard = () => (
  <>
    <TitleBlockZen
      title="Without Skirt Card"
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      collapseNavigationAreaWhenPossible
    />
    <Skirt titleBlockHasNavigation={false}>
      <Box mb={1}>
        <Paragraph variant="body" color="white">
          The <strong>SkirtCard</strong> component is provided as a convenience
          for the most common design case, but it is not required. If you are
          not using a <strong>SkirtCard</strong>, ensure that there is enough
          contrast between the background and your content - this includes
          boxshadows on white cards / containers.
        </Paragraph>
      </Box>
      <Box>
        <Paragraph variant="body">
          i.e.: this would fail contrast ratios - Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nam saepe, molestias optio animi,
          nesciunt necessitatibus nulla quas quod temporibus ea, mollitia
          suscipit quisquam quo reprehenderit? Vel possimus commodi nobis
          accusantium.
        </Paragraph>
      </Box>
    </Skirt>
  </>
)

WithoutSkirtCard.storyName = "Skirt (without SkirtCard)"
