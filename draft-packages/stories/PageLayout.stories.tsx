import * as React from "react"
import { Paragraph } from "@kaizen/component-library"
import { Container, Content } from "../page-layout"
import { TitleBlockZen } from "../title-block-zen/KaizenDraft/TitleBlockZen"
import styles from "./PageLayout.stores.scss"

export default {
  title: "Content (React)",
  component: Container,
  parameters: {
    info: {
      text: `
        import { Container, Content } from "@kaizen/draft-page-layout";
      `,
    },
  },
}

export const DefaultStory = () => (
  <>
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
  </>
)

DefaultStory.storyName = "Default"

export const FullBleedBackgroundStory = () => (
  <Container classNameAndIHaveSpokenToDST={styles.pink}>
    <Content classNameAndIHaveSpokenToDST={styles.white}>
      <Paragraph variant="body">
        Call me Ishmael. Some years ago - never mind how long precisely - having
        little or no money in my purse, and nothing particular to interest me on
        shore, I thought I would sail about a little and see the watery part of
        the world. It is a way I have of driving off the spleen, and regulating
        the circulation. Whenever I find myself growing grim about the mouth;
        whenever it is a damp, drizzly November in my soul; whenever I find
        myself involuntarily pausing before coffin warehouses, and bringing up
        the rear of every funeral I meet; and especially whenever my hypos get
        such an upper hand of me, that it requires a strong moral principle to
        prevent me from deliberately stepping into the street, and methodically
        knocking people's hats off - then, I account it high time to get to sea
        as soon as I can. This is my substitute for pistol and ball. With a
        philosophical flourish Cato throws himself upon his sword; I quietly
        take to the ship.
      </Paragraph>
    </Content>
  </Container>
)

FullBleedBackgroundStory.storyName = "Full-bleed background"
