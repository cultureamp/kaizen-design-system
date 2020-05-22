module KaizenDraft.Modal.Presets.ConfirmationModal exposing
    ( Config
    , bodySubtext
    , cautionary
    , confirmId
    , confirmLabel
    , dismissLabel
    , footerDismissId
    , headerDismissId
    , informative
    , negative
    , onConfirm
    , onConfirmBlur
    , onConfirmDisabled
    , onConfirmFocus
    , onConfirmPreventKeydownOn
    , onDismiss
    , onFooterDismissBlur
    , onFooterDismissFocus
    , onFooterDismissPreventKeydownOn
    , onHeaderDismissBlur
    , onHeaderDismissFocus
    , onHeaderDismissPreventKeydown
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
import KaizenDraft.Modal.Primitives.Constants as Constants
import KaizenDraft.Modal.Primitives.ModalBody as ModalBody
import KaizenDraft.Modal.Primitives.ModalFooter as ModalFooter
import KaizenDraft.Modal.Primitives.ModalHeader as ModalHeader
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
    , onHeaderDismissPreventKeydownOn : List (Decode.Decoder msg)
    , onFooterDismissFocus : Maybe msg
    , onFooterDismissBlur : Maybe msg
    , footerDismissId : Maybe String
    , onConfirmPreventKeydownOn : List (Decode.Decoder msg)
    , onFooterDismissPreventKeydownOn : List (Decode.Decoder msg)
    , onConfirmFocus : Maybe msg
    , onConfirmBlur : Maybe msg
    , confirmId : Maybe String
    , onConfirmDisabled : Bool
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
    , onFooterDismissFocus = Nothing
    , onFooterDismissBlur = Nothing
    , footerDismissId = Nothing
    , onHeaderDismissPreventKeydownOn = []
    , onConfirmPreventKeydownOn = []
    , onFooterDismissPreventKeydownOn = []
    , onConfirmFocus = Nothing
    , onConfirmBlur = Nothing
    , confirmId = Just Constants.lastFocusableId
    , onConfirmDisabled = False
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
            if List.isEmpty config.onHeaderDismissPreventKeydownOn then
                headerConfig

            else
                ModalHeader.preventDismissKeydown config.onHeaderDismissPreventKeydownOn headerConfig

        withBody =
            case config.bodySubtext of
                Just bodyContent ->
                    body bodyContent

                Nothing ->
                    text ""
    in
    div [ genericStyles.class .defaultModalWidth ]
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
        withOnClick configSelector buttonConfig =
            case configSelector config of
                Just onClickMsg ->
                    Button.onClick onClickMsg buttonConfig

                Nothing ->
                    buttonConfig

        withId configSelector disabled buttonConfig =
            case configSelector config of
                Just id ->
                    if disabled then
                        buttonConfig

                    else
                        Button.id id buttonConfig

                Nothing ->
                    buttonConfig

        withFocus configSelector buttonConfig =
            case configSelector config of
                Just onFocusMsg ->
                    Button.onFocus onFocusMsg buttonConfig

                Nothing ->
                    buttonConfig

        withBlur configSelector buttonConfig =
            case configSelector config of
                Just blurMsg ->
                    Button.onBlur blurMsg buttonConfig

                Nothing ->
                    buttonConfig

        withPreventKeydown configSelector buttonConfig =
            if List.isEmpty (configSelector config) then
                buttonConfig

            else
                Button.preventKeydownOn (configSelector config) buttonConfig

        withOnConfirmDisabled buttonConfig =
            if config.onConfirmDisabled then
                Button.disabled True buttonConfig

            else
                Button.disabled False buttonConfig

        resolveActionButtonVariant =
            if config.variant == Negative then
                Button.destructive

            else
                Button.primary
    in
    [ Button.view
        (Button.secondary
            |> withOnClick .onDismiss
            |> withId .footerDismissId False
            |> withFocus .onFooterDismissFocus
            |> withBlur .onFooterDismissBlur
            |> withPreventKeydown .onFooterDismissPreventKeydownOn
        )
        config.dismissLabel
    , Button.view
        (resolveActionButtonVariant
            |> withOnClick .onConfirm
            |> withOnConfirmDisabled
            |> withId .confirmId config.onConfirmDisabled
            |> withFocus .onConfirmFocus
            |> withBlur .onConfirmBlur
            |> withPreventKeydown .onConfirmPreventKeydownOn
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


onConfirmDisabled : Bool -> Config msg -> Config msg
onConfirmDisabled isDisabled (Config config) =
    Config { config | onConfirmDisabled = isDisabled }


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


footerDismissId : String -> Config msg -> Config msg
footerDismissId id_ (Config config) =
    Config { config | footerDismissId = Just id_ }


onHeaderDismissFocus : msg -> Config msg -> Config msg
onHeaderDismissFocus msg (Config config) =
    Config { config | onHeaderDismissFocus = Just msg }


onHeaderDismissBlur : msg -> Config msg -> Config msg
onHeaderDismissBlur msg (Config config) =
    Config { config | onHeaderDismissBlur = Just msg }


onConfirmFocus : msg -> Config msg -> Config msg
onConfirmFocus msg (Config config) =
    Config { config | onConfirmFocus = Just msg }


onHeaderDismissPreventKeydown : List (Decode.Decoder msg) -> Config msg -> Config msg
onHeaderDismissPreventKeydown keydownDecoders (Config config) =
    Config { config | onHeaderDismissPreventKeydownOn = keydownDecoders }


onConfirmPreventKeydownOn : List (Decode.Decoder msg) -> Config msg -> Config msg
onConfirmPreventKeydownOn keydownDecoders (Config config) =
    Config { config | onConfirmPreventKeydownOn = keydownDecoders }


onFooterDismissPreventKeydownOn : List (Decode.Decoder msg) -> Config msg -> Config msg
onFooterDismissPreventKeydownOn keydownDecoders (Config config) =
    Config { config | onFooterDismissPreventKeydownOn = keydownDecoders }


onConfirmBlur : msg -> Config msg -> Config msg
onConfirmBlur msg (Config config) =
    Config { config | onConfirmBlur = Just msg }


onFooterDismissFocus : msg -> Config msg -> Config msg
onFooterDismissFocus msg (Config config) =
    Config { config | onFooterDismissFocus = Just msg }


onFooterDismissBlur : msg -> Config msg -> Config msg
onFooterDismissBlur msg (Config config) =
    Config { config | onFooterDismissBlur = Just msg }


confirmId : String -> Config msg -> Config msg
confirmId id_ (Config config) =
    Config { config | confirmId = Just id_ }


styles =
    css "@kaizen/draft-modal/KaizenDraft/Modal/Presets/ConfirmationModal.scss"
        { header = "header"
        , informativeHeader = "informativeHeader"
        , negativeHeader = "negativeHeader"
        , positiveHeader = "positiveHeader"
        , cautionaryHeader = "cautionaryHeader"
        , iconContainer = "iconContainer"
        , iconBackground = "iconBackground"
        , icon = "icon"
        }


genericStyles =
    css "@kaizen/draft-modal/KaizenDraft/Modal/Primitives/GenericModal.scss"
        { defaultModalWidth = "defaultModalWidth"
        }
