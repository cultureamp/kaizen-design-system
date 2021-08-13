import { Heading, Paragraph } from "@kaizen/component-library"
import { LoadingPlaceholder } from "@kaizen/loading-placeholder"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

import styles from "./LoadingPlaceholder.stories.scss"

const StoryContainer: React.FunctionComponent = ({ children }) => (
  <div className={styles.storyContainer}>{children}</div>
)

export default {
  title: `${CATEGORIES.components}/Loading Placeholder`,
  component: LoadingPlaceholder,
  parameters: {
    docs: {
      description: {
        component:
          'import { LoadingPlaceholder } from "@kaizen/loading-placeholder"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=4496%3A2"
    ),
  },
  decorators: [withDesign],
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

DefaultMultipleKaizenSiteDemo.storyName = "Default, Multiple (Kaizen Site Demo)"

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

DefaultMultipleInline.storyName = "Default, Multiple, Inline"

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

DefaultMultipleVariableWidth.storyName = "Default, Multiple, Variable width"

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

DefaultMultipleVariableWidthCentered.storyName =
  "Default, Multiple, Variable width, Centered"

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

DefaultMultipleCombinedBlockAndInline.storyName =
  "Default, Multiple, Combined block and inline"

export const DefaultWithoutBottomMargin = () => (
  <StoryContainer>
    <LoadingPlaceholder noBottomMargin />
    <Paragraph variant="body">
      These loading placeholders have no bottom margin.
    </Paragraph>

    <LoadingPlaceholder noBottomMargin />
  </StoryContainer>
)

DefaultWithoutBottomMargin.storyName = "Default, Without bottom margin"

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

Defaul.storyName = "Default, Inherit baseline"

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

export const ReversedDefault = () => (
  <StoryContainer>
    <Paragraph variant="body" color="white">
      Dr. Brené Brown, author of Daring Greatly, is a research professor from
      the University of Houston who studies human emotions, including shame and
      vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
      weakness, and that myth is profoundly dangerous.” She went on to say that
      after 12 years of research, she has actually determined that vulnerability
      is “our most accurate measurement of courage.”
    </Paragraph>
    <LoadingPlaceholder reversedDefault />
    <LoadingPlaceholder reversedDefault />
    <LoadingPlaceholder reversedDefault />
    <LoadingPlaceholder reversedDefault />
    <LoadingPlaceholder reversedDefault />
  </StoryContainer>
)
ReversedDefault.storyName = "Reversed, Default"
ReversedDefault.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const InTheWild = () => (
  <StoryContainer>
    <div>
      <Paragraph variant="body" tag="h1">
        In the wild
      </Paragraph>
      <Paragraph variant="body">
        This is an example of how you could use LoadingPlaceholder to construct
        a loading state for a fictional tooltip component.
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
          <LoadingPlaceholder inline width={80} />
          <LoadingPlaceholder inline width={10} />
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

InTheWild.storyName = "In the wild"
