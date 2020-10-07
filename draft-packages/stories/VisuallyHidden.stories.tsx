import * as React from "react"
import { Label, Input } from "@kaizen/draft-form"

import { VisuallyHidden } from "@kaizen/draft-visually-hidden"
import { Paragraph } from "@kaizen/component-library"

export default {
  title: "VisuallyHidden (React)",
  component: VisuallyHidden,
  parameters: {
    info: {
      text: `
        import { VisuallyHidden } from "@kaizen/draft-VisuallyHidden";

        Use VisuallyHidden when you want to visually hide an element, but still 
        make it available to screen reader users.
      `,
    },
  },
}

export const DefaultStory = () => (
  <span>
    <p>Below should read "Hello, World!" for screen reader users</p>
    Hello, <VisuallyHidden>World!</VisuallyHidden>.
  </span>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

export const HiddenLabel = () => (
  <div>
    <Paragraph variant="body">
      The label for this text field is being visually hidden by the
      VisuallyHidden component.
    </Paragraph>
    <VisuallyHidden>
      <Label htmlFor="test-id">Enter your name</Label>
    </VisuallyHidden>
    <Input id="test-id" placeholder="Enter your name" />
  </div>
)

HiddenLabel.story = {
  name: "Hidden Label Example",
}
