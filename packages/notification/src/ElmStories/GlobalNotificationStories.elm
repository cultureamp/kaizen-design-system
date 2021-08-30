module ElmStories.GlobalNotificationStories exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, a, div, text)
import Html.Attributes exposing (href, style)
import Kaizen.Notification as Notification


main =
    storybook
        [ statelessStoryOf "Positive" <|
            Notification.view
                (Notification.global [ text "New user data, imported by mackenzie@hooli.com has successfully uploaded. ", a [ href "/" ] [ text "Manage users is now available" ] ]
                    |> Notification.notificationType Notification.Affirmative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Informative" <|
            Notification.view
                (Notification.global [ text "New user data is currently being processed. We'll let you know when the process is completed. ", a [ href "/" ] [ text "Manage users" ] ]
                    |> Notification.notificationType Notification.Informative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Cautionary" <|
            Notification.view
                (Notification.global [ text "New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ", a [ href "/" ] [ text "View issues" ] ]
                    |> Notification.notificationType Notification.Cautionary
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Negative" <|
            Notification.view
                (Notification.global [ text "No network connection. Check your connection and try again. ", a [ href "/" ] [ text "Refresh" ] ]
                    |> Notification.notificationType Notification.Negative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Multiple notifications" <|
            div [ style "width" "inherit" ]
                [ Notification.view
                    (Notification.global [ text "New user data, imported by mackenzie@hooli.com has successfully uploaded. ", a [ href "/" ] [ text "Manage users is now available" ] ]
                        |> Notification.notificationType Notification.Affirmative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.global [ text "New user data is currently being processed. We'll let you know when the process is completed. ", a [ href "/" ] [ text "Manage users" ] ]
                        |> Notification.notificationType Notification.Informative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.global [ text "New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ", a [ href "/" ] [ text "View issues" ] ]
                        |> Notification.notificationType Notification.Cautionary
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.global [ text "No network connection. Check your connection and try again. ", a [ href "/" ] [ text "Refresh" ] ]
                        |> Notification.notificationType Notification.Negative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                ]
        ]
