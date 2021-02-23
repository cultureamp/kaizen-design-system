/* eslint-disable import/no-extraneous-dependencies */

import { Box, Paragraph } from "@kaizen/component-library"
import React from "react"
import { Card } from "@kaizen/draft-card"
import { Tabs } from "@kaizen/draft-tabs"
import Highlight from "react-highlight"
import { defaultTheme } from "../src/themes"
import { makeCSSVariableTheme } from "../src/utils"
import { useTheme } from "../react"
import styles from "./styles.scss"

import zenThemeSrc from "!!raw-loader!../src/themes/zen"
import heartThemeSrc from "!!raw-loader!../src/themes/heart"

import colorsSass from "!!raw-loader!../sass/color-vars.scss"
import typographySass from "!!raw-loader!../sass/typography-vars.scss"
import animationSass from "!!raw-loader!../sass/animation-vars.scss"
import shadowSass from "!!raw-loader!../sass/shadow-vars.scss"
import spacingSass from "!!raw-loader!../sass/spacing-vars.scss"
import layoutSass from "!!raw-loader!../sass/layout-vars.scss"
import borderSass from "!!raw-loader!../sass/border-vars.scss"
import variableIdentifiersSass from "!!raw-loader!../sass/variable-identifiers.scss"
import "highlight.js/styles/monokai.css"

export const CodeBlock = (props: {
  language: string
  caption?: React.ReactNode
  code: string
}) => {
  const theme = useTheme()
  return (
    <Box>
      <Card>
        <div
          style={{
            maxHeight: "25rem",
            overflow: "auto",
            borderRadius: theme.border.solid.borderRadius,
          }}
          className={styles.codeWrapper}
        >
          <Highlight className={props.language}>{props.code}</Highlight>
        </div>
      </Card>

      {props.caption && (
        <div
          style={{
            textAlign: "center",
            padding: "0.75rem 0 2rem",
          }}
        >
          <Paragraph variant="small">
            <span style={{ color: theme.color.wisteria[600] }}>
              {props.caption}
            </span>
          </Paragraph>
        </div>
      )}
    </Box>
  )
}

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
    <div style={{ minHeight: "28rem" }}>
      <Box pl={0.25}>
        <Tabs
          tabs={blocks.map(block => ({
            label: block.name,
            active: currentTab.name === block.name,
            onClick: () => setCurrentTab(block),
          }))}
        />
      </Box>
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
    name: "Border",
    language: "scss",
    code: animationSass,
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
]

export const SassVariablesCodeBlocks = () => (
  <TabbedCodeBlocks blocks={sassBlocks} />
)
