import React, { HTMLAttributes } from "react"
// import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Tag, DefaultTagProps } from "@kaizen/draft-tag"
import { LoadingHeading } from "@kaizen/loading-skeleton"
import {
  Heading,
  HeadingProps,
  AllowedHeadingTags,
  HeadingVariants,
} from "@kaizen/typography"

export type WorkflowStatus = {
  /** @default: "statusDraft" */
  vairant?: DefaultTagProps["variant"]
  content?: string
}

export interface WorkflowTitlesProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  prefix?: string
  /** * @default: "h1" */
  prefixTag?: AllowedHeadingTags
  title?: string
  /** * @default: "h2" */
  titleTag?: AllowedHeadingTags
  status?: WorkflowStatus
}

type TitleProps = {
  content?: string
  tag: AllowedHeadingTags
  variant: HeadingVariants
}

const Title: (props: HeadingProps) => JSX.Element = ({
  tag,
  color,
  children,
  variant,
  classNameOverride,
}) =>
  children ? (
    <Heading
      variant={variant}
      tag={tag}
      color={color}
      classNameOverride={classNameOverride}
    >
      <>{children}</>
    </Heading>
  ) : (
    <LoadingHeading variant={variant} width={50} />
  )

export const Titles = ({
  prefix,
  prefixTag,
  title,
  titleTag,
  status,
  ...restProps
}: WorkflowTitlesProps): JSX.Element => (
  <div
    className="flex grow-2 flex-col items-center justify-center"
    {...restProps}
  >
    <Title
      variant="heading-6"
      tag={prefixTag || "h1"}
      color="dark-reduced-opacity"
    >
      {prefix}
    </Title>
    <Title variant="heading-1" tag={titleTag || "h2"}>
      {title}
    </Title>
    {status && (
      <Tag variant={status?.vairant || "statusDraft"}>{status?.content}</Tag>
    )}
  </div>
)

Titles.displayName = "Titles"
