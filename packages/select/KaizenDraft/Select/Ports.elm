port module KaizenDraft.Select.Ports exposing (..)

import Json.Encode as Encode


port kaizenConnectSelectInputDynamicWidth : Encode.Value -> Cmd msg


port kaizenDisconnectSelectInputDynamicWidth : Encode.Value -> Cmd msg
