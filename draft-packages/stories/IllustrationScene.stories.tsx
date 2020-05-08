import * as React from "react"
import { Scene } from "../illustration"
import { SceneName } from "../illustration/types"

export default { title: "Illustration, Scene (React)", component: Scene }

export const SceneBase = () => (
  <Scene alt="" name={SceneName.EmptyStatesNeutral} />
)
