import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { IconButton } from "@kaizen/button"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUpIcon from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { CheckboxField } from "@kaizen/draft-form"
import { Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import {
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from ".."
import styles from "./Table.stories.module.scss"

const Container: React.FunctionComponent<{
  children: React.ReactNode
  style?: Record<string, string>
}> = ({ children, style }) => (
  <div
    style={{ margin: "1rem auto", width: "100%", maxWidth: "60rem", ...style }}
  >
    {children}
  </div>
)

const ExampleTableHeaderRow = ({
  checkable = false,
  showHover = false,
  reversed = false,
}) => (
  <TableHeaderRow>
    <TableHeaderRowCell
      checkable={checkable}
      checkedStatus={"on"}
      onCheck={evt => {
        alert(evt.target.value)
      }}
      sorting="descending"
      onClick={() => alert("Sort!")}
      labelText="Resource name"
      width={4 / 12}
      wrapping="wrap"
      sortingArrowsOnHover={showHover ? "descending" : undefined}
      reversed={reversed}
    />
    <TableHeaderRowCell
      onClick={() => alert("Sort!")}
      labelText="Supplementary information"
      width={4 / 12}
      wrapping="wrap"
      sortingArrowsOnHover={showHover ? "descending" : undefined}
      reversed={reversed}
    />
    <TableHeaderRowCell
      labelText="Date"
      width={2 / 12}
      onClick={() => alert("Sort!")}
      wrapping="wrap"
      sortingArrowsOnHover={showHover ? "descending" : undefined}
      reversed={reversed}
    />
    <TableHeaderRowCell
      labelText="Comments"
      width={2 / 12}
      onClick={() => alert("Sort!")}
      wrapping="wrap"
      sortingArrowsOnHover={showHover ? "descending" : undefined}
      reversed={reversed}
    />
  </TableHeaderRow>
)

const ExampleTableRow = ({
  expanded = false,
  expandable = true,
  multiline = false,
  description = "Table row label",
}) => (
  <TableRow>
    <TableRowCell width={4 / 12}>
      {multiline ? (
        <div className={styles.multiline}>
          <Paragraph tag="div" variant="body">
            This is a resource label
          </Paragraph>
          <Paragraph tag="div" variant="body">
            This is a long name for the resource that splits over multiple lines
          </Paragraph>
        </div>
      ) : (
        <CheckboxField labelText={description} noBottomMargin />
      )}
    </TableRowCell>
    <TableRowCell width={4 / 12}>
      <Paragraph tag="div" variant="body">
        Supplementary information
      </Paragraph>
    </TableRowCell>
    <TableRowCell width={2 / 12}>
      <Paragraph tag="div" variant="body">
        Jan 1, 2017
      </Paragraph>
    </TableRowCell>
    <TableRowCell width={2 / 12}>
      <div className={styles.countAndExpander}>
        <Paragraph variant="body">24</Paragraph>
        {expandable && (
          <IconButton
            label="Expand"
            icon={expanded ? chevronUpIcon : chevronDownIcon}
          />
        )}
      </div>
    </TableRowCell>
  </TableRow>
)

export default {
  title: `${CATEGORIES.components}/Table`,
  component: TableCard,
  parameters: {
    docs: {
      description: {
        component:
          'import { TableCard, TableContainer, TableHeader, TableHeaderRow, TableHeaderRowCell, TableRow, TableRowCell } from "@kaizen/draft-table"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A28358"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <ExampleTableHeaderRow checkable />
      </TableHeader>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
    </TableContainer>
  </Container>
)
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

const Multiline = isReversed => (
  <Container>
    <TableContainer>
      <TableHeader>
        <ExampleTableHeaderRow reversed={isReversed} />
      </TableHeader>
      <TableCard>
        <ExampleTableRow multiline expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow multiline expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow multiline expandable={false} />
      </TableCard>
    </TableContainer>
  </Container>
)

export const DataVariant = isReversed => (
  <Container>
    <TableContainer variant="data">
      <TableHeader>
        <ExampleTableHeaderRow reversed={isReversed} />
      </TableHeader>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
    </TableContainer>
  </Container>
)
DataVariant.parameters = { chromatic: { disable: false } }

const ExpandedPopout = isReversed => {
  const [expandedId, setExpandedId] = React.useState<string | null>("second")
  const toggleExpanded = id => {
    if (expandedId === id) {
      setExpandedId(null)
      return
    }
    setExpandedId(id)
  }
  return (
    <Container>
      <TableContainer>
        <TableHeader>
          <ExampleTableHeaderRow checkable reversed={isReversed} />
        </TableHeader>
        {["first", "second", "third"].map(id => {
          const expanded = expandedId === id
          return (
            <TableCard
              key={id}
              expandedStyle="popout"
              expanded={expanded}
              onClick={() => toggleExpanded(id)}
            >
              <ExampleTableRow expanded={expanded} />
              {expanded && (
                <div>
                  <div className={styles.popoutExpandedBody}>
                    <div className={styles.customExpandedHeader}>
                      <Paragraph tag="div" variant="body">
                        Overall progress
                      </Paragraph>
                    </div>
                    <Paragraph tag="p" variant="body">
                      We are making good progress towards our goal!
                    </Paragraph>
                  </div>
                  <div className={styles.popoutExpandedFooter}>
                    <Paragraph tag="div" variant="body">
                      Created on: July 12, 2017
                    </Paragraph>
                  </div>
                </div>
              )}
            </TableCard>
          )
        })}
      </TableContainer>
    </Container>
  )
}

const Compact = () => (
  <Container>
    <TableContainer>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
    </TableContainer>
  </Container>
)

const Default = () => (
  <Container>
    <TableContainer variant="default">
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
      <TableCard>
        <ExampleTableRow expandable={false} />
      </TableCard>
    </TableContainer>
  </Container>
)

export const HeaderAlignmentAndWrapping = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderRowCell
            labelText="Left header align with wrapping"
            width={1 / 4}
            wrapping="wrap"
          />
          <TableHeaderRowCell
            labelText="Center header align with wrapping"
            width={1 / 4}
            wrapping="wrap"
            align="center"
          />
          <TableHeaderRowCell
            labelText="Right header align with wrapping"
            width={1 / 4}
            wrapping="wrap"
            align="end"
          />
          <TableHeaderRowCell
            labelText="This column has no wrapping. This column has no wrapping."
            width={1 / 4}
            wrapping="nowrap"
          />
        </TableHeaderRow>
      </TableHeader>
      <TableCard>
        <TableRow>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              This is a resource label
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              Supplementary information
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              Jan 1, 2017
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <div className={styles.countAndExpander}>
              <Paragraph variant="body">24</Paragraph>
            </div>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)
HeaderAlignmentAndWrapping.parameters = { chromatic: { disable: false } }

export const Tooltip = () => (
  // Extra margin added, so we can see the tooltip above
  <Container style={{ marginTop: "200px" }}>
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderRowCell
            labelText="This column has no tooltip"
            width={1 / 4}
          />
          <TableHeaderRowCell
            labelText="This column has a tooltip"
            width={1 / 4}
            tooltipInfo="This is a tooltip"
          />
          <TableHeaderRowCell
            labelText="This column has a tooltip, and has wrapped content!"
            width={1 / 4}
            wrapping="wrap"
            tooltipInfo="This is a tooltip"
          />
          <TableHeaderRowCell
            labelText="End (right) aligned"
            width={1 / 4}
            tooltipInfo="This is a tooltip"
            align="end"
          />
        </TableHeaderRow>
      </TableHeader>
      <TableCard>
        <TableRow>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              This is a cell
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              This is a cell
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              This is a cell
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              This is a cell
            </Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)
Tooltip.parameters = { chromatic: { disable: false } }

export const AnchorLink = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderRowCell
            labelText="This is an anchor"
            width={1 / 2}
            onClick={e => {
              e.preventDefault()
              alert("Header was clicked")
            }}
            href="#?foo=bar"
            sorting="ascending"
          />
          <TableHeaderRowCell
            labelText="This is an anchor"
            width={1 / 2}
            onClick={e => {
              e.preventDefault()
              alert("Header was clicked")
            }}
            href="#?foo=bar"
          />
        </TableHeaderRow>
      </TableHeader>
      <TableCard>
        <TableRow>
          <TableRowCell width={1 / 2}>
            <Paragraph tag="div" variant="body">
              Notice that you can open it in a new tab
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 2}>
            <Paragraph tag="div" variant="body">
              Typically you'd need to hook this up with your routing library
              (eg. react-router)
            </Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Default"]} />
    <StoryWrapper.Row rowTitle="Compact">
      <Compact />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Default">
      <Default />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Multiline">
      <Multiline />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Expanded popout">
      <ExpandedPopout isReversed={isReversed} />
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
