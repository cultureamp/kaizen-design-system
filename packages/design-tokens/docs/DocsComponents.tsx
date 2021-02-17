// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Paragraph } from "@kaizen/component-library"
import React from "react"

// eslint-disable-next-line import/no-extraneous-dependencies
import { Card } from "@kaizen/draft-card"

export const CodeBlock = (props: {
  code: string
  language: string
  caption: React.ReactNode
}) => (
  <Box py={0.5}>
    <Card>
      <pre
        style={{
          maxHeight: "17rem",
          overflow: "auto",
          fontSize: "0.75rem",
          padding: "0.5rem",
        }}
      >
        {props.code}
      </pre>
    </Card>

    <div style={{ textAlign: "center", paddingBottom: "0.5rem" }}>
      <Paragraph variant="body">
        <small>{props.caption}</small>
      </Paragraph>
    </div>
  </Box>
)
