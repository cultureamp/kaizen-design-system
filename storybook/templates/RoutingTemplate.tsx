import { useOf } from "@storybook/blocks"

export const RoutingTemplate = () => {
  const resolvedOf = useOf("meta")

  switch (resolvedOf.type) {
    case "story": {
      return <h1>{resolvedOf.story.name}</h1>
    }
    case "meta": {
      return <h1>{resolvedOf.preparedMeta.title}</h1>
    }
  }
}
