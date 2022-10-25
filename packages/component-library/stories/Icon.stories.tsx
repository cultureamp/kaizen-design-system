import React from "react"
import { Icon } from "@kaizen/component-library"
import { Story } from "@storybook/react"
import { Heading, Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import {
  Logo,
  Actions,
  Informational,
  Users,
  Survey,
  Views,
  Directional,
  Sentiment,
  Performance,
  Effectiveness,
  Miscellaneous,
} from "./Icons"

export default {
  title: `${CATEGORIES.components}/Icon`,
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'import { Icon } from "@kaizen/component-library";',
      },
    },
  },
}

export const MeaningfulKaizenSiteDemo = () => (
  // the wrapper with the fixed with is to solve a problem when this is used
  // as a site demo: the iframe was getting a height of 0px in Firefox
  <div
    style={{
      width: "20px",
    }}
  >
    <Icon
      icon={Actions.configure}
      title="Warning"
      desc="Aliens approaching!"
      role="img"
      inheritSize={true}
    />
  </div>
)
MeaningfulKaizenSiteDemo.storyName = "Icon"

const IconExampleTile = ({ icon, name }) => (
  <div
    style={{
      width: "150px",
      display: "inline-flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
    }}
  >
    <div
      style={{
        paddingBottom: "2rem",
      }}
    >
      <Icon icon={icon} role="presentation" />
    </div>
    <Paragraph variant="small">{name}</Paragraph>
  </div>
)

const StickerSheetTemplate: Story = () => {
  const logoIcons = [...Object.entries(Logo)]
  const actionIcons = [...Object.entries(Actions)]
  const formationalIcons = [...Object.entries(Informational)]
  const usersIcons = [...Object.entries(Users)]
  const surveyIcons = [...Object.entries(Survey)]
  const viewsIcons = [...Object.entries(Views)]
  const directionalIcons = [...Object.entries(Directional)]
  const sentimentIcons = [...Object.entries(Sentiment)]
  const performanceIcons = [...Object.entries(Performance)]
  const effectivenessIcons = [...Object.entries(Effectiveness)]
  const miscellaneousIcons = [...Object.entries(Miscellaneous)]
  return (
    <div>
      <Heading variant="heading-3">Logo</Heading>
      {logoIcons.map((props, i) => (
        <IconExampleTile
          icon={logoIcons[i][1]}
          {...props}
          name={logoIcons[i][0]}
          key={logoIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Actions</Heading>
      {actionIcons.map((props, i) => (
        <IconExampleTile
          icon={actionIcons[i][1]}
          {...props}
          name={actionIcons[i][0]}
          key={actionIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Informational</Heading>
      {formationalIcons.map((props, i) => (
        <IconExampleTile
          icon={formationalIcons[i][1]}
          {...props}
          name={formationalIcons[i][0]}
          key={formationalIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Users</Heading>
      {usersIcons.map((props, i) => (
        <IconExampleTile
          icon={usersIcons[i][1]}
          {...props}
          name={usersIcons[i][0]}
          key={usersIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Survey</Heading>
      {surveyIcons.map((props, i) => (
        <IconExampleTile
          icon={surveyIcons[i][1]}
          {...props}
          name={surveyIcons[i][0]}
          key={surveyIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Views</Heading>
      {viewsIcons.map((props, i) => (
        <IconExampleTile
          icon={viewsIcons[i][1]}
          {...props}
          name={viewsIcons[i][0]}
          key={viewsIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Directional</Heading>
      {directionalIcons.map((props, i) => (
        <IconExampleTile
          icon={directionalIcons[i][1]}
          {...props}
          name={directionalIcons[i][0]}
          key={directionalIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Sentiment</Heading>
      {sentimentIcons.map((props, i) => (
        <IconExampleTile
          icon={sentimentIcons[i][1]}
          {...props}
          name={sentimentIcons[i][0]}
          key={sentimentIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Performance</Heading>
      {performanceIcons.map((props, i) => (
        <IconExampleTile
          icon={performanceIcons[i][1]}
          {...props}
          name={performanceIcons[i][0]}
          key={performanceIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Effectiveness</Heading>
      {effectivenessIcons.map((props, i) => (
        <IconExampleTile
          icon={effectivenessIcons[i][1]}
          {...props}
          name={effectivenessIcons[i][0]}
          key={effectivenessIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Miscellaneous</Heading>
      {miscellaneousIcons.map((props, i) => (
        <IconExampleTile
          icon={miscellaneousIcons[i][1]}
          {...props}
          name={miscellaneousIcons[i][0]}
          key={miscellaneousIcons[i][0]}
        />
      ))}
    </div>
  )
}
export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "All Icons"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
