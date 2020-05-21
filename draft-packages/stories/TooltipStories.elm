module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (div)
import Html.Attributes exposing (style)
import KaizenDraft.Tag.Tag as Tag
import KaizenDraft.Tooltip.Tooltip as Tooltip


main =
    storybook
        [ statelessStoryOf "Default - Below" <|
            Tooltip.view
                (Tooltip.default "This is a position below tooltip"
                    |> Tooltip.position Tooltip.Below
                )
                (div [] [ Tag.view (Tag.default |> Tag.inline True) "Below" ])
        , statelessStoryOf "Default - Above" <|
            div [ style "margin-top" "100px", style "position" "relative" ]
                [ Tooltip.view
                    (Tooltip.default "This is a position above tooltip"
                        |> Tooltip.position Tooltip.Above
                    )
                    (div [] [ Tag.view (Tag.default |> Tag.inline True) "Above" ])
                ]
        ]
