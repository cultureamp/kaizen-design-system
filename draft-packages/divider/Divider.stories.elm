module Main exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import KaizenDraft.Divider.Divider as Divider exposing (..)


storyContainer : List (Html msg) -> Bool -> Html msg
storyContainer children reversed =
    div
        [ style "width" "600px"
        , style "margin" "0 auto"
        , style "padding" "90px"
        , styles.classList
            [ ( .reversedBackground, reversed )
            ]
        ]
        children


main =
    storybook
        [ statelessStoryOf "Default" <|
            storyContainer [ Divider.view Divider.default ] False
        , statelessStoryOf "Canvas" <|
            storyContainer [ Divider.view (Divider.variant Divider.Canvas) ] False
        , statelessStoryOf "Canvas (Reversed)" <|
            storyContainer [ Divider.view (Divider.variant Divider.Canvas |> Divider.reversed True) ] True
        , statelessStoryOf "Content" <|
            storyContainer [ Divider.view (Divider.variant Divider.Content) ] False
        , statelessStoryOf "Content (Reversed)" <|
            storyContainer [ Divider.view (Divider.variant Divider.Content |> Divider.reversed True) ] True
        ]


styles =
    css "./ElmDivider.stories.scss"
        { reversedBackground = "reversedBackground"
        }
