module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import Kaizen.Tag.Tag as Tag


storyContainer : List (Html msg) -> Html msg
storyContainer children =
    div
        [ style "width" "100%"
        , style "display" "flex"
        , style "justify-content" "center"
        ]
        children


main =
    storybook
        [ statelessStoryOf "Default - Medium" <|
            storyContainer
                [ Tag.view Tag.default "Default"
                , Tag.view (Tag.default |> Tag.dismissible True) "Default"
                ]
        , statelessStoryOf "Default - Small" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.size Tag.Small) "Default"
                , Tag.view (Tag.default |> Tag.size Tag.Small |> Tag.dismissible True) "Default"
                ]
        , statelessStoryOf "Sentiment - Positive" <|
            storyContainer
                [ Tag.view Tag.sentimentPositive "Sentiment"
                , Tag.view (Tag.sentimentPositive |> Tag.dismissible True) "Sentiment"
                ]
        , statelessStoryOf "Sentiment - Neutral" <|
            storyContainer
                [ Tag.view Tag.sentimentNeutral "Sentiment"
                , Tag.view (Tag.sentimentNeutral |> Tag.dismissible True) "Sentiment"
                ]
        , statelessStoryOf "Sentiment - Negative" <|
            storyContainer
                [ Tag.view Tag.sentimentNegative "Sentiment"
                , Tag.view (Tag.sentimentNegative |> Tag.dismissible True) "Sentiment"
                ]
        , statelessStoryOf "Sentiment - None" <|
            storyContainer
                [ Tag.view Tag.sentimentNone "Sentiment"
                , Tag.view (Tag.sentimentNone |> Tag.dismissible True) "Sentiment"
                ]
        , statelessStoryOf "Validation - Positive" <|
            storyContainer
                [ Tag.view Tag.validationPositive "Validation"
                , Tag.view (Tag.validationPositive |> Tag.dismissible True) "Validation"
                ]
        , statelessStoryOf "Validation - Informative" <|
            storyContainer
                [ Tag.view Tag.validationInformative "Validation"
                , Tag.view (Tag.validationInformative |> Tag.dismissible True) "Validation"
                ]
        , statelessStoryOf "Validation - Negative" <|
            storyContainer
                [ Tag.view Tag.validationNegative "Validation"
                , Tag.view (Tag.validationNegative |> Tag.dismissible True) "Validation"
                ]
        , statelessStoryOf "Validation - Cautionary" <|
            storyContainer
                [ Tag.view Tag.validationCautionary "Validation"
                , Tag.view (Tag.validationCautionary |> Tag.dismissible True) "Validation"
                ]
        , statelessStoryOf "Truncated" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.truncateWidth 50) "Truncated"
                , Tag.view (Tag.sentimentPositive |> Tag.truncateWidth 50) "Truncated"
                , Tag.view (Tag.validationPositive |> Tag.truncateWidth 50) "Truncated"
                ]
        , statelessStoryOf "Truncated - Dismissible" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.truncateWidth 50) "Truncated"
                , Tag.view (Tag.sentimentPositive |> Tag.truncateWidth 50 |> Tag.dismissible True) "Truncated"
                , Tag.view (Tag.validationPositive |> Tag.truncateWidth 50 |> Tag.dismissible True) "Truncated"
                ]
        , statelessStoryOf "Inline" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.inline True) "Inline"
                , Tag.view (Tag.sentimentPositive |> Tag.inline True) "Inline"
                , Tag.view (Tag.validationPositive |> Tag.inline True) "Inline"
                ]
        , statelessStoryOf "Inline - Dismissible" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.inline True |> Tag.dismissible True) "Inline"
                , Tag.view (Tag.sentimentPositive |> Tag.inline True |> Tag.dismissible True) "Inline"
                , Tag.view (Tag.validationPositive |> Tag.inline True |> Tag.dismissible True) "Inline"
                ]
        ]
