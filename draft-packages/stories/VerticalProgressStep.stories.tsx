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
}

export const CurrentStepActionable = () => (
  <StoryContainer>
    <VerticalProgressStep.CurrentStep
      name="Stop!"
      status="actionable"
      position="start"
      // tslint:disable-next-line: no-console
      onClick={console.log.bind(console)}
    >
      <p>Click here to commence the Stop!</p>
    </VerticalProgressStep.CurrentStep>
  </StoryContainer>
)

CurrentStepActionable.story = {
  name: "current step actionable",
}

export const CurrentStepStarted = () => (
  <StoryContainer>
    <VerticalProgressStep.CurrentStep
      name="Stop!"
      status="started"
      position="start"
      // tslint:disable-next-line: no-console
      onClick={console.log.bind(console)}
    >
      <p>Stopping...</p>
    </VerticalProgressStep.CurrentStep>
  </StoryContainer>
)

CurrentStepStarted.story = {
  name: "current step started",
}

// tslint:disable-next-line: variable-name
export const _UpcomingStep = () => (
  <StoryContainer>
    <VerticalProgressStep.UpcomingStep name="Collaborate!" position="middle">
      <p>Only once you have stopped may you collaborate</p>
    </VerticalProgressStep.UpcomingStep>
  </StoryContainer>
)

_UpcomingStep.story = {
  name: "upcoming step",
}

// tslint:disable-next-line: variable-name
export const _CompletedStep = () => (
  <StoryContainer>
    <VerticalProgressStep.CompletedStep name="Listen!" position="end">
      <p>You have finished listening. Vanilla Ice is proud of you.</p>
    </VerticalProgressStep.CompletedStep>
  </StoryContainer>
)

_CompletedStep.story = {
  name: "completed step",
}
