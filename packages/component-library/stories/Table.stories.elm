module Main exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div, text)
import Html.Attributes exposing (dir, style)
import Kaizen.Table.TableCard as TableCard
import Kaizen.Table.TableContainer as TableContainer
import Kaizen.Table.TableHeader as TableHeader
import Kaizen.Table.TableHeaderRow as TableHeaderRow
import Kaizen.Table.TableHeaderRowCell as TableHeaderRowCell
import Kaizen.Table.TableRow as TableRow
import Kaizen.Table.TableRowCell as TableRowCell
import Text.Text as Text


storyContainer : List (Html msg) -> Html msg
storyContainer children =
    div [ style "margin" "1rem auto", style "width" "100%", style "maxWidth" "60rem" ]
        children


main =
    let
        exampleTableHeaderRow =
            TableHeaderRow.view
                (TableHeaderRow.default
                    |> TableHeaderRow.children
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
                )

        exampleTableHeader =
            TableHeader.view
                (TableHeader.default |> TableHeader.children [ exampleTableHeaderRow ])

        exampleTableRow =
            TableRow.view
                (TableRow.default
                    |> TableRow.children
                        [ TableRowCell.view
                            (TableRowCell.default
                                |> TableRowCell.width (4 / 12)
                                |> TableRowCell.children
                                    [ Text.view
                                        (Text.div
                                            |> Text.inheritBaseline True
                                        )
                                        [ text "This is a resource label" ]
                                    ]
                            )
                        , TableRowCell.view
                            (TableRowCell.default
                                |> TableRowCell.width (4 / 12)
                                |> TableRowCell.children
                                    [ Text.view
                                        (Text.div
                                            |> Text.inheritBaseline True
                                        )
                                        [ text "Supplementary information" ]
                                    ]
                            )
                        , TableRowCell.view
                            (TableRowCell.default
                                |> TableRowCell.width (2 / 12)
                                |> TableRowCell.children
                                    [ Text.view
                                        (Text.div
                                            |> Text.inheritBaseline True
                                        )
                                        [ text "Jan 1, 2017" ]
                                    ]
                            )
                        , TableRowCell.view
                            (TableRowCell.default
                                |> TableRowCell.width (2 / 12)
                                |> TableRowCell.children
                                    [ Text.view
                                        (Text.div
                                            |> Text.inheritBaseline True
                                        )
                                        [ text "24" ]
                                    ]
                            )
                        ]
                )

        exampleTableCard =
            TableCard.view (TableCard.default |> TableCard.children [ exampleTableRow ])
    in
    storybook
        [ statelessStoryOf "Default" <|
            storyContainer
                [ TableContainer.view
                    (TableContainer.default
                        |> TableContainer.children
                            [ exampleTableHeader
                            , exampleTableCard
                            , exampleTableCard
                            , exampleTableCard
                            , exampleTableCard
                            ]
                    )
                ]
        ]


styles =
    css "@kaizen/component-library/stories/Table.stories.scss"
        {}
