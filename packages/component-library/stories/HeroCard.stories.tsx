import { Button } from "@cultureamp/kaizen-component-library"
import { HeroCard } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const reportingIllustration = require("./illustrations/reporting.png")

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "20px" }}>{children}</div>
)

const renderContent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <p>
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

  .add("With title", () => (
    <Container>
      <HeroCard title="Preview the survey questions">
        {renderContent()}
      </HeroCard>
    </Container>
  ))
