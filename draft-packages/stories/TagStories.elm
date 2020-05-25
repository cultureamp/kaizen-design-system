module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import KaizenDraft.Tag.Tag as Tag


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
                [ Tag.view (Tag.sentiment Tag.SentimentPositive) "Sentiment"
                , Tag.view (Tag.sentiment Tag.SentimentPositive |> Tag.dismissible True) "Sentiment"
                ]
        , statelessStoryOf "Sentiment - Neutral" <|
            storyContainer
                [ Tag.view (Tag.sentiment Tag.SentimentNeutral) "Sentiment"
                , Tag.view (Tag.sentiment Tag.SentimentNeutral |> Tag.dismissible True) "Sentiment"
                ]
        , statelessStoryOf "Sentiment - Negative" <|
            storyContainer
                [ Tag.view (Tag.sentiment Tag.SentimentNegative) "Sentiment"
                , Tag.view (Tag.sentiment Tag.SentimentNegative |> Tag.dismissible True) "Sentiment"
                ]
        , statelessStoryOf "Sentiment - None" <|
            storyContainer
                [ Tag.view (Tag.sentiment Tag.SentimentNone) "Sentiment"
                , Tag.view (Tag.sentiment Tag.SentimentNone |> Tag.dismissible True) "Sentiment"
                ]
        , statelessStoryOf "Validation - Positive" <|
            storyContainer
                [ Tag.view (Tag.validation Tag.ValidationPositive) "Validation"
                , Tag.view (Tag.validation Tag.ValidationPositive |> Tag.dismissible True) "Validation"
                ]
        , statelessStoryOf "Validation - Informative" <|
            storyContainer
                [ Tag.view (Tag.validation Tag.ValidationInformative) "Validation"
                , Tag.view (Tag.validation Tag.ValidationInformative |> Tag.dismissible True) "Validation"
                ]
        , statelessStoryOf "Validation - Negative" <|
            storyContainer
                [ Tag.view (Tag.validation Tag.ValidationNegative) "Validation"
                , Tag.view (Tag.validation Tag.ValidationNegative |> Tag.dismissible True) "Validation"
                ]
        , statelessStoryOf "Validation - Cautionary" <|
            storyContainer
                [ Tag.view (Tag.validation Tag.ValidationCautionary) "Validation"
                , Tag.view (Tag.validation Tag.ValidationCautionary |> Tag.dismissible True) "Validation"
                ]
        , statelessStoryOf "Status - Live" <|
            storyContainer
                [ Tag.view (Tag.status Tag.StatusLive) "Live"
                ]
        , statelessStoryOf "Status - Draft" <|
            storyContainer
                [ Tag.view (Tag.status Tag.StatusDraft) "Draft"
                ]
        , statelessStoryOf "Status - Closed" <|
            storyContainer
                [ Tag.view (Tag.status Tag.StatusClosed) "Closed"
                ]
        , statelessStoryOf "Status - Action" <|
            storyContainer
                [ Tag.view (Tag.status Tag.StatusAction) "Action"
                ]
        , statelessStoryOf "Truncated" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.truncateWidth 50) "Truncated"
                , Tag.view (Tag.sentiment Tag.SentimentPositive |> Tag.truncateWidth 50) "Truncated"
                , Tag.view (Tag.validation Tag.ValidationPositive |> Tag.truncateWidth 50) "Truncated"
                ]
        , statelessStoryOf "Truncated - Dismissible" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.truncateWidth 50) "Truncated"
                , Tag.view (Tag.sentiment Tag.SentimentPositive |> Tag.truncateWidth 50 |> Tag.dismissible True) "Truncated"
                , Tag.view (Tag.validation Tag.ValidationPositive |> Tag.truncateWidth 50 |> Tag.dismissible True) "Truncated"
                ]
        , statelessStoryOf "Inline" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.inline True) "Inline"
                , Tag.view (Tag.sentiment Tag.SentimentPositive |> Tag.inline True) "Inline"
                , Tag.view (Tag.validation Tag.ValidationPositive |> Tag.inline True) "Inline"
                ]
        , statelessStoryOf "Inline - Dismissible" <|
            storyContainer
                [ Tag.view (Tag.default |> Tag.inline True |> Tag.dismissible True) "Inline"
                , Tag.view (Tag.sentiment Tag.SentimentPositive |> Tag.inline True |> Tag.dismissible True) "Inline"
                , Tag.view (Tag.validation Tag.ValidationPositive |> Tag.inline True |> Tag.dismissible True) "Inline"
                ]
        ]
