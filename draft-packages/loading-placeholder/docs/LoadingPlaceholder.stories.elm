module Main exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import KaizenDraft.LoadingPlaceholder.LoadingPlaceholder as LoadingPlaceholder
import Paragraph.Paragraph as Paragraph


storyContainer : List (Html msg) -> Html msg
storyContainer children =
    div [ class .storyContainer ] children


paragraph : Html msg
paragraph =
    let
        paragraphText =
            "Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of"
                ++ " Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk,"
                ++ " she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to"
                ++ " say that after 12 years of research, she has actually determined that vulnerability is “our most"
                ++ " accurate measurement of courage.”"
    in
    Paragraph.view Paragraph.p [ text paragraphText ]


defaultPlaceholder : Html msg
defaultPlaceholder =
    LoadingPlaceholder.view LoadingPlaceholder.default


inlinePlaceholder : Int -> Html msg
inlinePlaceholder value =
    LoadingPlaceholder.view
        (LoadingPlaceholder.default
            |> LoadingPlaceholder.inline
            |> LoadingPlaceholder.width value
        )


tallPlaceholder : Html msg
tallPlaceholder =
    LoadingPlaceholder.view
        (LoadingPlaceholder.default
            |> LoadingPlaceholder.size LoadingPlaceholder.Tall
        )


variableWidthPlaceholder : Int -> Html msg
variableWidthPlaceholder value =
    LoadingPlaceholder.view
        (LoadingPlaceholder.default
            |> LoadingPlaceholder.width value
        )


reversedDefaultPlaceholder : Html msg
reversedDefaultPlaceholder =
    LoadingPlaceholder.view
        (LoadingPlaceholder.default
            |> LoadingPlaceholder.colorVariant LoadingPlaceholder.Reversed
        )


reversedOceanPlaceholder : Html msg
reversedOceanPlaceholder =
    LoadingPlaceholder.view
        (LoadingPlaceholder.default
            |> LoadingPlaceholder.colorVariant LoadingPlaceholder.ReversedOcean
        )


