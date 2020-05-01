module KaizenDraft.Modal.Primitives.Configuration exposing (ConfigurationBase, configurationDefaults)

import Json.Decode as Decode
import KaizenDraft.Modal.Primitives.Constants as Constants


{-| This is a bunch of properties common to all modals.
Keeping it separate avoids having to declare all of the properties again in every modal variant
-}
type alias ConfigurationBase msg =
    { onDismiss : Maybe msg
    , onConfirm : Maybe msg
    , title : String
    , dismissLabel : String
    , confirmLabel : String
    , headerDismissId : Maybe String
    , onHeaderDismissFocus : Maybe msg
    , onHeaderDismissBlur : Maybe msg
    , onPreventHeaderDismissKeydown : List (Decode.Decoder msg)
    , confirmPreventKeydownOn : List (Decode.Decoder msg)
    , onConfirmFocus : Maybe msg
    , onConfirmBlur : Maybe msg
    , confirmId : Maybe String
    }


configurationDefaults : ConfigurationBase msg
configurationDefaults =
    { onDismiss = Nothing
    , onConfirm = Nothing
    , title = "Provide title"
    , dismissLabel = "Cancel"
    , confirmLabel = "Confirm"
    , headerDismissId = Nothing
    , onHeaderDismissFocus = Nothing
    , onHeaderDismissBlur = Nothing
    , onPreventHeaderDismissKeydown = []
    , confirmPreventKeydownOn = []
    , onConfirmFocus = Nothing
    , onConfirmBlur = Nothing
    , confirmId = Just Constants.lastFocusableId
    }
