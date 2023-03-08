import React from "react"
import { StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { HeroCard } from "@kaizen/draft-hero-card"

const ILLUSTRATION_SURVEY = require("./survey.png")

const renderContent = (): JSX.Element => (
  <div
    style={{
      width: "560px",
      height: "300px",
    }}
  >
    <p style={{ margin: "0 0 0.75rem 0" }}>
      Understand diversity and inclusion in your organization with this set of
      people science backed survey questions. Preview the questions to get a
      feel for what the participants will see.
    </p>
    <Button label="Preview questions" />
  </div>
)

export default {
  title: "Deprecated/Hero Card",
  component: HeroCard,
  parameters: {
    docs: {
      description: {
        component:
          '⛔️ This component is deprecated. No further changes will be made to it as it will be superseded by `Tile`.<br/><br/>`import { HeroCard } from "@kaizen/draft-hero-card"`',
      },
    },
  },
}

export const DefaultKaizenSiteDemo: StoryFn = () => (
  <HeroCard>{renderContent()}</HeroCard>
)
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Title: StoryFn = () => (
  <HeroCard title={<h1>Preview the survey questions</h1>}>
    {renderContent()}
  </HeroCard>
)

export const Badge: StoryFn = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    badge={<span>1</span>}
  >
    {renderContent()}
  </HeroCard>
)
Badge.parameters = { chromatic: { disable: false } }

export const Image: StoryFn = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    badge={<span>1</span>}
    image={
      <img
        src={ILLUSTRATION_SURVEY}
        alt=""
        style={{
          position: "absolute",
          bottom: "15px",
          left: "0",
          width: "100%",
        }}
      />
    }
  >
    {renderContent()}
  </HeroCard>
)
Image.parameters = { chromatic: { disable: false } }

export const CustomLeftContent: StoryFn = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
  >
    {renderContent()}
  </HeroCard>
)
CustomLeftContent.parameters = { chromatic: { disable: false } }

export const CustomLeftContentAndBadge: StoryFn = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
    badge="2"
  >
    {renderContent()}
  </HeroCard>
)
CustomLeftContentAndBadge.parameters = { chromatic: { disable: false } }

export const FullWidth: StoryFn = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
    fullWidth
  >
    {renderContent()}
  </HeroCard>
)
FullWidth.parameters = { chromatic: { disable: false } }

export const BackgroundColors: StoryFn = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftBackgroundColor="cluny200"
  >
    {renderContent()}
  </HeroCard>
)
BackgroundColors.parameters = { chromatic: { disable: false } }
