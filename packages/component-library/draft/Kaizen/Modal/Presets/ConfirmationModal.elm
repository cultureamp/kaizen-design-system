module Kaizen.Modal.Presets.ConfirmationModal exposing
    ( bodySubtext
    , confirmLabel
    , dismissLabel
    , informative
    , onConfirm
    , onDismiss
    , title
    , view
    )

import Button.Button as Button
import CssModules exposing (css)
import Html exposing (Html, div, text)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
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
    }



-- VARIANTS


type Variant
    = Informative


informative : Config msg
informative =
    Config { defaults | variant = Informative }



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

        withBody =
            case config.bodySubtext of
                Just bodyContent ->
                    body bodyContent

                Nothing ->
                    text ""
    in
    div [ styles.class .elmModal ]
        [ ModalHeader.view (ModalHeader.layout [ header config ] |> withHeaderOnDismiss)
        , withBody
        , ModalFooter.view <| (ModalFooter.layout (footer config) |> ModalFooter.positionContent ModalFooter.Center |> ModalFooter.border False)
        ]


header : Configuration msg -> Html msg
header config =
    div [ styles.classList [ ( .header, True ), ( .informativeHeader, config.variant == Informative ) ] ]
        [ div [ styles.class .iconContainer ]
            [ svg [ class <| styles.toString .iconBackground ] [ circle [ cx "75", cy "75", r "75" ] [] ]
            , div [ styles.class .icon ]
                [ Icon.view Icon.presentation
                    (svgAsset "@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
                    |> Html.map never
                ]
            ]
        , Text.view (Text.h1 |> Text.inline True) [ text config.title ]
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
    in
    [ Button.view (Button.secondary |> withOnDismiss) config.dismissLabel, Button.view (Button.primary |> withOnConfirm) config.confirmLabel ]



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


styles =
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Modal/Presets/ConfirmationModal.scss"
        { elmModal = "elmModal"
        , header = "header"
        , informativeHeader = "informativeHeader"
        , iconContainer = "iconContainer"
        , iconBackground = "iconBackground"
        , icon = "icon"
        }
