import * as React from "react"
import {
  EmptyStatesAction,
  KaizenSiteResourcesAlt,
  ManagerLearningResilience,
} from "../illustration"

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

export const KaizenSiteResourcesAltStory = () => (
  <div style={{ width: "100px" }}>
    <KaizenSiteResourcesAlt alt="" />
  </div>
)
