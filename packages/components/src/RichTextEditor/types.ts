export type ToolbarControlTypes =
  | "bold"
  | "italic"
  | "underline"
  | "orderedList"
  | "bulletList"
  | "link"

export type ToolbarItems = {
  name: ToolbarControlTypes
  /**
   * A group is used to wrap items in the same section wrapper
   * ungrouped items will be appended to the end of the toolbar */
  group?: string
}

export type EditorContentArray = Array<{ [key: string]: any }>

export type EditorRows =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
