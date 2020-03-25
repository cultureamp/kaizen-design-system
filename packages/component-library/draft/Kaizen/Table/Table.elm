module Kaizen.Table.Table exposing
    ( default
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Kaizen.Table.Column as Column
import Text.Text as Text



-- CONFIG


type alias ConfigValue data msg =
    { columns : List (Column.ConfigValue data msg)
    }


type Config data msg
    = Config (ConfigValue data msg)



-- VARIANTS


default : List (Column.ConfigValue data msg) -> Config data msg
default columns =
    Config { columns = columns }



-- MODIFIERS
--
--id : String -> Config msg -> Config msg
--id value (Config config) =
--    Config { config | id = Just value }
--
--
--automationId : String -> Config msg -> Config msg
--automationId value (Config config) =
--    Config { config | automationId = Just value }
-- VIEW


view : Config data msg -> List data -> Html msg
view config data =
    div [ styles.class .container ]
        ([ headersView config ] ++ bodyView config data)


headersView : Config data msg -> Html msg
headersView (Config { columns }) =
    div [ styles.class .header ]
        [ div [ styles.class .headerRow ]
            (List.map headerRowCell columns)
        ]


headerRowCell : Column.ConfigValue data msg -> Html msg
headerRowCell column =
    div [ styles.class .headerRowCell, style "width" (ratioToPercent column.width) ]
        [ Text.view (Text.div |> Text.inheritBaseline True |> Text.style Text.Label) [ text column.labelText ]
        ]


bodyView : Config data msg -> List data -> List (Html msg)
bodyView tableConfig data =
    List.map (rowView tableConfig) data


rowView : Config data msg -> data -> Html msg
rowView (Config { columns }) data =
    div [ styles.class .card ]
        [ div [ styles.class .row ]
            (List.map (cellView data) columns)
        ]


cellView : data -> Column.ConfigValue data msg -> Html msg
cellView data column =
    div [ styles.class .rowCell, style "width" (ratioToPercent column.width) ]
        [ column.cellContent data ]


ratioToPercent : Float -> String
ratioToPercent width =
    String.fromFloat (width * 100) ++ "%"


styles =
    css "@kaizen/component-library/draft/Kaizen/Table/styles.scss"
        { container = "container"
        , header = "header"
        , headerRow = "headerRow"
        , headerRowCell = "headerRowCell"
        , card = "card"
        , expanded = "expanded"
        , row = "row"
        , rowCell = "rowCell"
        }
