module Kaizen.Modal.Primitives.ModalHeader exposing (fixed, layout, view)

import CssModules exposing (css)
import Html exposing (Html, div, text)
import Html.Events exposing (onClick)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant msg
    , fixed : Bool
    , onDismiss : Maybe msg
    }


defaults : Configuration msg
defaults =
    { variant = Layout [ text "" ]
    , fixed = False
    , onDismiss = Nothing
    }


view : Config msg -> Html msg
view (Config config) =
    let
        --        This helps avoid using tricky layout css and renders a block element the same size as the fixed div
        useFiller =
            config.fixed

        filler content =
            if useFiller then
                fillerBox content

            else
                []
    in
    case config.variant of
        Layout content ->
            div [] <| (layoutBox content config ++ filler content)


layoutBox : List (Html msg) -> Configuration msg -> List (Html msg)
layoutBox content config =
    let
        resolveDismissButton =
            case config.onDismiss of
                Just onDismissMsg ->
                    div [ styles.class .dismissButton, onClick onDismissMsg ]
                        [ Icon.view Icon.presentation
                            (svgAsset "@cultureamp/kaizen-component-library/icons/success.icon.svg")
                            |> Html.map never
                        ]

                Nothing ->
                    text ""
    in
    [ div
        [ styles.classList
            [ ( .headerWrap, True )
            , ( .layout, True )
            , ( .fixed, config.fixed )
            ]
        ]
        (resolveDismissButton
            :: content
        )
    ]


fillerBox : List (Html msg) -> List (Html msg)
fillerBox content =
    [ div [ styles.class .filler ] content ]



-- VARIANTS


type Variant msg
    = Layout (List (Html msg))


layout : List (Html msg) -> Config msg
layout content =
    Config { defaults | variant = Layout content }



-- MODIFIERS


fixed : Bool -> Config msg -> Config msg
fixed predicate (Config config) =
    Config { config | fixed = predicate }


{-| If present this will render a close button which triggers the msg.
If you are providing your own layout and handling the close yourself, dont use this modifier
as it may clash with the provided close button
-}
onDismiss : msg -> Config msg -> Config msg
onDismiss msg (Config config) =
    Config { config | onDismiss = Just msg }


styles =
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Modal/Primitives/ModalHeader.scss"
        { headerWrap = "headerWrap"
        , layout = "layout"
        , filler = "filler"
        , fixed = "fixed"
        , dismissButton = "dismissButton"
        }
