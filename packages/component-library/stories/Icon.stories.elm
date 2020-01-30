module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)


main =
    storybook
        [ statelessStoryOf "Meaningful" <|
            Icon.view
                (Icon.img "storybook-icon-id" "storybook-icon")
                (svgAsset "@kaizen/component-library/icons/configure.icon.svg")
        , statelessStoryOf "Presentational" <|
            Icon.view
                Icon.presentation
                (svgAsset "@kaizen/component-library/icons/configure.icon.svg")
        , statelessStoryOf "Inherit Size" <|
            div [ style "width" "100vw" ]
                [ Icon.view
                    (Icon.presentation
                        |> Icon.inheritSize True
                    )
                    (svgAsset "@kaizen/component-library/icons/configure.icon.svg")
                ]
        ]
