import React from "react"
import { Button } from "~components/Button"
import { Heading } from "~components/Heading"

type CardContentProps = {
  title: string
  illustration: React.ReactElement
}

export const CardContent = ({
  title,
  illustration,
}: CardContentProps): React.ReactElement => (
  <div className="kz-flex kz-w-[400px] kz-flex-col kz-items-center kz-p-24 kz-pt-48">
    <Heading variant="heading-3">{title}</Heading>
    <p className="kz-pt-12 kz-pb-24 kz-text-center kz-font-family-paragraph kz-text-heading-6 kz-font-weight-paragraph kz-text-purple-800">
      Lorem ipsum oogum boogum. Tutant meenage neetle teetles.
    </p>
    <div className="kz-w-[200px]">{illustration}</div>
    <div className="kz-pt-24">
      <Button label="Button" />
    </div>
  </div>
)

CardContent.displayName = "CardContent"
