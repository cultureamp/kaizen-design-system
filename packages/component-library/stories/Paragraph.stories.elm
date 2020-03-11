module Main exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (text)
import Paragraph.Paragraph as Paragraph exposing (TypeVariant(..), view)


main =
    storybook
        [ statelessStoryOf "IntroLede" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant IntroLede)
                [ Html.text "IntroLede Paragraph" ]
        , statelessStoryOf "Body" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant Body)
                [ Html.text "Body Paragraph" ]
        , statelessStoryOf "Small" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant Small)
                [ Html.text "Small Paragraph" ]
        , statelessStoryOf "ExtraSmall" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant ExtraSmall)
                [ Html.text "ExtraSmall Paragraph" ]
        ]
