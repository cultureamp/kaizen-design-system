import { IconButton, Paragraph } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"
import { CheckboxField } from "@kaizen/draft-form"
import * as React from "react"
import {
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from "../table"
import styles from "./Table.stories.scss"

import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUpIcon from "@kaizen/component-library/icons/chevron-up.icon.svg"

const Container: React.FunctionComponent = ({ children }) => (
  <div style={{ margin: "1rem auto", width: "100%", maxWidth: "60rem" }}>
    {children}
  </div>
)

const ExampleTableHeaderRow = ({ checkable = false }) => (
  <TableHeaderRow>
    <TableHeaderRowCell
      checkable={checkable}
      checkedStatus={"on"}
      onCheck={evt => {
        alert(evt.target.value)
      }}
      active={true}
      onClick={() => alert("Sort!")}
      labelText="Resource name"
      width={4 / 12}
    />
    <TableHeaderRowCell
      onClick={() => alert("Sort!")}
      labelText="Supplementary information"
      width={4 / 12}
    />
    <TableHeaderRowCell
      labelText="Date"
      width={2 / 12}
      onClick={() => alert("Sort!")}
    />
    <TableHeaderRowCell
      labelText="Comments"
      width={2 / 12}
      onClick={() => alert("Sort!")}
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
  title: "Table (React)",
  component: TableCard,
  parameters: {
    info: {
      text: `
      import { TableCard, TableContainer, TableHeader, TableHeaderRow, TableHeaderRowCell, TableRow, TableRowCell } from "@kaizen/draft-table"
      `,
    },
  },
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

export const Multiline = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <ExampleTableHeaderRow />
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

export const Clickable = () => (
  <Container>
    <TableContainer>
      <TableHeader>
        <ExampleTableHeaderRow checkable />
      </TableHeader>
      <TableCard onClick={() => alert("clicked!")}>
        <ExampleTableRow
          expandable={false}
          description="Button row with onClick callback"
        />
      </TableCard>
      <TableCard href="//cultureamp.com">
        <ExampleTableRow
          expandable={false}
          description="Anchor row with route"
        />
      </TableCard>
      <TableCard forceHoverState>
        <ExampleTableRow
          expandable={false}
          description="Row with hover state only"
        />
      </TableCard>
      <TableCard forceHoverState>
        <TableRow>
          <TableRowCell width={4 / 12}>
            <CheckboxField
              labelText="Row with cell-only anchor"
              noBottomMargin
            />
          </TableRowCell>
          <TableRowCell width={4 / 12} href="//cultureamp.com">
            <Paragraph variant="body">(Anchor on this cell)</Paragraph>
          </TableRowCell>
          <TableRowCell width={2 / 12} href="//cultureamp.com">
            <Paragraph variant="body">(Anchor on this cell)</Paragraph>
          </TableRowCell>
          <TableRowCell width={2 / 12}>
            <Button
              label="Button"
              onClick={() => alert("Clicked the button, not the anchor")}
            />
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)

export const ExpandedPopout = () => {
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
          <ExampleTableHeaderRow checkable />
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

ExpandedPopout.storyName = "Expanded popout"

export const NoHeader = () => (
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

NoHeader.storyName = "No header"

export const ExtraSpacing = () => (
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

ExtraSpacing.storyName = "Default variant (extra spacing)"
