module Notification.Notification exposing
    ( Config
    , NotificationStage(..)
    , NotificationState(..)
    , NotificationStateSetter
    , NotificationType(..)
    , automationId
    , getAutomationId
    , global
    , inline
    , notificationStage
    , notificationType
    , subscriptions
    , toast
    , view
    )

import Browser.Events exposing (onAnimationFrame)
import CssModules exposing (css)
import Html exposing (Html, button, div, h6, p, span, text)
import Html.Attributes exposing (type_)
import Html.Events as Events exposing (on, preventDefaultOn)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode
import Platform.Sub
import String exposing (fromInt)
import Time exposing (every)


{-| A notification component for Culture Amp projects.

The notification view requires two properties, a config, and a state.

The config begins by choosing one of our 3 variants (`inline`, `toast`, and
`global`). These can then be changed using the modifiers (`notificationType`,
`automationId`).

The state is a single value that describes the animation's enter and exit states.
It includes whether the notification requires Manual dismissal or is set
to Autohide, and what the current `NotificationStage` is.

Your page will need to use `Notification.subscriptions` to subscribe to events
so all state transitions animate correctly.

-}



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { variant : Variant
    , notificationType : NotificationType
    , title : Maybe String
    , content : List (Html msg)
    , persistent : Bool
    , automationId : Maybe String
    }


type Variant
    = Inline
    | Toast
    | Global


type NotificationType
    = Affirmative
    | Informative
    | Cautionary
    | Negative



-- STATE


type NotificationState
    = Manual NotificationStage
    | Autohide NotificationStage


type NotificationStage
    = Appearing
    | Visible
    | Disappearing Int
    | Hidden


type alias NotificationStateSetter msg =
    NotificationState -> msg



-- VIEW


view : Config msg -> NotificationState -> NotificationStateSetter msg -> Html msg
view (Config config) state onStateChange =
    let
        className =
            notificationClassName config state

        styleAttr =
            case notificationStage state of
                Disappearing height ->
                    [ Html.Attributes.style
                        "marginTop"
                        (fromInt -height ++ "px")
                    ]

                _ ->
                    []

        automationIdAttr =
            case config.automationId of
                Just id ->
                    [ Html.Attributes.attribute "data-automation-id" id ]

                Nothing ->
                    []

        -- When using Autohide, we use a "transitionstart" event to retrieve the height of the notification, so we can animate the exit correctly.
        onTransitionStart =
            case state of
                Autohide (Disappearing oldHeight) ->
                    [ on
                        "transitionstart"
                        (Json.Decode.at [ "target", "clientHeight" ]
                            Json.Decode.int
                            |> Json.Decode.andThen
                                (\height ->
                                    if height /= oldHeight then
                                        Json.Decode.succeed <| onStateChange <| Autohide (Disappearing height)

                                    else
                                        Json.Decode.fail "ignore"
                                )
                        )
                    ]

                _ ->
                    []

        -- Each of our CSS transitions finishes with "margin-top" being animated so that our height is collapsed.
        -- After this is finished, the state is set to "Hidden" and the notification is removed from the DOM.
        onTransitionEnd : List (Html.Attribute msg)
        onTransitionEnd =
            case notificationStage state of
                Disappearing _ ->
                    [ on
                        "transitionend"
                        (Json.Decode.field "propertyName" Json.Decode.string
                            |> Json.Decode.andThen
                                (\propertyName ->
                                    if propertyName == "margin-top" then
                                        Json.Decode.succeed <| onStateChange <| Manual Hidden

                                    else
                                        Json.Decode.fail "ignore"
                                )
                        )
                    ]

                _ ->
                    []
    in
    case notificationStage state of
        Hidden ->
            text ""

        _ ->
            div (className ++ styleAttr ++ automationIdAttr ++ onTransitionStart ++ onTransitionEnd)
                [ viewIcon (Config config)
                , div [ styles.class .textContainer ]
                    [ viewTitle (Config config)
                    , p [ styles.class .text ] config.content
                    ]
                , viewCancelButton (Config config) state onStateChange
                ]


notificationClassName : ConfigValue msg -> NotificationState -> List (Html.Attribute msg)
notificationClassName config state =
    [ styles.classList
        [ ( .notification, True )
        , ( .inline, config.variant == Inline )
        , ( .toast, config.variant == Toast )
        , ( .global, config.variant == Global )
        , ( .affirmative, config.notificationType == Affirmative )
        , ( .informative, config.notificationType == Informative )
        , ( .cautionary, config.notificationType == Cautionary )
        , ( .negative, config.notificationType == Negative )
        , ( .hidden, notificationStage state /= Visible )
        ]
    ]


viewIcon : Config msg -> Html msg
viewIcon (Config configValue) =
    let
        iconAsset =
            icon configValue.notificationType
    in
    div [ styles.class .icon ]
        [ Icon.view
            (Icon.presentation |> Icon.inheritSize True)
            iconAsset
            |> Html.map never
        ]


