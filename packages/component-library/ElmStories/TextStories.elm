module ElmStories.TextStories exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (text)
import Text.Text as Text exposing (TypeStyle(..), h1, view)


main =
    storybook
        [ statelessStoryOf "h1" <|
            Text.view
                Text.h1
                [ Html.text "This is a h1" ]
        , statelessStoryOf "h2" <|
            Text.view
                Text.h2
                [ Html.text "This is a h2" ]
        , statelessStoryOf "h3" <|
            Text.view
                Text.h3
                [ Html.text "This is a h3" ]
        , statelessStoryOf "zen-display-0" <|
            Text.view
                (Text.p |> Text.style ZenDisplay0)
                [ Html.text "This is a Zen Display 0" ]
        , statelessStoryOf "zen-heading-1" <|
            Text.view
                (Text.h1 |> Text.style ZenHeading1)
                [ Html.text "This is a Zen Heading 1" ]
        , statelessStoryOf "zen-heading-2" <|
            Text.view
                (Text.h2 |> Text.style ZenHeading2)
                [ Html.text "This is a Zen Heading 2" ]
        , statelessStoryOf "zen-heading-3" <|
            Text.view
                (Text.h3 |> Text.style ZenHeading3)
                [ Html.text "This is a Zen Heading 3" ]
        , statelessStoryOf "zen-data-large" <|
            Text.view
                (Text.span |> Text.style ZenDataLarge)
                [ Html.text "This is a Zen Data Large" ]
        , statelessStoryOf "zen-data-large-units" <|
            Text.view
                (Text.span |> Text.style ZenDataLargeUnits)
                [ Html.text "This is a Zen Data Large Units" ]
        , statelessStoryOf "zen-data-medium" <|
            Text.view
                (Text.span |> Text.style ZenDataMedium)
                [ Html.text "This is a Zen Data Medium" ]
        , statelessStoryOf "zen-data-medium-units" <|
            Text.view
                (Text.span |> Text.style ZenDataMediumUnits)
                [ Html.text "This is a Zen Data Medium Units" ]
        , statelessStoryOf "zen-data-small" <|
            Text.view
                (Text.span |> Text.style ZenDataSmall)
                [ Html.text "This is a Zen Data Small" ]
        , statelessStoryOf "zen-data-small-units" <|
            Text.view
                (Text.span |> Text.style ZenDataSmallUnits)
                [ Html.text "This is a Zen Data Small Units" ]
        ]
