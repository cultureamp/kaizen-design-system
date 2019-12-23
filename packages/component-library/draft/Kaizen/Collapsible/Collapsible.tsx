import { Icon, Text } from "@cultureamp/kaizen-component-library"
import { LoadingPlaceholder } from "@cultureamp/kaizen-component-library/draft"
import classnames from "classnames"
import * as React from "react"
import AnimateHeight from "react-animate-height"

import { Sticky } from "./CollapsibleGroup"

const styles = require("./styles.scss")
const chevronUp = require("@cultureamp/kaizen-component-library/icons/chevron-up.icon.svg")
  .default
const chevronDown = require("@cultureamp/kaizen-component-library/icons/chevron-down.icon.svg")
  .default

export type Props = {
  loading?: boolean
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

type State = {
  open: boolean
}

class Collapsible extends React.Component<Props, State> {
  public state = {
    open: !!this.props.open,
  }

  private getOpen = () => {
    return this.props.controlled ? this.props.open : this.state.open
  }

  private handleClick = () => {
    const { onToggle, id, controlled } = this.props
    const open = this.getOpen()

    onToggle && onToggle(!open, id)

    if (!controlled) {
      this.setState({
        open: !open,
      })
    }
  }

  public render() {
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
      loading,
    } = this.props
    const buttonId = `${this.props.id}-button`
    const sectionId = `${this.props.id}-section`
    const open = this.getOpen()

    if (loading) {
      return <LoadingCollapsible separated={separated} group={group} />
    }

    return (
      <div
        className={classnames({
          [styles.container]: !group || separated,
          [styles.groupItem]: group && !separated,
          [styles.separated]: separated,
        })}
        data-automation-id={automationId || `collapsible-container-${id}`}
      >
        <button
          id={buttonId}
          className={classnames(styles.button, {
            [styles.open]: open,
            [styles.sticky]: sticky,
          })}
          style={sticky && { top: sticky.top }}
          onClick={this.handleClick}
          aria-expanded={open}
          aria-controls={sectionId}
          data-automation-id={`collapsible-button-${id}`}
        >
          {renderHeader && renderHeader(title) // If a renderHeader prop has been provided: use that to render the header
          }
          {!renderHeader && ( // Otherwise, use a prescribed structure for the title
            <div
              className={styles.title}
              data-automation-id={`collapsible-button-title-${id}`}
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
            data-automation-id={`collapsible-section-${id}`}
          >
            <div
              className={classnames(styles.section, {
                [styles.noPadding]: noSectionPadding,
              })}
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
}

type LoadingProps = {
  group?: boolean
  separated?: boolean
}

const LoadingCollapsible = (props: LoadingProps) => {
  const { group, separated } = props

  return (
    <div
      className={classnames({
        [styles.container]: !group || separated,
        [styles.groupItem]: group && !separated,
        [styles.separated]: separated,
      })}
    >
      <div className={styles.buttonLoading}>
        <div className={styles.title}>
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
