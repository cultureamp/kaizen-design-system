/* eslint-disable import/no-extraneous-dependencies */

import React from "react"
import { Unstyled } from "@storybook/blocks"
import { toCustomMediaQueriesArray } from "object-to-css-variables"
import Highlight from "react-highlight"
import { Card } from "~components/Card"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "~components/Tabs"
import animationSass from "../sass/animation.scss?raw"
import borderSass from "../sass/border.scss?raw"
import colorsSass from "../sass/color.scss?raw"
import layoutSass from "../sass/layout.scss?raw"
import shadowSass from "../sass/shadow.scss?raw"
import spacingSass from "../sass/spacing.scss?raw"
import typographySass from "../sass/typography.scss?raw"
import { tokens } from "../src/js"
import { makeCssVariableDefinitionsMap } from "../src/lib/makeCssVariableDefinitionsMap"
import styles from "./DocsComponents.module.scss"

type CodeBlockProps = {
  language: string
  caption?: React.ReactNode
  code: string
}

export const CodeBlock = (props: CodeBlockProps): JSX.Element => (
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

type CodeBlocks = Array<CodeBlockProps & { name: string }>
type TabbedCodeBlocksProps = { blocks: CodeBlocks }

const TabbedCodeBlocks = ({ blocks }: TabbedCodeBlocksProps): JSX.Element => (
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

const themesBlocks = [
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
      makeCssVariableDefinitionsMap(tokens)
    ).reduce((acc, item) => acc + `${item.key}: ${item.value}; \n`, ""),
    caption: (
      <span>
        Generated using the default theme. Exported as CSS in
        @kaizen/design-tokens/css/variables.css
      </span>
    ),
  },
] satisfies CodeBlocks

export const ThemesCodeBlocks = (): JSX.Element => (
  <TabbedCodeBlocks blocks={themesBlocks} />
)

const sassBlocks = [
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
] satisfies CodeBlocks

export const SassVariablesCodeBlocks = (): JSX.Element => (
  <TabbedCodeBlocks blocks={sassBlocks} />
)
