import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { Icon } from "@kaizen/component-library"
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

export const MeaningfulKaizenSiteDemo: Story = () => (
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

const IconExampleTile = ({ icon, figmaName, filename }: {
  icon: React.SVGAttributes<SVGSymbolElement>,
  figmaName: string,
  filename: string
}): JSX.Element => (
  <div
    style={{
      width: "200px",
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
    <Paragraph variant="body">{figmaName}</Paragraph>
    <code style={{ opacity: "0.7" }}>{filename}</code>
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

  const getFileName = (id: string): string => {
    const filename = id.replace(".icon", "")
    return filename.replace("ca-icon-", "")
  }

  return (
    <div>
      <Paragraph variant="body">
        To import an icon use this import statement and replace the file name
        with the name under the icon
      </Paragraph>
      <Paragraph
        style={{
          paddingBottom: "2rem",
          paddingTop: "2rem",
        }}
        variant="body"
      >
        Example:
      </Paragraph>
      <code
        style={{
          borderLeft: "5px solid",
          backgroundColor: "#E5E5E5",
        }}
      >
        import <strong>draft</strong> from "@kaizen/component-library/icons/
        <strong>writing</strong>.icon.svg"
      </code>

      <Heading
        style={{
          paddingTop: "2rem",
        }}
        variant="heading-3"
      >
        Logo
      </Heading>
      {logoIcons.map((props, i) => (
        <IconExampleTile
          icon={logoIcons[i][1]}
          figmaName={logoIcons[i][0]}
          filename={getFileName(logoIcons[i][1].id)}
          key={logoIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Actions</Heading>
      {actionIcons.map((props, i) => (
        <IconExampleTile
          icon={actionIcons[i][1]}
          figmaName={actionIcons[i][0]}
          filename={getFileName(actionIcons[i][1].id)}
          key={actionIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Informational</Heading>
      {formationalIcons.map((props, i) => (
        <IconExampleTile
          icon={formationalIcons[i][1]}
          figmaName={formationalIcons[i][0]}
          filename={getFileName(formationalIcons[i][1].id)}
          key={formationalIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Users</Heading>
      {usersIcons.map((props, i) => (
        <IconExampleTile
          icon={usersIcons[i][1]}
          figmaName={usersIcons[i][0]}
          filename={getFileName(usersIcons[i][1].id)}
          key={usersIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Survey</Heading>
      {surveyIcons.map((props, i) => (
        <IconExampleTile
          icon={surveyIcons[i][1]}
          figmaName={surveyIcons[i][0]}
          filename={getFileName(surveyIcons[i][1].id)}
          key={surveyIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Views</Heading>
      {viewsIcons.map((props, i) => (
        <IconExampleTile
          icon={viewsIcons[i][1]}
          figmaName={viewsIcons[i][0]}
          filename={getFileName(viewsIcons[i][1].id)}
          key={viewsIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Directional</Heading>
      {directionalIcons.map((props, i) => (
        <IconExampleTile
          icon={directionalIcons[i][1]}
          figmaName={directionalIcons[i][0]}
          filename={getFileName(directionalIcons[i][1].id)}
          key={directionalIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Sentiment</Heading>
      {sentimentIcons.map((props, i) => (
        <IconExampleTile
          icon={sentimentIcons[i][1]}
          figmaName={sentimentIcons[i][0]}
          filename={getFileName(sentimentIcons[i][1].id)}
          key={sentimentIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Performance</Heading>
      {performanceIcons.map((props, i) => (
        <IconExampleTile
          icon={performanceIcons[i][1]}
          figmaName={performanceIcons[i][0]}
          filename={getFileName(performanceIcons[i][1].id)}
          key={performanceIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Effectiveness</Heading>
      {effectivenessIcons.map((props, i) => (
        <IconExampleTile
          icon={effectivenessIcons[i][1]}
          figmaName={effectivenessIcons[i][0]}
          filename={getFileName(effectivenessIcons[i][1].id)}
          key={effectivenessIcons[i][0]}
        />
      ))}
      <Heading variant="heading-3">Miscellaneous</Heading>
      {miscellaneousIcons.map((props, i) => (
        <IconExampleTile
          icon={miscellaneousIcons[i][1]}
          figmaName={miscellaneousIcons[i][0]}
          filename={getFileName(miscellaneousIcons[i][1].id)}
          key={miscellaneousIcons[i][0]}
        />
      ))}
    </div>
  )
}
export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "All Icons"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
