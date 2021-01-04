module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Heading.Heading as Heading exposing (AllowedColor(..), TypeVariant(..), view)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import KaizenDraft.Form.TextField.TextField as TextField
import KaizenDraft.Well.Well as Well exposing (..)
import Paragraph.Paragraph as Paragraph


placeholderContent : Html msg
placeholderContent =
    let
        blurb =
            "This is just a sentence to fill the content area so that you have something to look at."
    in
    Paragraph.view Paragraph.p [ text blurb ]


heading : Html msg
heading =
    let
        headingText =
            "Heading"
    in
    Heading.view
        (Heading.h1 |> Heading.variant Heading3)
        [ text headingText ]


inputField : Html msg
inputField =
    TextField.view (TextField.default |> TextField.labelText "example text field")


main =
    storybook
        [ statelessStoryOf "Default with solid border" <|
            Well.view
                Well.default
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        , statelessStoryOf "Default with dashed border" <|
            Well.view
                (Well.default
                    |> Well.borderStyle Well.Dashed
                )
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        , statelessStoryOf "Default without border" <|
            Well.view
                (Well.default
                    |> Well.borderStyle Well.None
                )
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        , statelessStoryOf "Default with no margin" <|
            Well.view
                (Well.default
                    |> Well.borderStyle Well.Solid
                    |> Well.noMargin True
                )
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        , statelessStoryOf "Positive" <|
            Well.view
                (Well.default
                    |> Well.variant Well.Positive
                )
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        , statelessStoryOf "Negative" <|
            Well.view
                (Well.default
                    |> Well.variant Well.Negative
                )
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        , statelessStoryOf "Informative" <|
            Well.view
                (Well.default
                    |> Well.variant Well.Informative
                )
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        , statelessStoryOf "Cautionary" <|
            Well.view
                (Well.default
                    |> Well.variant Well.Cautionary
                )
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        , statelessStoryOf "Informative with dashed border" <|
            Well.view
                (Well.default
                    |> Well.variant Well.Informative
                    |> Well.borderStyle Well.Dashed
                )
                [ div [ style "max-width" "400px", style "padding" "1em 2em" ]
                    [ div [] [ heading ]
                    , div [] [ placeholderContent ]
                    , div [] [ inputField ]
                    ]
                ]
        ]
