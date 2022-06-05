import React from "react"
import { Box } from "@kaizen/component-library"
import { Paragraph } from "@kaizen/typography"
import { NavigationTab, TitleBlockZen } from "@kaizen/draft-title-block-zen"
import { withDesign } from "storybook-addon-designs"
import { Container, Content, Skirt, SkirtCard } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./PageLayout.stories.scss"

export default {
  title: `${CATEGORIES.components}/Page Layout`,
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          'import { Container, Content } from "@kaizen/draft-page-layout"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=6243%3A4094"
    ),
  },
  decorators: [withDesign],
}

const OffsetPadding = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "-1rem" }}>{children}</div>
)

export const DefaultStory = () => (
  <OffsetPadding>
    <TitleBlockZen title="Page title" collapseNavigationAreaWhenPossible />
    <Container>
      <Content>
        <Paragraph variant="body">
          This content should sit with the same width as the TitleBlockZen. Call
          me Ishmael. Some years ago - never mind how long precisely - having
          little or no money in my purse, and nothing particular to interest me
          on shore, I thought I would sail about a little and see the watery
          part of the world. It is a way I have of driving off the spleen, and
          regulating the circulation. Whenever I find myself growing grim about
          the mouth; whenever it is a damp, drizzly November in my soul;
          whenever I find myself involuntarily pausing before coffin warehouses,
          and bringing up the rear of every funeral I meet; and especially
          whenever my hypos get such an upper hand of me, that it requires a
          strong moral principle to prevent me from deliberately stepping into
          the street, and methodically knocking people's hats off - then, I
          account it high time to get to sea as soon as I can. This is my
          substitute for pistol and ball. With a philosophical flourish Cato
          throws himself upon his sword; I quietly take to the ship.
        </Paragraph>
      </Content>
    </Container>
  </OffsetPadding>
)
DefaultStory.storyName = "Container/Content (default)"

export const FullBleedBackgroundStory = () => (
  <OffsetPadding>
    <Container classNameOverride={styles.pink}>
      <Content classNameOverride={styles.white}>
        <Paragraph variant="body">
          Call me Ishmael. Some years ago - never mind how long precisely -
          having little or no money in my purse, and nothing particular to
          interest me on shore, I thought I would sail about a little and see
          the watery part of the world. It is a way I have of driving off the
          spleen, and regulating the circulation. Whenever I find myself growing
          grim about the mouth; whenever it is a damp, drizzly November in my
          soul; whenever I find myself involuntarily pausing before coffin
          warehouses, and bringing up the rear of every funeral I meet; and
          especially whenever my hypos get such an upper hand of me, that it
          requires a strong moral principle to prevent me from deliberately
          stepping into the street, and methodically knocking people's hats off
          - then, I account it high time to get to sea as soon as I can. This is
          my substitute for pistol and ball. With a philosophical flourish Cato
          throws himself upon his sword; I quietly take to the ship.
        </Paragraph>
      </Content>
    </Container>
  </OffsetPadding>
)
FullBleedBackgroundStory.storyName = "Container/Content (Full-bleed background)"
FullBleedBackgroundStory.parameters = { chromatic: { disable: false } }
