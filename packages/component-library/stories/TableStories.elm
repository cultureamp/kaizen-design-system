module Main exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storyOf, storybook)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Kaizen.Table.Column as Column
import Kaizen.Table.Table as Table
import Text.Text as Text


type alias TableModel =
    { tableState : Table.State
    }


type Msg
    = TableMsg Table.Msg


model : TableModel
model =
    { tableState = Table.initState
    }


update : Msg -> TableModel -> ( TableModel, Cmd Msg )
update msg tableModel =
    case msg of
        TableMsg tableMsg ->
            let
                ( tableState, tableCmd ) =
                    Table.update tableMsg tableModel.tableState
            in
            ( { tableModel | tableState = tableState }, Cmd.map TableMsg tableCmd )


storyContainer : List (Html msg) -> Html msg
storyContainer children =
    div
        [ style "margin" "1rem auto"
        , style "width" "100%"
        , style "maxWidth" "60rem"
        ]
        children


main =
    let
        column1 =
            Column.default
                { labelText = "resource name"
                , width = 4 / 12
                , cellContent = \_ -> Text.view (Text.div |> Text.inheritBaseline True) [ text "Table row label" ]
                }
                |> Column.withAdditionalCellAttributes [ style "color" "#A569BD" ]

        column2 =
            Column.default
                { labelText = "supplementary information"
                , width = 4 / 12
                , cellContent = \_ -> Text.view (Text.div |> Text.inheritBaseline True) [ text "Supplementary information" ]
                }

        column3 =
            Column.default
                { labelText = "date"
                , width = 2 / 12
                , cellContent = \{ date } -> Text.view (Text.div |> Text.inheritBaseline True) [ text date ]
                }

        column4 =
            Column.default
                { labelText = "icon"
                , width = 2 / 12
                , cellContent = \{ number } -> Text.view (Text.div |> Text.inheritBaseline True) [ text number ]
                }

        tableConfig =
            Table.default
                [ column1
                , column2
                , column3
                , column4
                ]

        data =
            [ { date = "Jan 1, 2017", number = "21" }
            , { date = "Jan 2, 2017", number = "22" }
            , { date = "Jan 3, 2017", number = "23 " }
            ]

        config =
            { update = update
            , init = ( model, Cmd.none )
            , subscriptions = \_ -> Sub.none
            }

        expandedView =
            \_ ->
                div []
                    [ div [ styles.class .popoutExpandedBody ]
                        [ div [ styles.class .customExpandedHeader ]
                            [ Text.view (Text.div |> Text.style Text.Label) [ text "Overall progress" ]
                            ]
                        , Text.view Text.p [ text "We are making good progress towards our goal!" ]
                        ]
                    , div [ styles.class .popoutExpandedFooter ]
                        [ Text.view (Text.div |> Text.style Text.BodyBold) [ text "Created on: July 12, 2017" ]
                        ]
                    ]
    in
    storybook
        [ storyOf "Basic" config <|
            \m ->
                storyContainer
                    [ Table.view tableConfig data
                    ]
        , storyOf "Expandable" config <|
            \m ->
                storyContainer
                    [ Table.view
                        (tableConfig
                            |> Table.withExpandedContent expandedView
                                (\maybeRowIndex -> TableMsg (Table.RowClicked maybeRowIndex))
                            |> Table.withState m.tableState
                        )
                        data
                    ]
        ]


styles =
    css "./Table.stories.scss"
        { popoutExpandedBody = "popoutExpandedBody"
        , customExpandedHeader = "customExpandedHeader"
        , popoutExpandedFooter = "popoutExpandedFooter"
        }
