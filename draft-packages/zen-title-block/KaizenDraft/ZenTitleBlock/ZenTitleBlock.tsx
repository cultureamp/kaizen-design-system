import classNames from "classnames"
import { throttle } from "lodash"
import * as React from "react"

import Icon from "@kaizen/component-library/components/Icon/Icon"
import { Tag } from "@kaizen/draft-tag"
const backIcon = require("@kaizen/component-library/icons/arrow-backward.icon.svg")
  .default
const forwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default

const styles = require("./ZenTitleBlock.scss")

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
  variant?: "admin" | "education" // the default is wisteria bg (AKA "reporting")
  breadcrumb?: Breadcrumb
  toolbar?: React.ReactNode[]
  textDirection?: "ltr" | "rtl"
  surveyStatus?: SurveyStatus
  sticky?: boolean
  noBottomSeparator?: boolean
}

type State = {
  useCompactSize: boolean
}

const COMPACT_NAVIGATION_SCROLL_THRESHOLD = 5
const meetsCompactThreshold = () =>
  (window.scrollY || window.pageYOffset) >= COMPACT_NAVIGATION_SCROLL_THRESHOLD

class ZenTitleBlock extends React.Component<Props, State> {
  static defaultProps = {
    textDirection: "ltr",
    noBottomSeparator: false,
  }
  state = {
    useCompactSize: meetsCompactThreshold(),
  }

  updateScrollPosition = throttle(() => {
    this.setState({ useCompactSize: meetsCompactThreshold() })
  }, 50)

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

  render() {
    const { sticky, toolbar, variant, noBottomSeparator } = this.props
    const { useCompactSize } = this.state

    return (
      <div
        className={classNames(styles.titleBlockContainer, {
          [styles.sticky]: sticky,
          [styles.compact]: useCompactSize,
        })}
      >
        <div
          className={classNames(styles.titleBlock, {
            [styles.educationVariant]: variant === "education",
            [styles.adminVariant]: variant === "admin",
            [styles.noBottomSeparator]: noBottomSeparator,
          })}
          data-automation-id="TitleBlock__TitleBlock"
        >
          <div className={styles.bottomSeparatorContainer}>
            <div className={styles.titleBlockInner}>
              {this.renderBreadcrumb()}
              <div className={styles.leftContent}>
                <div className={styles.titleContainer}>
                  <div
                    className={styles.textContainer}
                    data-automation-id="TitleBlock__Text"
                  >
                    {this.renderTitle()}
                    {this.renderTag()}
                  </div>
                </div>
              </div>
              <div
                className={styles.toolbarContainer}
                data-automation-id="title-block--actions"
              >
                {toolbar}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ZenTitleBlock
