import { ComponentType } from "react"
import debounce from "lodash.debounce"
import { MarkType } from "prosemirror-model"
import { Command, EditorState, Plugin } from "prosemirror-state"
import {
  AttrsValidator,
  getMarkAttrs,
  getMarkRange,
  markContainsSelection,
  markIsActive,
  removeMark,
  updateMark,
  validateAndRemoveMarks,
} from "../../commands"
import {
  LinkEditor,
  LinkEditorAttrs,
  LinkEditorProps,
} from "./components/LinkEditor"
import { createReactTooltipWrapper } from "./createReactTooltipWrapper"
import { CAEditorView, SelectionPosition } from "./types.d"

class LinkManager {
  editorComponent: ComponentType<LinkEditorProps>
  linkActive: (state: EditorState) => boolean
  validateLinks: Command
  markType: MarkType
  tooltipTarget: {
    destroy: () => void
    update: (props: LinkEditorProps) => void
  } | null
  onResize: () => void

  constructor(
    view: CAEditorView,
    markType: MarkType,
    editorComponent: ComponentType<LinkEditorProps>,
    linkAttributeValidator: AttrsValidator
  ) {
    this.editorComponent = editorComponent
    this.linkActive = state => markIsActive(state, markType)
    this.validateLinks = validateAndRemoveMarks(
      markType,
      linkAttributeValidator
    )
    this.markType = markType
    this.tooltipTarget = null
    this.update(view, null)

    this.onResize = debounce(() => {
      this.update(view, null)
    }, 15)
  }

  update(view: CAEditorView, lastState: EditorState | null): void {
    const { state } = view

    // Don’t do anything if the document/TextSelection didn't change
    if (
      lastState &&
      lastState.doc.eq(state.doc) &&
      lastState.selection.eq(state.selection)
    ) {
      return
    }

    // Is the selection empty or not a link
    //
    // TODO: Also need to check if the selection is _only_ a link. If it covers
    // more than a single mark then we don’t want to allow edited
    if (state.selection.empty || !this.linkActive(state)) {
      this.destroyElement(view)
      return
    }

    // If there is a selection and we dont have something in DOM
    // then create element and inject
    if (!this.tooltipTarget) {
      this.createElement(view)
    }
    this.updateElement(view)
  }

  destroy(): void {
    this.tooltipTarget?.destroy()
    window.removeEventListener("resize", this.onResize)
  }

  createElement(view: CAEditorView): void {
    if (!view.dom.parentElement) return
    this.tooltipTarget = createReactTooltipWrapper(
      view.dom.parentElement,
      this.editorComponent,
      this.getEditorProps(view)
    )
    window.addEventListener("resize", this.onResize)
  }

  updateElement(view: CAEditorView): void {
    this.tooltipTarget?.update(this.getEditorProps(view))
  }

  destroyElement(view: CAEditorView): void {
    view.dispatch(this.validateLinks)
    this.tooltipTarget?.destroy()
    this.tooltipTarget = null
  }

  getEditorProps(view: CAEditorView): LinkEditorProps {
    let selectionPosition: SelectionPosition | null = null
    const { selection } = view.state
    const contained = markContainsSelection(view.state, this.markType)
    const { $from } = selection
    const range = getMarkRange($from, this.markType)
    let start
    let end
    if (!contained && range) {
      start = view.coordsAtPos(range.from)
      end = view.coordsAtPos(range.to)
    } else {
      start = view.coordsAtPos(selection.from)
      if (selection.to === view.state.doc.content.size) {
        end = view.coordsAtPos(selection.to - 1)
      } else {
        end = view.coordsAtPos(selection.to)
      }
    }

    selectionPosition = {
      top: start.top,
      left: start.left,
      width: end.right - start.left,
      height: start.top - start.bottom,
    }

    return {
      removeMark: () => {
        view.dispatch(removeMark(this.markType, { toExtent: true }))
      },
      updateAttrs: (attrs: { [key: string]: unknown }) => {
        view.dispatch(updateMark(this.markType, attrs, { toExtent: true }))
      },
      attrs: getMarkAttrs(view.state, this.markType) as LinkEditorAttrs,
      selectionPosition,
      focusEditor: () => {
        view.focus()
      },
    }
  }
}

type CreateLinkManagerArgs = {
  markType: MarkType
  linkAttributeValidator?: AttrsValidator
  editorComponent?: ComponentType<LinkEditorProps>
}

export function createLinkManager({
  markType,
  editorComponent = LinkEditor,
  linkAttributeValidator = attrs => {
    if (attrs == null) {
      return false
    }
    return attrs.href && attrs.href !== ""
  },
}: CreateLinkManagerArgs): Plugin {
  return new Plugin({
    view(editorView) {
      return new LinkManager(
        editorView,
        markType,
        editorComponent,
        linkAttributeValidator
      )
    },
  })
}
