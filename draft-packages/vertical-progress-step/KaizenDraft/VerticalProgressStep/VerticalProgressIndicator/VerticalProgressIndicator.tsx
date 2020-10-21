import * as React from "react"

import emptyIcon from "@kaizen/component-library/icons/empty.icon.svg"
import printIcon from "@kaizen/component-library/icons/print.icon.svg"
import successIcon from "@kaizen/component-library/icons/success.icon.svg"
import { Icon } from "@kaizen/component-library"

import styles from "./VerticalProgressIndicator.module.scss"

type Props = {
  position: Position
  completion: Completion
}

type Position = "start" | "middle" | "end"
export type Completion =
  | "upcoming"
  | "current-inactionable"
  | "current-actionable"
  | "current-started"
  | "completed"

/**
 * For showing a step in a list of steps.
 * Needs to be inside a position:relative element for absolute positioning to work properly.
 *
 * @param position - The position of this step in a list of steps i.e. is it at the start, middle or end
 * @param completion - Whether the step is completed, upcoming or a shade inbetween, current, or to-do
 */
export const VerticalProgressIndicator = ({ position, completion }: Props) => {
  const iconMap = {
    upcoming: emptyIcon,
    current: printIcon,
    completed: successIcon,
  }
  const getIconClassName: () => string = () => {
    if (completion == "upcoming") {
      return styles.upcomingIcon
    } else if (completion == "current-inactionable") {
      return styles.currentInactionableIcon
    } else if (completion == "current-actionable") {
      return styles.currentActionableIcon
    } else if (completion == "current-started") {
      return styles.currentStartedIcon
    } else if (completion == "completed") {
      return styles.completedIcon
    } else {
      return ""
    }
  }

  type LineConfig = "grey" | "green" | "none"

  const renderTopLine = (lineConfig: LineConfig): React.ReactNode => {
    if (lineConfig == "none") {
      return null
    } else if (lineConfig == "grey") {
      return <div className={styles.greyTopLine} />
    } else if (lineConfig == "green") {
      return <div className={styles.greenTopLine} />
    }
  }

  const renderBottomLine = (lineConfig: LineConfig): React.ReactNode => {
    if (lineConfig == "none") {
      return null
    } else if (lineConfig == "grey") {
      return <div className={styles.greyBottomLine} />
    } else if (lineConfig == "green") {
      return <div className={styles.greenBottomLine} />
    }
  }

  const renderLines = ({
    // eslint-disable-next-line @typescript-eslint/no-shadow
    completion,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    position,
  }: {
    completion: Completion
    position: Position
  }) => {
    let top: LineConfig = "none"
    let bottom: LineConfig = "none"

    if (completion === "upcoming") {
      top = "grey"
      bottom = "grey"
    } else if (completion.match(/^current-/)) {
      top = "green"
      bottom = "grey"
    } else if (completion === "completed") {
      top = "green"
      bottom = "green"
    }

    if (position === "start") {
      top = "none"
    } else if (position === "end") {
      bottom = "none"
    }

    return (
      <>
        {renderTopLine(top)}
        {renderBottomLine(bottom)}
      </>
    )
  }

  return (
    <div className={styles.step}>
      <div className={styles.topLine} />
      <div className={styles.bottomLine} />
      {renderLines({ completion, position })}
      <div className={getIconClassName()}>
        {completion === "upcoming" && (
          <Icon icon={emptyIcon} title="Upcoming step" inheritSize />
        )}
        {completion === "current-inactionable" && (
          <Icon icon={emptyIcon} title="Next step" inheritSize />
        )}
        {completion === "current-actionable" && (
          <Icon icon={emptyIcon} title="This step" inheritSize />
        )}
        {completion === "current-started" && (
          <React.Fragment>
            <div className={styles.dot} />
            <Icon icon={emptyIcon} title="This step" inheritSize />
          </React.Fragment>
        )}
        {completion === "completed" && (
          <Icon icon={successIcon} title="Completed step" inheritSize />
        )}
      </div>
    </div>
  )
}
