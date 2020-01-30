import { VerticalProgressIndicator } from "@kaizen/component-library/draft/Kaizen/VerticalProgressStep/VerticalProgressIndicator"
import * as React from "react"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "#fff",
      margin: "30px",
      minWidth: "100px",
      position: "relative",
      minHeight: "150px",
    }}
  >
    {children}
  </div>
)

export default {
  title: 'VerticalProgressIndicator (React)',
};

export const StartUpcoming = () => (
    <StoryContainer>
      <VerticalProgressIndicator position="start" completion="upcoming" />
    </StoryContainer>
  );

StartUpcoming.story = {
  name: 'Start-Upcoming',
};

export const StartCurrentInactionable = () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="start"
        completion="current-inactionable"
      />
    </StoryContainer>
  );

StartCurrentInactionable.story = {
  name: 'Start-CurrentInactionable',
};

export const StartCurrentActionable = () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="start"
        completion="current-actionable"
      />
    </StoryContainer>
  );

StartCurrentActionable.story = {
  name: 'Start-CurrentActionable',
};

export const StartCurrentStarted = () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="start"
        completion="current-started"
      />
    </StoryContainer>
  );

StartCurrentStarted.story = {
  name: 'Start-CurrentStarted',
};

export const StartCompleted = () => (
    <StoryContainer>
      <VerticalProgressIndicator position="start" completion="completed" />
    </StoryContainer>
  );

StartCompleted.story = {
  name: 'Start-Completed',
};

export const MiddleUpcoming = () => (
    <StoryContainer>
      <VerticalProgressIndicator position="middle" completion="upcoming" />
    </StoryContainer>
  );

MiddleUpcoming.story = {
  name: 'Middle-Upcoming',
};

export const MiddleCurrentInactionable = () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="middle"
        completion="current-inactionable"
      />
    </StoryContainer>
  );

MiddleCurrentInactionable.story = {
  name: 'Middle-CurrentInactionable',
};

export const MiddleCurrentActionable = () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="middle"
        completion="current-actionable"
      />
    </StoryContainer>
  );

MiddleCurrentActionable.story = {
  name: 'Middle-CurrentActionable',
};

export const MiddleCurrentStarted = () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="middle"
        completion="current-started"
      />
    </StoryContainer>
  );

MiddleCurrentStarted.story = {
  name: 'Middle-CurrentStarted',
};

export const MiddleCompleted = () => (
    <StoryContainer>
      <VerticalProgressIndicator position="middle" completion="completed" />
    </StoryContainer>
  );

MiddleCompleted.story = {
  name: 'Middle-Completed',
};

export const EndUpcoming = () => (
    <StoryContainer>
      <VerticalProgressIndicator position="end" completion="upcoming" />
    </StoryContainer>
  );

EndUpcoming.story = {
  name: 'End-Upcoming',
};

export const EndCurrentInactionable = () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="end"
        completion="current-inactionable"
      />
    </StoryContainer>
  );

EndCurrentInactionable.story = {
  name: 'End-CurrentInactionable',
};

export const EndCurrentActionable = () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="end"
        completion="current-actionable"
      />
    </StoryContainer>
  );

EndCurrentActionable.story = {
  name: 'End-CurrentActionable',
};

export const EndCurrentStarted = () => (
    <StoryContainer>
      <VerticalProgressIndicator position="end" completion="current-started" />
    </StoryContainer>
  );

EndCurrentStarted.story = {
  name: 'End-CurrentStarted',
};

export const EndCompleted = () => (
    <StoryContainer>
      <VerticalProgressIndicator position="end" completion="completed" />
    </StoryContainer>
  );

EndCompleted.story = {
  name: 'End-Completed',
};
