module Kaizen.Modal.Modal exposing
    ( Config
    , Dispatch(..)
    , Msg
    , generic
    , initialState
    , modalUpdate
    , onClose
    , update
    , view
    , withDispatch
    )

import CssModules exposing (css)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Kaizen.Modal.GenericModal as GenericModal
import Process
import Task
import Time as Time


type Config msg
    = Config (Configuration msg)


type Msg msg
    = Msg (State msg) Progress


type Progress
    = Running
    | Stopped


type Dispatch msg
    = Closed msg
    | Open msg


type alias Configuration msg =
    { variant : Variant msg
    , onClose : Maybe msg
    , state : Msg msg
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
        close onCloseMsg =
            onClick onCloseMsg

        genericModal =
            GenericModal.variant GenericModal.Default

        modalState =
            getState config.state

        modalData =
            getData modalState

        genericModalEvents =
            List.filterMap identity
                [ Maybe.map close config.onClose
                ]

        resolveAnimationStyles =
            case modalState of
                Opening _ ->
                    [ ( .animatingEnter, True ) ]

                Open_ _ ->
                    [ ( .animatingEnter, True ) ]

                Closing _ ->
                    [ ( .animatingExit, True ) ]

                Closed_ _ ->
                    [ ( .animatingExit, True ) ]

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
            Generic content ->
                GenericModal.view
                    [ modalBox content ]
                    (genericModal |> GenericModal.events genericModalEvents)
        ]


modalBox : List (Html msg) -> Html msg
modalBox content =
    div [ styles.class .modalBox ] content


defaults : Configuration msg
defaults =
    { variant = Generic [ text "" ]
    , onClose = Nothing
    , state = initialState
    }


{-| An initial state for the modal update cycle.

    To be used when first calling Modal.update.

    This state needs to be updated when opening or closing the modal to track animations.

    If the modal is being removed from the view dynamically it can be discarded when modal is closed
    and initialState used again later when next rendering the modal.

-}
initialState : Msg msg
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

    Use withDispatch on the modal msg handler to always fire the Cmd msg's you want to hear back from.

-}
withDispatch : List (Dispatch msg) -> Msg msg -> Msg msg
withDispatch dispatchList msg =
    injectData msg (\md -> { md | dispatch = Just dispatchList })


defaultModalData : ModalData msg
defaultModalData =
    { duration = Fast
    , dispatch = Nothing
    }


styles =
    css "@cultureamp/kaizen-component-library/draft/Modal/Style.elm.scss"
        { backdropLayer = "backdropLayer"
        , modalBox = "modalBox"
        , animatingEnter = "animatingEnter"
        , animatingExit = "animatingExit"
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
    = Generic (List (Html msg))


generic : List (Html msg) -> Config msg
generic v =
    Config { defaults | variant = Generic v }



-- MODIFIERS


{-| Handler should call Modal.update to handle all animating states.
-}
onClose : msg -> Config msg -> Config msg
onClose msg (Config config) =
    Config { config | onClose = Just msg }


modalUpdate : Msg msg -> Config msg -> Config msg
modalUpdate msg (Config config) =
    Config { config | state = msg }



--UPDATE


update : Msg msg -> msg -> ( Msg msg, Cmd msg )
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


updateRunning : State msg -> msg -> ( Msg msg, Cmd msg )
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


getDispatchOpen : ( Msg msg, Cmd msg ) -> Dispatch msg -> ModalData msg -> ( Msg msg, Cmd msg )
getDispatchOpen fallBack dispatch modalData =
    case dispatch of
        Open msg ->
            ( Msg (Open_ modalData) Running, Task.perform (\_ -> msg) (Process.sleep <| mapDuration modalData.duration) )

        _ ->
            fallBack


getDispatchClosed : ( Msg msg, Cmd msg ) -> Dispatch msg -> ModalData msg -> ( Msg msg, Cmd msg )
getDispatchClosed fallBack dispatch modalData =
    case dispatch of
        Closed msg ->
            ( Msg (Closed_ modalData) Running, Task.perform (\_ -> msg) (Process.sleep <| mapDuration modalData.duration) )

        _ ->
            fallBack


getState : Msg msg -> State msg
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


injectData : Msg msg -> (ModalData msg -> ModalData msg) -> Msg msg
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