icon : NotificationType -> Icon.SvgAsset.SvgAsset
icon type_ =
    case type_ of
        Affirmative ->
            svgAsset "@kaizen/component-library/icons/success.icon.svg"

        Cautionary ->
            svgAsset "@kaizen/component-library/icons/exclamation.icon.svg"

        Negative ->
            svgAsset "@kaizen/component-library/icons/exclamation.icon.svg"

        Informative ->
            svgAsset "@kaizen/component-library/icons/information.icon.svg"


viewTitle : Config msg -> Html msg
viewTitle (Config { title }) =
    case title of
        Just titleText ->
            h6 [ styles.class .title ] [ text titleText ]

        Nothing ->
            text ""


viewCancelButton : Config msg -> NotificationState -> NotificationStateSetter msg -> Html msg
viewCancelButton (Config { persistent, variant }) state onStateChange =
    let
        -- With Toast Notifications, we only allow hiding the close button if the notification will autohide.
        hideCloseButton =
            case ( variant, state ) of
                ( Toast, Autohide _ ) ->
                    persistent

                ( Toast, _ ) ->
                    False

                ( _, _ ) ->
                    persistent

        onClickCancel =
            [ preventDefaultOn
                "click"
                (Json.Decode.at [ "target", "parentNode", "clientHeight" ] Json.Decode.int
                    |> Json.Decode.andThen (\height -> Json.Decode.succeed <| onStateChange <| Manual (Disappearing height))
                    |> Json.Decode.map (\m -> ( m, True ))
                )
            ]
    in
    if hideCloseButton then
        text ""

    else
        button
            ([ styles.class .cancel, type_ "button" ]
                ++ onClickCancel
            )
            [ span
                [ styles.class .cancelInner
                ]
                [ -- We are using a hidden span and Icon.presentation rather than the usual Icon.img to avoid this components API requiring a unique ID.
                  span [ styles.class .cancelLabel ] [ text "close notification" ]
                , Icon.view Icon.presentation
                    (svgAsset "@kaizen/component-library/icons/close.icon.svg")
                    |> Html.map never
                ]
            ]


styles =
    css "@kaizen/component-library/components/Notification/components/GenericNotification.module.scss"
        { notification = "notification"
        , icon = "icon"
        , textContainer = "textContainer"
        , title = "title"
        , text = "text"
        , cancel = "cancel"
        , cancelInner = "cancelInner"
        , cancelLabel = "cancelLabel"
        , hidden = "hidden"
        , inline = "inline"
        , toast = "toast"
        , global = "global"
        , affirmative = "affirmative"
        , informative = "informative"
        , cautionary = "cautionary"
        , negative = "negative"
        }



-- VARIANTS


defaults : ConfigValue msg
defaults =
    { variant = Inline
    , notificationType = Informative
    , title = Nothing
    , content = []
    , persistent = False
    , automationId = Nothing
    }


inline : String -> List (Html msg) -> Bool -> Config msg
inline title content persistent =
    Config { defaults | title = Just title, content = content, persistent = persistent }


toast : String -> List (Html msg) -> Bool -> Config msg
toast title content hideCloseIcon =
    Config
        { defaults
            | variant = Toast
            , title = Just title
            , content = content
            , persistent = hideCloseIcon
        }


global : List (Html msg) -> Config msg
global content =
    Config { defaults | variant = Global, content = content }



-- MODIFIERS


notificationType : NotificationType -> Config msg -> Config msg
notificationType value (Config config) =
    Config { config | notificationType = value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }



-- HELPERS


getAutomationId : Config msg -> Maybe String
getAutomationId config =
    -- In our Notification.Demo app we need to access the automationId as a way of tracking component states.
    case config of
        Config configValue ->
            configValue.automationId


notificationStage : NotificationState -> NotificationStage
notificationStage state =
    case state of
        Autohide stage ->
            stage

        Manual stage ->
            stage



-- SUBSCRIPTIONS


{-| Get a subscription that advances the state of all notifications on the page.

We use subscriptions to change from "Appearing" to "Visible" on the first
animation frame, and to hide "Autohide" toast notifications after 5 seconds.

To set up a subscription, provide a list of all notifications on the page, for
each providing the current state, and a message we can use to update the state.

-}
subscriptions : List ( NotificationState, NotificationState -> msg ) -> Sub msg
subscriptions allNotifications =
    let
        -- migrated from Elm 18
        second =
            1000
    in
    Sub.batch
        (List.filterMap
            (\( state, setter ) ->
                case state of
                    Manual Appearing ->
                        Just <| onAnimationFrame <| always <| setter <| Manual Visible

                    Autohide Appearing ->
                        Just <| onAnimationFrame <| always <| setter <| Autohide Visible

                    Autohide Visible ->
                        -- Note: we do not know the height of the notification here, so cannot animate margin-top.
                        -- We have a "transitionstart" event listener that will read the clientHeight and correct this value.
                        Just <| every (5 * second) <| always <| setter <| Autohide (Disappearing 0)

                    _ ->
                        Nothing
            )
            allNotifications
        )
