module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (text)
import Text.Text as Text exposing (h1, view)


main =
    storybook
        [ statelessStoryOf "h1" <|
            Text.view
                Text.h1
                [ Html.text "This is a h1" ]
        , statelessStoryOf "h2" <|
            Text.view
                Text.h2
                [ Html.text "This is a h2" ]
        , statelessStoryOf "h3" <|
            Text.view
                Text.h3
                [ Html.text "This is a h3" ]
        ]
