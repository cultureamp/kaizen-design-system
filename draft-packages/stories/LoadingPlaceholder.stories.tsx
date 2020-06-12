import { Heading, Paragraph } from "@kaizen/component-library"
import { LoadingPlaceholder } from "@kaizen/draft-loading-placeholder"
import * as React from "react"

const styles = require("./LoadingPlaceholder.stories.scss")

const StoryContainer: React.FunctionComponent<{}> = ({ children }) => {
  return <div className={styles.storyContainer}>{children}</div>
}

export default {
  title: "LoadingPlaceholder (React)",
  component: LoadingPlaceholder,
  parameters: {
    info: {
      text: `
      import { LoadingPlaceholder } from "@kaizen/draft-loading-placeholder"
      `,
    },
  },
}

export const DefaultMultipleKaizenSiteDemo = () => (
  <StoryContainer>
    <Paragraph variant="body">
      Dr. Brené Brown, author of Daring Greatly, is a research professor from
      the University of Houston who studies human emotions, including shame and
      vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
      weakness, and that myth is profoundly dangerous.” She went on to say that
      after 12 years of research, she has actually determined that vulnerability
      is “our most accurate measurement of courage.”
    </Paragraph>
    <>
      <LoadingPlaceholder />
      <LoadingPlaceholder />
      <LoadingPlaceholder />
      <LoadingPlaceholder />
      <LoadingPlaceholder />
    </>
  </StoryContainer>
)

DefaultMultipleKaizenSiteDemo.story = {
  name: "Default, Multiple (Kaizen Site Demo)",
}

export const DefaultMultipleInline = () => (
  <StoryContainer>
    <div>
      <Paragraph variant="body">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Paragraph>
    </div>
    <>
      <div>
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
      </div>
      <div>
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
      </div>
      <div>
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
      </div>
      <div>
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
      </div>
      <div>
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
      </div>
    </>
  </StoryContainer>
)

DefaultMultipleInline.story = {
  name: "Default, Multiple, Inline",
}

export const DefaultMultipleVariableWidth = () => (
  <StoryContainer>
    <Paragraph variant="body">
      Dr. Brené Brown, author of Daring Greatly, is a research professor from
      the University of Houston who studies human emotions, including shame and
      vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
      weakness, and that myth is profoundly dangerous.” She went on to say that
      after 12 years of research, she has actually determined that vulnerability
      is “our most accurate measurement of courage.”
    </Paragraph>
    <>
      <LoadingPlaceholder width={90} />
      <LoadingPlaceholder />
      <LoadingPlaceholder width={95} />
      <LoadingPlaceholder width={85} />
      <LoadingPlaceholder width={60} />
    </>
  </StoryContainer>
)

DefaultMultipleVariableWidth.story = {
  name: "Default, Multiple, Variable width",
}

export const DefaultMultipleVariableWidthCentered = () => (
  <StoryContainer>
    <div style={{ textAlign: "center" }}>
      <Paragraph variant="body">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Paragraph>
    </div>
    <>
      <LoadingPlaceholder centred width={90} />
      <LoadingPlaceholder centred />
      <LoadingPlaceholder centred width={95} />
      <LoadingPlaceholder centred width={85} />
      <LoadingPlaceholder centred width={60} />
    </>
  </StoryContainer>
)

DefaultMultipleVariableWidthCentered.story = {
  name: "Default, Multiple, Variable width, Centered",
}

export const DefaultMultipleCombinedBlockAndInline = () => (
  <StoryContainer>
    <div>
      <Paragraph variant="body">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Paragraph>
    </div>
    <>
      <div>
        <LoadingPlaceholder />
        <LoadingPlaceholder width={90} />
        <LoadingPlaceholder width={60} />
      </div>
      <div>
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
      </div>
      <div>
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
      </div>
      <div>
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
        <LoadingPlaceholder inline width={30} />
      </div>
    </>
  </StoryContainer>
)

DefaultMultipleCombinedBlockAndInline.story = {
  name: "Default, Multiple, Combined block and inline",
}

export const DefaultWithoutBottomMargin = () => (
  <StoryContainer>
    <LoadingPlaceholder noBottomMargin />
    <Paragraph variant="body">
      These loading placeholders have no bottom margin.
    </Paragraph>

    <LoadingPlaceholder noBottomMargin />
  </StoryContainer>
)

