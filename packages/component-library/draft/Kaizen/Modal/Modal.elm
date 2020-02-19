module Kaizen.Modal.Modal exposing
    ( Config
    , ConfirmationType(..)
    , ModalMsg
    , ModalState
    , Status(..)
    , confirmation
    , defaultFocusableId
    , firstFocusableId
    , forceOpen
    , generic
    , initialState
    , lastFocusableId
    , modalState
    , onUpdate
    , subscriptions
    , trigger
    , update
    , view
    )

import Browser.Dom as BrowserDom
import Browser.Events as BrowserEvents
import CssModules exposing (css)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Html.Lazy exposing (lazy)
import Kaizen.Events.Events as KaizenEvents
import Kaizen.Modal.Presets.ConfirmationModal as ConfirmationModal
import Kaizen.Modal.Primitives.Constants as Constants
import Kaizen.Modal.Primitives.GenericModal as GenericModal
import Task
import Time as Time


type Config msg
    = Config (Configuration msg)


type ModalState msg
    = ModalState State


type Progress
    = Animating
    | NotAnimating


type Status
    = Closed
    | Open


type ModalMsg
    = Update
    | RunModal Time.Posix
    | FocusFirstFocusableElement (Result BrowserDom.Error ())
    | FirstFocusableElementFocused
    | LastFocusableElementFocused (Result BrowserDom.Error ())
    | DefaultFocusableElementFocused (Result BrowserDom.Error ())
    | ClearFocusedFocusable


type alias Configuration msg =
    { variant : Variant msg
    , onUpdate : Maybe (ModalMsg -> msg)
    , state : ModalState msg
    }


type alias State =
    ( State_, ModalData )


type State_
    = Opening_
    | Open_
    | Closing_
    | Closed_


type Duration
    = Instant
    | Immediate
    | Rapid
    | Fast


type ConfirmationType
    = Informative
    | Positive
    | Negative


type FirstFocusableId
    = FirstFocusableId String


type LastFocusableId
    = LastFocusableId String


type DefaultFocusableId
    = DefaultFocusableId String


type FocusedFocusable
    = FirstFocusableFocused
    | LastFocusableFocused
    | NoFocusableFocused


type ModalStep
    = NotRunning
    | Running


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
    , firstFocusableId : FirstFocusableId
    , lastFocusableId : LastFocusableId
    , defaultFocusableId : DefaultFocusableId
    , modalStep : ModalStep
    , startTime : Maybe Time.Posix
    , animatingStep : Progress
    , focusedFocusable : FocusedFocusable
    }


type alias Timing =
    { startedAt : Time.Posix
    , dt : Time.Posix
    }


subscriptions : ModalState msg -> Sub ModalMsg
subscriptions ms =
    let
        subscribeToEscape =
            if isOpen ms then
                BrowserEvents.onKeyDown (KaizenEvents.isEscape Update)

            else
                Sub.none

        runModal =
            if isRunning ms then
                BrowserEvents.onAnimationFrame RunModal

            else
                Sub.none
    in
    Sub.batch [ subscribeToEscape, runModal ]


view : Config msg -> Html msg
view c =
    let
        (Config config) =
            c

        ( mState, modalData ) =
            getState config.state
    in
    case ( mState, modalData.animatingStep ) of
        ( Closed_, NotAnimating ) ->
            text ""

        _ ->
            lazy viewContent c


viewContent : Config msg -> Html msg
viewContent (Config config) =
    let
        updateModal onUpdateMsg =
            onClick (onUpdateMsg Update)

        genericModalConfig =
            GenericModal.default

        ( mState, modalData ) =
            getState config.state

        genericModalEvents =
            List.filterMap identity
                [ Maybe.map updateModal config.onUpdate
                ]

        resolveAnimationStyles =
            case mState of
                Opening_ ->
                    [ ( .animatingElmEnter, True ) ]

                Closing_ ->
                    [ ( .animatingElmExit, True ) ]

                Closed_ ->
                    [ ( .animatingElmExit, True ) ]

                _ ->
                    []

        resolveVisibilityStyles =
            case config.state of
                ModalState ( Opening_, _ ) ->
                    [ ( .elmUnscrollable, True ) ]

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

                    withFocusableIds confirmationConfig =
                        ConfirmationModal.headerDismissId (firstFocusableIdToString modalData.firstFocusableId) confirmationConfig
                            |> ConfirmationModal.confirmId (lastFocusableIdToString modalData.lastFocusableId)

                    withFocusLockAttribs confirmationConfig =
                        case config.onUpdate of
                            Just updateMsg ->
                                ConfirmationModal.onHeaderDismissFocus (updateMsg FirstFocusableElementFocused) confirmationConfig

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
                                    |> withFocusableIds
                                    |> withFocusLockAttribs
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
                                    |> withFocusableIds
                                    |> withFocusLockAttribs
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
                                    |> withFocusableIds
                                    |> withFocusLockAttribs
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

    If the modal is being removed from the view dynamically it can be discarded when modal is closed
    and initialState used again later when next rendering the modal.

