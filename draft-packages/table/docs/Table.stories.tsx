import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { IconButton } from "@kaizen/button"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUpIcon from "@kaizen/component-library/icons/chevron-up.icon.svg"
import commentIcon from "@kaizen/component-library/icons/comment.icon.svg"
import effectivenessIcon from "@kaizen/component-library/icons/effectiveness.icon.svg"
import { CheckboxField } from "@kaizen/draft-form"
import { Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
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

const Container = ({
  children,
  style,
}: {
  children: React.ReactNode
  style?: Record<string, string>
}): JSX.Element => (
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
}): JSX.Element => (
  <TableHeaderRow>
    <TableHeaderRowCell
      checkable={checkable}
      checkedStatus="on"
      onCheck={(evt): void => alert(evt.target.value)}
      sorting="descending"
      onClick={(): void => alert("Sort!")}
      labelText="Resource name"
      width={4 / 12}
      wrapping="wrap"
      sortingArrowsOnHover={showHover ? "descending" : undefined}
      reversed={reversed}
    />
    <TableHeaderRowCell
      onClick={(): void => alert("Sort!")}
      labelText="Supplementary information"
      width={4 / 12}
      wrapping="wrap"
      sortingArrowsOnHover={showHover ? "descending" : undefined}
      reversed={reversed}
    />
    <TableHeaderRowCell
      labelText="Date"
      width={2 / 12}
      onClick={(): void => alert("Sort!")}
      wrapping="wrap"
      sortingArrowsOnHover={showHover ? "descending" : undefined}
      reversed={reversed}
    />
    <TableHeaderRowCell
      labelText="Comments"
      width={2 / 12}
      onClick={(): void => alert("Sort!")}
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
}): JSX.Element => (
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
  tags: ["autodocs"],
  title: "Components/Table",
  component: TableContainer,
  parameters: {
    docs: {
      description: {
        component:
          'import { TableCard, TableContainer, TableHeader, TableHeaderRow, TableHeaderRowCell, TableRow, TableRowCell } from "@kaizen/draft-table"',
      },
    },
  },
} satisfies Meta<typeof TableContainer>

export const DefaultKaizenSiteDemo: StoryFn = () => (
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

const Multiline = ({ isReversed }: { isReversed: boolean }): JSX.Element => (
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

export const DataVariant: StoryFn = () => (
  <Container>
    <TableContainer variant="data">
      <TableHeader>
        <ExampleTableHeaderRow reversed={false} />
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

export const IconVariant: StoryFn = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderRowCell
            labelText="Comment"
            icon={commentIcon}
            onClick={(): void => alert("Sort!")}
            sortingArrowsOnHover="descending"
            width={1 / 3}
          />
          <TableHeaderRowCell
            classNameOverride="px-sm"
            labelText="This header has a classNameOverride"
            width={1 / 3}
          />
          <TableHeaderRowCell
            labelText="Report"
            icon={effectivenessIcon}
            tooltipInfo="This is tooltipInfo"
            width={1 / 3}
          />
        </TableHeaderRow>
      </TableHeader>
      <TableCard>
        <TableRow>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">
              This header of this row has an icon.
            </Paragraph>
          </TableRowCell>
          <TableRowCell classNameOverride="px-sm" width={1 / 3}>
            <Paragraph variant="body">
              This cell has a classNameOverride.
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">
              The header of this row has an icon with tooltip.
            </Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
      <TableCard>
        <TableRow>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">
              The header of this row also has sortingArrowsOnHover.
            </Paragraph>
          </TableRowCell>
          <TableRowCell classNameOverride="px-sm" width={1 / 3}>
            <Paragraph variant="body">
              This cell also has a classNameOverride
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">48</Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)
IconVariant.parameters = { chromatic: { disable: false } }

export const LinkVariant: StoryFn = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderRowCell labelText="Header A" width={1 / 3} />
          <TableHeaderRowCell labelText="Header B" width={1 / 3} />
          <TableHeaderRowCell labelText="Header C" width={1 / 3} />
        </TableHeaderRow>
      </TableHeader>
      <TableCard onClick={(): void => alert("Clicked!")}>
        <TableRow>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">This row has an onClick</Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">24</Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">48</Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
      <TableCard href="#?foo=bar">
        <TableRow>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">This row has a href</Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">24</Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 3}>
            <Paragraph variant="body">48</Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)
LinkVariant.parameters = { chromatic: { disable: false } }

export const StyleOverrideVariant: StoryFn = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderRowCell labelText="Header A" width={1 / 2} />
          <TableHeaderRowCell labelText="Header B" width={1 / 2} />
        </TableHeaderRow>
      </TableHeader>
      <TableCard classNameOverride="!border-purple-800 !shadow-none">
        <TableRow>
          <TableRowCell width={1 / 2}>
            <Paragraph variant="body">
              This TableCard has a classNameOverride.
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 2}>
            <Paragraph variant="body">
              You can override styling by adding Tailwind classes to
              classNameOverride. i.e.. `!shadow-none`
            </Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
      <TableCard classNameOverride="!border-purple-800 !shadow-none">
        <TableRow>
          <TableRowCell width={1 / 2}>
            <Paragraph variant="body">
              Only override styling if absolutely necessary.
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 2}>
            <Paragraph variant="body">
              One use case is for exported images. html2canvas can not do
              box-shadows nicely so we need to override the styling.
            </Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)
