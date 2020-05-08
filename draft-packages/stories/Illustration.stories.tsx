import * as React from "react"
import { Scene, Spot } from "../illustration"
import { SceneName, SpotName } from "../illustration/types"

export default { title: "Illustration", component: Scene }

export const SpotBase = () => <Spot name={SpotName.Action} />

export const SceneBase = () => <Scene name={SceneName.EmptyStatesNeutral} />
