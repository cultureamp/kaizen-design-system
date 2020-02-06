module Kaizen.Modal.Modal exposing
    ( Config
    , ConfirmationType(..)
    , ModalMsg
    , ModalState
    , Status(..)
    , confirmation
    , forceOpen
    , generic
    , initialState
    , modalState
    , onUpdate
    , subscriptions
    , trigger
    , update
    , view
    )

import Browser.Events as BrowserEvents
import CssModules exposing (css)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Kaizen.Events.Events as KaizenEvents
import Kaizen.Modal.Presets.ConfirmationModal as ConfirmationModal
import Kaizen.Modal.Primitives.GenericModal as GenericModal
import Process
import Task
import Time as Time


type Config msg
    = Config (Configuration msg)


type ModalState msg
    = ModalState State Progress


type Progress
    = Animating
    | Stopped


type Status
    = Closed
    | Open


type ModalMsg
    = Update


type alias Configuration msg =
    { variant : Variant msg
    , onUpdate : Maybe (ModalMsg -> msg)
    , state : ModalState msg
    }


type State
    = Opening_ ModalData
    | Open_ ModalData
    | Closing_ ModalData
    | Closed_ ModalData


type Duration
    = Instant
    | Immediate
    | Rapid
    | Fast


type ConfirmationType
    = Informative
    | Positive
    | Negative


type alias ConfirmationConfig msg =
    { title : String
    , bodySubtext : Maybe (List (Html msg))
    , onDismiss : Maybe msg
    , onConfirm : Maybe msg
    , confirmLabel : String
    , dismissLabel : String
    }


type alias ModalData =
    { duration : Duration
    }


type alias Timing =
    { startedAt : Time.Posix
    , dt : Time.Posix
    }


subscriptions : ModalState msg -> Sub ModalMsg
subscriptions ms =
    if canSubscribeToEscape ms then
        BrowserEvents.onKeyDown (KaizenEvents.isEscape Update)

    else
        Sub.none


view : Config msg -> Html msg
view (Config config) =
    let
        updateModal onUpdateMsg =
            onClick (onUpdateMsg Update)

        genericModalConfig =
            GenericModal.default

        mState =
            getState config.state

        modalData =
            getData mState

        genericModalEvents =
            List.filterMap identity
                [ Maybe.map updateModal config.onUpdate
                ]

        resolveAnimationStyles =
            case mState of
                Opening_ _ ->
                    [ ( .animatingElmEnter, True ) ]

                Open_ _ ->
                    [ ( .animatingElmEnter, True ) ]

                Closing_ _ ->
                    [ ( .animatingElmExit, True ) ]

                Closed_ _ ->
                    [ ( .animatingElmExit, True ) ]

        resolveVisibilityStyles =
            case config.state of
                ModalState (Closed_ _) Stopped ->
                    [ ( .hide, True ) ]

                _ ->
                    []
    in
    div
        ([ styles.classList resolveAnimationStyles ] ++ [ styles.classList resolveVisibilityStyles ])
        [ div
            ([ styles.classList
                [ ( .backdropLayer, True )
                ]
             ]
                ++ [ style "animation-duration" <| (mapDuration modalData.duration |> String.fromFloat |> (\duration -> duration ++ "ms")) ]
            )
            []
        , case config.variant of
            Generic content size ->
                GenericModal.view (GenericModal.Custom size)
                    content
                    (genericModalConfig |> GenericModal.events genericModalEvents)

            Confirmation confirmationType configs ->
                let
                    withOnDismiss confirmationConfig =
                        case configs.onDismiss of
                            Just dismissMsg ->
                                ConfirmationModal.onDismiss dismissMsg confirmationConfig

                            Nothing ->
                                case config.onUpdate of
                                    Just updateMsg ->
                                        ConfirmationModal.onDismiss (updateMsg Update) confirmationConfig

                                    Nothing ->
                                        confirmationConfig

                    withOnConfirm confirmationConfig =
                        case configs.onConfirm of
                            Just confirmMsg ->
                                ConfirmationModal.onConfirm confirmMsg confirmationConfig

                            Nothing ->
                                confirmationConfig

                    withBodySubtext confirmationConfig =
                        case configs.bodySubtext of
                            Just subtext ->
                                ConfirmationModal.bodySubtext subtext confirmationConfig

                            Nothing ->
                                confirmationConfig
                in
                case confirmationType of
                    Informative ->
                        GenericModal.view GenericModal.Default
                            [ ConfirmationModal.view
                                (ConfirmationModal.informative
                                    |> withOnDismiss
                                    |> withOnConfirm
                                    |> withBodySubtext
                                    |> ConfirmationModal.confirmLabel configs.confirmLabel
                                    |> ConfirmationModal.dismissLabel configs.dismissLabel
                                    |> ConfirmationModal.title configs.title
                                )
                            ]
                            (genericModalConfig |> GenericModal.events genericModalEvents)

                    Positive ->
                        GenericModal.view GenericModal.Default
                            [ ConfirmationModal.view
                                (ConfirmationModal.positive
                                    |> withOnDismiss
                                    |> withOnConfirm
                                    |> withBodySubtext
                                    |> ConfirmationModal.confirmLabel configs.confirmLabel
                                    |> ConfirmationModal.dismissLabel configs.dismissLabel
                                    |> ConfirmationModal.title configs.title
                                )
                            ]
                            (genericModalConfig |> GenericModal.events genericModalEvents)

                    Negative ->
                        GenericModal.view GenericModal.Default
                            [ ConfirmationModal.view
                                (ConfirmationModal.negative
                                    |> withOnDismiss
                                    |> withOnConfirm
                                    |> withBodySubtext
                                    |> ConfirmationModal.confirmLabel configs.confirmLabel
                                    |> ConfirmationModal.dismissLabel configs.dismissLabel
                                    |> ConfirmationModal.title configs.title
                                )
                            ]
                            (genericModalConfig |> GenericModal.events genericModalEvents)
        ]


