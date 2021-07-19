/* eslint-disable import/no-extraneous-dependencies */

import { Box, Paragraph } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import { Tabs } from "@kaizen/draft-tabs"
import { LinkTo } from "@storybook/addon-links/react"
import { Meta } from "@storybook/react"
import classNames from "classnames"
import "highlight.js/styles/monokai.css"
import React from "react"
import Highlight from "react-highlight"
import { defaultTheme } from "../src/themes"
import { makeCSSVariableTheme } from "../src/utils"
import styles from "./styles.scss"
import zenThemeSrc from "!!raw-loader!../src/themes/zen"
import heartThemeSrc from "!!raw-loader!../src/themes/heart"
import variableIdentifiersSass from "!!raw-loader!../sass/variable-identifiers.scss"
import typographySass from "!!raw-loader!../sass/typography-vars.scss"
import colorsSass from "!!raw-loader!../sass/color-vars.scss"
import spacingSass from "!!raw-loader!../sass/spacing-vars.scss"
import shadowSass from "!!raw-loader!../sass/shadow-vars.scss"
import layoutSass from "!!raw-loader!../sass/layout-vars.scss"
import animationSass from "!!raw-loader!../sass/animation-vars.scss"
import borderSass from "!!raw-loader!../sass/border-vars.scss"

export const CodeBlock = (props: {
  language: string
  caption?: React.ReactNode
  code: string
}) => (
  <Box py={0.5}>
    <Card>
      <div className={styles.codeWrapper}>
        <Highlight className={props.language}>{props.code}</Highlight>
      </div>
    </Card>

    {props.caption && (
      <div className={styles.codeWrapperCaption}>
        <Paragraph variant="small">
          <span className={styles.codeWrapperCaptionText}>{props.caption}</span>
        </Paragraph>
      </div>
    )}
  </Box>
)

const TabbedCodeBlocks = ({
  blocks,
}: {
  blocks: Array<
    React.ComponentPropsWithoutRef<typeof CodeBlock> & { name: string }
  >
}) => {
  const [currentTab, setCurrentTab] = React.useState(blocks[0])
  const { name, ...codeBlockProps } = currentTab

  return (
    <div style={{ minHeight: "32rem" }}>
      <div style={{ overflowX: "auto" }}>
        <Box pl={0.25}>
          <Tabs
            renderTab={({
              tab,
              activeTabClassName,
              tabClassName,
              disabledTabClassName,
            }) => (
              <a
                style={{ flexShrink: 0 }}
                data-automation-id={tab.automationId}
                key={tab.label}
                onClick={tab.onClick}
                href={!tab.disabled ? tab.href : undefined}
                className={classNames({
                  [tabClassName]: !tab.active && !tab.disabled,
                  [activeTabClassName]: tab.active,
                  [disabledTabClassName]: tab.disabled,
                })}
              >
                {tab.label}
              </a>
            )}
            tabs={blocks.map(block => ({
              label: block.name,
              active: currentTab.name === block.name,
              onClick: () => setCurrentTab(block),
            }))}
          />
        </Box>
      </div>
      <CodeBlock {...codeBlockProps} />
    </div>
  )
}

const themesBlocks: Array<
  React.ComponentPropsWithoutRef<typeof CodeBlock> & { name: string }
> = [
  {
    name: "Zen",
    language: "typescript",
    code: zenThemeSrc,
    caption: <code>import {"{ zenTheme }"} from "@kaizen/design-tokens"</code>,
  },
  {
    name: "Heart",
    language: "typescript",
    code: heartThemeSrc,
    caption: (
      <code>import {"{ heartTheme }"} from "@kaizen/design-tokens"</code>
    ),
  },
  {
    name: "CSS Variables",
    language: "json",
    code: JSON.stringify(makeCSSVariableTheme(defaultTheme), null, 2),
    caption: (
      <span>
        Generated using the default theme. Exported as JSON in
        @kaizen/design-tokens/tokens/*-vars.json
      </span>
    ),
  },
]

export const ThemesCodeBlocks = () => <TabbedCodeBlocks blocks={themesBlocks} />
const sassBlocks: Array<
  React.ComponentPropsWithoutRef<typeof CodeBlock> & { name: string }
> = [
  {
    name: "Color",
    language: "scss",
    code: colorsSass,
    caption: <code>@import "~@kaizen/design-tokens/sass/color-vars.scss"</code>,
  },
  {
    name: "Typography",
    language: "scss",
    code: typographySass,
    caption: (
      <code>@import "~@kaizen/design-tokens/sass/typography-vars.scss"</code>
    ),
  },
  {
    name: "Spacing",
    language: "scss",
    code: spacingSass,
    caption: (
      <code>@import "~@kaizen/design-tokens/sass/spacing-vars.scss"</code>
    ),
  },
  {
    name: "Border",
    language: "scss",
    code: borderSass,
    caption: (
      <code>@import "~@kaizen/design-tokens/sass/border-vars.scss"</code>
    ),
  },
  {
    name: "Layout",
    language: "scss",
    code: layoutSass,
    caption: (
      <code>@import "~@kaizen/design-tokens/sass/layout-vars.scss"</code>
    ),
  },
  {
    name: "Shadow",
    language: "scss",
    code: shadowSass,
    caption: (
      <code>@import "~@kaizen/design-tokens/sass/shadow-vars.scss"</code>
    ),
  },
  {
    name: "Animation",
    language: "scss",
    code: animationSass,
    caption: (
      <code>@import "~@kaizen/design-tokens/sass/animation-vars.scss"</code>
    ),
  },
  {
    name: "Variable Identifiers",
    language: "scss",
    code: variableIdentifiersSass,
    caption: (
      <code>
        @import "~@kaizen/design-tokens/sass/variable-identifiers.scss"
      </code>
    ),
  },
]

export const SassVariablesCodeBlocks = () => (
  <TabbedCodeBlocks blocks={sassBlocks} />
)

export const getStoryLinkName = (storyTitle: string) =>
  storyTitle.replace(/.*\//, "")

export const LinkToStory = ({
  storyModule,
  children,
  hash,
}: {
  storyModule: Meta
  hash?: string
  /* Children can be used to override the Link text */
  children?: React.ReactNode
}) => (
  <LinkTo kind={storyModule.title}>
    {children || getStoryLinkName(storyModule.title)}
  </LinkTo>
)
