import { Text } from "@kaizen/component-library"
import {
  CheckboxField,
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from "@kaizen/component-library/draft"
import * as React from "react"
import { IconButton } from "../components"
const styles = require("./Table.stories.scss")

const commentIcon = require("@kaizen/component-library/icons/comment.icon.svg")
  .default
const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const chevronUpIcon = require("@kaizen/component-library/icons/chevron-up.icon.svg")
  .default

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

export default {
  title: "Table (React)",
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

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

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
      <TableCard forceHoverState>
        <TableRow>
          <TableRowCell width={4 / 12}>
            <CheckboxField
              labelText="Row with cell-only anchor"
              noBottomMargin
            />
          </TableRowCell>
          <TableRowCell width={4 / 12} href="//example.com">
            <Text tag="div" inheritBaseline>
              (Anchor on this cell)
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
            </div>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  </Container>
)

export const ExpandedDeprecated = () => {
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
}

ExpandedDeprecated.story = {
  name: "Expanded (deprecated)",
}

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
}

ExpandedPopout.story = {
  name: "Expanded popout",
}

export const ExpandedWithCustomContentDeprecated = () => {
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
}

ExpandedWithCustomContentDeprecated.story = {
  name: "Expanded with custom content (deprecated)",
}

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

NoHeader.story = {
  name: "No header",
}