defaults : Configuration msg
defaults =
    { variant = Generic [ text "" ] ( 600, 456 )
    , onUpdate = Nothing
    , state = initialState
    }


{-| An initial state for the modal update cycle.

    To be used when first calling Modal.update.

    This state needs to be updated when opening or closing the modal to track animations.

    If the modal is being removed from the view dynamically it can be discarded when modal is closed
    and initialState used again later when next rendering the modal.

-}
initialState : ModalState msg
initialState =
    ModalState
        (Closed_
            { duration = Fast
            }
        )
        Stopped


defaultModalData : ModalData
defaultModalData =
    { duration = Fast
    }


styles =
    css "@kaizen/component-library/draft/Kaizen/Modal/Primitives/GenericModal.scss"
        { backdropLayer = "backdropLayer"
        , animatingElmEnter = "animatingElmEnter"
        , animatingElmExit = "animatingElmExit"
        , elmGenericModal = "elmGenericModal"
        , hide = "hide"
        }



-- HELPERS


mapDuration : Duration -> Float
mapDuration duration =
    case duration of
        Instant ->
            0

        Immediate ->
            100

        Rapid ->
            200

        Fast ->
            300


canSubscribeToEscape : ModalState msg -> Bool
canSubscribeToEscape (ModalState state progress) =
    case ( state, progress ) of
        ( Closed_ _, Stopped ) ->
            False

        _ ->
            True


{-| For when you want to start the modal off open without being triggered open.

    This is not recommended as modals should be triggered by an intentional user action

-}
forceOpen : ModalState msg -> ModalState msg
forceOpen ms =
    case ms of
        ModalState (Open_ s) Animating ->
            ModalState (Open_ s) Stopped

        ModalState (Opening_ s) Animating ->
            ModalState (Open_ s) Stopped

        ModalState (Closed_ s) Animating ->
            ModalState (Open_ s) Stopped

        ModalState (Closing_ s) Animating ->
            ModalState (Open_ s) Stopped

        ModalState (Opening_ s) Stopped ->
            ModalState (Open_ s) Stopped

        ModalState (Closed_ s) Stopped ->
            ModalState (Open_ s) Stopped

        ModalState (Closing_ s) Stopped ->
            ModalState (Open_ s) Stopped

        _ ->
            ms



-- VARIANTS


type Variant msg
    = Generic (List (Html msg)) ( Float, Float )
    | Confirmation ConfirmationType (ConfirmationConfig msg)


generic : List (Html msg) -> ( Float, Float ) -> Config msg
generic v size =
    Config { defaults | variant = Generic v size }


confirmation : ConfirmationType -> ConfirmationConfig msg -> Config msg
confirmation confirmationType confirmationConfig =
    Config { defaults | variant = Confirmation confirmationType confirmationConfig }



-- MODIFIERS


{-| Handler should call Modal.update to handle all animating states.
-}
onUpdate : (ModalMsg -> msg) -> Config msg -> Config msg
onUpdate msg (Config config) =
    Config { config | onUpdate = Just msg }


modalState : ModalState msg -> Config msg -> Config msg
modalState msg (Config config) =
    Config { config | state = msg }



--UPDATE


{-| Triggering the modal will initiate the next logical step.
E.g. If the modal is closed trigger will begin the open animation for the modal.
-}
trigger : ModalState msg -> ( ModalState msg, Cmd ModalMsg, Maybe Status )
trigger (ModalState state progress) =
    case progress of
        Animating ->
            updateRunning state

        -- To know what to do next we specify what state the modal was in when stopped
        Stopped ->
            case state of
                -- Impossible state as updates never set Stopped on an Opening state
                Opening_ _ ->
                    ( ModalState (Closed_ defaultModalData) Stopped
                    , Task.perform identity (Task.succeed Update)
                    , Nothing
                    )

                Open_ s ->
                    ( ModalState (Closing_ s) <| Animating
                    , Task.perform identity (Task.succeed Update)
                    , Nothing
                    )

                -- Impossible state as updates never set Stopped on a Closing state
                Closing_ _ ->
                    ( ModalState (Closed_ defaultModalData) Stopped
                    , Cmd.none
                    , Nothing
                    )

                Closed_ s ->
                    ( ModalState (Opening_ s) <| Animating
                    , Task.perform identity (Task.succeed Update)
                    , Nothing
                    )


update : ModalState msg -> ModalMsg -> ( ModalState msg, Cmd ModalMsg, Maybe Status )
update ms modalMsg =
    case modalMsg of
        Update ->
            trigger ms


updateRunning : State -> ( ModalState msg, Cmd ModalMsg, Maybe Status )
updateRunning state =
    case state of
        Opening_ d ->
            ( ModalState (Open_ d) Animating
            , Task.perform identity (Task.succeed Update)
            , Nothing
            )

        Open_ d ->
            ( ModalState (Open_ d) Stopped
            , Cmd.none
            , Just Open
            )

        Closing_ d ->
            ( ModalState (Closed_ d) Animating
            , Task.perform (\_ -> Update) (Process.sleep <| mapDuration d.duration)
            , Nothing
            )

        Closed_ d ->
            ( ModalState (Closed_ d) Stopped
            , Cmd.none
            , Just Closed
            )


getState : ModalState msg -> State
getState (ModalState state _) =
    state


getData : State -> ModalData
getData state =
    case state of
        Opening_ s ->
            s

        Open_ s ->
            s

        Closing_ s ->
            s

        Closed_ s ->
            s
