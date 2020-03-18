module Kaizen.Modal.Presets.ConfirmationModal exposing
    ( bodySubtext
    , cautionary
    , confirmId
    , confirmLabel
    , confirmPreventKeydownOn
    , dismissLabel
    , headerDismissId
    , informative
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
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode as Decode
import Kaizen.Modal.Primitives.Constants as Constants
import Kaizen.Modal.Primitives.ModalBody as ModalBody
import Kaizen.Modal.Primitives.ModalFooter as ModalFooter
import Kaizen.Modal.Primitives.ModalHeader as ModalHeader
import Svg exposing (circle, svg)
import Svg.Attributes exposing (class, cx, cy, r)
import Text.Text as Text



-- TYPES


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant
    , onDismiss : Maybe msg
    , onConfirm : Maybe msg
    , title : String
    , bodySubtext : Maybe (List (Html msg))
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



-- VARIANTS


type Variant
    = Informative
    | Positive
    | Negative
    | Cautionary


informative : Config msg
informative =
    Config { defaults | variant = Informative }


positive : Config msg
positive =
    Config { defaults | variant = Positive }


negative : Config msg
negative =
    Config { defaults | variant = Negative }


cautionary : Config msg
cautionary =
    Config { defaults | variant = Cautionary }



-- DEFAULTS


defaults : Configuration msg
defaults =
    { variant = Informative
    , onDismiss = Nothing
    , onConfirm = Nothing
    , title = "Provide title"
    , bodySubtext = Nothing
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

        withBody =
            case config.bodySubtext of
                Just bodyContent ->
                    body bodyContent

                Nothing ->
                    text ""
    in
    div [ styles.class .elmModal ]
        [ ModalHeader.view
            (ModalHeader.layout [ header config ]
                |> withHeaderOnDismiss
                |> withHeaderDismissFocus
                |> withHeaderDismissBlur
                |> withHeaderDismissId
                |> withPreventHeaderDismissKeydown
            )
        , withBody
        , ModalFooter.view <|
            (ModalFooter.layout (footer config)
                |> ModalFooter.positionContent ModalFooter.Center
                |> ModalFooter.border False
                |> ModalFooter.padded True
            )
        ]


header : Configuration msg -> Html msg
header config =
    let
        resolveIcon =
            case config.variant of
                Positive ->
                    svgAsset "@kaizen/component-library/icons/success.icon.svg"

                _ ->
                    svgAsset "@kaizen/component-library/icons/information.icon.svg"
    in
    div
        [ styles.classList
            [ ( .header, True )
            , ( .informativeHeader, config.variant == Informative )
            , ( .positiveHeader, config.variant == Positive )
            , ( .negativeHeader, config.variant == Negative )
            , ( .cautionaryHeader, config.variant == Cautionary )
            ]
        ]
        [ div [ styles.class .iconContainer ]
            [ svg [ class <| styles.toString .iconBackground ] [ circle [ cx "75", cy "75", r "75" ] [] ]
            , div [ styles.class .icon ]
                [ Icon.view Icon.presentation
                    resolveIcon
                    |> Html.map never
                ]
            ]
        , Text.view (Text.h1 |> Text.style Text.ZenHeading1 |> Text.inline True |> Text.id Constants.ariaLabelledBy) [ text config.title ]
        ]


body : List (Html msg) -> Html msg
body content =
    ModalBody.view <| ModalBody.layout content


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


bodySubtext : List (Html msg) -> Config msg -> Config msg
bodySubtext content (Config config) =
    Config { config | bodySubtext = Just content }


confirmLabel : String -> Config msg -> Config msg
confirmLabel confirmString (Config config) =
    Config { config | confirmLabel = confirmString }


dismissLabel : String -> Config msg -> Config msg
dismissLabel dismissString (Config config) =
    Config { config | dismissLabel = dismissString }


headerDismissId : String -> Config msg -> Config msg
headerDismissId id_ (Config config) =
    Config { config | headerDismissId = Just id_ }


onHeaderDismissFocus : msg -> Config msg -> Config msg
onHeaderDismissFocus msg (Config config) =
    Config { config | onHeaderDismissFocus = Just msg }


onHeaderDismissBlur : msg -> Config msg -> Config msg
onHeaderDismissBlur msg (Config config) =
    Config { config | onHeaderDismissBlur = Just msg }


onConfirmFocus : msg -> Config msg -> Config msg
onConfirmFocus msg (Config config) =
    Config { config | onConfirmFocus = Just msg }


onPreventHeaderDismissKeydown : List (Decode.Decoder msg) -> Config msg -> Config msg
onPreventHeaderDismissKeydown keydownDecoders (Config config) =
    Config { config | onPreventHeaderDismissKeydown = keydownDecoders }


confirmPreventKeydownOn : List (Decode.Decoder msg) -> Config msg -> Config msg
confirmPreventKeydownOn keydownDecoders (Config config) =
    Config { config | confirmPreventKeydownOn = keydownDecoders }


onConfirmBlur : msg -> Config msg -> Config msg
onConfirmBlur msg (Config config) =
    Config { config | onConfirmBlur = Just msg }


confirmId : String -> Config msg -> Config msg
confirmId id_ (Config config) =
    Config { config | confirmId = Just id_ }


styles =
    css "@kaizen/component-library/draft/Kaizen/Modal/Presets/ConfirmationModal.scss"
        { elmModal = "elmModal"
        , header = "header"
        , informativeHeader = "informativeHeader"
        , negativeHeader = "negativeHeader"
        , positiveHeader = "positiveHeader"
        , cautionaryHeader = "cautionaryHeader"
        , iconContainer = "iconContainer"
        , iconBackground = "iconBackground"
        , icon = "icon"
        }
