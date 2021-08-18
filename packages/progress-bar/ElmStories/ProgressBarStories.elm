module ElmStories.ProgressBarStories exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import Kaizen.ProgressBar as ProgressBar exposing (Mood(..))


container content =
    div [ style "width" "30rem" ] [ content ]


main =
    storybook
        [ statelessStoryOf "Positive" <|
            container <|
                ProgressBar.view { progressPercentage = 30, mood = Positive }
        , statelessStoryOf "Informative" <|
            container <|
                ProgressBar.view { progressPercentage = 30, mood = Informative }
        , statelessStoryOf "Cautionary" <|
            container <|
                ProgressBar.view { progressPercentage = 30, mood = Cautionary }
        , statelessStoryOf "Negative" <|
            container <|
                ProgressBar.view { progressPercentage = 30, mood = Negative }
        ]
