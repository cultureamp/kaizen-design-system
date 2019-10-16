module Main exposing (main)

import Button.Button as Button
import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div, text)
import Icon.SvgAsset exposing (svgAsset)
import Kaizen.EmptyState.EmptyState as EmptyState


sidebarAndContentLayout : List (Html msg) -> Html msg
sidebarAndContentLayout children =
    div [ styles.class .container ]
        [ div [ styles.class .sidebar ] []
        , div [ styles.class .content ]
            children
        ]


contentOnlyLayout : List (Html msg) -> Html msg
contentOnlyLayout children =
    div [ styles.class .container ]
        [ div [ styles.class .content ]
            children
        ]


main =
    storybook
        [ statelessStoryOf "Default" <|
            sidebarAndContentLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.id "example-empty-state-id"
                        |> EmptyState.automationId "example-empty-state-automation-id"
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "If providing further actions, include a link to an action or use a Default or Primary action.")
                        |> EmptyState.illustrationType EmptyState.Informative
                        |> EmptyState.layoutContext EmptyState.SidebarAndContent
                        |> EmptyState.children []
                    )
                ]

        , statelessStoryOf "Default (minimal props)" <|
           sidebarAndContentLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This preset only passes in the headingText and bodyText props, and leaves the rest to fallbacks.")
                    )
                ]
        , statelessStoryOf "Positive" <|
           sidebarAndContentLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This preset only passes in the headingText and bodyText props, and leaves the rest to fallbacks.")
                        |> EmptyState.illustrationType EmptyState.Positive
                    )
                ]
        , statelessStoryOf "Neutral" <|
           sidebarAndContentLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This preset only passes in the headingText and bodyText props, and leaves the rest to fallbacks.")
                        |> EmptyState.illustrationType EmptyState.Neutral
                    )
                ]
        , statelessStoryOf "Negative" <|
           sidebarAndContentLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This preset only passes in the headingText and bodyText props, and leaves the rest to fallbacks.")
                        |> EmptyState.illustrationType EmptyState.Negative
                    )
                ]
        , statelessStoryOf "Informative" <|
           sidebarAndContentLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This preset only passes in the headingText and bodyText props, and leaves the rest to fallbacks.")
                        |> EmptyState.illustrationType EmptyState.Informative
                    )
                ]
        , statelessStoryOf "Action" <|
           sidebarAndContentLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This preset only passes in the headingText and bodyText props, and leaves the rest to fallbacks.")
                        |> EmptyState.illustrationType EmptyState.Action
                    )
                ]
        , statelessStoryOf "Action with button" <|
           sidebarAndContentLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This preset only passes in the headingText and bodyText props, and leaves the rest to fallbacks.")
                        |> EmptyState.illustrationType EmptyState.Action
                        |> EmptyState.children
                            [ div [ styles.class .buttonContainer ]
                                [ Button.view
                                    (Button.primary
                                        |> Button.icon (svgAsset "@cultureamp/kaizen-component-library/icons/chevron-right.icon.svg")
                                        |> Button.iconPosition Button.End
                                    )
                                    "Label"
                                ]
                            ]
                    )
                ]
        , statelessStoryOf "Content-only layout" <|
           contentOnlyLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This is an example of the content-only layout (no sidebar).")
                        |> EmptyState.layoutContext EmptyState.ContentOnly
                    )
                ]
        ]


styles =
    css "@cultureamp/kaizen-component-library/stories/EmptyState.stories.scss"
        { container = "container"
        , sidebar = "sidebar"
        , content = "content"
        , buttonContainer = "buttonContainer"
        }