-}
initialState : ModalState msg
initialState =
    ModalState
        ( Closed_
        , { duration = Fast
          , firstFocusableId = firstFocusableId Constants.firstFocusableId
          , lastFocusableId = lastFocusableId Constants.lastFocusableId
          , defaultFocusableId = defaultFocusableId Constants.defaultFocusableId
          , modalStep = NotRunning
          , startTime = Nothing
          , animatingStep = NotAnimating
          , focusedFocusable = NoFocusableFocused
          }
        )


styles =
    css "@kaizen/component-library/draft/Kaizen/Modal/Primitives/GenericModal.scss"
        { backdropLayer = "backdropLayer"
        , animatingElmEnter = "animatingElmEnter"
        , elmUnscrollable = "elmUnscrollable"
        , animatingElmExit = "animatingElmExit"
        , elmGenericModal = "elmGenericModal"
        , hide = "hide"
        }



-- INTERNAL HELPERS


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


isOpen : ModalState msg -> Bool
isOpen (ModalState state) =
    case state of
        ( Open_, _ ) ->
            True

        _ ->
            False


isRunning : ModalState msg -> Bool
isRunning (ModalState ( _, mData )) =
    mData.modalStep == Running


firstFocusableIdToString : FirstFocusableId -> String
firstFocusableIdToString (FirstFocusableId id_) =
    id_


lastFocusableIdToString : LastFocusableId -> String
lastFocusableIdToString (LastFocusableId id_) =
    id_


defaultFocusableIdToString : DefaultFocusableId -> String
defaultFocusableIdToString (DefaultFocusableId id_) =
    id_


setModalStep : ModalStep -> ModalState msg -> ModalState msg
setModalStep force (ModalState ( mState, mData )) =
    ModalState ( mState, { mData | modalStep = force } )


resolveCmdsFromState : ModalState msg -> Cmd ModalMsg
resolveCmdsFromState (ModalState ( ms, mData )) =
    case mData.modalStep of
        NotRunning ->
            case ( ms, mData.animatingStep ) of
                ( Open_, NotAnimating ) ->
                    Task.attempt DefaultFocusableElementFocused <| BrowserDom.focus (defaultFocusableIdToString mData.defaultFocusableId)

                _ ->
                    Cmd.none

        Running ->
            Cmd.none


resolveStatusFromState : ModalState msg -> Maybe Status
resolveStatusFromState (ModalState ( ms, mData )) =
    case mData.modalStep of
        NotRunning ->
            case ms of
                Open_ ->
                    Just Open

                Closed_ ->
                    Just Closed

                _ ->
                    Nothing

        Running ->
            Nothing



-- HELPERS


{-| For when you want to start the modal off open without being triggered open.

    This is not recommended as modals should be triggered by an intentional user action

    IMPORTANT: This needs subscriptions hooked up

-}
forceOpen : ModalState msg -> ModalState msg
forceOpen (ModalState ( _, mData )) =
    ModalState ( Open_, { mData | modalStep = Running, animatingStep = Animating } )


firstFocusableId : String -> FirstFocusableId
firstFocusableId id =
    FirstFocusableId id


lastFocusableId : String -> LastFocusableId
lastFocusableId id =
    LastFocusableId id


defaultFocusableId : String -> DefaultFocusableId
defaultFocusableId id =
    DefaultFocusableId id



-- VARIANTS


type Variant msg
    = Generic (List (Html msg)) ( Float, Float )
    | Confirmation ConfirmationType (ConfirmationConfig msg)


