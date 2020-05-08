module Kaizen.Modal.Primitives.ModalAccessibleDescription exposing (view)

import Html exposing (Html, div)
import Html.Attributes exposing (id)
import Kaizen.Modal.Primitives.Constants as Constants


view : List (Html msg) -> Html msg
view content =
    div [ id Constants.ariaDescribedBy ] content
