import classNames from "classnames"
import { throttle } from "lodash"
import { Fragment, ReactNode } from "react"
import * as React from "react"
import Media from "react-media"

import Icon from "@cultureamp/kaizen-component-library/components/Icon/Icon"
import { MOBILE_QUERY } from "@cultureamp/kaizen-component-library/components/NavigationBar/constants"
import { Tag } from "@cultureamp/kaizen-component-library/draft"
const backIcon = require("@cultureamp/kaizen-component-library/icons/arrow-backward.icon.svg")
  .default
const forwardIcon = require("@cultureamp/kaizen-component-library/icons/arrow-forward.icon.svg")
  .default
import { NavigationButton } from "./NavigationButtons"
import NavigationButtons from "./NavigationButtons"

const styles = require("./TitleBlock.scss")

type Color =
  | "Lapis"
  | "Ocean"
  | "Peach"
  | "Seedling"
  | "Wisteria"
  | "Yuzu"
  | "Transparent"

type SurveyStatus = {
  text: string
  status: "draft" | "live"
}

type Breadcrumb = {
  path: string
  text: string
}

type Props = {
  title: string
  subtitle?: string
  breadcrumb?: Breadcrumb
  children?: ReactNode
  textDirection?: "ltr" | "rtl"
  surveyStatus?: SurveyStatus
  navigationButtons?: Array<NavigationButton>
  reversed?: boolean
  reverseColor?: Color
  sticky?: boolean
  stickyColor?: Color
}

type State = {
  useCompactSize: boolean
}

const COMPACT_NAVIGATION_SCROLL_THRESHOLD = 5
const meetsCompactThreshold = () =>
  (window.scrollY || window.pageYOffset) >= COMPACT_NAVIGATION_SCROLL_THRESHOLD

class TitleBlock extends React.Component<Props, State> {
  state = {
    useCompactSize: meetsCompactThreshold(),
  }

  static defaultProps = {
    textDirection: "ltr",
  }

  componentDidMount() {
    if (this.props.sticky) {
      document.addEventListener("scroll", this.updateScrollPosition)
    }
  }

  componentWillUnmount() {
    if (this.props.sticky) {
      document.removeEventListener("scroll", this.updateScrollPosition)
    }
  }

  updateScrollPosition = throttle(() => {
    this.setState({ useCompactSize: meetsCompactThreshold() })
  }, 50)

  renderTitle = () => {
    const { title } = this.props
    if (title !== undefined) {
      return (
        <div data-automation-id="TitleBlock__Heading" className={styles.title}>
          {title}
        </div>
      )
    }
  }

  renderTag = () => {
    const { surveyStatus } = this.props
    if (surveyStatus == undefined) return

    let variant
    if (surveyStatus.status === "draft") {
      variant = "statusDraft"
    }
    if (surveyStatus.status === "live") {
      variant = "statusLive"
    }

    return (
      <div className={styles.tag}>
        <Tag variant={variant}>{surveyStatus.text}</Tag>
      </div>
    )
  }

  renderSubtitle = () => {
    const { subtitle } = this.props
    if (subtitle == undefined) return

    return (
      <Fragment>
        <div
          className={styles.subtitle}
          data-automation-id="TitleBlock__Subtitle"
        >
          {subtitle}
        </div>
        {this.renderTag()}
      </Fragment>
    )
  }

  renderBreadcrumb = () => {
    const { breadcrumb, textDirection } = this.props
    if (breadcrumb == undefined) return

    const icon = textDirection === "rtl" ? forwardIcon : backIcon

    return (
      <a
        href={breadcrumb.path}
        className={styles.breadcrumb}
        data-automation-id="TitleBlock__Breadcrumb"
      >
        <div className={styles.circle}>
          <Icon icon={icon} role="presentation" />
        </div>
        <span className={styles.breadcrumbText}>{breadcrumb.text}</span>
      </a>
    )
  }

  renderNavigation = () => {
    const { navigationButtons, reversed } = this.props
    if (navigationButtons == undefined) return

    return (
      <div
        className={styles.navContainer}
        data-automation-id="TitleBlock__Navigation"
      >
        <div className={styles.navButtonsContainer}>
          <NavigationButtons
            navigationButtons={navigationButtons}
            reversed={reversed}
          />
        </div>
      </div>
    )
  }

  render() {
    const { reversed, reverseColor, sticky, stickyColor, children } = this.props
    const { useCompactSize } = this.state

    return (
      <div
        className={classNames(styles.titleBlockContainer, {
          [styles.reversed]: reversed,
          [styles[`reverseColor${reverseColor}`]]: reverseColor,
          [styles.sticky]: sticky,
          [styles.compact]: useCompactSize,
          [styles[`stickyColor${stickyColor}`]]: useCompactSize && stickyColor,
        })}
      >
        <div
          className={classNames(styles.titleBlock)}
          data-automation-id="TitleBlock__TitleBlock"
        >
          <div className={styles.titleBlockInner}>
            {this.renderBreadcrumb()}
            <div className={styles.leftContent}>
              <div className={styles.titleContainer}>
                <div
                  className={styles.textContainer}
                  data-automation-id="TitleBlock__Text"
                >
                  {this.renderTitle()}
                  {this.renderSubtitle()}
                </div>
              </div>
              <Media query={MOBILE_QUERY}>
                {(matches: boolean) =>
                  !matches && <Fragment>{this.renderNavigation()}</Fragment>
                }
              </Media>
            </div>
            <div
              className={styles.actionsContainer}
              data-automation-id="title-block--actions"
            >
              {children}
            </div>
          </div>
        </div>
        <Media query={MOBILE_QUERY}>
          {(matches: boolean) =>
            matches && <Fragment>{this.renderNavigation()}</Fragment>
          }
        </Media>
      </div>
    )
  }
}

export default TitleBlock
