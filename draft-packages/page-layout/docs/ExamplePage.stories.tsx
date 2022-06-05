import React, { Children, ReactNode } from "react"
import { Box } from "@kaizen/component-library"
import { Paragraph, Heading } from "@kaizen/typography"
import { NavigationTab, TitleBlockZen } from "@kaizen/draft-title-block-zen"
import { withDesign } from "storybook-addon-designs"
import { Container, Content, Skirt, SkirtCard } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./PageLayout.stories.scss"

export default {
  title: `${CATEGORIES.components}/Page Layout/Demo Pages`,
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          "This is a mock implementation of pages using Kaizen components. The purpose of these are to provide guidance on how they might be used rather than specific implementation.",
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=6243%3A4094"
    ),
  },
  decorators: [withDesign],
}

// This is a mock implementation of a page wrapper
interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer: React.VFC<PageContainerProps> = ({ children }) => (
  <div>{children}</div>
)

export const SkirtExamplePage = () => (
  <>
    <PageContainer>
      <TitleBlockZen
        title="Home"
        navigationTabs={[<NavigationTab text="Label" href="#" active />]}
      />
      <Skirt titleBlockHasNavigation>
        <Box mb={1}>
          <Heading variant="heading-2" color="white">
            Tasks
          </Heading>
        </Box>
        <SkirtCard>
          <Box p={1}>
            <Heading variant="heading-2">You have 1 task to complete</Heading>
            <div>
              <ul>
                <li>
                  <Paragraph variant="body"> It does a thing</Paragraph>
                </li>
              </ul>
            </div>
          </Box>
        </SkirtCard>
      </Skirt>
      {/* // TODO: add mock page content goes here */}
    </PageContainer>
  </>
)

SkirtExamplePage.storyName = "Demo page with skirt"
