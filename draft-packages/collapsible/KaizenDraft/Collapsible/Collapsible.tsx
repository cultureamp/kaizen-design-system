import { Heading, Icon } from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"
import AnimateHeight from "react-animate-height"

import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { Sticky } from "./CollapsibleGroup"

import styles from "./styles.scss"

type Variant = "default" | "clear"

export type Props = {
  id: string
  children: JSX.Element | JSX.Element[] | string
  title: string
  renderHeader?: (title: string) => JSX.Element | JSX.Element[]
  open?: boolean
  group?: boolean
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  automationId?: string
  onToggle?: (open: boolean, id: string) => void

  /* Highlights the header when open by changing the background color */
  variant?: Variant

  /* Will avoid rendering the content until required (especially important when you have queries inside sections).
  Removes animation. */
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
      variant = "default",
    } = this.props
    const buttonId = `${this.props.id}-button`
    const sectionId = `${this.props.id}-section`
    const open = this.getOpen()
    const isContainer = !group || separated

    return (
      <div
        className={classnames({
          [styles.container]: isContainer,
          [styles.stickyContainer]: isContainer && sticky,
          [styles.groupItem]: group && !separated,
          [styles.separated]: separated,
        })}
        data-automation-id={automationId || `collapsible-container-${id}`}
      >
        <button
          id={buttonId}
          className={classnames(styles.button, {
            [styles.defaultVariant]: open && variant === "default",
            [styles.clearVariant]: open && variant === "clear",
            [styles.sticky]: sticky,
          })}
          style={sticky && { top: sticky.top }}
          onClick={this.handleClick}
          aria-expanded={open}
          aria-controls={sectionId}
          data-automation-id={`collapsible-button-${id}`}
        >
          {
            // If a renderHeader prop has been provided: use that to render the header
            renderHeader && renderHeader(title)
          }
          {
            // Otherwise, use a prescribed structure for the title
            !renderHeader && (
              <div
                className={styles.title}
                data-automation-id={`collapsible-button-title-${id}`}
              >
                <Heading variant="heading-4" tag="span">
                  {title}
                </Heading>
              </div>
            )
          }
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

  private getOpen = () =>
    this.props.controlled ? this.props.open : this.state.open

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
}

export default Collapsible
