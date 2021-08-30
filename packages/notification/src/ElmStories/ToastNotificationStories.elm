module ElmStories.ToastNotificationStories exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (Html, a, div, text)
import Html.Attributes exposing (href)
import Kaizen.Notification as Notification
import Text.Text as Text


main =
    storybook
        [ statelessStoryOf "Positive" <|
            Notification.view
                (Notification.toast "Success" [ text "New user data, imported by mackenzie@hooli.com has successfully uploaded. ", a [ href "/" ] [ text "Manage users is now available" ] ] False
                    |> Notification.notificationType Notification.Affirmative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Informative" <|
            Notification.view
                (Notification.toast "Informative" [ text "New user data is currently being processed. We'll let you know when the process is completed. ", a [ href "/" ] [ text "Manage users" ] ] False
                    |> Notification.notificationType Notification.Informative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Cautionary" <|
            Notification.view
                (Notification.toast "Warning" [ text "New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ", a [ href "/" ] [ text "View issues" ] ] False
                    |> Notification.notificationType Notification.Cautionary
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Negative" <|
            Notification.view
                (Notification.toast "No network connection" [ text "Check your connection and try again. ", a [ href "/" ] [ text "Refresh" ] ] False
                    |> Notification.notificationType Notification.Negative
                )
                (Notification.Manual Notification.Visible)
                (always "")
        , statelessStoryOf "Multiple notifications" <|
            div []
                [ Notification.view
                    (Notification.toast "Success" [ text "New user data, imported by mackenzie@hooli.com has successfully uploaded. ", a [ href "/" ] [ text "Manage users is now available" ] ] False
                        |> Notification.notificationType Notification.Affirmative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.toast "Informative" [ text "New user data is currently being processed. We'll let you know when the process is completed. ", a [ href "/" ] [ text "Manage users" ] ] False
                        |> Notification.notificationType Notification.Informative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.toast "Warning" [ text "New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ", a [ href "/" ] [ text "View issues" ] ] False
                        |> Notification.notificationType Notification.Cautionary
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                , Notification.view
                    (Notification.toast "No network connection" [ text "Check your connection and try again. ", a [ href "/" ] [ text "Refresh" ] ] False
                        |> Notification.notificationType Notification.Negative
                    )
                    (Notification.Manual Notification.Visible)
                    (always "")
                ]
        ]
