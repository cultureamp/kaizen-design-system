module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Kaizen.Table.Column as Column
import Kaizen.Table.Table as Table
import Text.Text as Text


storyContainer : List (Html msg) -> Html msg
storyContainer children =
    div
        [ style "margin" "1rem auto"
        , style "width" "100%"
        , style "maxWidth" "60rem"
        ]
        children


main =
    storybook
        [ let
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
                , { date = "Jan 3, 2017", number = "23" }
                ]
          in
          statelessStoryOf "Basic" <|
            storyContainer
                [ Table.view tableConfig data
                ]
        ]
