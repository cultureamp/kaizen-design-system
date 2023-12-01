/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { HTMLAttributes } from "react"
import { render, screen } from "@testing-library/react"
import classnames from "classnames"
import { Text } from "~components/Text"
import textStyles from "~components/Text/Text.module.scss"
import { LinkStyle } from "./LinkStyle"
import linkStyles from "./LinkStyle.module.scss"

describe("<LinkStyle />", () => {
  it("combines with className from child", () => {
    render(
      <LinkStyle>
        <a href="#" className="custom-classname">
          Coffee
        </a>
      </LinkStyle>
    )
    expect(screen.getByText("Coffee").classList).toContain(linkStyles.linkStyle)
    expect(screen.getByText("Coffee").classList).toContain("custom-classname")
  })

  it("combines with styles of child", () => {
    const Coffee = (props: HTMLAttributes<HTMLDivElement>): JSX.Element => (
      <div {...props} className={classnames("coffee", props.className)}>
        Coffee
      </div>
    )

    render(
      <LinkStyle>
        <Coffee className="custom-classname" />
      </LinkStyle>
    )
    expect(screen.getByText("Coffee").classList).toContain(linkStyles.linkStyle)
    expect(screen.getByText("Coffee").classList).toContain("coffee")
    expect(screen.getByText("Coffee").classList).toContain("custom-classname")
  })

  it("combines with classNameOverride from child", () => {
    render(
      <LinkStyle classNamePropName="classNameOverride">
        <Text tag="span" variant="body" classNameOverride="custom-classname">
          Coffee
        </Text>
      </LinkStyle>
    )
    expect(screen.getByText("Coffee").classList).toContain(linkStyles.linkStyle)
    expect(screen.getByText("Coffee").classList).toContain(textStyles.body)
    expect(screen.getByText("Coffee").classList).toContain("custom-classname")
  })
})
