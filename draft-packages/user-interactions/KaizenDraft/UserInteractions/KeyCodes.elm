module KaizenDraft.UserInteractions.KeyCodes exposing
    ( backspace
    , downArrow
    , enter
    , escape
    , shift
    , space
    , tab
    , upArrow
    )

import Elm18Compatible.Keyboard as Keyboard18


backspace : Keyboard18.KeyCode
backspace =
    8


tab : Keyboard18.KeyCode
tab =
    9


enter : Keyboard18.KeyCode
enter =
    13


escape : Keyboard18.KeyCode
escape =
    27


upArrow : Keyboard18.KeyCode
upArrow =
    38


downArrow : Keyboard18.KeyCode
downArrow =
    40


space : Keyboard18.KeyCode
space =
    32


shift : Keyboard18.KeyCode
shift =
    16
