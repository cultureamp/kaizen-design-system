module KaizenDraft.Modal.Presets.InputEditModal exposing
    ( children
    , confirmId
    , confirmLabel
    , confirmPreventKeydownOn
    , dismissLabel
    , headerDismissId
    , negative
    , onConfirm
    , onConfirmBlur
    , onConfirmFocus
    , onDismiss
    , onHeaderDismissBlur
    , onHeaderDismissFocus
    , onPreventHeaderDismissKeydown
    , positive
    , title
    , view
    )

import Button.Button as Button
import CssModules exposing (css)
import Html exposing (Html, div, text)
import Json.Decode as Decode
import KaizenDraft.Modal.Primitives.Configuration as ModalConfiguration exposing (configurationDefaults)
import KaizenDraft.Modal.Primitives.ModalAccessibleLabel as ModalAccessibleLabel
import KaizenDraft.Modal.Primitives.ModalBody as ModalBody
import KaizenDraft.Modal.Primitives.ModalFooter as ModalFooter
import KaizenDraft.Modal.Primitives.ModalHeader as ModalHeader
import Text.Text as Text


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    InputEditConfiguration msg (ModalConfiguration.ConfigurationBase msg)


type alias InputEditConfiguration msg base =
    { base
        | variant : Variant
        , children : List (Html msg)
    }


type Variant
    = Positive
    | Negative


defaults : Configuration msg
defaults =
    { variant = Positive
    , children = []
    , onDismiss = configurationDefaults.onDismiss
    , onConfirm = configurationDefaults.onConfirm
    , title = configurationDefaults.title
    , dismissLabel = configurationDefaults.dismissLabel
    , confirmLabel = configurationDefaults.confirmLabel
    , headerDismissId = configurationDefaults.headerDismissId
    , onHeaderDismissFocus = configurationDefaults.onHeaderDismissFocus
    , onHeaderDismissBlur = configurationDefaults.onHeaderDismissBlur
    , onPreventHeaderDismissKeydown = configurationDefaults.onPreventHeaderDismissKeydown
    , confirmPreventKeydownOn = configurationDefaults.confirmPreventKeydownOn
    , onConfirmFocus = configurationDefaults.onConfirmFocus
    , onConfirmBlur = configurationDefaults.onConfirmBlur
    , confirmId = configurationDefaults.confirmId
    }


positive : Config msg
positive =
    Config defaults


negative : Config msg
negative =
    Config { defaults | variant = Negative }


view : Config msg -> Html msg
view (Config config) =
    let
        withHeaderOnDismiss headerConfig =
            case config.onDismiss of
                Just dismissMsg ->
                    ModalHeader.onDismiss dismissMsg headerConfig

                Nothing ->
                    headerConfig

        withHeaderDismissId headerConfig =
            case config.headerDismissId of
                Just id_ ->
                    ModalHeader.dismissId id_ headerConfig

                Nothing ->
                    headerConfig

        withHeaderDismissFocus headerConfig =
            case config.onHeaderDismissFocus of
                Just dismissFocus ->
                    ModalHeader.onDismissFocus dismissFocus headerConfig

                Nothing ->
                    headerConfig

        withHeaderDismissBlur headerConfig =
            case config.onHeaderDismissBlur of
                Just dismissBlur ->
                    ModalHeader.onDismissBlur dismissBlur headerConfig

                Nothing ->
                    headerConfig

        withPreventHeaderDismissKeydown headerConfig =
            if List.isEmpty config.onPreventHeaderDismissKeydown then
                headerConfig

            else
                ModalHeader.preventDismissKeydown config.onPreventHeaderDismissKeydown headerConfig
    in
    div [ genericStyles.class .defaultModalWidth ]
        [ ModalHeader.view <|
            (ModalHeader.layout [ header config ]
                |> withHeaderOnDismiss
                |> withHeaderDismissId
                |> withHeaderDismissFocus
                |> withHeaderDismissBlur
                |> withPreventHeaderDismissKeydown
                |> ModalHeader.dismissReverse False
            )
        , ModalBody.view <|
            (ModalBody.layout config.children
                |> ModalBody.background ModalBody.Stone
            )
        , ModalFooter.view <|
            (ModalFooter.layout (footer config)
                |> ModalFooter.positionContent ModalFooter.Center
                --|> ModalFooter.border False
                |> ModalFooter.padded True
            )
        ]