LinkVariant.parameters = { chromatic: { disable: false } }

const ExpandedPopout = ({
  isReversed,
}: {
  isReversed: boolean
}): JSX.Element => {
  const [expandedId, setExpandedId] = React.useState<string | null>("second")
  const toggleExpanded = (id: string): void => {
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
              onClick={(): void => toggleExpanded(id)}
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

const Compact = (): JSX.Element => (
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

const Default = (): JSX.Element => (
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

export const HeaderAlignmentAndWrapping: StoryFn = () => (
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

export const Tooltip: StoryFn = () => (
  // Extra margin added, so we can see the tooltip above
  <Container style={{ marginTop: "200px" }}>
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderRowCell labelText="No tooltip" width={1 / 4} />
          <TableHeaderRowCell
            labelText="Tooltip"
            width={1 / 4}
            tooltipInfo="This is a tooltip"
          />
          <TableHeaderRowCell
            labelText="Tooltip with wrapped content"
            width={1 / 4}
            wrapping="wrap"
            tooltipInfo="This is a tooltip"
            sorting="ascending"
            onClick={(): void => alert("Sort!")}
          />
          <TableHeaderRowCell
            labelText="End aligned, no icon"
            width={1 / 4}
            tooltipInfo="This is a tooltip even though there was no icon"
            isTooltipIconHidden={true}
            align="end"
            sorting="ascending"
            onClick={(): void => alert("Sort!")}
          />
        </TableHeaderRow>
      </TableHeader>
      <TableCard>
        <TableRow>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              This header of this cell has no tooltip.
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              The header of this cell has a tooltip.
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              The header of this cell has a tooltip. It&apos;s content is
              wrapped.
            </Paragraph>
          </TableRowCell>
          <TableRowCell width={1 / 4}>
            <Paragraph tag="div" variant="body">
              The header of this cell has a tooltip. It&apos;s content is end
              (right) aligned. It does not have a tooltip icon.
            </Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)
Tooltip.parameters = { chromatic: { disable: false } }

export const AnchorLink: StoryFn = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderRowCell
            labelText="This is an anchor"
            width={1 / 2}
            onClick={(e: React.MouseEvent): void => {
              e.preventDefault()
              alert("Header was clicked")
            }}
            href="#?foo=bar"
            sorting="ascending"
          />
          <TableHeaderRowCell
            labelText="This is an anchor"
            width={1 / 2}
            onClick={(e: React.MouseEvent): void => {
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
              Typically you&apos;d need to hook this up with your routing
              library (eg. react-router)
            </Paragraph>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
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
      <Multiline isReversed={isReversed} />
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
