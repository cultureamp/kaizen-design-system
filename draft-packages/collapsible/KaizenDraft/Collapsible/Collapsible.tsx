import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import AnimateHeight from "react-animate-height"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import { Heading } from "@kaizen/typography"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { Sticky } from "./CollapsibleGroup"
import styles from "./styles.scss"

type Variant = "default" | "clear"

export interface CollapsibleProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  id: string
  children: JSX.Element | JSX.Element[] | string
  title: string
  renderHeader?: (title: string) => JSX.Element | JSX.Element[]
  open?: boolean
  group?: boolean
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
  onToggle?: (open: boolean, id: string) => void
  /**
   * By default, the header will change background colour when open. When the variant
   * is set to 'clear', it will not have a background but a border-bottom will appear
   * to separate the heading from the content.
   */
  variant?: Variant
  /**
   * Will avoid rendering the content until required (especially important when you
   * have queries inside sections).
   * Removes animation.
   */
  lazyLoad?: boolean
  /**
   * Disables internal `open` state, allowing it to be controlled in the usage.
   */
  controlled?: boolean
}

type State = {
  open: boolean
}

/**
 * {@link https://cultureamp.design/components/collapsible/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-collapsible--single-collapsible-kaizen-site-demo Storybook}
 */
export class Collapsible extends React.Component<CollapsibleProps, State> {
  public render() {
    const {
      id,
      children,
      title,
      renderHeader,
      open: propsOpen, // Unused, but extracted so as not to spread into the container
      group,
      separated,
      sticky,
      noSectionPadding,
      automationId,
      onToggle, // Unused, but extracted so as not to spread into the container
      variant = "default",
      lazyLoad,
      controlled, // Unused, but extracted so as not to spread into the container
      classNameOverride,
      ...props
    } = this.props
    const buttonId = `${id}-button`
    const sectionId = `${id}-section`
    const open = this.getOpen()
    const isContainer = !group || separated

    return (
      <div
        id={id}
        className={classnames(classNameOverride, {
          [styles.container]: isContainer,
          [styles.stickyContainer]: isContainer && sticky,
          [styles.groupItem]: group && !separated,
          [styles.separated]: separated,
          [styles.open]: open,
          [styles.single]: !group,
        })}
        data-automation-id={automationId || `collapsible-container-${id}`}
        {...props} // `title` is missing because it is used for the header; requires breaking change to fix
      >
        <button
          type="button"
          id={buttonId}
          className={classnames(styles.button, {
            [styles.defaultVariant]: open && variant === "default",
            [styles.clearVariant]: open && variant === "clear",
            [styles.sticky]: sticky,
            [styles.open]: open,
          })}
          style={sticky && { top: sticky.top }}
          onClick={this.handleClick}
          aria-expanded={open}
          aria-controls={sectionId}
          data-automation-id={`collapsible-button-${id}`}
        >
          {renderHeader !== undefined ? (
            renderHeader(title)
          ) : (
            <div
              className={styles.title}
              data-automation-id={`collapsible-button-title-${id}`}
            >
              <Heading variant="heading-4" tag="span">
                {title}
              </Heading>
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
              id={sectionId}
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

  public state = {
    open: !!this.props.open,
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
