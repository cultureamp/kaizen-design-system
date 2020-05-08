module KaizenDraft.Modal.Primitives.ModalAccessibleLabel exposing (view)

import Html exposing (Html, div)
import Html.Attributes exposing (id)
import KaizenDraft.Modal.Primitives.Constants as Constants


view : List (Html msg) -> Html msg
view content =
    div [ id Constants.ariaLabelledBy ] content
