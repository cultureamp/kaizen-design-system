import { Button } from "@kaizen/draft-button"
import { HeroCard } from "@kaizen/draft-hero-card"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

const surveyIllustration = require("./survey.png")

const renderContent = () => (
  <div
    style={{
      width: "560px",
      height: "300px",
    }}
  >
    <p style={{ margin: "0" }}>
      Understand diversity and inclusion in your organization with this set of
      people science backed survey questions. Preview the questions to get a
      feel for what the participants will see.
    </p>
    <Button label="Preview questions" />
  </div>
)

export default {
  title: "HeroCard (React)",
  component: HeroCard,
  parameters: {
    docs: {
      description: {
        docs: 'import { HeroCard } from "@kaizen/draft-hero-card";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=3568%3A150"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = () => (
  <HeroCard>{renderContent()}</HeroCard>
)
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Title = () => (
  <HeroCard title={<h1>Preview the survey questions</h1>}>
    {renderContent()}
  </HeroCard>
)

export const Badge = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    badge={<span>1</span>}
  >
    {renderContent()}
  </HeroCard>
)

export const Image = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    badge={<span>1</span>}
    image={
      <img
        src={surveyIllustration}
        alt="survey-preview-image"
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

export const CustomLeftContent = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
  >
    {renderContent()}
  </HeroCard>
)

export const CustomLeftContentAndBadge = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
    badge="2"
  >
    {renderContent()}
  </HeroCard>
)

export const FullWidth = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
    fullWidth
  >
    {renderContent()}
  </HeroCard>
)

export const BackgroundColors = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftBackgroundColor="cluny200"
  >
    {renderContent()}
  </HeroCard>
)
