import React from "react"
import { Heading } from "~components/Heading"
import { Button } from "~components/__actions__/v2"

type CardContentProps = {
  title: string
  illustration: React.ReactElement
}

export const CardContent = ({ title, illustration }: CardContentProps): React.ReactElement => (
  <div className="flex w-[400px] flex-col items-center p-24 pt-48">
    <Heading variant="heading-3">{title}</Heading>
    <p className="pt-12 pb-24 text-center font-family-paragraph text-heading-6 font-weight-paragraph text-purple-800">
      Lorem ipsum oogum boogum. Tutant meenage neetle teetles.
    </p>
    <div className="w-[200px]">{illustration}</div>
    <div className="pt-24">
      <Button label="Button" />
    </div>
  </div>
)

CardContent.displayName = "CardContent"
