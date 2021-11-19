import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import React, { useCallback, useEffect, useState } from "react"
import { CATEGORIES } from "../../../storybook/constants"
import Column from "../Column"
import styles from "./stories.scss"

export default {
  title: `${CATEGORIES.components}/Column`,
  component: Column,
  parameters: {
    docs: {
      description: {
        component: 'import { Column } from "@kaizen/column"',
      },
    },
    actions: {
      argTypesRegex: "^on.*",
    },
  },
}

export const DefaultKaizenSiteDemo = args => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth)

  const handleWindowResize = useCallback(event => {
    setBrowserWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [handleWindowResize])

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.pageComponent}>
        <Box pb={1} pt={1}>
          <Heading variant="heading-3">Browser width: {browserWidth}</Heading>
        </Box>
        <Box pb={1}>
          <Column {...args}>
            <Card>
              <Box p={2}>
                <Heading variant="heading-4">Test</Heading>
                <Paragraph variant="body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat id porro dolorem facere aliquid praesentium veniam
                  obcaecati, quibusdam sed, magnam exercitationem nisi minima
                  corrupti voluptatem temporibus beatae aut consequuntur unde?
                </Paragraph>
              </Box>
            </Card>
            <Card>
              <Box p={2}>
                <Heading variant="heading-4">Test</Heading>
                <Paragraph variant="body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat id porro dolorem facere aliquid praesentium veniam
                  obcaecati, quibusdam sed, magnam exercitationem nisi minima
                  corrupti voluptatem temporibus beatae aut consequuntur unde?
                </Paragraph>
              </Box>
            </Card>
            <Card>
              <Box p={2}>
                <Heading variant="heading-4">Test</Heading>
                <Paragraph variant="body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat id porro dolorem facere aliquid praesentium veniam
                  obcaecati, quibusdam sed, magnam exercitationem nisi minima
                  corrupti voluptatem temporibus beatae aut consequuntur unde?
                </Paragraph>
              </Box>
            </Card>
            <Card>
              <Box p={2}>
                <Heading variant="heading-4">Test</Heading>
                <Paragraph variant="body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat id porro dolorem facere aliquid praesentium veniam
                  obcaecati, quibusdam sed, magnam exercitationem nisi minima
                  corrupti voluptatem temporibus beatae aut consequuntur unde?
                </Paragraph>
              </Box>
            </Card>
          </Column>
        </Box>
      </div>
    </div>
  )
}

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

DefaultKaizenSiteDemo.args = {
  small: 2,
  medium: 2,
  large: 3,
  xlarge: 4,
}
