import * as React from "react"
// eslint-disable-next-line max-len
import { VerticalProgressIndicator } from "../KaizenDraft/VerticalProgressStep/VerticalProgressIndicator"

const RelativePositionBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      margin: "30px",
      position: "relative",
      minWidth: "100px",
      minHeight: "150px",
    }}
  >
    {children}
  </div>
)

export default {
  title: "VerticalProgressIndicator (React)",
  component: VerticalProgressIndicator,
  parameters: {
    docs: {
      description: {
        component:
          'import { VerticalProgressIndicator } from "@kaizen/draft-vertical-progress-step"',
      },
    },
  },
}

export const StartUpcoming = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="start" completion="upcoming" />
  </RelativePositionBlock>
)

StartUpcoming.storyName = "Start-Upcoming"

export const StartCurrentInactionable = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator
      position="start"
      completion="current-inactionable"
    />
  </RelativePositionBlock>
)

StartCurrentInactionable.storyName = "Start-CurrentInactionable"

export const StartCurrentActionable = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator
      position="start"
      completion="current-actionable"
    />
  </RelativePositionBlock>
)

StartCurrentActionable.storyName = "Start-CurrentActionable"

export const StartCurrentStarted = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="start" completion="current-started" />
  </RelativePositionBlock>
)

StartCurrentStarted.storyName = "Start-CurrentStarted"

export const StartCompleted = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="start" completion="completed" />
  </RelativePositionBlock>
)

StartCompleted.storyName = "Start-Completed"

export const MiddleUpcoming = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="middle" completion="upcoming" />
  </RelativePositionBlock>
)

MiddleUpcoming.storyName = "Middle-Upcoming"

export const MiddleCurrentInactionable = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator
      position="middle"
      completion="current-inactionable"
    />
  </RelativePositionBlock>
)

MiddleCurrentInactionable.storyName = "Middle-CurrentInactionable"

export const MiddleCurrentActionable = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator
      position="middle"
      completion="current-actionable"
    />
  </RelativePositionBlock>
)

MiddleCurrentActionable.storyName = "Middle-CurrentActionable"

export const MiddleCurrentStarted = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="middle" completion="current-started" />
  </RelativePositionBlock>
)

MiddleCurrentStarted.storyName = "Middle-CurrentStarted"

export const MiddleCompleted = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="middle" completion="completed" />
  </RelativePositionBlock>
)

MiddleCompleted.storyName = "Middle-Completed"

export const EndUpcoming = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="end" completion="upcoming" />
  </RelativePositionBlock>
)

EndUpcoming.storyName = "End-Upcoming"

export const EndCurrentInactionable = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator
      position="end"
      completion="current-inactionable"
    />
  </RelativePositionBlock>
)

EndCurrentInactionable.storyName = "End-CurrentInactionable"

export const EndCurrentActionable = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="end" completion="current-actionable" />
  </RelativePositionBlock>
)

EndCurrentActionable.storyName = "End-CurrentActionable"

export const EndCurrentStarted = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="end" completion="current-started" />
  </RelativePositionBlock>
)

EndCurrentStarted.storyName = "End-CurrentStarted"

export const EndCompleted = () => (
  <RelativePositionBlock>
    <VerticalProgressIndicator position="end" completion="completed" />
  </RelativePositionBlock>
)

EndCompleted.storyName = "End-Completed"
