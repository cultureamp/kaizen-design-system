import { Paragraph } from "@kaizen/component-library"
import { VerticalProgressStep } from "@kaizen/vertical-progress-step"
import * as React from "react"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.deprecated}/Vertical Progress Step`,
  component: VerticalProgressStep.CurrentStep,
  parameters: {
    docs: {
      description: {
        component:
          'import { VerticalProgressStep } from "@kaizen/vertical-progress-step"',
      },
    },
  },
}

export const CurrentStepActionable = () => (
  <VerticalProgressStep.CurrentStep
    name="Stop!"
    status="actionable"
    position="start"
    // eslint-disable-next-line no-console
    onClick={console.log.bind(console)}
  >
    <Paragraph variant="body">Click here to commence the Stop!</Paragraph>
  </VerticalProgressStep.CurrentStep>
)

CurrentStepActionable.storyName = "current step actionable"

export const CurrentStepStarted = () => (
  <VerticalProgressStep.CurrentStep
    name="Stop!"
    status="started"
    position="start"
    // eslint-disable-next-line no-console
    onClick={console.log.bind(console)}
  >
    <Paragraph variant="body">Stopping...</Paragraph>
  </VerticalProgressStep.CurrentStep>
)

CurrentStepStarted.storyName = "current step started"

// eslint-disable-next-line no-underscore-dangle
export const _UpcomingStep = () => (
  <VerticalProgressStep.UpcomingStep name="Collaborate!" position="middle">
    <Paragraph variant="body">
      Only once you have stopped may you collaborate
    </Paragraph>
  </VerticalProgressStep.UpcomingStep>
)

_UpcomingStep.storyName = "upcoming step"

// eslint-disable-next-line no-underscore-dangle
export const _CompletedStep = () => (
  <VerticalProgressStep.CompletedStep name="Listen!" position="end">
    <Paragraph variant="body">
      You have finished listening. Vanilla Ice is proud of you.
    </Paragraph>
  </VerticalProgressStep.CompletedStep>
)

_CompletedStep.storyName = "completed step"
