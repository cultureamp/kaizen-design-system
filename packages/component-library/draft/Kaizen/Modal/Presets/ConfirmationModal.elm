module Kaizen.Modal.Presets.ConfirmationModal exposing
    ( bodySubtext
    , informative
    , onDismiss
    , title
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, text)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Kaizen.Modal.Primitives.ModalBody as ModalBody
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
    , title : String
    , bodySubtext : Maybe (List (Html msg))
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
    , title = "Provide title"
    , bodySubtext = Nothing
    }


view : Config msg -> Html msg
view (Config config) =
    let
        resolveOnDismiss headerConfig =
            case config.onDismiss of
                Just dismissMsg ->
                    ModalHeader.onDismiss dismissMsg headerConfig

                Nothing ->
                    headerConfig

        resolveBody =
            case config.bodySubtext of
                Just bodyContent ->
                    body bodyContent

                Nothing ->
                    text ""
    in
    div [ styles.class .elmModal ]
        [ ModalHeader.view (ModalHeader.layout [ header config ] |> resolveOnDismiss)
        , resolveBody
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



-- MODIFIERS


onDismiss : msg -> Config msg -> Config msg
onDismiss msg (Config config) =
    Config { config | onDismiss = Just msg }


title : String -> Config msg -> Config msg
title titleString (Config config) =
    Config { config | title = titleString }


bodySubtext : List (Html msg) -> Config msg -> Config msg
bodySubtext content (Config config) =
    Config { config | bodySubtext = Just content }


styles =
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Modal/Presets/ConfirmationModal.scss"
        { elmModal = "elmModal"
        , header = "header"
        , informativeHeader = "informativeHeader"
        , iconContainer = "iconContainer"
        , iconBackground = "iconBackground"
        , icon = "icon"
        }
