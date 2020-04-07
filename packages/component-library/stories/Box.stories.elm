module Main exposing (main)

import Box.Box as Box
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (text)


main =
    storybook
        [ statelessStoryOf "Box Default" <|
            Box.view
                [ text "A box with no props has a default margin and padding of 0. The children of box are also unstyled" ]
        , statelessStoryOf "Box Default" <|
            Box.view
                [ text "A box with no props has a default margin and padding of 0. The children of box are also unstyled" ]
        ]
