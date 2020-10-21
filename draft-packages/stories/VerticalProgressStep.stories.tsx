import { Paragraph } from "@kaizen/component-library"
import { VerticalProgressStep } from "@kaizen/draft-vertical-progress-step"
import * as React from "react"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "#fff",
      margin: "30px",
      minWidth: "600px",
      position: "relative",
    }}
  >
    {children}
  </div>
)

export default {
  title: "VerticalProgressStep (React)",
  component: VerticalProgressStep,
  parameters: {
    info: {
      text: `
      import { VerticalProgressStep } from "@kaizen/draft-vertical-progress-step"
      `,
    },
  },
}

export const CurrentStepActionable = () => (
  <StoryContainer>
    <VerticalProgressStep.CurrentStep
      name="Stop!"
      status="actionable"
      position="start"
      // eslint-disable-next-line no-console
      onClick={console.log.bind(console)}
    >
      <Paragraph variant="body">Click here to commence the Stop!</Paragraph>
    </VerticalProgressStep.CurrentStep>
  </StoryContainer>
)

CurrentStepActionable.storyName = "current step actionable"

export const CurrentStepStarted = () => (
  <StoryContainer>
    <VerticalProgressStep.CurrentStep
      name="Stop!"
      status="started"
      position="start"
      // eslint-disable-next-line no-console
      onClick={console.log.bind(console)}
    >
      <Paragraph variant="body">Stopping...</Paragraph>
    </VerticalProgressStep.CurrentStep>
  </StoryContainer>
)

CurrentStepStarted.storyName = "current step started"

// eslint-disable-next-line no-underscore-dangle
export const _UpcomingStep = () => (
  <StoryContainer>
    <VerticalProgressStep.UpcomingStep name="Collaborate!" position="middle">
      <Paragraph variant="body">
        Only once you have stopped may you collaborate
      </Paragraph>
    </VerticalProgressStep.UpcomingStep>
  </StoryContainer>
)

_UpcomingStep.storyName = "upcoming step"

// eslint-disable-next-line no-underscore-dangle
export const _CompletedStep = () => (
  <StoryContainer>
    <VerticalProgressStep.CompletedStep name="Listen!" position="end">
      <Paragraph variant="body">
        You have finished listening. Vanilla Ice is proud of you.
      </Paragraph>
    </VerticalProgressStep.CompletedStep>
  </StoryContainer>
)

_CompletedStep.storyName = "completed step"
