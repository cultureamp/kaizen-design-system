module KaizenDraft.Dropdown.Dropdown exposing
    ( Actions
    , Msg(..)
    , State(..)
    , actions
    , init
    , isOpen
    , subscriptions
    , update
    )

import Browser.Events
import Json.Decode
import KaizenDraft.UserInteractions.Keyboard as Keyboard


type State
    = Opened String
    | Closed


subscriptions : Sub Msg
subscriptions =
    let
        keyboardMsg keyPress =
            case keyPress of
                Keyboard.Escape ->
                    Close

                _ ->
                    NoOp
    in
    Sub.batch
        [ Browser.Events.onClick (Json.Decode.succeed Close)
        , Keyboard.subscriptions keyboardMsg
        ]


type Msg
    = Close
    | Open String
    | Toggle String
    | NoOp


type alias Actions msg =
    { toggle : msg
    , close : msg
    , open : msg
    }


init : State
init =
    Closed


actions : (Msg -> msg) -> String -> Actions msg
actions mappingMsg id =
    { toggle = Toggle id |> mappingMsg
    , open = Open id |> mappingMsg
    , close = Close |> mappingMsg
    }


update : State -> Msg -> State
update current msg =
    case msg of
        Toggle menuId ->
            case current of
                Closed ->
                    Opened menuId

                Opened previousMenuId ->
                    if previousMenuId == menuId then
                        Closed

                    else
                        Opened menuId

        Close ->
            Closed

        Open cardId ->
            Opened cardId

        NoOp ->
            current


isOpen : State -> String -> Bool
isOpen state id =
    case state of
        Opened openedId ->
            id == openedId

        _ ->
            False
