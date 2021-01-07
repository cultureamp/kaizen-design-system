import { Heading } from "@kaizen/component-library"
import * as React from "react"

import styles from "./VerticalProgressStep.module.scss"

import {
  Completion,
  VerticalProgressIndicator,
} from "./VerticalProgressIndicator"

type Position = "start" | "middle" | "end"

export type CompletedStepProps = {
  name: string
  children?: React.ReactNode
  position: Position
}

const CompletedStep = (props: CompletedStepProps) => (
  <div className={styles.step}>
    <VerticalProgressIndicator
      position={props.position}
      completion="completed"
    />
    <div className={styles.content}>
      <Heading tag="h3" variant="heading-4">
        {props.name}
      </Heading>
      {props.children}
    </div>
  </div>
)

export type CurrentStepProps = {
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
        <Heading tag="h3" variant="heading-4">
          {props.name}
        </Heading>
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
            <Heading tag="h3" variant="heading-4">
              <span className={styles.actionable}>{props.name}</span>
            </Heading>
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
          <Heading tag="h3" variant="heading-4">
            {props.name}
          </Heading>
          {props.children}
        </div>
      </div>
    )
  }
}

export type UpcomingStepProps = {
  name: string
  children?: React.ReactNode
  position: Position
}

const UpcomingStep = (props: UpcomingStepProps) => (
  <div className={styles.step}>
    <VerticalProgressIndicator
      position={props.position}
      completion="upcoming"
    />
    <div className={styles.content}>
      <Heading tag="h3" variant="heading-4">
        {props.name}
      </Heading>
      {props.children}
    </div>
  </div>
)

export default { CompletedStep, CurrentStep, UpcomingStep }
