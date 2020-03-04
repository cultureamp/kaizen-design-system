module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (..)
import Kaizen.Form.ToggleSwitchField.ToggleSwitchField as ToggleSwitchField


main =
    storybook
        [ statelessStoryOf "hello im an elm toggle story" <|
            ToggleSwitchField.view
        ]
