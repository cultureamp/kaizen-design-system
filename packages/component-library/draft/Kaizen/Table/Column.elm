module Kaizen.Table.Column exposing
    ( ConfigValue
    , default
    )

import Html exposing (Html)


type alias ConfigValue data msg =
    { labelText : String
    , width : Float
    , cellContent : data -> Html msg
    }


default : { labelText : String, width : Float, cellContent : data -> Html msg } -> ConfigValue data msg
default { labelText, width, cellContent } =
    { labelText = labelText
    , width = width
    , cellContent = cellContent
    }



--
--
--withContentWidth : ColumnConfig data msg -> ColumnConfig data msg
--withContentWidth column =
--    { column | width = ContentWidth }
--
--
--withUnstyledContentWidth : ColumnConfig data msg -> ColumnConfig data msg
--withUnstyledContentWidth column =
--    { column | width = Unstyled }
--
--
--withoutPadding : ColumnConfig data msg -> ColumnConfig data msg
--withoutPadding column =
--    { column | cellPadding = NoPadding }
--
--
--withHeaderOnClick : msg -> ColumnConfig data msg -> ColumnConfig data msg
--withHeaderOnClick onClick column =
--    { column | onClick = Just onClick }
--
--
--withAdditionalCellAttributes : List (Html.Attribute msg) -> ColumnConfig data msg -> ColumnConfig data msg
--withAdditionalCellAttributes additionalCellAttributes column =
--    { column | additionalCellAttributes = additionalCellAttributes }
