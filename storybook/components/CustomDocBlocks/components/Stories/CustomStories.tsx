import React, { useContext } from "react"
import { DocsContext, DocsStory } from "@storybook/blocks"

interface StoriesProps {
  title?: JSX.Element | string
  includeStickerSheets?: boolean
}

export const CustomStories: React.FC<StoriesProps> = ({ title }) => {
  const { componentStories } = useContext(DocsContext)

  const stories = componentStories().filter(
    story =>
      !story.parameters?.docs?.disable && !story.name.includes("Playground")
  )

  if (!stories || stories.length === 0) {
    return null
  }
  return (
    <>
      <h2 id="component-api">{title}</h2>
      <br />
      {stories.map(
        story =>
          story && (
            <DocsStory
              key={story.id}
              of={story.moduleExport}
              expanded
              __forceInitialArgs
            />
          )
      )}
    </>
  )
}

CustomStories.defaultProps = {
  title: "Component API",
}
