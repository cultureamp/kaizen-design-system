module KaizenDraft.UserInteractions.Keyboard exposing (Key(..), decoder, subscriptions)

import Elm18Compatible.Keyboard as Keyboard18
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


decoder : Keyboard18.KeyCode -> Key
decoder keyCode =
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


subscriptions : (Key -> msg) -> Sub msg
subscriptions toMsg =
    Keyboard18.downs (decoder >> toMsg)
