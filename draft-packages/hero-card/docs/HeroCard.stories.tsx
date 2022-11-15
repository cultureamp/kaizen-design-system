import React from "react"
import { Button } from "@kaizen/button"
import { HeroCard } from "@kaizen/draft-hero-card"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

const ILLUSTRATION_SURVEY = require("./survey.png")

const renderContent = () => (
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
  title: `${CATEGORIES.deprecated}/Hero Card`,
  component: HeroCard,
  parameters: {
    docs: {
      description: {
        component:
          '⛔️ This component is deprecated. No further changes will be made to it as it will be superseded by `Tile`.<br/><br/>`import { HeroCard } from "@kaizen/draft-hero-card"`',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=3568%3A150"
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
Badge.parameters = { chromatic: { disable: false } }

export const Image = () => (
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

export const CustomLeftContent = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
  >
    {renderContent()}
  </HeroCard>
)
CustomLeftContent.parameters = { chromatic: { disable: false } }

export const CustomLeftContentAndBadge = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
    badge="2"
  >
    {renderContent()}
  </HeroCard>
)
CustomLeftContentAndBadge.parameters = { chromatic: { disable: false } }

export const FullWidth = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftContent={<p>Ta-dah</p>}
    fullWidth
  >
    {renderContent()}
  </HeroCard>
)
FullWidth.parameters = { chromatic: { disable: false } }

export const BackgroundColors = () => (
  <HeroCard
    title={<h1>Preview the survey questions</h1>}
    leftBackgroundColor="cluny200"
  >
    {renderContent()}
  </HeroCard>
)
BackgroundColors.parameters = { chromatic: { disable: false } }
