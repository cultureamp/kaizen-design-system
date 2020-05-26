module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, a, div, text)
import Html.Attributes exposing (href, style)
import KaizenDraft.Form.TextField.TextField as TextField
import Notification.Notification as Notification
import Text.Text as Text


multiline : List (Html msg)
multiline =
    [ text "There’s a problem connecting to your HRIS. Check your HRIS is working and check your "
    , a [ href "/" ] [ text "integration settings" ]
    , text ", or if you require more assistance please "
    , a [ href "/" ] [ text "contact support" ]
    ]


main =
    storybook
        [ statelessStoryOf "Dismissible, Positive" <|
            Notification.view
                (Notification.inline "Success!" [ text "New user data, imported by mackenzie@hooli.com has successfully uploaded. ", a [ href "/" ] [ text "Manage users is now available" ] ] False
                    |> Notification.notificationType Notification.Affirmative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Dismissible, Informative" <|
            Notification.view
                (Notification.inline "Informative" [ text "New user data is currently being processed. We'll let you know when the process is completed. ", a [ href "/" ] [ text "Manage users" ] ] False
                    |> Notification.notificationType Notification.Informative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Dismissible, Cautionary" <|
            Notification.view
                (Notification.inline "Cautionary" [ text "New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ", a [ href "/" ] [ text "View issues" ] ] False
                    |> Notification.notificationType Notification.Cautionary
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Dismissible, Negative" <|
            Notification.view
                (Notification.inline "Negative" [ text "Check your connection and try again. ", a [ href "/" ] [ text "Refresh" ] ] False
                    |> Notification.notificationType Notification.Negative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Dismissible, Multiline" <|
            Notification.view
                (Notification.inline "Negative" multiline False
                    |> Notification.notificationType Notification.Negative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Dismissible, Slim" <|
            Notification.view
                (Notification.inline "Success!" [ a [ href "/" ] [ text "Manage users is now available" ] ] False
                    |> Notification.notificationType Notification.Affirmative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Persistent, Positive" <|
            Notification.view
                (Notification.inline "Success!" [ text "New user data, imported by mackenzie@hooli.com has successfully uploaded. ", a [ href "/" ] [ text "Manage users is now available" ] ] True
                    |> Notification.notificationType Notification.Affirmative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Persistent, Informative" <|
            Notification.view
                (Notification.inline "Informative" [ text "New user data is currently being processed. We'll let you know when the process is completed. ", a [ href "/" ] [ text "Manage users" ] ] True
                    |> Notification.notificationType Notification.Informative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Persistent, Cautionary" <|
            Notification.view
                (Notification.inline "Persistent, Cautionary" [ text "New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ", a [ href "/" ] [ text "View issues" ] ] True
                    |> Notification.notificationType Notification.Cautionary
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Persistent, Negative" <|
            Notification.view
                (Notification.inline "Negative" [ text "Check your connection and try again. ", a [ href "/" ] [ text "Refresh" ] ] True
                    |> Notification.notificationType Notification.Negative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Persistent, Multiline" <|
            Notification.view
                (Notification.inline "Negative" multiline True
                    |> Notification.notificationType Notification.Negative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Persistent, Slim" <|
            Notification.view
                (Notification.inline "Success!" [ a [ href "/" ] [ text "Manage users is now available" ] ] True
                    |> Notification.notificationType Notification.Affirmative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Multiple Notification" <|
            div [ style "width" "inherit" ]
                [ Notification.view
                    (Notification.inline "Success!" [ text "New user data, imported by mackenzie@hooli.com has successfully uploaded. ", a [ href "/" ] [ text "Manage users is now available" ] ] False
                        |> Notification.notificationType Notification.Affirmative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.inline "Informative" [ text "New user data is currently being processed. We'll let you know when the process is completed. ", a [ href "/" ] [ text "Manage users" ] ] False
                        |> Notification.notificationType Notification.Informative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.inline "Cautionary" [ text "New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ", a [ href "/" ] [ text "View issues" ] ] False
                        |> Notification.notificationType Notification.Cautionary
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.inline "Negative" [ text "Check your connection and try again. ", a [ href "/" ] [ text "Refresh" ] ] False
                        |> Notification.notificationType Notification.Negative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                ]
        ]
