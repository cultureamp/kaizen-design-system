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
        <CheckboxField labelText="Table row label" noBottomMargin />
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
          <ExampleTableRow expandable={false} />
        </TableCard>
        <TableCard href="//example.com">
          <ExampleTableRow expandable={false} />
        </TableCard>
        <TableCard onClick={() => alert("clicked!")}>
          <ExampleTableRow expandable={false} />
        </TableCard>
      </TableContainer>
    </Container>
  ))
  .add("Expanded", () => (
    <Container>
      <TableContainer>
        <TableHeader>
          <ExampleTableHeaderRow checkable />
        </TableHeader>
        <TableCard onClick={() => alert("expand!")}>
          <ExampleTableRow />
        </TableCard>
        <TableCard expanded onClick={() => alert("unexpand!")}>
          <ExampleTableRow expanded />
          <TableContainer>
            <TableCard>
              <ExampleTableRow expandable={false} />
            </TableCard>
            <TableCard>
              <ExampleTableRow expandable={false} />
            </TableCard>
          </TableContainer>
        </TableCard>
        <TableCard onClick={() => alert("expand!")}>
          <ExampleTableRow />
        </TableCard>
      </TableContainer>
    </Container>
  ))
  .add("Expanded popout", () => (
    <Container>
      <TableContainer>
        <TableHeader>
          <ExampleTableHeaderRow checkable />
        </TableHeader>
        <TableCard onClick={() => alert("expand!")}>
          <ExampleTableRow />
        </TableCard>
        <TableCard
          expanded
          expandedStyle="popout"
          onClick={() => alert("unexpand!")}
        >
          <ExampleTableRow expanded />
          <div>
            <div className={styles.popoutExpandedBody}>
              <div className={styles.customExpandedHeader}>
                <Text tag="div" style="label">
                  Overall progress
                </Text>
              </div>
              <Text tag="p">We are making good progress towards our goal!</Text>
            </div>
            <div className={styles.popoutExpandedFooter}>
              <Text tag="div" style="body-bold">
                Created on: July 12, 2017
              </Text>
            </div>
          </div>
        </TableCard>
        <TableCard onClick={() => alert("expand!")}>
          <ExampleTableRow />
        </TableCard>
      </TableContainer>
    </Container>
  ))
  .add("Expanded with custom content", () => (
    <Container>
      <TableContainer>
        <TableHeader>
          <ExampleTableHeaderRow checkable />
        </TableHeader>
        <TableCard onClick={() => alert("expand!")}>
          <ExampleTableRow />
        </TableCard>
        <TableCard expanded>
          <div className={styles.customExpandedHeader}>
            <Text tag="div" style="label">
              Overall progress
            </Text>
          </div>
          <TableContainer>
            <TableCard onClick={() => alert("unexpand!")}>
              <ExampleTableRow expanded />
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
        <TableCard onClick={() => alert("expand!")}>
          <ExampleTableRow />
        </TableCard>
      </TableContainer>
    </Container>
  ))
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