header : Configuration msg -> Html msg
header config =
    div [ styles.class .header ]
        [ ModalAccessibleLabel.view
            [ Text.view
                (Text.h1
                    |> Text.inline True
                    |> Text.style Text.ZenHeading3
                )
                [ text config.title ]
            ]
        ]


footer : Configuration msg -> List (Html msg)
footer config =
    let
        withOnDismiss buttonConfig =
            case config.onDismiss of
                Just dismissMsg ->
                    Button.onClick dismissMsg buttonConfig

                Nothing ->
                    buttonConfig

        withOnConfirm buttonConfig =
            case config.onConfirm of
                Just confirmMsg ->
                    Button.onClick confirmMsg buttonConfig

                Nothing ->
                    buttonConfig

        resolveActionButtonVariant =
            if config.variant == Negative then
                Button.destructive

            else
                Button.primary

        withConfirmId buttonConfig =
            case config.confirmId of
                Just id ->
                    Button.id id buttonConfig

                Nothing ->
                    buttonConfig

        withConfirmFocus buttonConfig =
            case config.onConfirmFocus of
                Just onConfirmMsg ->
                    Button.onFocus onConfirmMsg buttonConfig

                Nothing ->
                    buttonConfig

        withConfirmBlur buttonConfig =
            case config.onConfirmBlur of
                Just onConfirmBlurMsg ->
                    Button.onBlur onConfirmBlurMsg buttonConfig

                Nothing ->
                    buttonConfig

        withConfirmPreventKeydown buttonConfig =
            if List.isEmpty config.confirmPreventKeydownOn then
                buttonConfig

            else
                Button.preventKeydownOn config.confirmPreventKeydownOn buttonConfig
    in
    [ Button.view
        (Button.secondary
            |> withOnDismiss
        )
        config.dismissLabel
    , Button.view
        (resolveActionButtonVariant
            |> withOnConfirm
            |> withConfirmId
            |> withConfirmFocus
            |> withConfirmBlur
            |> withConfirmPreventKeydown
        )
        config.confirmLabel
    ]



-- MODIFIERS


onDismiss : msg -> Config msg -> Config msg
onDismiss msg (Config config) =
    Config { config | onDismiss = Just msg }


onConfirm : msg -> Config msg -> Config msg
onConfirm msg (Config config) =
    Config { config | onConfirm = Just msg }


title : String -> Config msg -> Config msg
title titleString (Config config) =
    Config { config | title = titleString }


headerDismissId : String -> Config msg -> Config msg
headerDismissId id_ (Config config) =
    Config { config | headerDismissId = Just id_ }


onHeaderDismissFocus : msg -> Config msg -> Config msg
onHeaderDismissFocus msg (Config config) =
    Config { config | onHeaderDismissFocus = Just msg }


onHeaderDismissBlur : msg -> Config msg -> Config msg
onHeaderDismissBlur msg (Config config) =
    Config { config | onHeaderDismissBlur = Just msg }


confirmId : String -> Config msg -> Config msg
confirmId id_ (Config config) =
    Config { config | confirmId = Just id_ }


confirmLabel : String -> Config msg -> Config msg
confirmLabel confirmString (Config config) =
    Config { config | confirmLabel = confirmString }


dismissLabel : String -> Config msg -> Config msg
dismissLabel dismissString (Config config) =
    Config { config | dismissLabel = dismissString }


onPreventHeaderDismissKeydown : List (Decode.Decoder msg) -> Config msg -> Config msg
onPreventHeaderDismissKeydown keydownDecoders (Config config) =
    Config { config | onPreventHeaderDismissKeydown = keydownDecoders }


confirmPreventKeydownOn : List (Decode.Decoder msg) -> Config msg -> Config msg
confirmPreventKeydownOn keydownDecoders (Config config) =
    Config { config | confirmPreventKeydownOn = keydownDecoders }


onConfirmFocus : msg -> Config msg -> Config msg
onConfirmFocus msg (Config config) =
    Config { config | onConfirmFocus = Just msg }


onConfirmBlur : msg -> Config msg -> Config msg
onConfirmBlur msg (Config config) =
    Config { config | onConfirmBlur = Just msg }


children : List (Html msg) -> Config msg -> Config msg
children value (Config config) =
    Config { config | children = value }


styles =
    css "@kaizen/draft-modal/KaizenDraft/Modal/Presets/InputEditModal.scss"
        { header = "header"
        }


genericStyles =
    css "@kaizen/draft-modal/KaizenDraft/Modal/Primitives/GenericModal.scss"
        { defaultModalWidth = "defaultModalWidth"
        }
