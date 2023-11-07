/* eslint-disable import/no-extraneous-dependencies */

import React from "react"
import { Unstyled } from "@storybook/blocks"
import { toCustomMediaQueriesArray } from "object-to-css-variables"
import Highlight from "react-highlight"
import { Card } from "~components/Card"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "~components/Tabs"
import { makeCssVariableDefinitionsMap } from "../src"
import { tokens } from "../src/js"
import { defaultTheme } from "../src/themes"
import animationSass from "!!raw-loader!../sass/animation.scss"
import borderSass from "!!raw-loader!../sass/border.scss"
import colorsSass from "!!raw-loader!../sass/color.scss"
import layoutSass from "!!raw-loader!../sass/layout.scss"
import shadowSass from "!!raw-loader!../sass/shadow.scss"
import spacingSass from "!!raw-loader!../sass/spacing.scss"
import typographySass from "!!raw-loader!../sass/typography.scss"
import styles from "./styles.scss"

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
}): JSX.Element => (
  <Tabs>
    <TabList aria-label="Tabs">
      {blocks.map(({ name }) => (
        <Tab key={name}>{name}</Tab>
      ))}
    </TabList>
    <TabPanels>
      {blocks.map(({ name, ...props }) => (
        <TabPanel key={name} classNameOverride="p-24">
          <CodeBlock {...props} />
        </TabPanel>
      ))}
    </TabPanels>
  </Tabs>
)

const themesBlocks: Array<
  React.ComponentPropsWithoutRef<typeof CodeBlock> & { name: string }
> = [
  {
    name: "JS",
    language: "typescript",
    code: JSON.stringify(tokens, null, 2),
    caption: (
      <code>
        import {"{ tokens }"} from &quot;@kaizen/design-tokens/js&quot;
      </code>
    ),
  },
  {
    name: "CSS Variables",
    language: "css",
    code: toCustomMediaQueriesArray(
      makeCssVariableDefinitionsMap(defaultTheme)
    ).reduce((acc, item) => acc + `${item.key}: ${item.value}; \n`, ""),
    caption: (
      <span>
        Generated using the default theme. Exported as CSS in
        @kaizen/design-tokens/css/variables.css
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
