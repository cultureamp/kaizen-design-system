import { Button } from "@kaizen/component-library"
import { HeroCard } from "@kaizen/draft-hero-card"
import * as React from "react"

const surveyIllustration = require("../illustrations/survey.png")

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

export default {
  title: "HeroCard (React)",
}

export const DefaultKaizenSiteDemo = () => (
  <Container>
    <HeroCard>{renderContent()}</HeroCard>
  </Container>
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const Title = () => (
  <Container>
    <HeroCard title={<h1>Preview the survey questions</h1>}>
      {renderContent()}
    </HeroCard>
  </Container>
)

export const Badge = () => (
  <Container>
    <HeroCard
      title={<h1>Preview the survey questions</h1>}
      badge={<span>1</span>}
    >
      {renderContent()}
    </HeroCard>
  </Container>
)

export const Image = () => (
  <Container>
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
  </Container>
)

export const CustomLeftContent = () => (
  <Container>
    <HeroCard
      title={<h1>Preview the survey questions</h1>}
      leftContent={<p>Ta-dah</p>}
    >
      {renderContent()}
    </HeroCard>
  </Container>
)

CustomLeftContent.story = {
  name: "Custom left content",
}

export const CustomLeftContentAndBadge = () => (
  <Container>
    <HeroCard
      title={<h1>Preview the survey questions</h1>}
      leftContent={<p>Ta-dah</p>}
      badge="2"
    >
      {renderContent()}
    </HeroCard>
  </Container>
)

CustomLeftContentAndBadge.story = {
  name: "Custom left content and badge",
}

export const FullWidth = () => (
  <Container>
    <HeroCard
      title={<h1>Preview the survey questions</h1>}
      leftContent={<p>Ta-dah</p>}
      fullWidth
    >
      {renderContent()}
    </HeroCard>
  </Container>
)

FullWidth.story = {
  name: "Full width",
}
