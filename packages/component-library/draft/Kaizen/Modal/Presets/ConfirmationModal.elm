module Kaizen.Modal.Presets.ConfirmationModal exposing
    ( informative
    , onDismiss
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, text)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Kaizen.Modal.Primitives.ModalHeader as ModalHeader
import Svg exposing (circle, svg)
import Svg.Attributes exposing (class, cx, cy, r)



-- TYPES


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant, onDismiss : Maybe msg }



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
    in
    div [ styles.class .elmModal ]
        [ ModalHeader.view (ModalHeader.layout [ modalBox config ] |> resolveOnDismiss) ]


modalBox : Configuration msg -> Html msg
modalBox config =
    div [ styles.classList [ ( .header, True ), ( .informativeHeader, config.variant == Informative ) ] ]
        [ div [ styles.class .iconContainer ]
            [ svg [ class <| styles.toString .iconBackground ] [ circle [ cx "75", cy "75", r "75" ] [] ]
            , div [ styles.class .icon ]
                [ Icon.view Icon.presentation
                    (svgAsset "@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
                    |> Html.map never
                ]
            ]
        ]



-- MODIFIERS


onDismiss : msg -> Config msg -> Config msg
onDismiss msg (Config config) =
    Config { config | onDismiss = Just msg }


styles =
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Modal/Presets/ConfirmationModal.scss"
        { elmModal = "elmModal"
        , header = "header"
        , informativeHeader = "informativeHeader"
        , iconContainer = "iconContainer"
        , iconBackground = "iconBackground"
        , icon = "icon"
        }
