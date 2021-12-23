import { EditorState } from "prosemirror-state"
import { MarkType } from "prosemirror-model"
import { ReactElement } from "react"
import { markContainsSelection, markIsActive } from "../commands/marks"

type RenderProps = {
  active: boolean
  contained: boolean
}

type Props = {
  children: (renderProps: RenderProps) => ReactElement
  editorState: EditorState
  markType: MarkType
}

export function EditorMarkButton({ children, editorState, markType }: Props) {
  const contained = markContainsSelection(editorState, markType)
  const active = markIsActive(editorState, markType)
  return children({ active, contained })
}
