import * as React from "react"
import { EmptyStatesAction, ManagerLearningResilience } from "../illustration"

export default {
  title: "Illustration, Scene (React)",
  component: EmptyStatesAction,
}

export const SceneComponent = () => <ManagerLearningResilience alt="" />

export const SceneWithSpacing = () => (
  <div style={{ width: "100px" }}>
    <EmptyStatesAction alt="" />
  </div>
)
