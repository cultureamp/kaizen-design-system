module Button.Stories.Stories exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Icon.SvgAsset exposing (svgAsset)
import KaizenDraft.Button.Button as Button exposing (..)


main =
    storybook
        [ statelessStoryOf "Default" <|
            Button.view Button.default "Label"
        , statelessStoryOf "Primary" <|
            Button.view Button.primary "Label"
        , statelessStoryOf "Secondary" <|
            Button.view Button.secondary "Label"
        , statelessStoryOf "Destructive" <|
            Button.view Button.destructive "Label"
        , statelessStoryOf "Destructive w/ Icon" <|
            Button.view
                (Button.destructive
                    |> Button.icon (svgAsset "@kaizen/component-library/icons/trash.icon.svg")
                    |> Button.iconPosition Button.Start
                )
                "Label"
        , statelessStoryOf "Secondary Destructive" <|
            Button.view
                (Button.secondary
                    |> Button.destructiveModifier True
                )
                "Label"
        , statelessStoryOf "Secondary Destructive w/ Icon" <|
            Button.view
                (Button.secondary
                    |> Button.icon (svgAsset "@kaizen/component-library/icons/trash.icon.svg")
                    |> Button.iconPosition Button.Start
                    |> Button.destructiveModifier True
                )
                "Label"
        ]
