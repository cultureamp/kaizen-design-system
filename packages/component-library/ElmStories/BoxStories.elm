module ElmStories.BoxStories exposing (main)

import Box.Box as Box exposing (..)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (text)


main =
    storybook
        [ statelessStoryOf "Box Default" <|
            box []
                [ text "A box with no props has a default margin and padding of 0. The children of box are also unstyled" ]
        , statelessStoryOf "Box With Margin" <|
            box [ marginLeft 1, marginRight 0.25, marginTop 0.5, marginBottom 0.5 ]
                [ text "This is an example Box with margin left, right, and top explicitly defined" ]
        , statelessStoryOf "Box With Padding" <|
            box [ padding 4 ]
                [ text "Box with 4 units of padding X, 1 unit of padding right" ]
        , statelessStoryOf "Box With X And Y Padding" <|
            box [ paddingX 4, paddingRight 1 ]
                [ text "Box with 4 units of padding X, 1 unit of padding right" ]
        ]
