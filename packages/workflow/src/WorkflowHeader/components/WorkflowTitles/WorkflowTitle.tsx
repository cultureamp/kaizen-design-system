import React, { HTMLAttributes } from "react"
// import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Tag, DefaultTagProps } from "@kaizen/draft-tag"
import { LoadingHeading } from "@kaizen/loading-skeleton"
import {
  Heading,
  AllowedHeadingTags,
  HeadingVariants,
} from "@kaizen/typography"

export type WorkflowStatus = {
  vairant?: DefaultTagProps["variant"]
  content?: string
}

export interface WorkflowTitlesProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  prefixTitle?: string
  prefixTitleTag?: AllowedHeadingTags
  pageTitle?: string
  pageTitleTag?: AllowedHeadingTags
  status?: WorkflowStatus
}

type TitleProps = {
  content?: string
  tag: AllowedHeadingTags
  variant: HeadingVariants
}

const Title: (props: TitleProps) => JSX.Element = ({ tag, content, variant }) =>
  content ? (
    <Heading
      variant={variant}
      tag={tag}
      color={"dark-reduced-opacity"}
      classNameOverride="!mb-12 first-letter:capitalize"
    >
      <>{content}</>
    </Heading>
  ) : (
    <LoadingHeading variant={variant} width={50} />
  )

export const WorkflowTitles = ({
  prefixTitle,
  prefixTitleTag,
  pageTitle,
  pageTitleTag,
  status,
}: WorkflowTitlesProps): JSX.Element => (
  <div className="flex flex-col items-center justify-center">
    <Title
      variant="heading-6"
      content={prefixTitle}
      tag={prefixTitleTag || "h1"}
    />
    <Title variant="heading-1" content={pageTitle} tag={pageTitleTag || "h2"} />
    <Tag variant={status?.vairant}>{status?.content}</Tag>
  </div>
)

WorkflowTitles.displayName = "WorkflowTitles"
