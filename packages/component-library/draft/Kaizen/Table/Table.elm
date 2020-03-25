module Kaizen.Table.Table exposing
    ( Msg
    , State
    , default
    , initState
    , update
    , view
    , withExpandedContent
    , withState
    )

import CssModules exposing (css)
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Kaizen.Table.Column as Column
import Text.Text as Text



-- CONFIG


type alias ConfigValue data msg =
    { columns : List (Column.ConfigValue data msg)
    , isExpandable : Bool
    , expandedContent : data -> Html msg
    , state : State
    }


type Config data msg
    = Config (ConfigValue data msg)


type Msg
    = RowClicked (Maybe Int)


type State
    = State TableState


type alias TableState =
    { expandedRowIndex : Maybe Int
    }


initState : State
initState =
    State { expandedRowIndex = Nothing }



-- VARIANTS


default : List (Column.ConfigValue data msg) -> Config data msg
default columns =
    Config
        { columns = columns
        , isExpandable = False
        , expandedContent = \_ -> text ""
        , state = initState
        }


withExpandedContent : (data -> Html msg) -> Config data msg -> Config data msg
withExpandedContent expandableContent (Config config) =
    Config { config | isExpandable = True, expandedContent = expandableContent }


withState : State -> Config data msg -> Config data msg
withState stateValue (Config config) =
    Config { config | state = stateValue }



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


view : Config data Msg -> List data -> Html Msg
view config data =
    div [ styles.class .container ]
        ([ headersView config ] ++ bodyView config data)


headersView : Config data Msg -> Html Msg
headersView (Config { columns }) =
    div [ styles.class .header ]
        [ div [ styles.class .headerRow ]
            (List.map headerRowCell columns)
        ]


headerRowCell : Column.ConfigValue data Msg -> Html Msg
headerRowCell column =
    div [ styles.class .headerRowCell, style "width" (ratioToPercent column.width) ]
        [ Text.view (Text.div |> Text.inheritBaseline True |> Text.style Text.Label) [ text column.labelText ]
        ]


bodyView : Config data Msg -> List data -> List (Html Msg)
bodyView tableConfig data =
    List.indexedMap (rowView tableConfig) data


rowView : Config data Msg -> Int -> data -> Html Msg
rowView (Config { columns, isExpandable, expandedContent, state }) index data =
    let
        (State stateValue) =
            state

        isExpanded =
            case stateValue.expandedRowIndex of
                Nothing ->
                    False

                Just expandedRowIndex ->
                    expandedRowIndex == index

        clickedIndex =
            case isExpanded of
                True ->
                    Nothing

                False ->
                    Just index

        cardClasses =
            [ styles.classList
                [ ( .card, True )
                , ( .hasHoverState, isExpandable )
                , ( .expanded, isExpanded )
                ]
            ]

        children =
            [ div [ styles.class .row ]
                (List.map (cellView data) columns)
            ]
    in
    case isExpandable of
        True ->
            button (cardClasses ++ [ onClick (RowClicked clickedIndex) ])
                (if isExpanded then
                    children ++ [ expandedContent data ]

                 else
                    children
                )

        False ->
            div cardClasses children


cellView : data -> Column.ConfigValue data Msg -> Html Msg
cellView data column =
    let
        cellAttributes =
            [ styles.class .rowCell, style "width" (ratioToPercent column.width) ] ++ column.additionalCellAttributes
    in
    div cellAttributes [ column.cellContent data ]


ratioToPercent : Float -> String
ratioToPercent width =
    String.fromFloat (width * 100) ++ "%"



-- UPDATE


update : Msg -> State -> ( State, Cmd Msg )
update msg (State state) =
    case msg of
        RowClicked index ->
            ( State { state | expandedRowIndex = index }, Cmd.none )


styles =
    css "@kaizen/component-library/draft/Kaizen/Table/styles.scss"
        { container = "container"
        , header = "header"
        , headerRow = "headerRow"
        , headerRowCell = "headerRowCell"
        , card = "card"
        , expanded = "expanded"
        , hasHoverState = "hasHoverState"
        , row = "row"
        , rowCell = "rowCell"
        }
