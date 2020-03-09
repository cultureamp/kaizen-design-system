module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Heading.Heading as Heading exposing (TypeVariant(..), view)
import Html exposing (text)


main =
    storybook
        [ statelessStoryOf "Display0" <|
            Heading.view
                (Heading.h1 |> Heading.variant Display0)
                [ Html.text "Display0" ]
        , statelessStoryOf "Heading1" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading1)
                [ Html.text "Heading1" ]
        , statelessStoryOf "Heading2" <|
            Heading.view
                (Heading.h2 |> Heading.variant Heading2)
                [ Html.text "Heading2" ]
        , statelessStoryOf "Heading3" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading3)
                [ Html.text "Heading3" ]
        , statelessStoryOf "Heading4" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading4)
                [ Html.text "Heading4" ]
        , statelessStoryOf "Heading5" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading5)
                [ Html.text "Heading5" ]
        , statelessStoryOf "Heading6" <|
            Heading.view
                (Heading.h1 |> Heading.variant Heading6)
                [ Html.text "Heading 6" ]
        , statelessStoryOf "HeadingWithDataAttr" <|
            Heading.view
                (Heading.h1
                    |> Heading.variant Heading6
                    |> Heading.addAttribute { name = "automation-id", value = "inbox-heading" }
                )
                [ Html.text "Heading with data attribute" ]
        , statelessStoryOf "HeadingWithCustomClass" <|
            Heading.view
                (Heading.h1
                    |> Heading.variant Heading6
                    |> Heading.classNameAndIHaveSpokenToDST "test"
                )
                [ Html.text "Heading with custom class" ]
        ]
