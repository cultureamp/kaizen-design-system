module ElmStories.TooltipStories exposing (main)

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
        , statelessStoryOf "Default - dontTakeUpSpaceWhenHiddenQuickFix" <|
            div [ style "margin-top" "200px", style "position" "relative" ]
                [ Tooltip.view
                    (Tooltip.default "This tooltip does not take up space or cause unwanted scrollbars when not visible. However, there is no animation."
                        |> Tooltip.position Tooltip.Above
                        |> Tooltip.dontTakeUpSpaceWhenHiddenQuickFix True
                    )
                    (div [] [ Tag.view (Tag.default |> Tag.inline True) "Above" ])
                ]
        ]
