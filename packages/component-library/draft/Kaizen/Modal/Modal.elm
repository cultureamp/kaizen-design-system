module Kaizen.Modal.Modal exposing
    ( Config
    , ConfirmationType(..)
    , Dispatch(..)
    , ModalState
    , confirmation
    , generic
    , initialState
    , modalState
    , onUpdate
    , update
    , view
    , withDispatch
    )

import CssModules exposing (css)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Kaizen.Modal.Presets.ConfirmationModal as ConfirmationModal
import Kaizen.Modal.Primitives.GenericModal as GenericModal
import Process
import Task
import Time as Time


type Config msg
    = Config (Configuration msg)


type ModalState msg
    = Msg (State msg) Progress


type Progress
    = Running
    | Stopped


type Dispatch msg
    = Closed msg
    | Open msg


type alias Configuration msg =
    { variant : Variant msg
    , onUpdate : Maybe msg
    , state : ModalState msg
    }


type State msg
    = Opening (ModalData msg)
    | Open_ (ModalData msg)
    | Closing (ModalData msg)
    | Closed_ (ModalData msg)


type Duration
    = Instant
    | Immediate
    | Rapid
    | Fast


type ConfirmationType
    = Informative


type alias ConfirmationConfig msg =
    { title : String
    , bodySubtext : Maybe (List (Html msg))
    , onDismiss : Maybe msg
    , onConfirm : Maybe msg
    , confirmLabel : String
    , dismissLabel : String
    }


type alias ModalData msg =
    { duration : Duration
    , dispatch : Maybe (List (Dispatch msg))
    }


type alias Timing =
    { startedAt : Time.Posix
    , dt : Time.Posix
    }


view : Config msg -> Html msg
view (Config config) =
    let
        updateModal onCloseMsg =
            onClick onCloseMsg

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
                Opening _ ->
                    [ ( .animatingElmEnter, True ) ]

                Open_ _ ->
                    [ ( .animatingElmEnter, True ) ]

                Closing _ ->
                    [ ( .animatingElmExit, True ) ]

                Closed_ _ ->
                    [ ( .animatingElmExit, True ) ]

        resolveVisibilityStyles =
            case config.state of
                Msg (Closed_ _) Stopped ->
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
    Msg
        (Closed_
            { duration = Fast
            , dispatch = Nothing
            }
        )
        Stopped


{-| A modal is only truly opened or closed after the animation has completed.

    e.g. If you remove the modal element from the view as soon as you click a close button
    then the modal will disappear without animating closed first.

    withDispatch allows you to dispatch a (Cmd msg) on either Closed or Open from the update.

    This is handy for when you want to remove the modal element from the view after the the closing animation.

    Use withDispatch on the modal modalState handler to always fire the Cmd msg's you want to hear back from.

-}
withDispatch : List (Dispatch msg) -> ModalState msg -> ModalState msg
withDispatch dispatchList msg =
    injectData msg (\md -> { md | dispatch = Just dispatchList })


defaultModalData : ModalData msg
defaultModalData =
    { duration = Fast
    , dispatch = Nothing
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
onUpdate : msg -> Config msg -> Config msg
onUpdate msg (Config config) =
    Config { config | onUpdate = Just msg }


modalState : ModalState msg -> Config msg -> Config msg
modalState msg (Config config) =
    Config { config | state = msg }



--UPDATE


update : ModalState msg -> msg -> ( ModalState msg, Cmd msg )
update (Msg state progress) modalUpdateHandlerMsg =
    case progress of
        Running ->
            updateRunning state modalUpdateHandlerMsg

        -- To know what to do next we specify what state the modal was in when stopped
        Stopped ->
            case state of
                -- Impossible state as updates never set Stopped on an Opening state
                Opening _ ->
                    ( Msg (Closed_ defaultModalData) Stopped
                    , Task.perform identity (Task.succeed modalUpdateHandlerMsg)
                    )

                Open_ s ->
                    ( Msg (Closing s) <| Running
                    , Task.perform identity (Task.succeed modalUpdateHandlerMsg)
                    )

                -- Impossible state as updates never set Stopped on a Closing state
                Closing _ ->
                    ( Msg (Closed_ defaultModalData) Stopped, Cmd.none )

                Closed_ s ->
                    ( Msg (Opening s) <| Running
                    , Task.perform identity (Task.succeed modalUpdateHandlerMsg)
                    )


updateRunning : State msg -> msg -> ( ModalState msg, Cmd msg )
updateRunning state modalUpdateHandlerMsg =
    case state of
        Opening d ->
            let
                noDispatch =
                    ( Msg (Open_ d) Running, Task.perform identity (Task.succeed modalUpdateHandlerMsg) )

                ( newState, cmd ) =
                    case d.dispatch of
                        Just dispatchMsgs ->
                            List.foldl
                                (\dispatchMsg acc ->
                                    getDispatchOpen acc dispatchMsg d
                                )
                                noDispatch
                                dispatchMsgs

                        Nothing ->
                            noDispatch
            in
            ( newState
            , cmd
            )

        Open_ d ->
            ( Msg (Open_ d) Stopped, Cmd.none )

        Closing d ->
            let
                ( newState, cmd ) =
                    case d.dispatch of
                        Just dispatchMsgs ->
                            List.foldl
                                (\dispatchMsg acc ->
                                    getDispatchClosed acc dispatchMsg d
                                )
                                ( Msg (Closed_ d) Running, Cmd.none )
                                dispatchMsgs

                        Nothing ->
                            ( Msg (Closed_ d) Running
                            , Task.perform (\_ -> modalUpdateHandlerMsg) (Process.sleep <| mapDuration d.duration)
                            )
            in
            ( newState
            , cmd
            )

        Closed_ d ->
            ( Msg (Closed_ d) Stopped, Cmd.none )


getDispatchOpen : ( ModalState msg, Cmd msg ) -> Dispatch msg -> ModalData msg -> ( ModalState msg, Cmd msg )
getDispatchOpen fallBack dispatch modalData =
    case dispatch of
        Open msg ->
            ( Msg (Open_ modalData) Running, Task.perform (\_ -> msg) (Process.sleep <| mapDuration modalData.duration) )

        _ ->
            fallBack


getDispatchClosed : ( ModalState msg, Cmd msg ) -> Dispatch msg -> ModalData msg -> ( ModalState msg, Cmd msg )
getDispatchClosed fallBack dispatch modalData =
    case dispatch of
        Closed msg ->
            ( Msg (Closed_ modalData) Running, Task.perform (\_ -> msg) (Process.sleep <| mapDuration modalData.duration) )

        _ ->
            fallBack


getState : ModalState msg -> State msg
getState (Msg state _) =
    state


getData : State msg -> ModalData msg
getData state =
    case state of
        Opening s ->
            s

        Open_ s ->
            s

        Closing s ->
            s

        Closed_ s ->
            s


injectData : ModalState msg -> (ModalData msg -> ModalData msg) -> ModalState msg
injectData (Msg state progress) f =
    case state of
        Opening data ->
            Msg (Opening <| f data) progress

        Open_ data ->
            Msg (Open_ <| f data) progress

        Closing data ->
            Msg (Closing <| f data) progress

        Closed_ data ->
            Msg (Closed_ <| f data) progress
