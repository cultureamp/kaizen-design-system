import React from "react"
import { Meta } from "@storybook/react"
import { Box } from "@kaizen/component-library"
import { ExpertAdviceCollapsible } from "@kaizen/draft-collapsible"
import { Paragraph } from "@kaizen/typography"

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
ac scelerisque sem, vel ultricies justo. Donec eu porttitor ante,
nec gravida orci. Nulla facilisi. Cras varius erat id fermentum
mattis. Mauris bibendum vestibulum erat, quis blandit metus viverra
sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate
magna nisl, in cursus urna hendrerit et. Aenean semper, est non
feugiat sodales, nisl ligula aliquet lorem, sit amet scelerisque
arcu quam a sapien. Donec in viverra urna.`

export default {
  title: "Components/Collapsible/Expert Advice Collapsible",
  component: ExpertAdviceCollapsible,
  parameters: {
    backgrounds: { default: "Gray 100" },
    docs: {
      description: {
        component:
          'import { Collapsible, CollapsibleGroup, ExpertAdviceCollapsible } from "@kaizen/draft-collapsible";',
      },
    },
  },
} as Meta<typeof ExpertAdviceCollapsible>

export const DefaultStory: StoryFn = () => (
  <Box m={1}>
    <ExpertAdviceCollapsible id="123" title="Expert advice collapsible">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </ExpertAdviceCollapsible>
  </Box>
)
DefaultStory.storyName = "Single Expert Advice Collapsible"
