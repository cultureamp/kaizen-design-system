module Main exposing (main)

import ElmStorybook exposing (StatelessMsg(..), statelessStoryOf, storybook)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import KaizenDraft.Popover.Popover as Popover exposing (view)


type Msg
    = FakeMsg
    | DoNothing


placeholderContent : Html msg
placeholderContent =
    text "Popover body that explains something useful, is optional, and not critical to completing a task."


main =
    storybook
        [ statelessStoryOf "Default" <|
            Popover.view
                (Popover.default
                    |> Popover.withHeading "Default"
                    |> Popover.withContent placeholderContent
                )
        , statelessStoryOf "Informative" <|
            Popover.view
                (Popover.informative
                    |> Popover.withHeading "Informative"
                    |> Popover.withContent placeholderContent
                )
        , statelessStoryOf "Positive" <|
            Popover.view
                (Popover.positive
                    |> Popover.withHeading "Positive"
                    |> Popover.withContent placeholderContent
                )
        , statelessStoryOf "Negative" <|
            Popover.view
                (Popover.negative
                    |> Popover.withHeading "Negative"
                    |> Popover.withContent placeholderContent
                )
        , statelessStoryOf "Cautionary" <|
            Popover.view
                (Popover.cautionary
                    |> Popover.withHeading "Cautionary"
                    |> Popover.withContent placeholderContent
                )
        , statelessStoryOf "Dismissible" <|
            Popover.view
                (Popover.default
                    |> Popover.withHeading "Dismissible"
                    |> Popover.withContent placeholderContent
                    |> Popover.isDismissible Nothing
                )
        , statelessStoryOf "Arrow above" <|
            div [ style "margin-top" "1.5rem" ]
                [ Popover.view
                    (Popover.default
                        |> Popover.withHeading "Arrow above"
                        |> Popover.withContent placeholderContent
                        |> Popover.withTipPosition ( Popover.Top, Popover.Center )
                    )
                ]
        , statelessStoryOf "Arrow start" <|
            div [ style "margin-top" "1.5rem" ]
                [ Popover.view
                    (Popover.default
                        |> Popover.withHeading "Arrow start"
                        |> Popover.withContent placeholderContent
                        |> Popover.withTipPosition ( Popover.Bottom, Popover.Start )
                    )
                ]
        , statelessStoryOf "Arrow end" <|
            div [ style "margin-top" "1.5rem" ]
                [ Popover.view
                    (Popover.default
                        |> Popover.withHeading "Arrow end"
                        |> Popover.withContent placeholderContent
                        |> Popover.withTipPosition ( Popover.Top, Popover.End )
                    )
                ]
        ]
