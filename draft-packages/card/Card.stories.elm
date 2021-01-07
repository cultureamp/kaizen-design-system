module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, text)
import KaizenDraft.Card.Card as Card exposing (..)


main =
    storybook
        [ statelessStoryOf "Default" <|
            Card.view Card.default [ text "This is the default card." ]
        ]
