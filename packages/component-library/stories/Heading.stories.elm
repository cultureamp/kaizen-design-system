module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Heading.Heading as Heading exposing (TypeVariant(..), view)
import Html exposing (text)


main =
    storybook
        [ statelessStoryOf "Display0" <|
            Heading.view
                (Heading.h1 |> Heading.variant Display0)
                [ Html.text "This the Display0 variant" ]
        , statelessStoryOf "Heading1" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading1)
                [ Html.text "This the Heading1 variant" ]
        , statelessStoryOf "Heading2" <|
            Heading.view
                (Heading.h2 |> Heading.variant Heading2)
                [ Html.text "This the Heading2 variant" ]
        , statelessStoryOf "Heading3" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading3)
                [ Html.text "This the Heading3 variant" ]
        , statelessStoryOf "Heading4" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading4)
                [ Html.text "This the Heading4 variant" ]
        , statelessStoryOf "Heading5" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading5)
                [ Html.text "This the Heading5 variant" ]
        , statelessStoryOf "Heading6" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading6)
                [ Html.text "This the Heading6 variant" ]
        , statelessStoryOf "HeadingWithDataAttr" <|
            Heading.view
                (Heading.h1
                    |> Heading.variant Heading6
                    |> Heading.addAttribute { name = "automation-id", value = "inbox-heading" }
                )
                [ Html.text "This the Heading6 variant" ]
        ]
