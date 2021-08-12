module KaizenDraft.UserInteractions.Keyboard exposing (Key(..), decoder, subscriptions)

import Browser.Events
import Html.Events
import Json.Decode as Decode exposing (Decoder)
import KaizenDraft.UserInteractions.KeyCodes as KeyCodes


type Key
    = Escape
    | UpArrow
    | DownArrow
    | Enter
    | Backspace
    | Space
    | Shift
    | Tab
    | Other


keyCodeToKey : Int -> Key
keyCodeToKey keyCode =
    if keyCode == KeyCodes.escape then
        Escape

    else if keyCode == KeyCodes.backspace then
        Backspace

    else if keyCode == KeyCodes.upArrow then
        UpArrow

    else if keyCode == KeyCodes.downArrow then
        DownArrow

    else if keyCode == KeyCodes.enter then
        Enter

    else if keyCode == KeyCodes.space then
        Space

    else if keyCode == KeyCodes.shift then
        Shift

    else if keyCode == KeyCodes.tab then
        Tab

    else
        Other


keyDownDecoder : Decoder Key
keyDownDecoder =
    Decode.map keyCodeToKey Html.Events.keyCode


subscriptions : (Key -> msg) -> Sub msg
subscriptions toMsg =
    Browser.Events.onKeyDown (keyDownDecoder |> Decode.map toMsg)


{-| deprecated: this has been left in to avoid a breaking API change. This function is no longer used in this module. The name is confusing as it's not actually a decoder (it's just a transformation function)
-}
decoder : Int -> Key
decoder =
    keyCodeToKey
