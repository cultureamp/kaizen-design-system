import { Button } from "@cultureamp/kaizen-component-library"
import { HeroCard } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const surveyIllustration = require("./illustrations/survey.png")

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "20px", display: "flex" }}>{children}</div>
)

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

storiesOf("HeroCard", module)
  .add("Default", () => (
    <Container>
      <HeroCard>{renderContent()}</HeroCard>
    </Container>
  ))

  .add("Title", () => (
    <Container>
      <HeroCard title="Preview the survey questions">
        {renderContent()}
      </HeroCard>
    </Container>
  ))

  .add("Badge", () => (
    <Container>
      <HeroCard title="Preview the survey questions" badgeText="1">
        {renderContent()}
      </HeroCard>
    </Container>
  ))

  .add("Image", () => (
    <Container>
      <HeroCard
        title="Preview the survey questions"
        badgeText="1"
        image={<img src={surveyIllustration} alt="survey-preview-image" />}
      >
        {renderContent()}
      </HeroCard>
    </Container>
  ))

  .add("Custom left content", () => (
    <Container>
      <HeroCard
        title="Preview the survey questions"
        leftContent={<p>Ta-dah</p>}
      >
        {renderContent()}
      </HeroCard>
    </Container>
  ))

  .add("Custom left content and badge", () => (
    <Container>
      <HeroCard
        title="Preview the survey questions"
        leftContent={<p>Ta-dah</p>}
        badgeText="2"
      >
        {renderContent()}
      </HeroCard>
    </Container>
  ))

  .add("Full width", () => (
    <Container>
      <HeroCard
        title="Preview the survey questions"
        leftContent={<p>Ta-dah</p>}
        fullWidth
      >
        {renderContent()}
      </HeroCard>
    </Container>
  ))
