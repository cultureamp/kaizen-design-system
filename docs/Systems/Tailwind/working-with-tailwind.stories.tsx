import React from "react"
import { StoryFn } from "@storybook/react"
import { Button } from "~components/Button"
import { Card } from "~components/Card"
import { Heading } from "~components/Heading"
import {
  CustomSurvey,
  CustomUnattributedSurvey,
} from "~components/Illustration"
import { Skirt } from "~components/Skirt"
import { CardContent } from "./components/CardContent"

export default {
  title: "Systems/Tailwind/Working with Tailwind",
}

export const TailwindExampleSpacingAndLayouts: StoryFn = () => (
  <div className="kz-flex kz-justify-center kz-border-solid kz-p-16">
    <Button label="Kaizen Button" primary />
  </div>
)

export const TailwindExampleSpacingAndLayoutsComplex: StoryFn = () => (
  <>
    <Skirt>
      <Heading variant="heading-2" color="white" classNameOverride="kz-pt-24">
        Laid out with Tailwind
      </Heading>
      <Card variant="informative" classNameOverride="kz-mt-24">
        <div className="kz-h-[300px]" />
      </Card>
    </Skirt>
    {/* Adds flex, makes the width 100% and centers content */}
    <div className="kz-flex kz-w-full kz-justify-center">
      {/* Adds margins, width, and max width */}
      <div className="kz-mx-72 kz-my-24 kz-w-full  kz-max-w-[1392px]">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="kz-font-weight-[500px] kz-font-family-paragraph kz-text-heading-5 kz-text-blue-500"
          href="#"
        >
          Clickable link
        </a>
        {/* Adds spacing with margin-top */}
        <p className="kz-mt-12 kz-font-family-paragraph kz-text-heading-6 kz-font-weight-paragraph kz-leading-paragraph-sm kz-text-purple-800">
          Supporting text
        </p>
        {/* Adds margin-top, flex, and a height of 200px */}
        <div className="kz-mt-64 kz-flex kz-h-[200px]">
          {[0, 1, 2, 3].map(index => (
            <Card
              key={index}
              variant="informative"
              classNameOverride="kz-mr-24 last:kz-mr-0 kz-w-full"
            >
              {/* Adds height and width of 100% */}
              <div className="kz-w-full kz-h-100" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  </>
)

export const TailwindExampleClassNameOverrideMargin: StoryFn = () => (
  <div className="kz-flex kz-justify-center">
    {/* Adds margin-right: 24px */}
    <Card classNameOverride="kz-mr-24">
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
  <Heading variant="heading-1" classNameOverride="first-letter:kz-capitalize">
    capitalize me with tailwind
  </Heading>
)

export const TailwindExampleSnowflake: StoryFn = () => (
  <div className="kz-flex kz-justify-center">
    <div className="kz-w-[250px] kz-rounded kz-border-dashed kz-border-red-500 kz-bg-blue-100">
      <p className="kz-m-0 kz-p-12 kz-pl-16 kz-font-family-paragraph kz-text-blue-500 kz-text-center">
        Not a Kaizen Component
      </p>
    </div>
  </div>
)
