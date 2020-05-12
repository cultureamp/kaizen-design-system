module Kaizen.Table.Table exposing
    ( Msg(..)
    , State
    , automationId
    , default
    , defaultRowClickHandler
    , id
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
    { id : Maybe String
    , automationId : Maybe String
    , columns : List (Column.ConfigValue data msg)
    , state : State
    , tableType : TableType data msg
    }


type TableType data msg
    = Basic
    | Expandable
        { expandedContent : data -> Html msg
        , rowClickHandler : Maybe Int -> msg
        }


type alias RowClickHandler msg =
    Maybe Int -> msg


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
        { id = Nothing
        , automationId = Nothing
        , columns = columns
        , tableType = Basic
        , state = initState
        }


withExpandedContent : (data -> Html msg) -> RowClickHandler msg -> Config data msg -> Config data msg
withExpandedContent expandableContent rowClickHandler (Config config) =
    Config { config | tableType = Expandable { expandedContent = expandableContent, rowClickHandler = rowClickHandler } }


withState : State -> Config data msg -> Config data msg
withState stateValue (Config config) =
    Config { config | state = stateValue }


defaultRowClickHandler msg maybeRowIndex =
    msg (RowClicked maybeRowIndex)



-- MODIFIERS


id : String -> Config data msg -> Config data msg
id value (Config config) =
    Config { config | id = Just value }


automationId : String -> Config data msg -> Config data msg
automationId value (Config config) =
    Config { config | automationId = Just value }



-- VIEW


view : Config data msg -> List data -> Html msg
view (Config config) data =
    let
        idAttr =
            case config.id of
                Just idString ->
                    [ Html.Attributes.id idString ]

                Nothing ->
                    []

        automationIdAttr =
            case config.automationId of
                Just idString ->
                    [ Html.Attributes.attribute "data-automation-id" idString ]

                Nothing ->
                    []
    in
    div ([ styles.class .container ] ++ idAttr ++ automationIdAttr)
        ([ headersView (Config config) ] ++ bodyView (Config config) data)


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
    List.indexedMap (rowView tableConfig) data


rowView : Config data msg -> Int -> data -> Html msg
rowView (Config { columns, tableType, state }) index data =
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
                , ( .hasHoverState, isExpandable tableType )
                , ( .expanded, isExpanded )
                ]
            ]

        children =
            [ div [ styles.class .row ]
                (List.map (cellView data) columns)
            ]
    in
    case tableType of
        Basic ->
            div cardClasses children

        Expandable { expandedContent, rowClickHandler } ->
            button (cardClasses ++ [ onClick (rowClickHandler clickedIndex) ])
                (if isExpanded then
                    children ++ [ expandedContent data ]

                 else
                    children
                )


isExpandable : TableType data msg -> Bool
isExpandable tableType =
    case tableType of
        Basic ->
            False

        Expandable _ ->
            True


cellView : data -> Column.ConfigValue data msg -> Html msg
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


update : Msg -> State -> ( State, Cmd msg )
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
