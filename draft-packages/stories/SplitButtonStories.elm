module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import KaizenDraft.SplitButton.SplitButton as SplitButton


main =
    storybook
        [ statelessStoryOf "Default" <|
            SplitButton.view SplitButton.default "Label"
        ]
