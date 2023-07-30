import React, { useState } from "react"
import classnames from "classnames"
import { Button, IconButton } from "@kaizen/button"
import { Box, Icon } from "@kaizen/component-library"
import infoIcon from "@kaizen/component-library/icons/information.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import { DatePicker } from "@kaizen/date-picker"
import { Card } from "@kaizen/draft-card"
import { TextAreaField, TextField } from "@kaizen/draft-form"
import { Menu, MenuList, MenuItem } from "@kaizen/draft-menu"
import { Container, Content } from "@kaizen/draft-page-layout"
import { Slider } from "@kaizen/draft-slider"
import { TitleBlockZen } from "@kaizen/draft-title-block-zen"
import { Tooltip } from "@kaizen/draft-tooltip"
import { Heading, Paragraph } from "@kaizen/typography"
import { Sidebar } from "./Sidebar"
import styles from "./Admin.module.scss"

interface SettingsProps {
  onNavPress: (page: string) => void
}

export const Settings = (props: SettingsProps): JSX.Element => {
  const [selectedDate, setValueDate] = useState<Date | undefined>()
  const [submitDisabled] = useState(true)
  return (
    <>
      <TitleBlockZen
        variant="admin"
        title="Account admin"
        breadcrumb={{
          path: "#",
          text: "Back to home",
        }}
      />
      <Container>
        <Content>
          <div className={styles.flex}>
            <Box classNameOverride={styles.sidebar}>
              <Sidebar onNavPress={props.onNavPress} />
            </Box>
            <div className={styles.content}>
              <Box mb={1}>
                <div
                  className={classnames(styles.flex, styles.alignItemsCenter)}
                >
                  <Heading
                    variant="heading-2"
                    tag="h1"
                    style={{ flex: "1 0 auto" }}
                  >
                    Survey settings
                  </Heading>
                  <Menu
                    button={<IconButton label="" icon={meatballsIcon} />}
                    align="right"
                  >
                    <MenuList>
                      <MenuItem
                        label="Delete survey"
                        onClick={() => alert("test")}
                      />
                    </MenuList>
                  </Menu>
                </div>
              </Box>
              <Box mb={1}>
                <Card>
                  <Box p={2}>
                    <div style={{ maxWidth: "662px" }}>
                      <Box mb={1}>
                        <Heading variant="heading-3">General</Heading>
                      </Box>

                      <Box mb={3}>
                        <Box mb={1}>
                          <Heading
                            variant="heading-5"
                            classNameOverride={styles.headingLabel}
                          >
                            Survey name
                          </Heading>
                          <TextField
                            id="something"
                            labelText=""
                            description="Avoid putting the company name in the survey name"
                          />
                        </Box>

                        <Box mb={1}>
                          <Heading
                            variant="heading-5"
                            classNameOverride={styles.headingLabel}
                          >
                            Survey close
                          </Heading>
                          <DatePicker
                            id="datepicker-default"
                            labelText=""
                            selectedDay={selectedDate}
                            onDayChange={setValueDate}
                            locale="en-AU"
                          />
                        </Box>
                        <Box mb={1}>
                          <Heading
                            variant="heading-5"
                            classNameOverride={styles.headingLabel}
                          >
                            Welcome message
                          </Heading>
                          <TextAreaField labelText="" />
                        </Box>
                        <Box mb={1}>
                          <Heading
                            variant="heading-5"
                            classNameOverride={styles.headingLabel}
                          >
                            Minimum reporting threshold
                          </Heading>
                          <Slider labelLow="1" labelHigh="10" />
                        </Box>
                      </Box>

                      <Box mb={1}>
                        <div
                          className={classnames(
                            styles.flex,
                            styles.alignItemsCenter
                          )}
                        >
                          <Heading
                            variant="heading-3"
                            style={{ flex: "1 0 auto" }}
                          >
                            Sync settings
                          </Heading>

                          <Tooltip text="Some information about what this is all about">
                            <Icon
                              icon={infoIcon}
                              title=""
                              classNameOverride={styles.infoIcon}
                            />
                          </Tooltip>
                        </div>
                      </Box>

                      <Box mb={3}>
                        <TextField
                          id="something"
                          labelText=""
                          placeholder="Email address"
                        />
                      </Box>

                      <div
                        className={classnames(
                          styles.flex,
                          styles.alignItemsCenter
                        )}
                      >
                        <Paragraph
                          variant="small"
                          classNameOverride={styles.formHelpText}
                        >
                          Once you&apos;ve saved, we&apos;ll pull data next time
                          you do a manual sync or overnight if you&apos;ve
                          selected daily sync.
                        </Paragraph>
                        <div>
                          <Button
                            type="submit"
                            label="Save changes"
                            primary
                            disabled={submitDisabled ? true : undefined}
                          />
                        </div>
                      </div>
                    </div>
                  </Box>
                </Card>
              </Box>
            </div>
          </div>
        </Content>
      </Container>
    </>
  )
}
