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
import Kaizen.Events.Events as KaizenEvents
import Kaizen.Modal.Presets.ConfirmationModal as ConfirmationModal
import Kaizen.Modal.Primitives.Constants as Constants
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
    | ForceUpdate Time.Posix
    | FirstFocusableElementFocused (Result BrowserDom.Error ())
    | LastFocusableElementFocused (Result BrowserDom.Error ())
    | DefaultFocusableElementFocused (Result BrowserDom.Error ())


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
    , forceOpen : Bool
    }


type alias Timing =
    { startedAt : Time.Posix
    , dt : Time.Posix
    }


subscriptions : ModalState msg -> Sub ModalMsg
subscriptions ms =
    let
        (ModalState ( _, mData ) _) =
            ms

        subscribeToEscape =
            if isOpenStopped ms then
                BrowserEvents.onKeyDown (KaizenEvents.isEscape Update)

            else
                Sub.none

        forceOpenUpdate =
            if mData.forceOpen then
                BrowserEvents.onAnimationFrame ForceUpdate

            else
                Sub.none
    in
    Sub.batch [ subscribeToEscape, forceOpenUpdate ]


view : Config msg -> Html msg
view (Config config) =
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

                Open_ ->
                    [ ( .animatingElmEnter, True ) ]

                Closing_ ->
                    [ ( .animatingElmExit, True ) ]

                Closed_ ->
                    [ ( .animatingElmExit, True ) ]

        resolveVisibilityStyles =
            case config.state of
                ModalState ( Opening_, _ ) Animating ->
                    [ ( .elmUnscrollable, True ) ]

                ModalState ( Open_, _ ) Animating ->
                    [ ( .elmUnscrollable, True ) ]

                ModalState ( Open_, _ ) Stopped ->
                    [ ( .elmEntered, True ) ]

                ModalState ( Closed_, _ ) Stopped ->
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

                    withFocusableIds confirmationConfig =
                        ConfirmationModal.headerDismissId (firstFocusableIdToString modalData.firstFocusableId) confirmationConfig
                            |> ConfirmationModal.confirmId (lastFocusableIdToString modalData.lastFocusableId)
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
        ( Closed_
        , { duration = Fast
          , firstFocusableId = firstFocusableId Constants.firstFocusableId
          , lastFocusableId = lastFocusableId Constants.lastFocusableId
          , defaultFocusableId = defaultFocusableId Constants.defaultFocusableId
          , forceOpen = False
          }
        )
        Stopped


styles =
    css "@kaizen/component-library/draft/Kaizen/Modal/Primitives/GenericModal.scss"
        { backdropLayer = "backdropLayer"
        , animatingElmEnter = "animatingElmEnter"
        , elmUnscrollable = "elmUnscrollable"
        , elmEntered = "elmEntered"
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


mapDurationWithAddedMillis : Duration -> Float -> Float
mapDurationWithAddedMillis duration millis =
    mapDuration duration + millis


isOpenStopped : ModalState msg -> Bool
isOpenStopped (ModalState state progress) =
    case ( state, progress ) of
        ( ( Open_, _ ), Stopped ) ->
            True

        _ ->
            False


firstFocusableIdToString : FirstFocusableId -> String
firstFocusableIdToString (FirstFocusableId id_) =
    id_


lastFocusableIdToString : LastFocusableId -> String
lastFocusableIdToString (LastFocusableId id_) =
    id_


defaultFocusableIdToString : DefaultFocusableId -> String
defaultFocusableIdToString (DefaultFocusableId id_) =
    id_


setForceOpen : Bool -> ModalState msg -> ModalState msg
setForceOpen force (ModalState ( mState, mData ) progress) =
    ModalState ( mState, { mData | forceOpen = force } ) progress



-- HELPERS


{-| For when you want to start the modal off open without being triggered open.

    This is not recommended as modals should be triggered by an intentional user action

    Forcing the modal open will bypass the internal Cmd msgs so the forced open property
    will be set to True. This ensures the subscriptions trigger the modal to focus on
    the first focusable element in this situation.

-}
forceOpen : ModalState msg -> ModalState msg
forceOpen (ModalState ( _, mData ) _) =
    ModalState ( Closed_, { mData | forceOpen = True } ) Stopped


{-| Set the first focusable element id. Modal updates will attempt to focus on this element
When the modal is in an open state.

By default Modal will use Kaizen.Modal.Primitives.Constants.firstFocusableId which consumers
can use as id attributes to their custom views in a Generic variant.

This function can also be used to create more uniqueness to the default id used internally.

-}
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


{-| Triggering the modal will initiate the next logical step.
E.g. If the modal is closed trigger will begin the open animation for the modal.
-}
trigger : ModalState msg -> ( ModalState msg, Cmd ModalMsg, Maybe Status )
trigger (ModalState ( state, mData ) progress) =
    case progress of
        Animating ->
            updateRunning ( state, mData )

        -- To know what to do next we specify what state the modal was in when stopped
        Stopped ->
            case state of
                -- Impossible state as updates never set Stopped on an Opening state
                Opening_ ->
                    ( initialState
                    , Task.perform identity (Task.succeed Update)
                    , Nothing
                    )

                Open_ ->
                    ( ModalState ( Closing_, mData ) <| Animating
                    , Task.perform identity (Task.succeed Update)
                    , Nothing
                    )

                -- Impossible state as updates never set Stopped on a Closing state
                Closing_ ->
                    ( initialState
                    , Cmd.none
                    , Nothing
                    )

                Closed_ ->
                    ( ModalState ( Opening_, mData ) <| Animating
                    , Task.perform (\_ -> Update) (Process.sleep <| mapDurationWithAddedMillis mData.duration 6)
                    , Nothing
                    )


update : ModalState msg -> ModalMsg -> ( ModalState msg, Cmd ModalMsg, Maybe Status )
update ms modalMsg =
    let
        (ModalState ( _, mData ) _) =
            ms
    in
    case modalMsg of
        Update ->
            trigger ms

        ForceUpdate _ ->
            trigger <| setForceOpen False ms

        FirstFocusableElementFocused focusResult ->
            case focusResult of
                Ok () ->
                    ( ms, Cmd.none, Nothing )

                Err _ ->
                    ( ms, Cmd.none, Nothing )

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


updateRunning : State -> ( ModalState msg, Cmd ModalMsg, Maybe Status )
updateRunning ( state, mData ) =
    case state of
        Opening_ ->
            ( ModalState ( Open_, mData ) Animating
            , Task.perform identity (Task.succeed Update)
            , Nothing
            )

        Open_ ->
            ( ModalState ( Open_, mData ) Stopped
            , Task.attempt DefaultFocusableElementFocused (BrowserDom.focus <| defaultFocusableIdToString mData.defaultFocusableId)
            , Just Open
            )

        Closing_ ->
            ( ModalState ( Closed_, mData ) Animating
            , Task.perform (\_ -> Update) (Process.sleep <| mapDuration mData.duration)
            , Nothing
            )

        Closed_ ->
            ( ModalState ( Closed_, mData ) Stopped
            , Cmd.none
            , Just Closed
            )


getState : ModalState msg -> State
getState (ModalState state _) =
    state
