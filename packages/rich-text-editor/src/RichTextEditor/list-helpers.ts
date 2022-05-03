import {
  bulletList,
  liftListItem,
  listItem,
  orderedList,
  sinkListItem,
  splitListItem,
  wrapInList,
  addListNodes,
} from "prosemirror-schema-list"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import numberedListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"

function add(obj, props) {
  const copy = {}
  for (const prop in obj) {
    copy[prop] = obj[prop]
  }
  for (const prop$1 in props) {
    copy[prop$1] = props[prop$1]
  }
  return copy
}

// :: (OrderedMap<NodeSpec>, string, ?string) → OrderedMap<NodeSpec>
// Convenience function for adding list-related node types to a map
// specifying the nodes for a schema. Adds
// [`orderedList`](#schema-list.orderedList) as `"ordered_list"`,
// [`bulletList`](#schema-list.bulletList) as `"bullet_list"`, and
// [`listItem`](#schema-list.listItem) as `"list_item"`.
//
// `itemContent` determines the content expression for the list items.
// If you want the commands defined in this module to apply to your
// list structure, it should have a shape like `"paragraph block*"` or
// `"paragraph (ordered_list | bullet_list)*"`. `listGroup` can be
// given to assign a group name to the list node types, for example
// `"block"`.

type listTypes = "ordered_list" | "bullet_list"

// const listSchema = addListNodes({ nodes: {} }, "paragraph block*", "block")

export const customAddListNodes = (
  listNodeToAdd: listTypes,
  itemContent = "paragraph block*",
  listGroup = "list"
) => {
  // console.log(listSchema)

  const listTypes = {
    ordered_list: add(orderedList, {
      content: "list_item+",
      group: listGroup,
      control: {
        label: "Numbered List",
        icon: numberedListIcon,
      },
    }),
    bullet_list: add(bulletList, {
      content: "list_item+",
      group: listGroup,
      control: {
        label: "Bullet List",
        icon: bulletListIcon,
      },
    }),
  }

  return {
    [listNodeToAdd]: { ...listTypes[listNodeToAdd] },
    list_item: add(listItem, { content: itemContent }),
  }
}
