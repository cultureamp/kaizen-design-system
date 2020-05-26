module Main exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div, text)
import Html.Attributes exposing (dir, style)
import KaizenDraft.Table.TableCard as TableCard
import KaizenDraft.Table.TableContainer as TableContainer
import KaizenDraft.Table.TableHeader as TableHeader
import KaizenDraft.Table.TableHeaderRow as TableHeaderRow
import KaizenDraft.Table.TableHeaderRowCell as TableHeaderRowCell
import KaizenDraft.Table.TableRow as TableRow
import KaizenDraft.Table.TableRowCell as TableRowCell
import Text.Text as Text


storyContainer : List (Html msg) -> Html msg
storyContainer children =
    div [ style "margin" "1rem auto", style "width" "100%", style "maxWidth" "60rem" ]
        children


main =
    let
        exampleTableHeaderRow =
            TableHeaderRow.view
                TableHeaderRow.default
                [ TableHeaderRowCell.view
                    (TableHeaderRowCell.default
                        |> TableHeaderRowCell.labelText "Resource name"
                        |> TableHeaderRowCell.width (4 / 12)
                    )
                , TableHeaderRowCell.view
                    (TableHeaderRowCell.default
                        |> TableHeaderRowCell.labelText "Supplementary information"
                        |> TableHeaderRowCell.width (4 / 12)
                    )
                , TableHeaderRowCell.view
                    (TableHeaderRowCell.default
                        |> TableHeaderRowCell.labelText "Date"
                        |> TableHeaderRowCell.width (2 / 12)
                    )
                , TableHeaderRowCell.view
                    (TableHeaderRowCell.default
                        |> TableHeaderRowCell.labelText "Comments"
                        |> TableHeaderRowCell.width (2 / 12)
                    )
                ]

        exampleTableHeader =
            TableHeader.view TableHeader.default [ exampleTableHeaderRow ]

        exampleTableRow =
            TableRow.view
                TableRow.default
                [ TableRowCell.view
                    (TableRowCell.default
                        |> TableRowCell.width (4 / 12)
                    )
                    [ Text.view
                        (Text.div
                            |> Text.inheritBaseline True
                        )
                        [ text "This is a resource label" ]
                    ]
                , TableRowCell.view
                    (TableRowCell.default
                        |> TableRowCell.width (4 / 12)
                    )
                    [ Text.view
                        (Text.div
                            |> Text.inheritBaseline True
                        )
                        [ text "Supplementary information" ]
                    ]
                , TableRowCell.view
                    (TableRowCell.default
                        |> TableRowCell.width (2 / 12)
                    )
                    [ Text.view
                        (Text.div
                            |> Text.inheritBaseline True
                        )
                        [ text "Jan 1, 2017" ]
                    ]
                , TableRowCell.view
                    (TableRowCell.default
                        |> TableRowCell.width (2 / 12)
                    )
                    [ Text.view
                        (Text.div
                            |> Text.inheritBaseline True
                        )
                        [ text "24" ]
                    ]
                ]

        exampleTableCard =
            TableCard.view TableCard.default [ exampleTableRow ]
    in
    storybook
        [ statelessStoryOf "Default" <|
            storyContainer
                [ TableContainer.view
                    TableContainer.default
                    [ exampleTableHeader
                    , exampleTableCard
                    , exampleTableCard
                    , exampleTableCard
                    , exampleTableCard
                    ]
                ]
        ]


styles =
    css "@kaizen/component-library/stories/Table.stories.scss"
        {}
