import * as React from "react"
import { Scene } from "../illustration"

export default { title: "Illustration, Scene (React)", component: Scene }

export const SceneComponent = () => <Scene alt="" name="EmptyStatesPositive" />

export const SceneWithSpacing = () => (
  <div style={{ width: "100px" }}>
    <Scene alt="" name="EmptyStatesPositive" />
  </div>
)
