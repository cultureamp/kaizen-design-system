import { Text } from "@cultureamp/kaizen-component-library"
import * as React from "react"

const styles = require("./VerticalProgressStep.module.scss")

import {
  Completion,
  VerticalProgressIndicator,
} from "./VerticalProgressIndicator"

type Position = "start" | "middle" | "end"

type CompletedStepProps = {
  name: string
  children?: React.ReactNode
  position: Position
}

const CompletedStep = (props: CompletedStepProps) => {
  return (
    <div className={styles.step}>
      <VerticalProgressIndicator
        position={props.position}
        completion="completed"
      />
      <div className={styles.content}>
        <Text tag="h3" style="label">
          {props.name}
        </Text>
        {props.children}
      </div>
    </div>
  )
}

type CurrentStepProps = {
  name: string
  children?: React.ReactNode
  status: CurrentStepStatus
  position: Position
  onClick?: () => void
}

type CurrentStepStatus = "inactionable" | "actionable" | "started"

const CurrentStep = (props: CurrentStepProps) => {
  const toCompletion = (status: CurrentStepStatus): Completion => {
    switch (status) {
      case "inactionable":
        return "current-inactionable"
      case "actionable":
        return "current-actionable"
      case "started":
        return "current-started"
    }
  }

  const step = (
    <div className={styles.step}>
      <VerticalProgressIndicator
        position={props.position}
        completion={toCompletion(props.status)}
      />
      <div className={styles.content}>
        <Text tag="h3" style="label">
          {props.name}
        </Text>
        {props.children}
      </div>
    </div>
  )

  if (props.status === "actionable") {
    return (
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          props.onClick && props.onClick()
        }}
      >
        <div className={styles.step}>
          <VerticalProgressIndicator
            position={props.position}
            completion={toCompletion(props.status)}
          />
          <div className={styles.content}>
            <Text tag="h3" style="label">
              <span className={styles.actionable}>{props.name}</span>
            </Text>
            {props.children}
          </div>
        </div>
      </button>
    )
  } else {
    return (
      <div className={styles.step}>
        <VerticalProgressIndicator
          position={props.position}
          completion={toCompletion(props.status)}
        />
        <div className={styles.content}>
          <Text tag="h3" style="label">
            {props.name}
          </Text>
          {props.children}
        </div>
      </div>
    )
  }
}

type UpcomingStepProps = {
  name: string
  children?: React.ReactNode
  position: Position
}

const UpcomingStep = (props: UpcomingStepProps) => {
  return (
    <div className={styles.step}>
      <VerticalProgressIndicator
        position={props.position}
        completion="upcoming"
      />
      <div className={styles.content}>
        <Text tag="h3" style="label">
          {props.name}
        </Text>
        {props.children}
      </div>
    </div>
  )
}

export default { CompletedStep, CurrentStep, UpcomingStep }
