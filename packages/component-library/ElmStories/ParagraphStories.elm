module ElmStories.ParagraphStories exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (text)
import Paragraph.Paragraph as Paragraph exposing (AllowedColor(..), TypeVariant(..), view)


main =
    storybook
        [ statelessStoryOf "IntroLede" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant IntroLede)
                [ Html.text "Paragraph Intro Lede" ]
        , statelessStoryOf "Body" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant Body)
                [ Html.text "Paragraph Body" ]
        , statelessStoryOf "Body Dark Reduced Opacity" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant Body |> Paragraph.color DarkReducedOpacity)
                [ Html.text "Paragraph Body" ]
        , statelessStoryOf "Body Positive" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant Body |> Paragraph.color Positive)
                [ Html.text "Paragraph Body" ]
        , statelessStoryOf "Body Negative" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant Body |> Paragraph.color Negative)
                [ Html.text "Paragraph Body" ]
        , statelessStoryOf "Small" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant Small)
                [ Html.text "Paragraph Small" ]
        , statelessStoryOf "ExtraSmall" <|
            Paragraph.view
                (Paragraph.p |> Paragraph.variant ExtraSmall)
                [ Html.text "Paragraph Extra Small" ]
        ]
