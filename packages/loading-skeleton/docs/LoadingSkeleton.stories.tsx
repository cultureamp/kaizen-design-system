import React from "react"
import { StoryFn } from "@storybook/react"
import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import {
  BrandMomentPositiveOutro,
  Informative,
} from "@kaizen/draft-illustration"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  LoadingGraphic,
  LoadingHeading,
  LoadingParagraph,
  LoadingInput,
} from ".."
import styles from "./LoadingSkeleton.stories.module.scss"

export default {
  tags: ["autodocs"],
  title: "Components/Loading States",
  parameters: {
    docs: {
      description: {
        component:
          'import { LoadingHeading, LoadingParagraph, LoadingInput, LoadingGraphic } from "@kaizen/loading-skeleton"',
      },
    },
  },
}

type GuidanceBlockSkeletonTemplateProps = {
  graphic: React.ReactElement
  heading: React.ReactElement
  input: React.ReactElement
  paragraph: React.ReactElement
}

const GuidanceBlockSkeletonTemplate = ({
  graphic,
  heading,
  input,
  paragraph,
}: GuidanceBlockSkeletonTemplateProps): JSX.Element => (
  <div className={styles.banner}>
    <div className={styles.illustrationWrapper}>{graphic}</div>
    <div className={styles.descriptionAndActions}>
      <div className={styles.descriptionContainer}>
        <div className={styles.headingWrapper}>{heading}</div>
        {paragraph}
      </div>
      <div>
        <div className={styles.buttonContainer}>
          <div style={{ width: "130px" }}> {input}</div>
        </div>
      </div>
    </div>
  </div>
)

const ExampleUsageTemplate: StoryFn = () => {
  const GUIDANCE_BLOCK_TEXT = {
    title: "This is the Guidance block title",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, " +
      "qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
  }

  const GUIDANCE_BLOCK_ACTION = {
    primary: {
      label: "Action",
    },
  }

  return (
    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Loading Skeleton", "Example"]} />
      <StoryWrapper.Row rowTitle="Guidance Block - Spot">
        <GuidanceBlockSkeletonTemplate
          heading={<LoadingHeading variant="heading-3" />}
          paragraph={
            <>
              <LoadingParagraph />
              <LoadingParagraph />
            </>
          }
          input={<LoadingInput width={100} />}
          graphic={<LoadingGraphic size="xxlarge" />}
        />
        <GuidanceBlock
          illustration={<Informative alt="informative-spot-image" />}
          text={GUIDANCE_BLOCK_TEXT}
          actions={GUIDANCE_BLOCK_ACTION}
        />
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="Guidance Block - Scene">
        <GuidanceBlockSkeletonTemplate
          heading={<LoadingHeading variant="heading-3" />}
          paragraph={
            <>
              <LoadingParagraph />
              <LoadingParagraph />
            </>
          }
          input={<LoadingInput width={100} />}
          graphic={<LoadingGraphic size="scene" />}
        />
        <GuidanceBlock
          illustration={<BrandMomentPositiveOutro alt="positive-outro" />}
          text={GUIDANCE_BLOCK_TEXT}
          actions={GUIDANCE_BLOCK_ACTION}
          illustrationType="scene"
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  )
}

export const ExampleUsage = ExampleUsageTemplate.bind({})
ExampleUsage.parameters = {
  controls: { disable: true },
}
