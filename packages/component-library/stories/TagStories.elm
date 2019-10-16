module Main exposing (main)

import ElmStorybook exposing (storybook, statelessStoryOf)
import Kaizen.Tag.Tag as Tag


main =
    storybook
        [ statelessStoryOf "Default - Medium" (Tag.view (Tag.default |> Tag.size Tag.Medium |> Tag.inline True) "Default" )
         ,statelessStoryOf "Default - Small" (Tag.view (Tag.default |> Tag.size Tag.Small |> Tag.inline True) "Default" )
         ,statelessStoryOf "Default - Dismissible" (Tag.view (Tag.default |> Tag.size Tag.Small |> Tag.inline True |> Tag.dismissible True) "Default" )
         ,statelessStoryOf "Validation - Medium, Cautionary, Dismissible" <|
           Tag.view
                (Tag.validation Tag.Cautionary
                    |> Tag.inline True
                    |> Tag.dismissible True
                )
                "Validation"
        , statelessStoryOf "Validation - Small, Cautionary, Dismissible" <|
           Tag.view
                (Tag.validation Tag.Cautionary
                    |> Tag.inline True
                    |> Tag.size Tag.Small
                    |> Tag.dismissible True
                )
                "Validation"
        , statelessStoryOf "Validation - Medium, Cautionary, Dismissible, Truncated" <|
           Tag.view
                (Tag.validation Tag.Cautionary
                    |> Tag.inline True
                    |> Tag.dismissible True
                    |> Tag.truncateWidth 50
                )
                "Truncated"
        , statelessStoryOf "Validation - Small, Cautionary, Dismissible, Truncated" <|
           Tag.view
                (Tag.validation Tag.Cautionary
                    |> Tag.inline True
                    |> Tag.size Tag.Small
                    |> Tag.dismissible True
                    |> Tag.truncateWidth 50
                )
                "Truncated"
        , statelessStoryOf "Validation - Medium, Negative, Dismissible, Truncated" <|
           Tag.view
                (Tag.validation Tag.Negative
                    |> Tag.inline True
                    |> Tag.dismissible True
                    |> Tag.truncateWidth 50
                )
                "Truncated"
        ]
