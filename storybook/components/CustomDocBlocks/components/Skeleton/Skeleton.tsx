import React from "react"
import { Canvas, Story } from "@storybook/blocks"

export type SkeletonProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Skeleton = ({ context }: SkeletonProps): JSX.Element => {
  let skeletonStoryId
  try {
    skeletonStoryId = context.storyIdByName("Skeleton")
  } catch (e) {
    console.error(e)
  }

  return (
    skeletonStoryId && (
      <div>
        <h2>Skeleton</h2>
        <Canvas>
          <Story id={skeletonStoryId} />
        </Canvas>
      </div>
    )
  )
}

Skeleton.displayName = "Skeleton"
