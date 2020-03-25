module Kaizen.Table.Column exposing
    ( ConfigValue
    , default
    , withAdditionalCellAttributes
    )

import Html exposing (Html)



-- CONFIG


type alias ConfigValue data msg =
    { labelText : String
    , width : Float
    , cellContent : data -> Html msg
    , additionalCellAttributes : List (Html.Attribute msg)
    }



-- VARIANTS


default : { labelText : String, width : Float, cellContent : data -> Html msg } -> ConfigValue data msg
default { labelText, width, cellContent } =
    { labelText = labelText
    , width = width
    , cellContent = cellContent
    , additionalCellAttributes = []
    }



-- MODIFIERS


withAdditionalCellAttributes : List (Html.Attribute msg) -> ConfigValue data msg -> ConfigValue data msg
withAdditionalCellAttributes additionalCellAttributes config =
    { config | additionalCellAttributes = additionalCellAttributes }