DefaultWithoutBottomMargin.story = {
  name: "Default, Without bottom margin",
}

export const Defaul = () => (
  <StoryContainer>
    <div className={styles.flexbox}>
      <Heading tag="h2" variant="heading-2">
        Inheriting baseline
      </Heading>
      <LoadingPlaceholder />
    </div>
  </StoryContainer>
)

Defaul.story = {
  name: "Default, Inherit baseline",
}

export const HeadingLoading = () => (
  <StoryContainer>
    <div>
      <Paragraph variant="body">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Paragraph>
    </div>
    <>
      <LoadingPlaceholder tall />
      <LoadingPlaceholder tall />
      <LoadingPlaceholder tall />
      <LoadingPlaceholder tall />
      <LoadingPlaceholder tall />
    </>
  </StoryContainer>
)

export const ReversedDefault = () => {
  return (
    <StoryContainer>
      <div className={styles.reversedDefault}>
        <Paragraph variant="body" color="white">
          Dr. Brené Brown, author of Daring Greatly, is a research professor
          from the University of Houston who studies human emotions, including
          shame and vulnerability. In a March 2012 TED talk, she said,
          “Vulnerability is not weakness, and that myth is profoundly
          dangerous.” She went on to say that after 12 years of research, she
          has actually determined that vulnerability is “our most accurate
          measurement of courage.”
        </Paragraph>
      </div>
      <div className={styles.reversedDefault}>
        <LoadingPlaceholder reversedDefault />
        <LoadingPlaceholder reversedDefault />
        <LoadingPlaceholder reversedDefault />
        <LoadingPlaceholder reversedDefault />
        <LoadingPlaceholder reversedDefault />
      </div>
    </StoryContainer>
  )
}

ReversedDefault.story = {
  name: "Reversed, Default",
}

export const InTheWild = () => {
  return (
    <StoryContainer>
      <div>
        <Paragraph variant="body" tag="h1">
          In the wild
        </Paragraph>
        <Paragraph variant="body">
          This is an example of how you could use LoadingPlaceholder to
          construct a loading state for a fictional tooltip component.
        </Paragraph>
        <Paragraph variant="body" tag="h2">
          Tooltip component in a loaded state:
        </Paragraph>
        <div className={styles.tooltip}>
          <div className={styles.tooltipHeader}>
            <Paragraph tag="div" variant="intro-lede">
              Hooli's Engagement Survey
            </Paragraph>
            <Paragraph variant="body" tag="div">
              2019
            </Paragraph>
          </div>
          <div className={styles.tooltipBody}>
            <div className={styles.tooltipRow}>
              <Paragraph variant="body" tag="div">
                Favorable
              </Paragraph>
              <Paragraph variant="body" tag="div">
                76%
              </Paragraph>
            </div>
            <div className={styles.tooltipRow}>
              <Paragraph variant="body" tag="div">
                Neutral
              </Paragraph>
              <Paragraph variant="body" tag="div">
                21%
              </Paragraph>
            </div>
            <div className={styles.tooltipRow}>
              <Paragraph variant="body" tag="div">
                Unfavorable
              </Paragraph>
              <Paragraph variant="body" tag="div">
                3%
              </Paragraph>
            </div>
          </div>
        </div>
        <Paragraph variant="body" tag="h2">
          Tooltip component in a loading state:
        </Paragraph>
        <div className={styles.tooltip}>
          <div className={styles.tooltipHeader}>
            <LoadingPlaceholder reversedOcean inline width={80} />
            <LoadingPlaceholder reversedOcean inline width={10} />
          </div>
          <div className={styles.tooltipBody}>
            <div className={styles.tooltipRow}>
              <LoadingPlaceholder inline width={10} />
              <LoadingPlaceholder inline width={60} />
              <LoadingPlaceholder inline width={10} />
            </div>
            <div className={styles.tooltipRow}>
              <LoadingPlaceholder inline width={10} />
              <LoadingPlaceholder inline width={60} />
              <LoadingPlaceholder inline width={10} />
            </div>
            <div className={styles.tooltipRow}>
              <LoadingPlaceholder inline width={10} />
              <LoadingPlaceholder inline width={60} />
              <LoadingPlaceholder inline width={10} />
            </div>
          </div>
        </div>
      </div>
    </StoryContainer>
  )
}

InTheWild.story = {
  name: "In the wild",
}
