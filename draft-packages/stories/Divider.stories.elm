module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import KaizenDraft.Divider.Divider as Divider exposing (..)


wisteria700 =
    "#6B6E94"


storyContainer : List (Html msg) -> Maybe String -> Html msg
storyContainer children background =
    div
        [ style "width" "600px"
        , style "margin" "0 auto"
        , style "padding" "90px"
        , style "background-color" (Maybe.withDefault "#fff" background)
        ]
        children


main =
    storybook
        [ statelessStoryOf "Default" <|
            storyContainer [ Divider.view Divider.default ] Nothing
        , statelessStoryOf "Canvas" <|
            storyContainer [ Divider.view (Divider.variant Divider.Canvas) ] Nothing
        , statelessStoryOf "Canvas (Reversed)" <|
            storyContainer [ Divider.view (Divider.variant Divider.Canvas |> Divider.reversed True) ] (Just wisteria700)
        , statelessStoryOf "Content" <|
            storyContainer [ Divider.view (Divider.variant Divider.Content) ] Nothing
        , statelessStoryOf "Content (Reversed)" <|
            storyContainer [ Divider.view (Divider.variant Divider.Content |> Divider.reversed True) ] (Just wisteria700)
        ]
