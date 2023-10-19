/* eslint-disable import/no-extraneous-dependencies */

import React from "react"
import { Unstyled } from "@storybook/blocks"
import classnames from "classnames"
import Highlight from "react-highlight"
import { Card } from "@kaizen/draft-card"
import { Tabs } from "@kaizen/draft-tabs"
import { makeCSSVariableTheme } from "../src/lib/makeCssVariableTheme"
import { defaultTheme } from "../src/themes"
import animationSass from "!!raw-loader!../sass/animation.scss"
import borderSass from "!!raw-loader!../sass/border.scss"
import colorsSass from "!!raw-loader!../sass/color.scss"
import layoutSass from "!!raw-loader!../sass/layout.scss"
import shadowSass from "!!raw-loader!../sass/shadow.scss"
import spacingSass from "!!raw-loader!../sass/spacing.scss"
import typographySass from "!!raw-loader!../sass/typography.scss"
import styles from "./styles.scss"
import heartThemeSrc from "!!raw-loader!../src/themes/heart"

export const CodeBlock = (props: {
  language: string
  caption?: React.ReactNode
  code: string
}): JSX.Element => (
  <Unstyled>
    <div className="py-8">
      <Card>
        <div className={styles.codeWrapper}>
          <Highlight className={props.language}>{props.code}</Highlight>
        </div>
      </Card>

      {props.caption && (
        <div className={styles.codeWrapperCaption}>
          <span className={styles.codeWrapperCaptionText}>{props.caption}</span>
        </div>
      )}
    </div>
  </Unstyled>
)

const TabbedCodeBlocks = ({
  blocks,
}: {
  blocks: Array<
    React.ComponentPropsWithoutRef<typeof CodeBlock> & { name: string }
  >
}): JSX.Element => {
  const [currentTab, setCurrentTab] = React.useState(blocks[0])
  const { name: _name, ...codeBlockProps } = currentTab

  return (
    <div style={{ minHeight: "32rem" }}>
      <div style={{ overflowX: "auto" }}>
        <div className="pl-4">
          <Tabs
            renderTab={({
              tab,
              activeTabClassName,
              tabClassName,
              disabledTabClassName,
            }): JSX.Element => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                style={{ flexShrink: 0 }}
                key={tab.label}
                onClick={tab.onClick}
                href={!tab.disabled ? tab.href : undefined}
                className={classnames(
                  !tab.active && !tab.disabled && tabClassName,
                  tab.active && activeTabClassName,
                  tab.disabled && disabledTabClassName
                )}
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
        </div>
      </div>
      <CodeBlock {...codeBlockProps} />
    </div>
  )
}

const themesBlocks: Array<
  React.ComponentPropsWithoutRef<typeof CodeBlock> & { name: string }
> = [
  {
    name: "Heart",
    language: "typescript",
    code: heartThemeSrc,
    caption: (
      <code>
        import {"{ heartTheme }"} from &quot;@kaizen/design-tokens&quot;
      </code>
    ),
  },
  {
    name: "CSS Variables",
    language: "json",
    code: JSON.stringify(makeCSSVariableTheme(defaultTheme), null, 2),
    caption: (
      <span>
        Generated using the default theme. Exported as JSON in
        @kaizen/design-tokens/tokens/*.json
      </span>
    ),
  },
]

export const ThemesCodeBlocks = (): JSX.Element => (
  <TabbedCodeBlocks blocks={themesBlocks} />
)
const sassBlocks: Array<
  React.ComponentPropsWithoutRef<typeof CodeBlock> & { name: string }
> = [
  {
    name: "Color",
    language: "scss",
    code: colorsSass,
    caption: (
      <code>@import &quot;~@kaizen/design-tokens/sass/color.scss&quot;</code>
    ),
  },
  {
    name: "Typography",
    language: "scss",
    code: typographySass,
    caption: (
      <code>
        @import &quot;~@kaizen/design-tokens/sass/typography.scss&quot;
      </code>
    ),
  },
  {
    name: "Spacing",
    language: "scss",
    code: spacingSass,
    caption: (
      <code>@import &quot;~@kaizen/design-tokens/sass/spacing.scss&quot;</code>
    ),
  },
  {
    name: "Border",
    language: "scss",
    code: borderSass,
    caption: (
      <code>@import &quot;~@kaizen/design-tokens/sass/border.scss&quot;</code>
    ),
  },
  {
    name: "Layout",
    language: "scss",
    code: layoutSass,
    caption: (
      <code>@import &quot;~@kaizen/design-tokens/sass/layout.scss&quot;</code>
    ),
  },
  {
    name: "Shadow",
    language: "scss",
    code: shadowSass,
    caption: (
      <code>@import &quot;~@kaizen/design-tokens/sass/shadow.scss&quot;</code>
    ),
  },
  {
    name: "Animation",
    language: "scss",
    code: animationSass,
    caption: (
      <code>
        @import &quot;~@kaizen/design-tokens/sass/animation.scss&quot;
      </code>
    ),
  },
]

export const SassVariablesCodeBlocks = (): JSX.Element => (
  <TabbedCodeBlocks blocks={sassBlocks} />
)

export default {}
