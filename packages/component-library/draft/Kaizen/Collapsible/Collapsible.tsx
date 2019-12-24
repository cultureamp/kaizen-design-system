import { Icon, Text } from "@cultureamp/kaizen-component-library"
import { LoadingPlaceholder } from "@cultureamp/kaizen-component-library/draft"
import classnames from "classnames"
import React, { useState } from "react"
import AnimateHeight from "react-animate-height"

import { Sticky } from "./CollapsibleGroup"

const styles = require("./styles.scss")
const chevronUp = require("@cultureamp/kaizen-component-library/icons/chevron-up.icon.svg")
  .default
const chevronDown = require("@cultureamp/kaizen-component-library/icons/chevron-down.icon.svg")
  .default

export type Props =
  | {
      loading: true
      separated?: boolean
      group?: boolean
      automationId?: string

      /* This won't actually do anything in this context, but it's required to keep
         the internalOpen state hook at the top of the function below */
      open?: boolean
    }
  | {
      loading?: false
      id: string
      children?: JSX.Element | JSX.Element[] | string
      title?: string
      renderHeader?: (title?: string) => JSX.Element | JSX.Element[]
      open?: boolean
      group?: boolean
      separated?: boolean
      sticky?: Sticky
      noSectionPadding?: boolean
      automationId?: string
      onToggle?: (open: boolean, id: string) => void

      /* Will avoid rendering the content until required (especially important when you have queries inside sections). Removes animation. */
      lazyLoad?: boolean

      /* Disables internal `open` state, allowing it to be controlled in the usage */
      controlled?: boolean
    }

const Collapsible: React.FunctionComponent<Props> = props => {
  const [internalOpen, setInternalOpen] = useState<boolean>(!!props.open)

  if (props.loading) {
    return (
      <LoadingCollapsible
        separated={props.separated}
        group={props.group}
        automationId={props.automationId}
      />
    )
  }

  const {
    id,
    group,
    separated,
    sticky,
    noSectionPadding,
    title,
    renderHeader,
    automationId,
    children,
    lazyLoad,
    controlled,
  } = props

  const getOpen = () => {
    return controlled ? props.open : internalOpen
  }

  const handleClick = () => {
    const { onToggle, id, controlled } = props
    const open = getOpen()

    onToggle && onToggle(!open, id)

    if (!controlled) {
      setInternalOpen(!open)
    }
  }

  const buttonId = `${id}-button`
  const sectionId = `${id}-section`
  const open = getOpen()

  return (
    <div
      className={classnames({
        [styles.container]: !group || separated,
        [styles.groupItem]: group && !separated,
        [styles.separated]: separated,
      })}
      data-automation-id={automationId}
    >
      <button
        id={buttonId}
        className={classnames(styles.button, {
          [styles.open]: open,
          [styles.sticky]: sticky,
        })}
        style={sticky && { top: sticky.top }}
        onClick={handleClick}
        aria-expanded={open}
        aria-controls={sectionId}
        data-automation-id={`${automationId}-button`}
      >
        {renderHeader && renderHeader(title) // If a renderHeader prop has been provided: use that to render the header
        }
        {!renderHeader && ( // Otherwise, use a prescribed structure for the title
          <div
            className={styles.title}
            data-automation-id={`${automationId}-button-title`}
          >
            <Text tag="span" style="heading" inheritBaseline>
              {title}
            </Text>
          </div>
        )}
        <div>
          <Icon icon={open ? chevronUp : chevronDown} role="presentation" />
        </div>
      </button>
      {(!lazyLoad || open) && (
        <AnimateHeight
          height={open ? "auto" : 0}
          data-automation-id={`${automationId}-section`}
        >
          <div
            className={classnames(styles.section, {
              [styles.noPadding]: noSectionPadding,
            })}
            id={sectionId}
            role="region"
            aria-labelledby={buttonId}
          >
            {children}
          </div>
        </AnimateHeight>
      )}
    </div>
  )
}

type LoadingProps = {
  group?: boolean
  separated?: boolean
  automationId?: string
}

const LoadingCollapsible = (props: LoadingProps) => {
  const { group, separated, automationId } = props

  return (
    <div
      className={classnames({
        [styles.container]: !group || separated,
        [styles.groupItem]: group && !separated,
        [styles.separated]: separated,
      })}
      data-automation-id={`${automationId}-loading`}
    >
      <div
        className={styles.buttonLoading}
        data-automation-id={`${automationId}-loading-button`}
      >
        <div
          className={styles.title}
          data-automation-id={`${automationId}-loading-button-title`}
        >
          <LoadingPlaceholder width={50} noBottomMargin inheritBaseline />
        </div>
        <div className={styles.chevronLoading}>
          <LoadingPlaceholder noBottomMargin inheritBaseline />
        </div>
      </div>
    </div>
  )
}

export default Collapsible
