import { Text } from "@cultureamp/kaizen-component-library"
import {
  CheckboxField,
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { IconButton } from "../components"
const styles = require("./Table.stories.scss")

const commentIcon = require("@cultureamp/kaizen-component-library/icons/comment.icon.svg")
  .default
const chevronDownIcon = require("@cultureamp/kaizen-component-library/icons/chevron-down.icon.svg")
  .default
const chevronUpIcon = require("@cultureamp/kaizen-component-library/icons/chevron-up.icon.svg")
  .default

const Container: React.FunctionComponent = ({ children }) => (
  <div style={{ margin: "5rem auto", width: "100%", maxWidth: "60rem" }}>
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
      icon={commentIcon}
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
          <Text tag="div" style="label" inheritBaseline>
            This is a resource label
          </Text>
          <Text tag="div" inheritBaseline>
            This is a long name for the resource that splits over multiple lines
          </Text>
        </div>
      ) : (
        <CheckboxField labelText={description} noBottomMargin />
      )}
    </TableRowCell>
    <TableRowCell width={4 / 12}>
      <Text tag="div" inheritBaseline>
        Supplementary information
      </Text>
    </TableRowCell>
    <TableRowCell width={2 / 12}>
      <Text tag="div" inheritBaseline>
        Jan 1, 2017
      </Text>
    </TableRowCell>
    <TableRowCell width={2 / 12}>
      <div className={styles.countAndExpander}>
        <Text tag="div" inheritBaseline>
          24
        </Text>
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

storiesOf("Table", module)
  .add("Default", () => (
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
  ))
  .add("Multiline", () => (
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
  ))
  .add("Clickable", () => (
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
        <TableCard href="//example.com">
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
      </TableContainer>
    </Container>
  ))
  .add("Expanded", () => {
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
              <TableCard expanded={expanded} onClick={() => toggleExpanded(id)}>
                <ExampleTableRow expanded={expanded} />
                {expanded && (
                  <TableContainer>
                    <TableCard>
                      <ExampleTableRow expandable={false} />
                    </TableCard>
                    <TableCard>
                      <ExampleTableRow expandable={false} />
                    </TableCard>
                  </TableContainer>
                )}
              </TableCard>
            )
          })}
        </TableContainer>
      </Container>
    )
  })
  .add("Expanded popout", () => {
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
                        <Text tag="div" style="label">
                          Overall progress
                        </Text>
                      </div>
                      <Text tag="p">
                        We are making good progress towards our goal!
                      </Text>
                    </div>
                    <div className={styles.popoutExpandedFooter}>
                      <Text tag="div" style="body-bold">
                        Created on: July 12, 2017
                      </Text>
                    </div>
                  </div>
                )}
              </TableCard>
            )
          })}
        </TableContainer>
      </Container>
    )
  })
  .add("Expanded with custom content", () => {
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
              <>
                <TableCard onClick={() => toggleExpanded(id)}>
                  <ExampleTableRow />
                </TableCard>
                {expanded && (
                  <TableCard expanded={expanded}>
                    <div className={styles.customExpandedHeader}>
                      <Text tag="div" style="label">
                        Overall progress
                      </Text>
                    </div>
                    <TableContainer>
                      <TableCard onClick={() => toggleExpanded(id)}>
                        <ExampleTableRow expanded={expanded} />
                      </TableCard>
                    </TableContainer>
                    <TableContainer>
                      <ExampleTableHeaderRow />
                      <TableCard>
                        <ExampleTableRow expandable={false} />
                      </TableCard>
                      <TableCard>
                        <ExampleTableRow expandable={false} />
                      </TableCard>
                    </TableContainer>
                  </TableCard>
                )}
              </>
            )
          })}
        </TableContainer>
      </Container>
    )
  })
  .add("No header", () => (
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
  ))