generic : List (Html msg) -> ( Float, Float ) -> Config msg
generic v size =
    Config { defaults | variant = Generic v size }


confirmation : ConfirmationType -> ConfirmationConfig msg -> Config msg
confirmation confirmationType confirmationConfig =
    Config
        { defaults
            | variant = Confirmation confirmationType confirmationConfig
        }



-- MODIFIERS


onUpdate : (ModalMsg -> msg) -> Config msg -> Config msg
onUpdate msg (Config config) =
    Config { config | onUpdate = Just msg }


modalState : ModalState msg -> Config msg -> Config msg
modalState msg (Config config) =
    Config { config | state = msg }



--UPDATE


trigger : ModalState msg -> ModalState msg
trigger (ModalState ( state, mData )) =
    ModalState ( state, { mData | modalStep = Running } )


update : ModalState msg -> ModalMsg -> ( ModalState msg, Cmd ModalMsg, Maybe Status )
update ms modalMsg =
    let
        (ModalState ( _, mData )) =
            ms
    in
    case modalMsg of
        Update ->
            ( setModalStep Running ms, Cmd.none, Nothing )

        RunModal currentTimePosix ->
            case mData.modalStep of
                Running ->
                    let
                        newRunningState =
                            updateRunningState ms currentTimePosix
                    in
                    ( newRunningState, resolveCmdsFromState newRunningState, resolveStatusFromState newRunningState )

                NotRunning ->
                    ( ms, Cmd.none, Nothing )

        FocusFirstFocusableElement focusResult ->
            case focusResult of
                Ok () ->
                    ( ms, Cmd.none, Nothing )

                Err _ ->
                    ( ms, Cmd.none, Nothing )

        ClearFocusedFocusable ->
            ( updateModalDataFromState (\md -> { md | focusedFocusable = NoFocusableFocused }) ms, Cmd.none, Nothing )

        FirstFocusableElementFocused ->
            ( updateModalDataFromState (\md -> { md | focusedFocusable = FirstFocusableFocused }) ms, Cmd.none, Nothing )

        LastFocusableElementFocused focusResult ->
            case focusResult of
                Ok () ->
                    ( ms, Cmd.none, Nothing )

                Err _ ->
                    ( ms, Cmd.none, Nothing )

        DefaultFocusableElementFocused focusResult ->
            case focusResult of
                Ok () ->
                    ( ms, Cmd.none, Nothing )

                -- Fallback to the last focusable element if the default focusable element is not found
                -- This will work for when the last and default focusable element ids are the same e.g. Confirmation variants
                Err _ ->
                    ( ms
                    , Task.attempt LastFocusableElementFocused (BrowserDom.focus <| lastFocusableIdToString mData.lastFocusableId)
                    , Nothing
                    )


updateRunningState : ModalState msg -> Time.Posix -> ModalState msg
updateRunningState ((ModalState ( state, mData )) as ms) currentTime =
    case state of
        Open_ ->
            let
                resolveState =
                    case mData.animatingStep of
                        Animating ->
                            ModalState ( Open_, { mData | animatingStep = NotAnimating, modalStep = NotRunning } )

                        NotAnimating ->
                            ModalState ( Closing_, { mData | animatingStep = Animating, startTime = Just currentTime } )
            in
            resolveState

        -- progress is always Animating when Opening
        Opening_ ->
            case mData.startTime of
                Nothing ->
                    ms

                Just startTime ->
                    if (Time.posixToMillis currentTime - Time.posixToMillis startTime) < round (mapDuration mData.duration) then
                        ms

                    else
                        ModalState ( Open_, mData )

        -- progress is always Animating when Closing
        Closing_ ->
            case mData.startTime of
                Nothing ->
                    ms

                Just previousTime ->
                    if (Time.posixToMillis currentTime - Time.posixToMillis previousTime) < round (mapDuration mData.duration) then
                        ms

                    else
                        ModalState ( Closed_, mData )

        Closed_ ->
            let
                resolveState =
                    case mData.animatingStep of
                        Animating ->
                            ModalState ( Closed_, { mData | animatingStep = NotAnimating, modalStep = NotRunning, startTime = Nothing } )

                        NotAnimating ->
                            ModalState ( Opening_, { mData | animatingStep = Animating, startTime = Just currentTime } )
            in
            resolveState


getState : ModalState msg -> State
getState (ModalState state) =
    state
