module Kaizen.Modal.Header exposing (fixed, layout, view)

import CssModules exposing (css)
import Html exposing (Html, div, span, text)


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant msg
    , fixed : Bool
    }


defaults : Configuration msg
defaults =
    { variant = Layout [ text "" ]
    , fixed = False
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
    [ div
        [ styles.classList
            [ ( .headerWrap, True )
            , ( .layout, True )
            , ( .absolute, config.fixed )
            ]
        ]
        content
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


styles =
    css "@cultureamp/kaizen-component-library/draft/Modal/primitives/ModalHeader.elm.scss"
        { headerWrap = "headerWrap"
        , layout = "layout"
        , filler = "filler"
        , absolute = "absolute"
        }
