import { loadElmStories } from "@cultureamp/elm-storybook"
import { Text } from "@cultureamp/kaizen-component-library"
import { LoadingPlaceholder } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const styles = require("./LoadingPlaceholder.stories.scss")

const StoryContainer: React.FunctionComponent<{}> = ({ children }) => {
  return <div className={styles.storyContainer}>{children}</div>
}

storiesOf("LoadingPlaceholder (React)", module)
  .add("Basic block", () => (
    <StoryContainer>
      <Text tag="p">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Text>
      <>
        <LoadingPlaceholder />
        <LoadingPlaceholder />
        <LoadingPlaceholder />
        <LoadingPlaceholder />
        <LoadingPlaceholder />
      </>
    </StoryContainer>
  ))

  .add("Variable width block", () => (
    <StoryContainer>
      <Text tag="p">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Text>
      <>
        <LoadingPlaceholder width={90} />
        <LoadingPlaceholder />
        <LoadingPlaceholder width={95} />
        <LoadingPlaceholder width={85} />
        <LoadingPlaceholder width={60} />
      </>
    </StoryContainer>
  ))

  .add("Variable width block (centred)", () => (
    <StoryContainer>
      <div style={{ textAlign: "center" }}>
        <Text tag="p">
          Dr. Brené Brown, author of Daring Greatly, is a research professor
          from the University of Houston who studies human emotions, including
          shame and vulnerability. In a March 2012 TED talk, she said,
          “Vulnerability is not weakness, and that myth is profoundly
          dangerous.” She went on to say that after 12 years of research, she
          has actually determined that vulnerability is “our most accurate
          measurement of courage.”
        </Text>
      </div>
      <>
        <LoadingPlaceholder centred width={90} />
        <LoadingPlaceholder centred />
        <LoadingPlaceholder centred width={95} />
        <LoadingPlaceholder centred width={85} />
        <LoadingPlaceholder centred width={60} />
      </>
    </StoryContainer>
  ))

  .add("Tall", () => (
    <StoryContainer>
      <div>
        <Text tag="p">
          Dr. Brené Brown, author of Daring Greatly, is a research professor
          from the University of Houston who studies human emotions, including
          shame and vulnerability. In a March 2012 TED talk, she said,
          “Vulnerability is not weakness, and that myth is profoundly
          dangerous.” She went on to say that after 12 years of research, she
          has actually determined that vulnerability is “our most accurate
          measurement of courage.”
        </Text>
      </div>
      <>
        <LoadingPlaceholder tall />
        <LoadingPlaceholder tall />
        <LoadingPlaceholder tall />
        <LoadingPlaceholder tall />
        <LoadingPlaceholder tall />
      </>
    </StoryContainer>
  ))

  .add("Inline", () => (
    <StoryContainer>
      <div>
        <Text tag="p">
          Dr. Brené Brown, author of Daring Greatly, is a research professor
          from the University of Houston who studies human emotions, including
          shame and vulnerability. In a March 2012 TED talk, she said,
          “Vulnerability is not weakness, and that myth is profoundly
          dangerous.” She went on to say that after 12 years of research, she
          has actually determined that vulnerability is “our most accurate
          measurement of courage.”
        </Text>
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
  ))

  .add("Without bottom margin", () => (
    <StoryContainer>
      <LoadingPlaceholder noBottomMargin />
      <Text tag="p" inline>
        These loading placeholders have no bottom margin.
      </Text>

      <LoadingPlaceholder noBottomMargin />
    </StoryContainer>
  ))

  .add("Inherit baseline", () => (
    <StoryContainer>
      <div className={styles.flexbox}>
        <Text tag="h2" inheritBaseline>
          Inheriting baseline
        </Text>
        <LoadingPlaceholder inheritBaseline />
      </div>
    </StoryContainer>
  ))

  .add("Combined block and inline", () => (
    <StoryContainer>
      <div>
        <Text tag="p">
          Dr. Brené Brown, author of Daring Greatly, is a research professor
          from the University of Houston who studies human emotions, including
          shame and vulnerability. In a March 2012 TED talk, she said,
          “Vulnerability is not weakness, and that myth is profoundly
          dangerous.” She went on to say that after 12 years of research, she
          has actually determined that vulnerability is “our most accurate
          measurement of courage.”
        </Text>
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
  ))

  .add("Reversed Default", () => {
    return (
      <StoryContainer>
        <div className={styles.reversedDefault}>
          <Text tag="p">
            Dr. Brené Brown, author of Daring Greatly, is a research professor
            from the University of Houston who studies human emotions, including
            shame and vulnerability. In a March 2012 TED talk, she said,
            “Vulnerability is not weakness, and that myth is profoundly
            dangerous.” She went on to say that after 12 years of research, she
            has actually determined that vulnerability is “our most accurate
            measurement of courage.”
          </Text>
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
  })

  .add("In the wild", () => {
    return (
      <StoryContainer>
        <div>
          <Text tag="h1">In the wild</Text>
          <Text tag="p">
            This is an example of how you could use LoadingPlaceholder to
            construct a loading state for a fictional tooltip component.
          </Text>
          <Text tag="h2">Tooltip component in a loaded state:</Text>
          <div className={styles.tooltip}>
            <div className={styles.tooltipHeader}>
              <Text tag="div" style="body-bold" inheritBaseline>
                Hooli's Engagement Survey
              </Text>
              <Text tag="div" inheritBaseline>
                2019
              </Text>
            </div>
            <div className={styles.tooltipBody}>
              <div className={styles.tooltipRow}>
                <Text tag="div" inheritBaseline>
                  Favorable
                </Text>
                <Text tag="div" inheritBaseline>
                  76%
                </Text>
              </div>
              <div className={styles.tooltipRow}>
                <Text tag="div" inheritBaseline>
                  Neutral
                </Text>
                <Text tag="div" inheritBaseline>
                  21%
                </Text>
              </div>
              <div className={styles.tooltipRow}>
                <Text tag="div" inheritBaseline>
                  Unfavorable
                </Text>
                <Text tag="div" inheritBaseline>
                  3%
                </Text>
              </div>
            </div>
          </div>
          <Text tag="h2">Tooltip component in a loading state:</Text>
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
  })

loadElmStories(
  "LoadingPlaceholder (Elm)",
  module,
  require("./LoadingPlaceholder.stories.elm"),
  [
    "Basic block",
    "Variable width block",
    "Variable width block (centred)",
    "Tall",
    "Inline",
    "Without bottom margin",
    "Inherit baseline",
    "Combined block and inline",
    "Reversed Default",
    "In the wild",
  ]
)
