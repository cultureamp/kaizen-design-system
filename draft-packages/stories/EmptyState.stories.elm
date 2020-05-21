module Main exposing (main)

import Button.Button as Button
import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, div, text)
import Html.Attributes exposing (dir)
import Icon.SvgAsset exposing (svgAsset)
import KaizenDraft.EmptyState.EmptyState as EmptyState


sidebarAndContentLayout : List (Html msg) -> Html msg
sidebarAndContentLayout children =
    div [ styles.class .container ]
        [ div [ styles.class .sidebar ] []
        , div [ styles.class .content ]
            children
        ]


sidebarAndContentLayoutRTL : List (Html msg) -> Html msg
sidebarAndContentLayoutRTL children =
    div [ styles.class .container, dir "rtl" ]
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
        , statelessStoryOf "Action, button" <|
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
                                        |> Button.icon (svgAsset "@kaizen/component-library/icons/chevron-right.icon.svg")
                                        |> Button.iconPosition Button.End
                                    )
                                    "Label"
                                ]
                            ]
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
        , statelessStoryOf "Layout, Content-only" <|
            contentOnlyLayout
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This is an example of the content-only layout (no sidebar).")
                        |> EmptyState.layoutContext EmptyState.ContentOnly
                    )
                ]
        , statelessStoryOf "RTL, Action" <|
            sidebarAndContentLayoutRTL
                [ EmptyState.view
                    (EmptyState.default
                        |> EmptyState.headingText "Empty state title"
                        |> EmptyState.bodyText (EmptyState.BodyText "This preset only passes in the headingText and bodyText props, and leaves the rest to fallbacks.")
                        |> EmptyState.illustrationType EmptyState.Action
                    )
                ]
        ]


styles =
    css "./EmptyState.stories.scss"
        { container = "container"
        , sidebar = "sidebar"
        , content = "content"
        , buttonContainer = "buttonContainer"
        }
