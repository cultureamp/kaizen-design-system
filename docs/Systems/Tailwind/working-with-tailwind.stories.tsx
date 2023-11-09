import React from "react"
import { StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { Card } from "@kaizen/draft-card"
import {
  CustomSurvey,
  CustomUnattributedSurvey,
} from "@kaizen/draft-illustration"
import { Skirt } from "@kaizen/draft-page-layout"
import { Heading } from "@kaizen/typography"
import { CardContent } from "./components/CardContent"

export default {
  title: "Systems/Tailwind Preset/Working with Tailwind",
}

export const TailwindExampleSpacingAndLayouts: StoryFn = () => (
  <div className="flex justify-center border-solid p-16">
    <Button label="Kaizen Button" primary />
  </div>
)

export const TailwindExampleSpacingAndLayoutsComplex: StoryFn = () => (
  <>
    <Skirt>
      <Heading variant="heading-2" color="white" classNameOverride="pt-24">
        Laid out with Tailwind
      </Heading>
      <Card variant="informative" classNameOverride="mt-24">
        <div className="h-[300px]" />
      </Card>
    </Skirt>
    {/* Adds flex, makes the width 100% and centers content */}
    <div className="flex w-full justify-center">
      {/* Adds margins, width, and max width */}
      <div className="mx-72 my-24 w-full  max-w-[1392px]">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="font-weight-[500px] font-family-paragraph text-heading-5 text-blue-500"
          href="#"
        >
          Clickable link
        </a>
        {/* Adds spacing with margin-top */}
        <p className="mt-12 font-family-paragraph text-heading-6 font-weight-paragraph leading-paragraph-sm text-purple-800">
          Supporting text
        </p>
        {/* Adds margin-top, flex, and a height of 200px */}
        <div className="mt-64 flex h-[200px]">
          {[0, 1, 2, 3].map(index => (
            <Card
              key={index}
              variant="informative"
              classNameOverride="mr-24 last:mr-0 w-full"
            >
              {/* Adds height and width of 100% */}
              <div className="w-full h-100" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  </>
)

export const TailwindExampleClassNameOverrideMargin: StoryFn = () => (
  <div className="flex justify-center">
    {/* Adds margin-right: 24px */}
    <Card classNameOverride="mr-24">
      <CardContent
        title="Card 1"
        illustration={<CustomSurvey alt="custom-survey" />}
      />
    </Card>
    <Card>
      <CardContent
        title="Card 2"
        illustration={
          <CustomUnattributedSurvey alt="custom-unattributed-survey" />
        }
      />
    </Card>
  </div>
)

export const TailwindExampleClassNameOverrideHeading: StoryFn = () => (
  <Heading variant="heading-1" classNameOverride="first-letter:capitalize">
    capitalize me with tailwind
  </Heading>
)

export const TailwindExampleSnowflake: StoryFn = () => (
  <div className="flex justify-center">
    <div className="w-[250px] rounded border-dashed border-red-500 bg-blue-100">
      <p className="m-0 p-12 pl-16 font-family-paragraph text-blue-500 text-center">
        Not a Kaizen Component
      </p>
    </div>
  </div>
)