main =
    storybook
        [ statelessStoryOf "Default, Multiple" <|
            storyContainer
                ([ paragraph ]
                    ++ List.repeat 5
                        defaultPlaceholder
                )
        , statelessStoryOf "Default, Multiple, Inline" <|
            storyContainer
                [ paragraph
                , div []
                    [ div [] (List.repeat 3 (inlinePlaceholder 30))
                    , div [] (List.repeat 3 (inlinePlaceholder 30))
                    , div [] (List.repeat 3 (inlinePlaceholder 30))
                    , div [] (List.repeat 3 (inlinePlaceholder 30))
                    , div [] (List.repeat 3 (inlinePlaceholder 30))
                    ]
                ]
        , statelessStoryOf "Default, Multiple, Variable width" <|
            storyContainer
                [ paragraph
                , variableWidthPlaceholder 90
                , defaultPlaceholder
                , variableWidthPlaceholder 95
                , variableWidthPlaceholder 85
                , variableWidthPlaceholder 80
                ]
        , statelessStoryOf "Default, Multiple, Variable width, Centered" <|
            storyContainer
                [ div [ style "text-align" "center" ] [ paragraph ]
                , LoadingPlaceholder.view
                    (LoadingPlaceholder.default
                        |> LoadingPlaceholder.centered
                        |> LoadingPlaceholder.width 90
                    )
                , LoadingPlaceholder.view
                    (LoadingPlaceholder.default
                        |> LoadingPlaceholder.centered
                    )
                , LoadingPlaceholder.view
                    (LoadingPlaceholder.default
                        |> LoadingPlaceholder.centered
                        |> LoadingPlaceholder.width 95
                    )
                , LoadingPlaceholder.view
                    (LoadingPlaceholder.default
                        |> LoadingPlaceholder.centered
                        |> LoadingPlaceholder.width 85
                    )
                , LoadingPlaceholder.view
                    (LoadingPlaceholder.default
                        |> LoadingPlaceholder.centered
                        |> LoadingPlaceholder.width 60
                    )
                ]
        , statelessStoryOf "Default, Multiple, Combined block and inline" <|
            storyContainer
                [ paragraph
                , div []
                    [ div []
                        [ defaultPlaceholder
                        , variableWidthPlaceholder 90
                        , variableWidthPlaceholder 60
                        ]
                    ]
                , div [] (List.repeat 3 (inlinePlaceholder 30))
                , div [] (List.repeat 3 (inlinePlaceholder 30))
                , div [] (List.repeat 3 (inlinePlaceholder 30))
                ]
        , statelessStoryOf "Default, Without bottom margin" <|
            storyContainer
                [ LoadingPlaceholder.view
                    (LoadingPlaceholder.default
                        |> LoadingPlaceholder.noBottomMargin
                    )
                , Paragraph.view Paragraph.p [ text "These loading placeholders have no bottom margin." ]
                , LoadingPlaceholder.view
                    (LoadingPlaceholder.default
                        |> LoadingPlaceholder.noBottomMargin
                    )
                ]
        , statelessStoryOf "Default, Inherit baseline" <|
            storyContainer
                [ div [ class .flexbox ]
                    [ Paragraph.view Paragraph.h2 [ text "Inheriting baseline" ]
                    , LoadingPlaceholder.view
                        (LoadingPlaceholder.default
                            |> LoadingPlaceholder.inheritBaseline
                        )
                    ]
                ]
        , statelessStoryOf "Heading" <|
            storyContainer
                ([ paragraph ]
                    ++ List.repeat 5 tallPlaceholder
                )
        , statelessStoryOf "Reversed, Default" <|
            storyContainer
                [ div
                    [ class .reversedDefault ]
                    ([ paragraph ]
                        ++ List.repeat 5 reversedDefaultPlaceholder
                    )
                ]
        , statelessStoryOf "In the wild" <|
            storyContainer
                [ div []
                    [ Paragraph.view Paragraph.h1 [ text "In the wild" ]
                    , Paragraph.view Paragraph.p
                        [ text
                            ("This is an example of how you could use LoadingPlaceholder to "
                                ++ "construct a loading state for a fictional tooltip component."
                            )
                        ]
                    , Paragraph.view Paragraph.h2 [ text "Tooltip component in a loaded state:" ]
                    , div [ class .tooltip ]
                        [ div [ class .tooltipHeader ]
                            [ Paragraph.view
                                (Paragraph.div
                                    |> Paragraph.variant Paragraph.IntroLede
                                )
                                [ text "Hooli's Engagement Survey" ]
                            , Paragraph.view
                                Paragraph.div
                                [ text "2019" ]
                            ]
                        , div [ class .tooltipBody ]
                            [ div [ class .tooltipRow ]
                                [ Paragraph.view Paragraph.div [ text "Favorable" ]
                                , Paragraph.view Paragraph.div [ text "76%" ]
                                ]
                            , div [ class .tooltipRow ]
                                [ Paragraph.view Paragraph.div [ text "Neutral" ]
                                , Paragraph.view Paragraph.div [ text "21%" ]
                                ]
                            , div [ class .tooltipRow ]
                                [ Paragraph.view Paragraph.div [ text "Unfavorable" ]
                                , Paragraph.view Paragraph.div [ text "3%" ]
                                ]
                            ]
                        ]
                    , Paragraph.view Paragraph.h2 [ text "Tooltip component in a loading state:" ]
                    , div [ class .tooltip ]
                        [ div [ class .tooltipHeader ]
                            [ LoadingPlaceholder.view
                                (LoadingPlaceholder.default
                                    |> LoadingPlaceholder.inline
                                    |> LoadingPlaceholder.colorVariant LoadingPlaceholder.ReversedOcean
                                    |> LoadingPlaceholder.width 80
                                )
                            , LoadingPlaceholder.view
                                (LoadingPlaceholder.default
                                    |> LoadingPlaceholder.inline
                                    |> LoadingPlaceholder.colorVariant LoadingPlaceholder.ReversedOcean
                                    |> LoadingPlaceholder.width 10
                                )
                            ]
                        , div [ class .tooltipBody ]
                            [ div [ class .tooltipRow ]
                                [ inlinePlaceholder 10
                                , inlinePlaceholder 60
                                , inlinePlaceholder 10
                                ]
                            , div [ class .tooltipRow ]
                                [ inlinePlaceholder 10
                                , inlinePlaceholder 60
                                , inlinePlaceholder 10
                                ]
                            , div [ class .tooltipRow ]
                                [ inlinePlaceholder 10
                                , inlinePlaceholder 60
                                , inlinePlaceholder 10
                                ]
                            ]
                        ]
                    ]
                ]
        ]


class =
    styles.class


styles =
    css "./LoadingPlaceholder.stories.scss"
        { storyContainer = "storyContainer"
        , reversedDefault = "reversedDefault"
        , reversedOcean = "reversedOcean"
        , tooltip = "tooltip"
        , tooltipBody = "tooltipBody"
        , tooltipHeader = "tooltipHeader"
        , tooltipRow = "tooltipRow"
        , flexbox = "flexbox"
        }
